import clsx from "clsx";
import { useEffect, useState } from "react";

import { GreenSection } from "@/shared/ui/icon/AnalysisGraphSections/GreenSection";
import { LightGreenSection } from "@/shared/ui/icon/AnalysisGraphSections/LightGreenSection";
import { PinkSection } from "@/shared/ui/icon/AnalysisGraphSections/PinkSection";
import { RedSection } from "@/shared/ui/icon/AnalysisGraphSections/RedSection";
import { YellowSection } from "@/shared/ui/icon/AnalysisGraphSections/YellowSection";

import classes from "./AnalysisGraph.module.css";

export type AnalysisGraphProps = {
  recommendation: number;
};

export const AnalysisGraph = ({ recommendation }: AnalysisGraphProps) => {
  const [arrowAngle, setArrowAngle] = useState(0);

  useEffect(() => {
    let angle;
    if (recommendation < -0.5) {
      angle = 0;
    } else if (recommendation >= -0.5 && recommendation < -0.1) {
      angle = 36;
    } else if (recommendation >= -0.1 && recommendation < 0.1) {
      angle = 72;
    } else if (recommendation >= 0.1 && recommendation < 0.5) {
      angle = 108;
    } else {
      angle = 144;
    }

    setArrowAngle(Math.abs(angle + Math.abs(Math.floor(recommendation * 50))));
  }, [recommendation]);

  return (
    <div className={classes.analysisGraphContainer}>
      <p className={clsx(classes.analysisLabel, classes.levelOne)}>Strong sell</p>
      <p className={clsx(classes.analysisLabel, classes.levelTwo)}>Sell</p>
      <p className={clsx(classes.analysisLabel, classes.levelThree)}>Neutral</p>
      <p className={clsx(classes.analysisLabel, classes.levelFour)}>Buy</p>
      <p className={clsx(classes.analysisLabel, classes.levelFive)}>Strong buy</p>
      <div style={{ position: "relative" }} className={classes.relative}>
        <div className={classes.analysisGraphSectorsContainer}>
          <RedSection style={{ position: "absolute", bottom: 0, right: 0, zIndex: 5 }} />
          <PinkSection style={{ position: "absolute", bottom: 0, right: 0, zIndex: 5 }} />
          <YellowSection style={{ position: "absolute", bottom: 0, right: 0, zIndex: 5 }} />
          <LightGreenSection style={{ position: "absolute", bottom: 0, right: 0, zIndex: 5 }} />
          <GreenSection style={{ position: "absolute", bottom: 0, right: 0, zIndex: 5 }} />
          <div className={classes.analysisGraphInnerContainer}>
            <div className={classes.analysisGraphInnerGradient}></div>
          </div>
          <div className={classes.analysisGraphArrowRound}></div>
          <div style={{ transform: `rotate(${arrowAngle}deg)`, transition: "all 1s ease" }} className={classes.analysisGraphArrow}></div>
        </div>
      </div>
    </div>
  );
};
