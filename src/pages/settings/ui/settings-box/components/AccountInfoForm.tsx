import { Button, Flex, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import { $settingsResponse } from "@/pages/settings/model";
import { requestSettings, updateAccount } from "@/shared/api/settings/requests";
import { SettingsReponse } from "@/shared/api/types";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import classes from "./style.module.css";

type FormType = {
  username: string;
  name: string;
  phone: string;
  surname: string;
};

export const AccountInfoForm = () => {
  const settigsReponse = useUnit<SettingsReponse>($settingsResponse)
  const settigsReponsePending = useUnit<boolean>(requestSettings.pending)

  useEffect(() => {
    if (!settigsReponsePending) {
      form.setValues({
        username: settigsReponse.username,
        name: settigsReponse.name,
        phone: settigsReponse.phone_number
      })
    }
  }, [settigsReponse, settigsReponsePending])

  const form = useForm<FormType>({
    initialValues: {
      username: "",
      name: "",
      phone: "",
      surname : ""
    },
    validate: {
      username: (value) => (value.length > 6 && value.length < 32 ? null : "Username should be between 6 and 32 characters"),
      name: (value) => (value.length > 0 && value.length < 128 ? null : "Name should be less than 128 characters"),
      phone: (value) => (/^\+\d{1,3}\d{3}\d{3}\d{4}$/.test(value) ? null : "Invalid phone format"),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values: FormType) => {
      updateAccount({
        phone: values.phone,
        username: values.username,
        fullname: values.name,
      })
    })}>
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
            className={`${classes.input} ${form.getInputProps("phone").value ? classes.blueBorder : ""}`}
            label="Your phone number"
            placeholder="+12345678900"  
            {...form.getInputProps("phone")}
          />
          <Text
            className={classes.input}
            style={{opacity : 0}}
          />
        </Flex>
        <Button type="submit" className={classes.submitButton} size="xl" variant="radial-gradient">
          Save Changes
        </Button>
      </Stack>
    </form>
  );
};
