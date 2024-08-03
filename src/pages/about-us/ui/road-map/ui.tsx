import { useResize } from "@/hooks/useResize";
import { Group, Stack, Text } from "@mantine/core";
import clsx from "clsx";
import { FC } from "react";

import classes from "./styles.module.css";

type TItem = {
  id: number;
  year: number;
  title: string;
  subtitle: string;
  text: string;
};

type TProps = {
  item: TItem;
  isBottom: boolean;
};

export const RoadMap = () => {
  const { isAdaptive: md } = useResize(1200);
  const data: TItem[] = [
    {
      id: 1,
      year: 2019,
      title: "Laying the Foundation",
      subtitle: "Conceptualization and Team Formation",
      text: `Conceptualization and market analysis <br><br>
            Formation of the development team <br><br>
            Initial investment and fundraisin g`,
    },
    {
      id: 1,
      year: 2020,
      title: "Designing Tomorrow",
      subtitle: "Platform Architecture and Legal Framework",
      text: `Platform architecture design<br><br>
      Legal framework establishment<br><br>
      Alpha version development and testing<br><br>
      Strategic partnerships initiation`,
    },
    {
      id: 1,
      year: 2021,
      title: "Empowering Early Users",
      subtitle: "Beta Release and Strategic Alliances",
      text: `Beta version release for user testing and feedback<br><br>
      Security audits and enhancements<br><br>
      Mobile app development<br><br>
      Community building and marketing campaigns`,
    },
    {
      id: 1,
      year: 2022,
      title: "The Big Launch",
      subtitle: "BitConvex Enters the Crypto sphere",
      text: `Official BitConvex launch<br><br>
      Introduction of spot trading<br><br>
      Integration of additional cryptocurrencies<br><br>
      Implementation of advanced trading features<br><br>
      User education and support programs`,
    },
    {
      id: 1,
      year: 2023,
      title: "Securing Success",
      subtitle: "Conceptualization and Team Formation",
      text: `Enhancement of security measures<br><br>
      Launch of BitConvex token (BUT) for additional benefits<br><br>
      Expansion of customer support services<br><br>
      Integration with decentralized finance (DeFi) protocols`,
    },
    {
      id: 1,
      year: 2024,
      title: "Beyond Borders",
      subtitle: "Global Expansion and Financial Innovation",
      text: `Global expansion and outreach<br><br>
      Introduction of innovative financial products<br><br>
      Integration of AI-driven trading tools<br><br>
      Collaboration with institutional partners<br><br>
      Continuous improvement based on user feedback and market trends`,
    },
    {
      id: 1,
      year: 2025,
      title: "Advancing Boundaries",
      subtitle: "Empowering Futures",
      text: `BitConvex R&D Center launch<br><br>
      Establish BitConvex Academy<br><br>
      Implement sustainable blockchain practices<br><br>
      Expand through strategic acquisitions<br><br>
      Commit to continuous advancements and user-centric solutions`,
    },
  ];

  const year = Number(new Date().getFullYear());

  const RenderItem: FC<TProps> = ({ item, isBottom }) => {
    const isCurrent = item.year === year;
    const isFuture = item.year > year;
    const isPrevious = item.year === year - 1;
    return (
      <Stack
        className={clsx(
          classes.yearItemWrap,
          isBottom ? classes.bottomItem : "",
          isCurrent ? classes.currentItem : "",
          isFuture || isCurrent || isPrevious ? classes.blueItem : "",
        )}
        gap={7}
      >
        {!isCurrent && !isFuture && isBottom && (
          <Stack
            className={clsx(
              classes.itemDash,
              classes.bottomItemDash,
              isPrevious ? classes.itemDashPrevious : "",
              isCurrent ? classes.itemDashCurrent : "",
            )}
          ></Stack>
        )}
        <Text className={classes.title}>
          {item.title} {item.year}
        </Text>
        <Text className={classes.textSubtitle} mb={20}>
          {item.subtitle}
        </Text>
        <Text className={classes.text} dangerouslySetInnerHTML={{ __html: item.text }}></Text>
        <Text className={classes.textYear}>{item.year}</Text>
        <Text>{isBottom.toString()}</Text>
      </Stack>
    );
  };

  return (
    <>
      {!md ? (
        <Stack gap={0}>
          <Group className={classes.topRow} justify={"center"} gap={0} align={"stretch"} pl={12} pr={12}>
            {data
              .filter((_, index) => (index + 1) % 2 === 0)
              .map((item) => {
                return <RenderItem item={item} isBottom={false} />;
              })}
          </Group>
          <Stack className={classes.divider} />
          <Group className={classes.bottomRow} gap={0} align={"stretch"} pl={12} pr={12}>
            {data
              .filter((_, index) => (index + 1) % 2 !== 0)
              .map((item) => {
                return <RenderItem item={item} isBottom={true} />;
              })}
          </Group>
        </Stack>
      ) : (
        <ul className={classes.mobRoadmapList}>
          <div className={classes.mobRoadmapLine}></div>
          {data.map((col) => (
            <li className={clsx(classes.mobRoadmapItem, col.year <= year && classes.disabledItem, col.year === year && classes.lastItem)}>
              <div
                style={{
                  backgroundColor: col.year < year ? "var(--color-grey)" : "var(--color-blue)",
                }}
                className={classes.mobRoadmapPoint}
              ></div>
              <div className={classes.mobRoadmapYear}>{col.year}</div>
              <div>
                <div
                  style={{
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      color: col.year < year ? "var(--color-grey)" : "var(--color-blue)",
                    }}
                    className={classes.mobRoadmapTitle}
                  >
                    {col.title}
                  </div>
                  <span
                    style={{
                      color: col.year < year ? "var(--color-grey)" : "var(--color-blue)",
                    }}
                  >
                    {col.subtitle}
                  </span>
                </div>
                <div
                  className={classes.mobRoadmapText}
                  dangerouslySetInnerHTML={{ __html: col.text }}
                  style={{
                    color: col.year < year ? "var(--color-grey)" : "var(--color-white)",
                  }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
