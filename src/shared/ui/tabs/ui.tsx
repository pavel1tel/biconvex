import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

import classes from "./Tabs.module.css";
import { Tab, TabsProps } from "./Tabs.types";

export const Tabs = ({
  tabs,
  showTrack = true,
  indicatorRadius = 4,
  tabsControllsWidth = "100%",
  tabControllPadding = 0,
  tabControllFontSize = 20,
  onTabChange,
  overflowContainer = true,
}: TabsProps) => {
  const [activeTabID, setActiveTabID] = useState(tabs[0].id);
  const activeIndicatorWIdth = 100 / tabs.length;
  const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTabID);
  const onChangeTab = (tab: Tab) => {
    onTabChange?.(tab);
    setActiveTabID(tab.id);
  };
  return (
    <div style={{ overflow: overflowContainer ? "hidden" : "visible" }} className={classes.tabsContainer}>
      <div style={{ width: tabsControllsWidth }} className={classes.tabsControllWrapper}>
        {tabs.map((tab) => (
          <button
            style={{ padding: tabControllPadding }}
            className={clsx(classes.tab, { [classes.active]: activeTabID === tab.id })}
            onClick={() => onChangeTab(tab)}
            key={tab.id}
          >
            <p style={{ fontSize: tabControllFontSize }}>{tab.title}</p>
          </button>
        ))}
        {showTrack && <div className={classes.indicatorTrack}></div>}
        <motion.div
          style={{ width: `${activeIndicatorWIdth}%`, borderRadius: `${indicatorRadius}px ${indicatorRadius}px 0 0` }}
          className={classes.indicator}
          animate={{ x: `${activeTabIndex * 100}%` }}
          transition={{ ease: "circIn", duration: 0.3 }}
        />
      </div>
      <div style={{ overflow: overflowContainer ? "hidden" : "visible" }} className={classes.tabsContentContainer}>
        <div className={classes.tabContent}>{tabs.find((tab) => tab.id === activeTabID)?.content}</div>
      </div>
    </div>
  );
};
