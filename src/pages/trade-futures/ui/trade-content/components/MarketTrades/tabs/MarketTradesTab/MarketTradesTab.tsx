import { Table, TableData } from "@mantine/core";

import classes from "./MarketTradesTab.module.css";

const tableData: TableData = {
  head: ["Price", "Amount", "Time"],
  body: [
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
    [<p className={Math.random() > 0.5 ? classes.green : classes.red}>$43,975.72</p>, "0.00234", "18:23:35"],
  ],
};
export const MarketTradesTab = () => {
  return (
    <div className={classes.tableContainer}>
      <Table
        data={tableData}
        withRowBorders={false}
        classNames={{ th: classes.tableTh, td: classes.tableTd, thead: classes.tableTHead, tbody: classes.tableBody }}
        stickyHeader
      ></Table>
    </div>
  );
};
