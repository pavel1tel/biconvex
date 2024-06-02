import { Button, Flex, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import classes from "./style.module.css";

type FormType = {
  oldPass: string;
  newPass: string;
};

export const PasswordForm = () => {
  const form = useForm<FormType>({
    initialValues: {
      oldPass: "",
      newPass: "",
    },
    validate: {
      oldPass: (value) => (/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,}$/.test(value) ? null : "Invalid password"),
      newPass: (value) => (/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,}$/.test(value) ? null : "Invalid password"),
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack className={classes.container}>
        <Text className={classes.title} variant="text-3">
          Password
        </Text>
        <Flex gap={16} wrap="wrap">
          <TextInput
            className={`${classes.input} ${form.getInputProps("oldPass").value ? classes.greenBorder : ""}`}
            label="Old password"
            placeholder="Enter your old password"
            {...form.getInputProps("oldPass")}
          />
          <TextInput
            className={`${classes.input} ${form.getInputProps("newPass").value ? classes.greenBorder : ""}`}
            label="New password"
            placeholder="Enter your new password"
            {...form.getInputProps("newPass")}
          />
        </Flex>
        <Button type="submit" className={classes.submitButton} size="xl" variant="radial-gradient">
          Reset Password
        </Button>
      </Stack>
    </form>
  );
};
