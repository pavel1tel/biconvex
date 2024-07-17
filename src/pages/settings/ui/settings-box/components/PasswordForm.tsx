import { Button, Flex, PasswordInput, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

import { updatePassword } from "@/shared/api/settings/requests";

import classes from "./style.module.css";

type FormType = {
  oldPass: string;
  newPass: string;
};

export const PasswordForm = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const [visible2, second] = useDisclosure(false);

  const form = useForm<FormType>({
    initialValues: {
      oldPass: "",
      newPass: "",
    },
    validate: {
      oldPass: (value) => (value.length > 0 ? null : "Invalid password"),
      newPass: (value) => (value.length > 0 ? null : "Invalid password"),
    },
  });
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        updatePassword({
          old_password: values.oldPass,
          new_password: values.newPass,
        });
      })}
    >
      <Stack className={classes.container}>
        <Text className={classes.title} variant="text-3">
          Password
        </Text>
        <Flex gap={16} wrap="wrap">
          <PasswordInput
            className={`${classes.password} ${form.getInputProps("oldPass").value ? classes.blueBorder : ""}`}
            label="Old password"
            visible={visible}
            onVisibilityChange={toggle}
            {...form.getInputProps("oldPass")}
          />
          <PasswordInput
            className={`${classes.password} ${form.getInputProps("newPass").value ? classes.blueBorder : ""}`}
            label="New password"
            defaultValue="secret"
            visible={visible2}
            onVisibilityChange={second.toggle}
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
