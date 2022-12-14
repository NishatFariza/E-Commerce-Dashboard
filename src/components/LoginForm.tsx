import * as Yup from "yup";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm, yupResolver } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import { FacebookButton, GoogleButton } from "./socialButtons/SocialButtons";
// import { GoogleButton } from "./socialButtons/FacebookIcon";
// import { FacebookButton } from "./socialButtons/GoogleIcon";

export function LoginForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  // const form = useForm({
  //   initialValues: {
  //     email: "",
  //     name: "",
  //     password: "",
  //     terms: true,
  //   },

  //   validate: {
  //     email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
  //     password: (val) =>
  //       val.length <= 6
  //         ? "Password should include at least 6 characters"
  //         : null,
  //   },
  // });

  const schema = Yup.object().shape({
    name: Yup.string().min(2, "Name should have at least 2 letters"),
    email: Yup.string().email("Invalid email"),
    passwordMin: Yup.string()
      .oneOf([Yup.ref("password"), null])
      .min(8, "Error"),
  });

  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },
  });

  return (
    <div className="max-w-xl mx-auto py-6">
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" weight={500}>
          Welcome to Mantine, {type} with
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          <FacebookButton radius="xl">Facebook</FacebookButton>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            {type === "register" && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 8 characters"
              }
            />

            {type === "register" && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue("terms", event.currentTarget.checked)
                }
              />
            )}
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit">{upperFirst(type)}</Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
