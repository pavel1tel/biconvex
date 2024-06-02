import { Button, Flex, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import classes from "./style.module.css";

type FormType = {
  username: string;
  name: string;
  email: string;
  phone: string;
};

export const AccountInfoForm = () => {
  const form = useForm<FormType>({
    initialValues: {
      username: "",
      name: "",
      email: "",
      phone: "",
    },
    validate: {
      email: (value) => (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || value === "" ? null : "Invalid email address"),
      phone: (value) => (/^\+\d{1,3}\d{3}\d{3}\d{4}$/.test(value) ? null : "Invalid phone format"),
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack className={classes.container}>
        <Text className={classes.title} variant="text-3">
          Account Information
        </Text>
        <Flex gap={16} wrap="wrap">
          <TextInput
            className={`${classes.input} ${form.getInputProps("username").value ? classes.blueBorder : ""}`}
            label="Your username"
            placeholder="Enter username"
            {...form.getInputProps("username")}
          />
          <TextInput
            className={`${classes.input} ${form.getInputProps("name").value ? classes.blueBorder : ""}`}
            label="Your name"
            placeholder="Enter name"
            {...form.getInputProps("name")}
          />
          <TextInput
            className={`${classes.input} ${form.getInputProps("email").value ? classes.blueBorder : ""}`}
            label="Your email"
            placeholder="example@mail.com"
            title="Enter email"
            {...form.getInputProps("email")}
          />
          <TextInput
            className={`${classes.input} ${form.getInputProps("phone").value ? classes.blueBorder : ""}`}
            label="Your phone number"
            placeholder="+12345678900"
            {...form.getInputProps("phone")}
          />
        </Flex>
        <Button type="submit" className={classes.submitButton} size="xl" variant="radial-gradient">
          Save Changes
        </Button>
      </Stack>
    </form>
  );
};
