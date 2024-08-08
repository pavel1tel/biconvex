import { useResize } from "@/hooks/useResize";
import { Center, CloseButton, CloseIcon, Divider, Flex, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import React, { useRef } from "react";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from "react-component-export-image";

import { CashPromoIcon, LightLogo, LogoIcon, PromoLogo, SaveIcon } from "@/shared/ui";

import QrCodePromo from "../../../../../public/assets/qrcode-promo.png";
import classes from "./PromoPopup.module.css";

interface PromoPopupProps {
  opened: boolean;
  handleClose: () => void;
  handleSave: () => void;
}

export const PromoPopup = ({ opened = true, handleClose, handleSave }: PromoPopupProps) => {
  if (!opened) return null;

  const { isAdaptive: sm } = useResize(500);
  const { isAdaptive: lg } = useResize(1200);
  const popupRef = useRef<HTMLDivElement>(null);
  const handleDownloadImage = async () => {
    const element = document.getElementById("promo-popup"),
      canvas =
        element &&
        (await html2canvas(element, {
          useCORS: true,
        })),
      data = canvas?.toDataURL("image/jpg"),
      link = document.createElement("a");

    if (link) {
      if (data) {
        link.href = data;
        link.download = "BitConwex-Promo.jpg";
      }
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={classes.overlay}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()} id="promo-popup">
        <Flex justify="center" gap={15} pos="absolute" align="center" right={50} top={20}>
          <CloseButton icon={<SaveIcon />} className={classes.saveButton} onClick={handleDownloadImage} />
          <CloseButton c="white" className={classes.closeButton} onClick={handleClose} />
        </Flex>
        <div className={classes.wrapper}>
          <div className={classes.logoWrapper}>
            <LightLogo className={classes.logo} />
            <Title pos="absolute" bottom="-14px" tt="uppercase" c="white" fz="26px">
              Futures
            </Title>
          </div>
          {/* <PromoLogo className={classes.logo} /> */}

          <Flex justify="space-between" gap={15} className={classes.container}>
            <CashPromoIcon className={classes.cashPromoIcon} />
            <Flex justify="center">
              <Stack>
                <Flex gap={40} w={399} className={classes.variants}>
                  <Text c="red" fz={20}>
                    Short
                  </Text>
                  <Divider variant="solid" orientation="vertical" c="#6C7080" size="md" />
                  <Text c="white" fz={20}>
                    2X
                  </Text>
                  <Divider variant="solid" orientation="vertical" c="#6C7080" size="md" />
                  <Text c="white" fz={20}>
                    BTCUSDT Perpetual
                  </Text>
                </Flex>
                <Text className={classes.textGreen}>
                  <span>+0.22%</span> (+0.10 USDT)
                </Text>
                <Stack>
                  <Flex justify="flex-start" gap={55}>
                    <Text className={classes.prise}>Entry Prise</Text>
                    <Text className={classes.textOrange}>19,459.30</Text>
                  </Flex>
                  <Flex justify="flex-start" gap={55}>
                    <Text className={classes.prise}>Mark Prise</Text>
                    <Text className={classes.textOrange}>19,440.97</Text>
                  </Flex>
                </Stack>
                <Flex className={classes.joinWrapper}>
                  <Stack gap={4}>
                    <Text c="#6C7080" fw="bold" fz={sm ? "sm" : "lg"}>
                      Join and get{" "}
                      <Text fw="bold" fz={sm ? "sm" : "lg"} c="white" span>
                        100%
                      </Text>{" "}
                      on your{" "}
                      <Text fw="bold" fz={sm ? "sm" : "lg"} c="white" span>
                        first deposit
                      </Text>
                    </Text>
                    <Text c="#6C7080" fw="bold" fz={sm ? "sm" : "lg"}>
                      Referral Code:{" "}
                      <Text c="white" fz={sm ? "sm" : "lg"} fw="bold" span>
                        MKSL28H
                      </Text>
                    </Text>
                  </Stack>

                  <div className={classes.qrcodeWrapper}>
                    <img src={QrCodePromo} className={classes.qrcode} />
                  </div>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};
