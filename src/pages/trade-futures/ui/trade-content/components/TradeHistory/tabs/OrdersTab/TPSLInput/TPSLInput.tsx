import { CloseIcon, Group } from "@mantine/core";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { EditPenIcon } from "@/shared/ui/icon/EditPenIcon";

import classes from "./TPSLInput.module.css";

export const TPSLInput = () => {
  const [isEdit, setIsEdit] = useState(false);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isEdit && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isEdit]);
  return (
    <Group ref={containerRef} className={classes.container} align="center">
      <Group style={{ flex: "1", overflow: "hidden" }} gap={5}>
        <input
          ref={firstInputRef}
          readOnly={!isEdit}
          className={clsx(classes.input, classes.green)}
          defaultValue={50367.366}
          type="number"
          placeholder="TP"
        />
        <div className={classes.divider} />
        <input
          readOnly={!isEdit}
          className={clsx(classes.input, classes.red)}
          defaultValue={30000.363}
          onBlur={() => setIsEdit(false)}
          type="number"
          placeholder="SL"
        />
      </Group>

      <button className={classes.editButton} onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? <CloseIcon /> : <EditPenIcon />}
      </button>
    </Group>
  );
};
