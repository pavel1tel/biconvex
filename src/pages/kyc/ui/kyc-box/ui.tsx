/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Button, Divider, Flex, Group, Stack, Text, TextInput, rem } from "@mantine/core";
import { useForm } from "@mantine/form";
import clsx from "clsx";
import { useState } from "react";

import { ManIcon } from "@/pages/kyc/ui";
import { CopyIcon } from "@/pages/my-profile/ui";

import classes from "./styles.module.css";

type FormType = {
  firstName: string;
  lastName: string;
  date: string;
  country: string;
  phone: string;
  idNumber: string;
};
const documentTypesButtons = [
  {
    text: "Passport",
  },
  {
    text: "ID card",
  },
  {
    text: "Drivers License",
  },
];
export const KycBox = () => {
  const form = useForm<FormType>({
    initialValues: {
      firstName: "",
      lastName: "",
      date: "",
      phone: "",
      country: "",
      idNumber: "",
    },
    validate: {
      date: (value) => (/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/.test(value) || value === "" ? null : "Invalid date format"),
      phone: (value) => (/^\+\d{1,3}\d{3}\d{3}\d{4}$/.test(value) || value === "" ? null : "Invalid phone format"),
    },
  });
  const [documentType, setDocumentType] = useState("Passport");
  return (
    <Stack gap={rem(32)}>
      <Flex justify={"space-between"} className={classes.headerFlex}>
        <Text className={classes.title}>KYC Verification</Text>
        <Box className={classes.boxWrapper}>
          <Flex align={"center"} justify={"space-between"} className={classes.boxRed}>
            <Stack gap={8}>
              <Flex gap={4} align={"center"}>
                <CopyIcon />
                <Text className={classes.subTitle}>Verification</Text>
              </Flex>
              <Text className={classes.textRed}>UNVERIFIED</Text>
            </Stack>
          </Flex>
        </Box>
      </Flex>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack gap={rem(32)} className={classes.body}>
          <Text className={classes.subTitle2}>Personal Information</Text>
          <Box>
            <Stack className={classes.container}>
              <Flex gap={16} wrap="wrap">
                <label className={classes.inputLabel}>
                  First Name
                  <TextInput
                    className={`${classes.input} ${form.getInputProps("firstName").value ? classes.blueBorder : ""}`}
                    placeholder="Enter first name"
                    {...form.getInputProps("firstName")}
                  />
                </label>
                <label className={classes.inputLabel}>
                  Last Name
                  <TextInput
                    className={`${classes.input} ${form.getInputProps("lastName").value ? classes.blueBorder : ""}`}
                    placeholder="Enter your last name"
                    {...form.getInputProps("lastName")}
                  />
                </label>
                <label className={classes.inputLabel}>
                  Date Of Birth
                  <TextInput
                    className={`${classes.input} ${form.getInputProps("date").value ? classes.blueBorder : ""}`}
                    placeholder="DD.MM.YYYY"
                    title="DD.MM.YYYY"
                    {...form.getInputProps("date")}
                  />
                </label>
                <label className={classes.inputLabel}>
                  Country
                  <TextInput
                    className={`${classes.input} ${form.getInputProps("country").value ? classes.blueBorder : ""}`}
                    placeholder="Enter your country"
                    {...form.getInputProps("country")}
                  />
                </label>
                <label className={classes.inputLabel}>
                  Phone number
                  <TextInput
                    className={`${classes.input} ${form.getInputProps("phone").value ? classes.blueBorder : ""}`}
                    placeholder="+12345678900"
                    {...form.getInputProps("phone")}
                  />
                </label>
                <label className={classes.inputLabel}>
                  ID number
                  <TextInput
                    className={`${classes.input} ${form.getInputProps("idNumber").value ? classes.blueBorder : ""}`}
                    type="number"
                    placeholder="Enter your ID number"
                    {...form.getInputProps("idNumber")}
                  />
                </label>
              </Flex>
            </Stack>
          </Box>
          <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
          <Text className={classes.subTitle2}>Document Type</Text>
          <Group>
            {documentTypesButtons.map((item) => (
              <Button
                onClick={() => setDocumentType(item.text)}
                size="xl"
                variant="outline"
                className={clsx(item.text === documentType && classes.ratesButtonRootActive, classes.documentTypeBtn)}
                classNames={{ root: classes.ratesButtonRoot, label: classes.ratesButtonLabel }}
              >
                {item.text}
              </Button>
            ))}
          </Group>
          <Flex gap={rem(16)} className={classes.columns}>
            <Stack>
              <Text className={classes.subTitle4}>Identity Document Front Side</Text>
              <Flex className={classes.selectBox}>
                <Stack gap={rem(4)} justify={"center"} align={"center"}>
                  <Text className={classes.subTitle3}>
                    Drop your file upload or{" "}
                    <Text span={true} className={classes.span}>
                      Browse
                    </Text>
                  </Text>
                  <Text className={classes.subTitle4}>Maximum size of image 3MB</Text>
                </Stack>
              </Flex>
            </Stack>
            <Stack>
              <Text className={classes.subTitle4}>Identity Document Back Side</Text>
              <Flex className={classes.selectBox}>
                <Stack gap={rem(4)} justify={"center"} align={"center"}>
                  <Text className={classes.subTitle3}>
                    Drop your file upload or{" "}
                    <Text span={true} className={classes.span}>
                      Browse
                    </Text>
                  </Text>
                  <Text className={classes.subTitle4}>Maximum size of image 3MB</Text>
                </Stack>
              </Flex>
            </Stack>
            <Stack>
              <Text className={classes.subTitle4}>A Selfie with your identity</Text>
              <Flex className={clsx(classes.selectBox, classes.lastBox)}>
                <Flex gap={rem(8)} justify={"center"} align={"center"}>
                  <ManIcon />
                  <Text className={classes.subTitle4}>
                    Every detail of <br /> the ID document <br /> is clearly visible.
                  </Text>
                </Flex>
              </Flex>
            </Stack>
          </Flex>
          <Button type="submit" className={classes.btn} variant="radial-gradient">
            <Text>Submit for review</Text>
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
