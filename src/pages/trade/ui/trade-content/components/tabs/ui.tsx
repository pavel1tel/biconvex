import clsx from "clsx";
import { useState } from "react";

import classes from "./Tabs.module.css";
import { TabsProps } from "./Tabs.types";

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeTabID, setActiveTabID] = useState(tabs[0].id);

  return (
    <div className={classes.tabsContainer}>
      <div className={classes.tabsControllWrapper}>
        {tabs.map(({ id, title }) => (
          <button className={clsx(classes.tab, { [classes.active]: activeTabID === id })} onClick={() => setActiveTabID(id)} key={id}>
            <p>{title}</p>
          </button>
        ))}
      </div>
      <div className={classes.tabsContentContainer}>
        <div className={classes.tabContent}>{tabs.find((tab) => tab.id === activeTabID)?.content}</div>
      </div>
    </div>
  );
};
