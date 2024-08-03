import React from "react";

export type TabsProps = {
  tabs: Tab[];
  // showTrack?: boolean;
  // indicatorRadius?: number;
  // tabsControllWidth?: CSSProperties["width"];
  // tabsControllPadding?: CSSProperties["padding"];
  // tabsControllGap?: number;
};

export type Tab = {
  id: string;
  title: string;
  content: React.ReactNode;
};
