import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Button, Text } from "@chakra-ui/react";

import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [loadingState, setLoadingState] = useState<
    "updoot-loading" | "downdoot-loading" | "not-loading"
  >("not-loading");
  const [, vote] = useVoteMutation();
  console.log(post);

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
            postId: post.id,
            value: 1,
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
            postId: post.id,
            value: -1,
          });
          setLoadingState("not-loading");
        }}
      >
        <ChevronDownIcon fontSize={"24px"} />
      </Button>
    </Flex>
  );
};
