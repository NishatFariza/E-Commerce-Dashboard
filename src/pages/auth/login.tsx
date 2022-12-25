import * as yup from "yup";
import { Anchor, Button, Input, Paper, Space, Title } from "@mantine/core";
import { IconLock, IconMail } from "@tabler/icons";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const validationSchema = yup.object({
  email: yup.string().required("Required").email("Invalid Email"),
  password: yup.string().required().min(6).max(30),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "Nisat",
      password: "pass",
    },
  });

  const handleSubmitForm = (values: any) => {
    console.log(values);
    //root: api call
  };

  return (
    <div className="bg-slate-100 h-screen">
      <div className="max-w-md mx-auto py-20">
        <Paper shadow="lg" radius="md" p="md">
          <form action="#" onSubmit={handleSubmit(handleSubmitForm)}>
            <pre>{JSON.stringify(watch("email"), null, 2)}</pre>
            <pre>{JSON.stringify(watch("password"), null, 2)}</pre>
            <pre>
              {JSON.stringify({ error: errors?.email?.message }, null, 2)}
            </pre>
            <pre>
              {JSON.stringify({ error: errors?.password?.message }, null, 2)}
            </pre>

            <Title order={4} color={"dark.3"}>
              Access To Your Account
            </Title>
            <Space h={"md"} />
            <Input.Wrapper
              withAsterisk
              label="Email"
              error={<ErrorMessage errors={errors} name={"email"} />}
            >
              <Input
                icon={<IconMail size={16} />}
                placeholder="Your email"
                {...register("email")}
              />
            </Input.Wrapper>
            <Space h={"sm"} />
            <Input.Wrapper
              withAsterisk
              label="Password"
              error={<ErrorMessage errors={errors} name={"password"} />}
            >
              <Input
                type={"password"}
                icon={<IconLock size={16} />}
                placeholder="Enter your password"
                {...register("password")}
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
