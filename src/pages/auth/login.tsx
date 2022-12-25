import { Anchor, Button, Input, Paper, Space, Title } from "@mantine/core";

import { IconLock, IconMail } from "@tabler/icons";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      email: "Nisat",
      password: "pass",
    },
  });

  const handleSubmitForm = () => {
    // console.log({ email, password });
  };

  return (
    <div className="bg-slate-100 h-screen">
      <div className="max-w-md mx-auto py-20">
        <Paper shadow="lg" radius="md" p="md">
          <form action="#" onSubmit={handleSubmitForm}>
            <pre>{JSON.stringify(watch("email"), null, 2)}</pre>
            <pre>{JSON.stringify(watch("password"), null, 2)}</pre>

            <Title order={4} color={"dark.3"}>
              Access To Your Account
            </Title>
            <Space h={"md"} />
            <Input.Wrapper withAsterisk label="Email">
              <Input
                required
                type={"email"}
                value={watch("email")}
                onChange={(e) => setValue("email", e.target.value)}
                icon={<IconMail size={16} />}
                placeholder="Your email"
              />
            </Input.Wrapper>
            <Space h={"sm"} />
            <Input.Wrapper withAsterisk label="Password">
              <Input
                required
                type={"password"}
                value={watch("email")}
                onChange={(e) => setValue("password", e.target.value)}
                icon={<IconLock size={16} />}
                placeholder="Enter your password"
              />
            </Input.Wrapper>
            <Space h={"sm"} />
            <Button type="submit"> Login</Button>
          </form>
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
