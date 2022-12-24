import { Input, Paper, Text } from "@mantine/core";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="max-w-md mx-auto py-20">
        <Paper shadow="lg" radius="md" p="md">
          <Text>Paper is the most basic ui component</Text>
          <form action="#">
            <Input.Wrapper
              id="input-demo"
              withAsterisk
              label="Credit card information"
              description="Please enter your credit card information, we need some money"
              error="Your credit card expired"
            >
              <Input id="input-demo" placeholder="Your email" />
            </Input.Wrapper>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default LoginPage;
