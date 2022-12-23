import { Paper, Text } from "@mantine/core";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="max-w-md mx-auto py-20">
        <Paper shadow="lg" radius="md" p="md">
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
      </div>
    </div>
  );
};

export default LoginPage;
