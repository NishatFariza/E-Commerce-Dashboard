import * as yup from "yup";
import { Anchor, Button, Input, Paper, Space, Title } from "@mantine/core";
import { IconLock, IconMail } from "@tabler/icons";
import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { useForm, yupResolver } from "@mantine/form";
import { Formik } from "formik";

const schema = yup.object({
  email: yup.string().required("Required").email("Invalid Email"),
  password: yup.string().required().min(6).max(30),
});

const LoginPage = () => {
  const handleSubmit = (values: any) => {};

  return (
    <div className="bg-slate-100 h-screen">
      <div className="max-w-md mx-auto py-20">
        <Paper shadow="lg" radius="md" p="md">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {() => (
              <form action="#">
                {/* <pre>{JSON.stringify({ error: errors?.email }, null, 2)}</pre>
            <pre>{JSON.stringify({ error: errors?.password }, null, 2)}</pre> */}

                <Title order={4} color={"dark.3"}>
                  Access To Your Account
                </Title>
                <Space h={"md"} />
                <Input.Wrapper withAsterisk label="Email">
                  <Input
                    icon={<IconMail size={16} />}
                    placeholder="Your email"
                  />
                </Input.Wrapper>
                <Space h={"sm"} />
                <Input.Wrapper withAsterisk label="Password">
                  <Input
                    type={"password"}
                    icon={<IconLock size={16} />}
                    placeholder="Enter your password"
                  />
                </Input.Wrapper>
                <Space h={"sm"} />
                <Button type="submit"> Login</Button>
              </form>
            )}
          </Formik>

          <Space h={"sm"} />
          <Anchor
            size={"sm"}
            color={"gray.6"}
            component={Link}
            href={"/auth/register"}
          >
            Don't have an account? Register Now
          </Anchor>
        </Paper>
      </div>
    </div>
  );
};

export default LoginPage;
