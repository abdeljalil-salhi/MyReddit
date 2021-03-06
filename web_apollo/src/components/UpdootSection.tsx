import React, { useState } from "react";
import gql from "graphql-tag";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Button, Text } from "@chakra-ui/react";
import { ApolloCache } from "@apollo/client";

import {
  PostSnippetFragment,
  useVoteMutation,
  VoteMutation,
} from "../generated/graphql";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

const updateAfterVote = (
  value: number,
  postId: number,
  cache: ApolloCache<VoteMutation>
) => {
  const data = cache.readFragment<{
    id: number;
    points: number;
    voteStatus: number | null;
  }>({
    id: `Post:${postId}`,
    fragment: gql`
      fragment _ on Post {
        id
        points
        voteStatus
      }
    `,
  });

  if (data) {
    if (data.voteStatus === value) {
      return;
    }
    const newPoints =
      (data.points as number) + (!data.voteStatus ? 1 : 2) * value;
    cache.writeFragment({
      id: `Post:${postId}`,
      fragment: gql`
        fragment __ on Post {
          points
          voteStatus
        }
      `,
      data: {
        points: newPoints,
        voteStatus: value,
      },
    });
  }
};

export const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [loadingState, setLoadingState] = useState<
    "updoot-loading" | "downdoot-loading" | "not-loading"
  >("not-loading");
  const [vote] = useVoteMutation();

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mr={4}
    >
      <Button
        aria-label={"Updoot post"}
        isLoading={loadingState === "updoot-loading"}
        colorScheme={post.voteStatus === 1 ? "green" : undefined}
        onClick={async () => {
          if (post.voteStatus === 1) {
            return;
          }
          setLoadingState("updoot-loading");
          await vote({
            variables: {
              postId: post.id,
              value: 1,
            },
            update: (cache) => updateAfterVote(1, post.id, cache),
          });
          setLoadingState("not-loading");
        }}
      >
        <ChevronUpIcon fontSize={"24px"} />
      </Button>
      <Text>{post.points}</Text>
      <Button
        aria-label={"Downdoot post"}
        isLoading={loadingState === "downdoot-loading"}
        colorScheme={post.voteStatus === -1 ? "red" : undefined}
        onClick={async () => {
          if (post.voteStatus === -1) {
            return;
          }
          setLoadingState("downdoot-loading");
          await vote({
            variables: {
              postId: post.id,
              value: -1,
            },
            update: (cache) => updateAfterVote(-1, post.id, cache),
          });
          setLoadingState("not-loading");
        }}
      >
        <ChevronDownIcon fontSize={"24px"} />
      </Button>
    </Flex>
  );
};
