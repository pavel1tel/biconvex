import { Alert, Container, Text } from "@mantine/core";

import { BottomRightIcon, HiThereIcon, OhSnapIcon, TopLeftIcon, WarningIcon, WellDoneIcon } from "../icon/flash-messages-icon";
import classes from "./styles.module.css";

interface CustomAlertProps {
  color: string;
  icon: React.FC;
  title: string;
  children: React.ReactNode;
}

const CustomAlert = ({ color, icon: Icon, title, children }: CustomAlertProps) => (
  <Alert
    icon={<Icon />}
    title={title}
    color={color}
    radius="md"
    variant="filled"
    className={classes.test}
    style={{
      marginBottom: "1rem",
      padding: "1rem",
      position: "relative",
      display: "block",
      maxWidth: "350px",
      fontSize: "20px",
      lineHeight: "24ox",
    }}
  >
    <Text size="14px" fw={400} lineClamp={17}>
      {children}
    </Text>
    <div style={{ position: "absolute", bottom: "0", right: "0" }}>
      <BottomRightIcon />
    </div>
    <div style={{ position: "absolute", top: "0", left: "0" }}>
      <TopLeftIcon />
    </div>
  </Alert>
);

export const FlashMessages: React.FC = () => {
  return (
    <Container style={{ backgroundColor: "#121212", padding: "2rem", minHeight: "100vh" }}>
      <CustomAlert color="#0ECB7B52" icon={WellDoneIcon} title="Well done!">
        You successfully read this important message.
      </CustomAlert>

      <CustomAlert color="#E4222252" icon={OhSnapIcon} title="Oh snap!">
        Change a few things up and try submitting again.
      </CustomAlert>

      <CustomAlert color="#FF9E2B52" icon={WarningIcon} title="Warning!">
        Sorry! There was a problem with your request.
      </CustomAlert>

      <CustomAlert color="#625FF452" icon={HiThereIcon} title="Hi there!">
        Do you have a problem? Just use this contact form.
      </CustomAlert>
    </Container>
  );
};
