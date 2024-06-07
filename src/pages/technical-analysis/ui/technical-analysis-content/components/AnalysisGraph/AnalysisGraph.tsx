import clsx from "clsx";
import { useEffect, useState } from "react";

import { GreenSection } from "@/shared/ui/icon/AnalysisGraphSections/GreenSection";
import { LightGreenSection } from "@/shared/ui/icon/AnalysisGraphSections/LightGreenSection";
import { PinkSection } from "@/shared/ui/icon/AnalysisGraphSections/PinkSection";
import { RedSection } from "@/shared/ui/icon/AnalysisGraphSections/RedSection";
import { YellowSection } from "@/shared/ui/icon/AnalysisGraphSections/YellowSection";

import classes from "./AnalysisGraph.module.css";

export type AnalysisGraphProps = {
  percents: number;
};
export const AnalysisGraph = ({ percents }: AnalysisGraphProps) => {
  const [arrowAngle, setArrowAngle] = useState(0);
  useEffect(() => {
    const angle = (percents > 100 ? 100 : percents < 0 ? 0 : percents) * 1.8;
    setArrowAngle(angle);
  }, [percents]);
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
          <div style={{ rotate: `${arrowAngle}deg` }} className={classes.analysisGraphArrow}></div>
        </div>
      </div>
    </div>
  );
};
