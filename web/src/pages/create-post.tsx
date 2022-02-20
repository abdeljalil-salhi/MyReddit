import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";

import { Layout } from "../components/Layout";
import { InputField } from "../components/InputField";
import { useIsAuth } from "../utils/useIsAuth";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useCreatePostMutation } from "../generated/graphql";

interface createPostProps {}

const CreatePost: React.FC<createPostProps> = ({}) => {
  const router = useRouter();
  const [, createPost] = useCreatePostMutation();

  useIsAuth();

  return (
    <Layout variant="small">
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={async (values) => {
          const { error } = await createPost({ input: values });
          if (!error) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="title"
              placeholder="The title of your post"
              label="Title"
            />
            <Box mt={4}>
              <InputField
                textarea
                name="text"
                placeholder="Write the text of your post..."
                label="Body"
              />
            </Box>
            <Button
              type="submit"
              mt={4}
              isLoading={isSubmitting}
              colorScheme={"blue"}
            >
              Create post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
