import React from "react";
import NextLink from "next/link";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";

import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { useRouter } from "next/router";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  let body = null;

  // data is loading
  // user not logged in
  // user logged in
  if (fetching) {
    body = null;
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color={"white"} mr={4}>
            Log In
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color={"white"}>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex color={"white"} alignItems={"center"} justifyContent={"center"}>
        <NextLink href="/create-post">
          <Button as={Link} mr={4}>
            Create post
          </Button>
        </NextLink>
        <Box mr={4}>{data.me.username}</Box>
        <Button
          onClick={async () => {
            await logout();
            router.reload();
          }}
          isLoading={logoutFetching}
          variant="link"
        >
          Logout
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      position={"sticky"}
      top={0}
      zIndex={1}
      bg={"blue"}
      p={4}
      alignItems={"center"}
    >
      <Flex maxW={800} flex={1} align={"center"} m={"auto"}>
        <NextLink href="/">
          <Heading cursor={"pointer"} color={"white"}>
            myreddit
          </Heading>
        </NextLink>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};
