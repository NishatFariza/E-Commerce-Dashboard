import { Anchor, Button, Input, Paper, Space, Title } from "@mantine/core";
import * as yup from "yup";
import { IconLock, IconMail, IconUser } from "@tabler/icons";
import { useFormik } from "formik";
import Link from "next/link";

const schema = yup.object({
  name: yup
    .string()
    .required("Required")
    .max(20, "Must be 20 characters or less"),
  email: yup.string().required("Required").email("Invalid Email"),
  password: yup.string().required().min(6).max(30),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password not match"),
});

const RegisterPage = () => {
  const handleFormSubmit = async (values: any) => {
    console.log(values);

    // const http = await fetch("http://104.251.211.125:8055/auth/login", {
    //   method: "POST",
    //   body: JSON.stringify(values),
    // });
    // const data = await http.json();
    // console.log(data);
  };

  const { handleBlur, handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: schema,
    onSubmit: handleFormSubmit,
  });

  return (
    <div className="bg-slate-100 h-screen">
      <div className="max-w-md mx-auto py-20">
        <Paper shadow="lg" radius="md" p="md">
          <form action="#" onSubmit={handleSubmit}>
            <Title order={4} color={"dark.3"}>
              Graph a New Account
            </Title>
            <Space h={"md"} />
            <Input.Wrapper withAsterisk label="Name" error={errors.name}>
              <Input
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                icon={<IconUser size={16} />}
                placeholder="Your name"
              />
            </Input.Wrapper>
            <Space h={"sm"} />
            <Input.Wrapper withAsterisk label="Email" error={errors.email}>
              <Input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
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
                type={"password"}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                icon={<IconLock size={16} />}
                placeholder="Enter your password"
              />
            </Input.Wrapper>
            <Space h={"sm"} />
            <Input.Wrapper
              withAsterisk
              label="Confirm password"
              error={errors.passwordConfirmation}
            >
              <Input
                type={"password"}
                name="passwordConfirmation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirmation}
                icon={<IconLock size={16} />}
                placeholder="Confirm your password"
              />
            </Input.Wrapper>
            <Space h={"sm"} />
            <Button type="submit">Register</Button>
          </form>
          <Space h={"sm"} />
          <Anchor
            size={"sm"}
            color={"gray.6"}
            component={Link}
            href={"/auth/login"}
          >
            Already have an account? Login Now
          </Anchor>
        </Paper>
      </div>
    </div>
  );
};

export default RegisterPage;
