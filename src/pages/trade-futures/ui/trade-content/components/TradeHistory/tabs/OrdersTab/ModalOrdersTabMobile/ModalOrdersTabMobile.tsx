import clsx from "clsx";
import React, { FC } from "react";

import { TPSLInput } from "../TPSLInput/TPSLInput";
import classes from "./TradeDetailsModal.module.css";

interface TradeDetailsModalProps {
  opened: boolean;
  openPopup: boolean;
  onPopup: () => void;
  onClose: () => void;
  data: any; // Adjust the type according to your data structure
}

const TradeDetailsModal: FC<TradeDetailsModalProps> = ({ opened, onClose, data, openPopup, onPopup }) => {
  if (!opened) return null;

  return (
    <div className={classes.overlay} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <div className={classes.header}>
          <button className={classes.backButton} onClick={onClose}></button>
        </div>
        <div className={classes.titleSection}>
          <h2 className={classes.title}>Bitcoin/USDT</h2>
          <p className={classes.closeIcon} onClick={onClose}>
            <CloseIcon />
          </p>
        </div>
        <div className={classes.info}>
          <div className={classes.infoRow}>
            <span className={classes.label}>Qty</span>
            <span className={classes.value}>463799.4739 BTC</span>
          </div>
          <div className={classes.infoRow}>
            <span className={classes.label}>Entry Price</span>
            <span className={classes.value}>46373.15</span>
          </div>

          <div className={classes.infoRow}>
            <span className={classes.label}>Mark Price</span>
            <span className={classes.value}>46379.15</span>
          </div>
          <div className={classes.infoRow}>
            <span className={classes.label}>Liq. Price</span>
            <span className={classes.value}>15463.734</span>
          </div>
        </div>
        <div className={clsx(classes.infoRow, classes.marginTop32)}>
          <span className={classes.label}>TP/SL</span>
          <TPSLInput containerClass={classes.customTPSLInput} />
        </div>
        <div className={classes.info}>
          <div className={classes.infoRow}>
            <span className={classes.label}>P&L</span>
            <div className={classes.infoWrapper}>
              <span className={clsx(classes.value, classes.tp)}>5043.267</span>
              <button className={classes.settingsButton} onClick={onPopup}>
                <img src={"/assets/settings-icon.png"} alt="Settings" className={classes.settingsIcon} height={18} width={18} />
              </button>
            </div>
          </div>
          <div className={classes.infoRow}>
            <span className={classes.label}>Close By</span>
            <button>Market</button>
          </div>
        </div>
        {/*Removed */}
        {/* <div className={clsx(classes.infoRow, classes.marginTop32)}>
          <span className={classes.label}>Close By Limit</span>
          <TPSLInput containerClass={clsx(classes.customTPSLInput, classes.placeholderColor)} hideSecondInput={true} />
        </div> */}
      </div>
    </div>
  );
};

export default TradeDetailsModal;

const CloseIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.8279 12.0002L23.4135 3.41443C24.1955 2.63245 24.1955 1.36847 23.4135 0.586488C22.6316 -0.195496 21.3676 -0.195496 20.5856 0.586488L12 9.17231L3.41436 0.586488C2.63239 -0.195496 1.36844 -0.195496 0.586476 0.586488C-0.195492 1.36847 -0.195492 2.63245 0.586476 3.41443L9.17212 12.0002L0.586476 20.5861C-0.195492 21.3681 -0.195492 22.632 0.586476 23.414C0.976459 23.804 1.48844 24 2.00042 24C2.5124 24 3.02437 23.804 3.41436 23.414L12 14.8282L20.5856 23.414C20.9756 23.804 21.4876 24 21.9996 24C22.5116 24 23.0235 23.804 23.4135 23.414C24.1955 22.632 24.1955 21.3681 23.4135 20.5861L14.8279 12.0002Z"
        fill="white"
      />
    </svg>
  );
};
