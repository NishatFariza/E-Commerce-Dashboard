import { Anchor, Button, Input, Paper, Space, Title } from "@mantine/core";
import { IconLock, IconMail } from "@tabler/icons";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const schema = yup.object({
  email: yup.string().required("Required").email("Invalid Email"),
  password: yup.string().required().min(6).max(30),
});

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values: any) => {
    console.log(values);
    //root: api call
    setLoading(true);
    axios
      .post("http://104.251.211.125:8055/auth/login", values)
      .then((res) => {
        localStorage.setItem("Token", res.data.data.access_token);
        router.push("/");
        setLoading(false);
      })
      .catch((err) => {
        alert("Failed to login");
        setLoading(false);
      });
  };

  const { handleBlur, handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: handleFormSubmit,
  });

  return (
    <div className="bg-slate-100 h-screen">
      <div className="max-w-md mx-auto py-20">
        <Paper shadow="lg" radius="md" p="md">
          <form action="#" onSubmit={handleSubmit}>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}

            <Title order={4} color={"dark.3"}>
              Access To Your Account
            </Title>
            <Space h={"md"} />
            <Input.Wrapper withAsterisk label="Email" error={errors.email}>
              <Input
                name={"email"}
                disabled={loading}
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                icon={<IconMail size={16} />}
                placeholder="Your email"
              />
            </Input.Wrapper>
            <Space h={"sm"} />
            <Input.Wrapper
              withAsterisk
              label="Password"
              error={errors.password}
            >
              <Input
                name={"password"}
                disabled={loading}
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                type={"password"}
                icon={<IconLock size={16} />}
                placeholder="Enter your password"
              />
            </Input.Wrapper>
            <Space h={"sm"} />
            <Button loading={loading} type="submit">
              Login
            </Button>
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
