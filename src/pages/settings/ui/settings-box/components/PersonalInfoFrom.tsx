import { Button, Combobox, Flex, Input, Stack, Text, TextInput, rem, useCombobox } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCountries } from 'use-react-countries';

import { $settingsResponse } from "@/pages/settings/model";
import { requestSettings, updatePersonalInfo } from "@/shared/api/settings/requests";
import { SettingsReponse } from "@/shared/api/types";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
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
  const { countries } = useCountries()
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });


  const [value, setValue] = useState<any | null>(null);

  const settigsReponse = useUnit<SettingsReponse>($settingsResponse)
  const settigsReponsePending = useUnit<boolean>(requestSettings.pending)

  useEffect(() => {
    if (!settigsReponsePending) {
      form.setValues(
        {
          birthDate: settigsReponse.birthDate,
          presentAddress: settigsReponse.presentAddress,
          permanentAddress: settigsReponse.permanentAddress,
          city: settigsReponse.city,
          postal: settigsReponse.postalCode,
          country: settigsReponse.country,
        }
      )
      setValue(countries.find(a => a.name == settigsReponse.country))
    }
  }, [settigsReponse, settigsReponsePending])

  const options = countries
    .map((item) => (
      <Combobox.Option value={item} key={item.name}>
        <Flex align={"center"} miw={"100px"} h={29} gap={rem("8px")}>
          <img src={item.flags.svg} alt={item.name} width={24} />
          <Text fw={600}>{item.name}</Text>
        </Flex>
      </Combobox.Option>
    ));

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
      postal: (value) => (/\d{5}/.test(value) || value === "" ? null : "Invalid date format"),
      presentAddress: (value) => value.length > 0 ? null : "Required field",
      permanentAddress: (value) => value.length > 0 ? null : "Required field",
      city: (value) => value.length > 0 ? null : "Required field",
      country: (value) => value.length > 0 ? null : "Required field",
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => {
      updatePersonalInfo({
        date_birth: form.values.birthDate,
        present_address: form.values.presentAddress,
        permanent_address: form.values.permanentAddress,
        user_city: form.values.city,
        user_postal_code: form.values.postal,
        user_country: form.values.country
      })
    }
    )}>
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
          <Combobox
            classNames={{
              option: classes.option,
            }}
            store={combobox}
            onOptionSubmit={(val: any) => {
              setValue(val);
              combobox.closeDropdown();
              form.setFieldValue('country', val.name);
              (document.activeElement as HTMLElement).blur();
            }}
          >
            <Combobox.Target>
              <TextInput
                className={`${classes.input} ${value ? classes.blueBorder : ""}`}
                component="button"
                type="button"
                pointer
                rightSection={<Combobox.Chevron />}
                rightSectionPointerEvents="none"
                label="Contry"
                placeholder="Enter Postal code"
                onClick={() => combobox.toggleDropdown()}
              >
                {value ?
                  (<Flex align={"center"} miw={"100px"} h={29} gap={rem("8px")}>
                    <img src={value.flags.svg} alt={value.name} width={24} />
                    <Text fw={600}>{value.name}</Text>
                  </Flex>
                  ) :
                  (<Input.Placeholder>Enter Country</Input.Placeholder>)}
              </TextInput>
            </Combobox.Target>

            <Combobox.Dropdown className={classes.dropdown}>
              <Combobox.Options>{options}</Combobox.Options>
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
