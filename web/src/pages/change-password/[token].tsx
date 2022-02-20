import React, { useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";

import { InputField } from "../../components/InputField";
import { Wrapper } from "../../components/Wrapper";
import { toErrorMap } from "../../utils/toErrorMap";
import { useChangePasswordMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const ChangePassword: NextPage = () => {
  const router = useRouter();
  const [, changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState("");

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await changePassword({
            newPassword: values.newPassword,
            token:
              typeof router.query.token === "string" ? router.query.token : "",
          });
          if (response.data?.changePassword.errors) {
            const errorMap = toErrorMap(response.data.changePassword.errors);
            if ("token" in errorMap) {
              setTokenError(errorMap.token);
            }
            setErrors(errorMap);
          } else {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="newPassword"
              placeholder="New password"
              label="New Password"
              type="password"
            />
            {tokenError ? (
              <Flex>
                <Box color="red" mr={5}>
                  {tokenError}
                </Box>
                <NextLink href="/forgot-password">
                  <Link>Get a new one &gt;&gt;</Link>
                </NextLink>
              </Flex>
            ) : null}
            <Button
              type="submit"
              mt={4}
              isLoading={isSubmitting}
              colorScheme={"blue"}
            >
              Change Password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

// ChangePassword.getInitialProps = ({ query }) => {
//   return {
//     token: query.token as string,
//   };
// };

export default withUrqlClient(createUrqlClient)(ChangePassword);
