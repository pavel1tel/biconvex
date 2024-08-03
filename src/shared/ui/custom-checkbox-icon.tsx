import { CheckboxProps } from "@mantine/core";

import { CheckboxIcon as OwnCheckboxIcon } from "@/shared/ui";

export const CheckboxIcon: CheckboxProps["icon"] = ({ indeterminate, ...others }) => {
  return <OwnCheckboxIcon {...others} />;
};
