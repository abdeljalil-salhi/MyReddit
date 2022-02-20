import React from "react";
import NextLink from "next/link";
import { Box, Button, Link } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

import { useDeletePostMutation, useMeQuery } from "../generated/graphql";

interface EditDeletePostButtonsProps {
  id: number;
  creatorId: number;
}

export const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
  id,
  creatorId,
}) => {
  const [{ data: meData }] = useMeQuery();
  const [, deletePost] = useDeletePostMutation();

  if (meData?.me?.id !== creatorId) {
    return null;
  }

  return (
    <Box>
      <NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
        <Button as={Link} colorScheme={"yellow"} mr={4}>
          <EditIcon fontSize={"24px"} aria-label="Edit post" />
        </Button>
      </NextLink>
      <Button colorScheme={"red"}>
        <DeleteIcon
          fontSize={"24px"}
          aria-label="Delete post"
          onClick={() => {
            deletePost({ id });
          }}
        />
      </Button>
    </Box>
  );
};
