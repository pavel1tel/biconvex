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
export const AnalysisButton = ({ percents }: { percents: number }) => {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  useEffect(() => {
    const calculateLevel = Math.ceil(percents / 20) || 1;
    setAnalysisResult(analysResults.find((res) => res.level === calculateLevel) ?? null);
  }, [percents]);
  return <button className={clsx(classes.analysisButton, classes[analysisResult?.class ?? ""])}>{analysisResult?.text}</button>;
};
