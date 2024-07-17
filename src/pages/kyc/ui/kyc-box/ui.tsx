/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Button, Combobox, Divider, FileInput, Flex, Group, Image, Input, Stack, Text, TextInput, rem, useCombobox } from "@mantine/core";
import { useForm } from "@mantine/form";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { useEffect, useRef, useState } from "react";
import { useCountries } from "use-react-countries";

import { ManIcon } from "@/pages/kyc/ui";
import { $profileReponse } from "@/pages/my-profile/model";
import { CopyIcon } from "@/pages/my-profile/ui";

import { getKycInfo, uploadKyc } from "@/shared/api/kyc/requests";
import { ProfileReponse } from "@/shared/api/types";

import { $kycResponse } from "../../model";
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
  const profileReponse = useUnit<ProfileReponse>($profileReponse);
  const { countries } = useCountries();
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const documentInput = useRef<any>(null);
  const [doc, setDocument] = useState<File | null>(null);
  const [docPreview, setDocPreview] = useState<any>(null);
  const documentBackInput = useRef<any>(null);
  const [docBack, setDocumentBack] = useState<File | null>(null);
  const selfieInput = useRef<any>(null);
  const [selfie, setSelfie] = useState<File | null>(null);
  const [value, setValue] = useState<any | null>(null);
  const options = countries.map((item) => (
    <Combobox.Option value={item} key={item.name}>
      <Flex align={"center"} miw={"100px"} h={29} gap={rem("8px")}>
        <img src={item.flags.svg} alt={item.name} width={24} />
        <Text fw={600}>{item.name}</Text>
      </Flex>
    </Combobox.Option>
  ));

  const kycResponse = useUnit<any>($kycResponse);
  const kycResponsePending = useUnit<boolean>(getKycInfo.pending);

  useEffect(() => {
    if (!kycResponsePending && kycResponse.id_type) {
      form.setValues({
        date: kycResponse.date_of_birth,
        country: kycResponse.country,
        firstName: kycResponse.first_name,
        lastName: kycResponse.last_name,
        phone: kycResponse.phone,
        idNumber: kycResponse.id_number,
      });
      setValue(countries.find((a) => a.name == kycResponse.country));
      setDocumentType(kycResponse.id_type);
    }
  }, [kycResponsePending, kycResponse]);

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
      date: (value) => (/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/.test(value) || value == "" ? null : "Invalid date format"),
      country: (value) => (value.length > 0 ? null : "Required field"),
      firstName: (value) => (value.length > 0 && value.length < 64 ? null : "First Name should be less than 64 characters"),
      lastName: (value) => (value.length > 0 && value.length < 128 ? null : "Last Name should be less than 128 characters"),
      phone: (value) => (/^\+\d{1,3}\d{3}\d{3}\d{4}$/.test(value) ? null : "Invalid phone format"),
      idNumber: (value) => (value.length > 0 && value.length < 64 ? null : "ID Number should be less than 64 characters"),
    },
  });
  const [documentType, setDocumentType] = useState<string>("Passport");
  return (
    <Stack gap={rem(32)}>
      <Flex justify={"space-between"} className={classes.headerFlex}>
        <Text className={classes.title}>KYC Verification</Text>
        <Box className={classes.boxWrapper}>
          <Flex
            align={"center"}
            justify={"space-between"}
            className={profileReponse.kyc_accepted ? classes.boxGreen : kycResponse.id_type ? classes.boxOrange : classes.boxRed}
          >
            <Stack gap={8}>
              <Flex gap={4} align={"center"}>
                <CopyIcon />
                <Text className={classes.subTitle}>Verification</Text>
              </Flex>
              {profileReponse.kyc_accepted ? (
                <Text className={classes.textGreen}>VERIFIED</Text>
              ) : kycResponse.id_type ? (
                <Text className={classes.textOrange}>IN PROGRESS</Text>
              ) : (
                <Text className={classes.textRed}>UNVERIFIED</Text>
              )}
            </Stack>
          </Flex>
        </Box>
      </Flex>
      <form
        onSubmit={form.onSubmit((values) =>
          uploadKyc({
            kyc_first_name: values.firstName,
            kyc_last_name: values.lastName,
            kyc_country: values.country,
            kyc_country_code: "ua",
            kyc_phone: values.phone,
            kyc_date_of_birth: values.date,
            kyc_id_type: documentType,
            kyc_id_number: values.idNumber,
            image_document: doc!,
            image_document_back: docBack!,
            image_selfie: selfie!,
          }),
        )}
      >
        <Stack gap={rem(32)} className={classes.body}>
          <Text className={classes.subTitle2}>Personal Information</Text>
          <Box>
            <Stack className={classes.container}>
              <Flex gap={16} wrap="wrap">
                <label className={classes.inputLabel}>
                  First Name
                  <TextInput
                    disabled={kycResponse.id_type ? true : false}
                    className={`${classes.input} ${form.getInputProps("firstName").value ? classes.blueBorder : ""}`}
                    placeholder="Enter first name"
                    {...form.getInputProps("firstName")}
                  />
                </label>
                <label className={classes.inputLabel}>
                  Last Name
                  <TextInput
                    disabled={kycResponse.id_type ? true : false}
                    className={`${classes.input} ${form.getInputProps("lastName").value ? classes.blueBorder : ""}`}
                    placeholder="Enter your last name"
                    {...form.getInputProps("lastName")}
                  />
                </label>
                <label className={classes.inputLabel}>
                  Date Of Birth
                  <TextInput
                    disabled={kycResponse.id_type ? true : false}
                    className={`${classes.input} ${form.getInputProps("date").value ? classes.blueBorder : ""}`}
                    placeholder="DD.MM.YYYY"
                    title="DD.MM.YYYY"
                    {...form.getInputProps("date")}
                  />
                </label>
                <label className={classes.inputLabel}>
                  Country
                  <Combobox
                    disabled={kycResponse.id_type ? true : false}
                    classNames={{
                      option: classes.option,
                    }}
                    store={combobox}
                    onOptionSubmit={(val: any) => {
                      setValue(val);
                      combobox.closeDropdown();
                      form.setFieldValue("country", val.name);
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
                        placeholder="Enter Postal code"
                        onClick={() => combobox.toggleDropdown()}
                      >
                        {value ? (
                          <Flex align={"center"} miw={"100px"} h={29} gap={rem("8px")}>
                            <img src={value.flags.svg} alt={value.name} width={24} />
                            <Text fw={600}>{value.name}</Text>
                          </Flex>
                        ) : (
                          <Input.Placeholder>Enter Country</Input.Placeholder>
                        )}
                      </TextInput>
                    </Combobox.Target>

                    <Combobox.Dropdown className={classes.dropdown}>
                      <Combobox.Options>{options}</Combobox.Options>
                    </Combobox.Dropdown>
                  </Combobox>
                </label>
                <label className={classes.inputLabel}>
                  Phone number
                  <TextInput
                    disabled={kycResponse.id_type ? true : false}
                    className={`${classes.input} ${form.getInputProps("phone").value ? classes.blueBorder : ""}`}
                    placeholder="+12345678900"
                    {...form.getInputProps("phone")}
                  />
                </label>
                <label className={classes.inputLabel}>
                  ID number
                  <TextInput
                    disabled={kycResponse.id_type ? true : false}
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
                onClick={() => {
                  if (!kycResponse.id_type) {
                  }
                  setDocumentType(item.text);
                }}
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
            <Stack
              onClick={() => {
                documentInput.current ? documentInput.current.click() : "";
              }}
            >
              <Text className={classes.subTitle4}>Identity Document</Text>
              <Flex className={classes.selectBox}>
                <Stack gap={rem(4)} justify={"center"} align={"center"}>
                  {doc ? (
                    <>
                      <Image h={50} w="auto" src={URL.createObjectURL(doc)}></Image>
                      <Text className={classes.subTitle4}>{doc.name}</Text>
                    </>
                  ) : (
                    <>
                      <Text className={classes.subTitle3}>
                        Drop your file upload or{" "}
                        <Text span={true} className={classes.span}>
                          Browse
                        </Text>
                      </Text>
                      <Text className={classes.subTitle4}>Maximum size of image 3MB</Text>
                    </>
                  )}
                </Stack>
              </Flex>
            </Stack>
            <Stack
              onClick={() => {
                documentBackInput.current ? documentBackInput.current.click() : "";
              }}
            >
              <Text className={classes.subTitle4}>Identity Document Back Side</Text>
              <Flex className={classes.selectBox}>
                <Stack gap={rem(4)} justify={"center"} align={"center"}>
                  {docBack ? (
                    <>
                      <Image h={50} w="auto" src={URL.createObjectURL(docBack)}></Image>
                      <Text className={classes.subTitle4}>{docBack.name}</Text>
                    </>
                  ) : (
                    <>
                      <Text className={classes.subTitle3}>
                        Drop your file upload or{" "}
                        <Text span={true} className={classes.span}>
                          Browse
                        </Text>
                      </Text>
                      <Text className={classes.subTitle4}>Maximum size of image 3MB</Text>
                    </>
                  )}
                </Stack>
              </Flex>
            </Stack>
            <Stack
              onClick={() => {
                selfieInput.current ? selfieInput.current.click() : "";
              }}
            >
              <Text className={classes.subTitle4}>A Selfie with your identity</Text>
              <Flex className={clsx(classes.selectBox)}>
                {selfie ? (
                  <>
                    <Stack gap={rem(4)} justify={"center"} align={"center"}>
                      <Image h={50} w="auto" src={URL.createObjectURL(selfie)}></Image>
                      <Text className={classes.subTitle4}>{selfie.name}</Text>
                    </Stack>
                  </>
                ) : (
                  <Flex gap={rem(8)} justify={"center"} align={"center"}>
                    <ManIcon />
                    <Text className={classes.subTitle4}>
                      Every detail of <br /> the ID document <br /> is clearly visible.
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Stack>
          </Flex>
          {kycResponse.id_type ? (
            <></>
          ) : (
            <Button type="submit" className={classes.btn} variant="radial-gradient">
              <Text>Submit for review</Text>
            </Button>
          )}
        </Stack>
      </form>
      <FileInput
        disabled={kycResponse.id_type ? true : false}
        value={doc}
        onChange={setDocument}
        accept="image/png,image/jpeg"
        ref={documentInput}
        display={"none"}
      />
      <FileInput
        disabled={kycResponse.id_type ? true : false}
        value={docBack}
        onChange={setDocumentBack}
        accept="image/png,image/jpeg"
        ref={documentBackInput}
        display={"none"}
      />
      <FileInput
        disabled={kycResponse.id_type ? true : false}
        value={selfie}
        onChange={setSelfie}
        accept="image/png,image/jpeg"
        ref={selfieInput}
        display={"none"}
      />
    </Stack>
  );
};
