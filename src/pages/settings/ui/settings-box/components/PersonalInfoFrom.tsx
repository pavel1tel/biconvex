import { Button, Flex, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import classes from "./style.module.css";

type FormType = {
  birthDate: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postal: string;
  country: string;
};

export const PersonalInfoFrom = () => {
  const form = useForm<FormType>({
    initialValues: {
      birthDate: "",
      presentAddress: "",
      permanentAddress: "",
      city: "",
      postal: "",
      country: "",
    },
    validate: {
      birthDate: (value) => (/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/.test(value) || value === "" ? null : "Invalid date format"),
      postal: (value) => (/\d{5}-\d{4}|\d{5}/.test(value) || value === "" ? null : "Invalid date format"),
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack className={classes.container}>
        <Text className={classes.title} variant="text-3">
          Personal Information
        </Text>
        <Flex gap={16} wrap="wrap">
          <TextInput
            className={`${classes.input} ${form.getInputProps("birthDate").value ? classes.blueBorder : ""}`}
            label="Date of birth"
            placeholder="DD.MM.YYYY"
            title="DD.MM.YYYY"
            {...form.getInputProps("birthDate")}
          />
          <TextInput
            className={`${classes.input} ${form.getInputProps("presentAddress").value ? classes.blueBorder : ""}`}
            label="Present address"
            placeholder="Enter Present address"
            {...form.getInputProps("presentAddress")}
          />
          <TextInput
            className={`${classes.input} ${form.getInputProps("permanentAddress").value ? classes.blueBorder : ""}`}
            label="Permanent address"
            placeholder="Enter Permanent address"
            {...form.getInputProps("permanentAddress")}
          />
          <TextInput
            className={`${classes.input} ${form.getInputProps("city").value ? classes.blueBorder : ""}`}
            label="City"
            placeholder="Enter City"
            {...form.getInputProps("city")}
          />
          <TextInput
            className={`${classes.input} ${form.getInputProps("postal").value ? classes.blueBorder : ""}`}
            label="Postal code"
            placeholder="Enter Postal code"
            {...form.getInputProps("postal")}
          />
          <TextInput
            className={`${classes.input} ${form.getInputProps("country").value ? classes.blueBorder : ""}`}
            label="Country"
            placeholder="Enter Country"
            {...form.getInputProps("country")}
          />
        </Flex>
        <Button type="submit" className={classes.submitButton} size="xl" variant="radial-gradient">
          Save Changes
        </Button>
      </Stack>
    </form>
  );
};
