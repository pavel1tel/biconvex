import clsx from "clsx";
import { useEffect, useState } from "react";

import classes from "./AnalysisButton.module.css";

const analysResults = [
  { level: 1, text: "Strong sell", class: "red" },
  { level: 2, text: "Sell", class: "pink" },
  { level: 3, text: "Neutral", class: "yellow" },
  { level: 4, text: "Buy", class: "lightGreen" },
  { level: 5, text: "Strong buy", class: "green" },
];

type AnalysisResult = (typeof analysResults)[number];

export const AnalysisButton = ({ recommendation }: { recommendation: number }) => {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  console.log(recommendation);

  useEffect(() => {
    let result;
    if (recommendation < -0.5) {
      result = analysResults[0];
    } else if (recommendation >= -0.5 && recommendation < -0.1) {
      result = analysResults[1];
    } else if (recommendation >= -0.1 && recommendation < 0.1) {
      result = analysResults[2];
    } else if (recommendation >= 0.1 && recommendation < 0.5) {
      result = analysResults[3];
    } else {
      result = analysResults[4];
    }

    setAnalysisResult(result);
  }, [recommendation]);

  return <button className={clsx(classes.analysisButton, classes[analysisResult?.class ?? ""])}>{analysisResult?.text}</button>;
};
