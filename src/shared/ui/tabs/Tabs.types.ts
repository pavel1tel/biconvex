import React, { CSSProperties } from "react";

export type TabsProps = {
  tabs: Tab[];
  showTrack?: boolean;
  indicatorRadius?: number;
  tabsControllsWidth?: CSSProperties["width"];
  tabControllPadding?: CSSProperties["padding"];
  tabControllFontSize?: CSSProperties["fontSize"];
  onTabChange?: (tab?: Tab) => void;
  overflowContainer?: boolean;
  activeTabId?: string;
  disabled?: boolean
};

export type Tab = {
  id: string;
  title: string;
  content: React.ReactNode;
};
