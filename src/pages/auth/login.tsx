import { Anchor, Button, Input, Paper, Space, Title } from "@mantine/core";

import { IconLock, IconMail } from "@tabler/icons";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="max-w-md mx-auto py-20">
        <Paper shadow="lg" radius="md" p="md">
          <form action="#">
            <Title order={4} color={"dark.3"}>
              Access To Your Account
            </Title>
            <Space h={"md"} />
            <Input.Wrapper withAsterisk label="Email">
              <Input icon={<IconMail size={16} />} placeholder="Your email" />
            </Input.Wrapper>
            <Space h={"sm"} />
            <Input.Wrapper withAsterisk label="Password">
              <Input
                icon={<IconLock size={16} />}
                placeholder="Enter your password"
              />
            </Input.Wrapper>
            <Space h={"sm"} />
            <Button> Login</Button>
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
