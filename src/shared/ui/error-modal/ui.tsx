import { Button } from "@mantine/core";
import React from "react";

import { ErrorIcon } from "../icon";
import classes from "./styles.module.css";

interface ErrorModalProps {
  opened: boolean;
  handleClose: () => void;
  handleProceed: () => void;
}

export const ErrorModal = ({ opened = false, handleClose, handleProceed }: ErrorModalProps) => {
  if (opened) {
    return (
      <div className={classes.overlay}>
        <div className={classes.content}>
          <div className={classes.contentWrapper}>
            <ErrorIcon className={classes.contentIcon} />
            <div className={classes.textWrapper}>
              <h1 className={classes.contentTitle}>Error occured</h1>
              <p className={classes.contentDescription}>
                Oops! It looks like you don't have full access to our exchange service yet. To unlock all features and functionality, you need to
                obtain Level 2 verification. This will only take a few minutes and is required for security and compliance reasons. To start the
                verification process, please visit your KYC page and complete the necessary steps. Thank you for choosing our exchange service.
              </p>
              <div className={classes.buttonsWrapper}>
                <Button onClick={handleProceed} size="xl" variant="radial-gradient" classNames={{ root: classes.proceedButton }}>
                  Proceed
                </Button>
                <Button onClick={handleClose} size="xl" color="white" variant="gray-radial-gradient" classNames={{ root: classes.closeButton }}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
};
