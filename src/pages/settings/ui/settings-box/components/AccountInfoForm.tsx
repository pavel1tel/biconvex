import { Button, Combobox, Flex, Input, Stack, Text, TextInput, rem, useCombobox } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";

import { $settingsResponse } from "@/pages/settings/model";

import { requestSettings, updateAccount } from "@/shared/api/settings/requests";
import { SettingsReponse } from "@/shared/api/types";
import { LoadingScreen } from "@/shared/ui";

import classes from "./style.module.css";

type FormType = {
  username: string;
  name: string;
  phone: string;
  gender: string;
};

export const AccountInfoForm = () => {
  const settingsResponse = useUnit<SettingsReponse>($settingsResponse);
  const settingsResponsePending = useUnit<boolean>(requestSettings.pending);
  const [loading, setLoading] = useState(true);

  const form = useForm<FormType>({
    initialValues: {
      username: "",
      name: "",
      phone: "",
      gender: "",
    },
    validate: {
      username: (value) => (value.length > 6 && value.length < 32 ? null : "Username should be between 6 and 32 characters"),
      name: (value) => (value.length > 0 && value.length < 128 ? null : "Name should be less than 128 characters"),
      phone: (value) => (/^\+\d{1,3}\d{3}\d{3}\d{4}$/.test(value) ? null : "Invalid phone format"),
      gender: (value) => (value ? null : "Required field"),
    },
  });
  const [value, setValue] = useState<any | null>(null);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  useEffect(() => {
    if (!settingsResponsePending) {
      form.setValues({
        username: settingsResponse.username,
        name: settingsResponse.name,
        phone: settingsResponse.phone_number,
        gender: settingsResponse.gender,
      });
      setValue(settingsResponse.gender);
      setTimeout(() => {
        setLoading(false);
      }, 3500);
    }
  }, [settingsResponse, settingsResponsePending]);

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log("here");
        updateAccount({
          phone: values.phone,
          username: values.username,
          fullname: values.name,
          gender: values.gender,
        });
      })}
      style={{ position: "relative" }}
    >
      {loading && <LoadingScreen type="block" opened={loading} overlayStyles={{ top: 0, marginBottom: 50, padding: 0 }} />}
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
          <Combobox
            classNames={{ option: classes.option }}
            store={combobox}
            onOptionSubmit={(val) => {
              setValue(val);
              form.setFieldValue("gender", val);
              combobox.closeDropdown();
            }}
          >
            <Combobox.Target>
              <TextInput
                component="button"
                type="button"
                pointer
                className={`${classes.input} ${form.values.gender ? classes.blueBorder : ""}`}
                label="Sex"
                placeholder="Select your gender"
                rightSection={<Combobox.Chevron />}
                onClick={() => {
                  combobox.toggleDropdown();
                }}
              >
                {value ? <Input.Placeholder>{value}</Input.Placeholder> : <Input.Placeholder>Select your gender</Input.Placeholder>}
              </TextInput>
            </Combobox.Target>
            <Combobox.Dropdown>
              <Combobox.Options>
                {genderOptions.map((option) => (
                  <Combobox.Option value={option.label} key={option.label}>
                    <Flex align={"center"} h={29} gap={rem("8px")}>
                      <Text fw={600}>{option.label}</Text>
                    </Flex>
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Combobox.Dropdown>
          </Combobox>
        </Flex>
        <Button type="submit" className={classes.submitButton} size="xl" variant="radial-gradient">
          Save Changes
        </Button>
      </Stack>
    </form>
  );
};
