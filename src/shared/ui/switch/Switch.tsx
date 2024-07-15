/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentProps, useState } from "react";

import classes from "./Switch.module.css";

type SwitchProps = ComponentProps<"input"> & {
  description?: string;
  label: string;
};
export const Switch = ({ description, label, ...props }: SwitchProps) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <label className={classes.switchContainer}>
      <div className={classes.labelWrapper}>
        <p className={classes.label}>{label}</p>
        {description && <p className={classes.description}>{description}</p>}
      </div>
      <div className={classes.toggleSwitch}>
        <input type="checkbox" checked={props.checked ?? isToggled} onChange={() => setIsToggled(!isToggled)} {...props} />
        <span className={classes.switch} />
      </div>
    </label>
  );
};
