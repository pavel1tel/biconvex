import { useMemo } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { match } from "ts-pattern";

import { getRandomInt } from "@/shared/lib/random-int";

import { RateType } from "../types";

export interface RateChartProps {
  type: RateType;
  data: { name: string; value: number }[];
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
}

const DROP_SHADOW_COLOR_BY_TYPE = {
  zero: "rgba(98, 95, 244, 0.32)",
  positive: "rgba(14, 203, 123, 0.32)",
  negative: "rgba(228, 34, 34, 0.32)",
};

export const RateChart = ({ type, data, top, right, left, bottom }: RateChartProps) => {
  const chartId = useMemo(() => {
    return getRandomInt(1, Number.MAX_SAFE_INTEGER);
  }, []);

  const linearGradient = useMemo(() => {
    return match(type)
      .with("zero", () => {
        return (
          <linearGradient id={`areaGradient-zero-${chartId}`} x1="0%" y1="-20%" x2="0%" y2="95%">
            <stop offset="0%" stopColor="rgba(98, 95, 244, 0.24)" />
            <stop offset="20%" stopColor="rgba(98, 95, 244, 0.24)" />
            <stop offset="100%" stopColor="rgba(98, 95, 244, 0)" />
          </linearGradient>
        );
      })
      .with("positive", () => {
        return (
          <linearGradient id={`areaGradient-positive-${chartId}`} x1="0%" y1="-20%" x2="0%" y2="95%">
            <stop offset="0%" stopColor="rgba(14, 203, 123, 0.24)" />
            <stop offset="20%" stopColor="rgba(14, 203, 123, 0.24)" />
            <stop offset="90%" stopColor="rgba(14, 203, 123, 0)" />
          </linearGradient>
        );
      })
      .with("negative", () => {
        return (
          <linearGradient id={`areaGradient-negative-${chartId}`} x1="0%" y1="-20%" x2="0%" y2="95%">
            <stop offset="0%" stopColor="rgba(228, 34, 34, 0.24)" />
            <stop offset="20%" stopColor="rgba(228, 34, 34, 0.24)" />
            <stop offset="100%" stopColor="rgba(228, 34, 34, 0)" />
          </linearGradient>
        );
      })
      .exhaustive();
  }, [chartId, type]);

  return (
    <ResponsiveContainer>
      <AreaChart data={data} margin={{ top: top || 0.5, right: right || 0.5, left: left || 0.5, bottom: bottom || 0 }}>
        <defs>
          {linearGradient}

          <filter id={`drop-shadow-up-${chartId}`} height="150%">
            <feDropShadow dx="0" dy="-1" stdDeviation="3" floodColor={DROP_SHADOW_COLOR_BY_TYPE[type]} />
          </filter>

          <filter id={`drop-shadow-down-${chartId}`} height="150%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor={DROP_SHADOW_COLOR_BY_TYPE[type]} />
          </filter>
        </defs>

        <Area
          type="monotone"
          dataKey="value"
          stroke={match(type)
            .with("zero", () => "#625FF4")
            .with("positive", () => "#0ECB7B")
            .with("negative", () => "#E42222")
            .exhaustive()}
          fill={`url(#areaGradient-${type}-${chartId})`}
          dot={false}
          connectNulls
          strokeWidth={1.5}
          filter={`url(#drop-shadow-up-${chartId})`}
        />

        <Area
          type="monotone"
          dataKey="value"
          stroke="transparent"
          fill={`url(#areaGradient-${type}-${chartId})`}
          dot={false}
          connectNulls
          filter={`url(#drop-shadow-down-${chartId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

/*
export const RateChart = ({ type, data }: RateChartProps) => {

  const chartId = useMemo(() => {
    return getRandomInt(1, Number.MIN_SAFE_INTEGER);
  }, []);

  const dropShadowColor = useMemo(() => {
    return match(type)
      .with("zero", () => "rgba(98, 95, 244, 0.32)")
      .with("positive", () => "rgba(14, 203, 123, 0.32)")
      .with("negative", () => "rgba(228, 34, 34, 0.32)")
      .exhaustive();
  }, [type]);

  const linearGradient = useMemo(() => {
    return match(type)
      .with("zero", () => {
        return (
          <linearGradient id={`areaGradient-zero-${chartId}`} x1="0%" y1="-20%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(98, 95, 244, 0.24)" />
            <stop offset="50%" stopColor="rgba(98, 95, 244, 0.24)" />
            <stop offset="100%" stopColor="rgba(98, 95, 244, 0)" />
          </linearGradient>
        );
      })
      .with("positive", () => {
        return (
          <linearGradient id={`areaGradient-positive-${chartId}`} x1="0%" y1="-20%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(14, 203, 123, 0.24)" />
            <stop offset="50%" stopColor="rgba(14, 203, 123, 0.24)" />
            <stop offset="100%" stopColor="rgba(14, 203, 123, 0)" />
          </linearGradient>
        );
      })
      .with("negative", () => {
        return (
          <linearGradient id={`areaGradient-negative-${chartId}`} x1="0%" y1="-20%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(228, 34, 34, 0.24)" />
            <stop offset="50%" stopColor="rgba(228, 34, 34, 0.24)" />
            <stop offset="100%" stopColor="rgba(228, 34, 34, 0)" />
          </linearGradient>
        );
      })
      .exhaustive();
  }, [chartId, type]);

  return (
    <ResponsiveContainer>
      <AreaChart data={data} margin={{ top: 0, right: 0.5, left: 0.5, bottom: 1.5 }}>

        <defs>

          {linearGradient}

          <filter id={`drop-shadow-up-${chartId}`} height="150%">
            <feDropShadow dx="0" dy="-1" stdDeviation="3" floodColor={dropShadowColor} />
          </filter>

          <filter id={`drop-shadow-down-${chartId}`} height="150%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor={dropShadowColor} />
          </filter>

        </defs>

        <Area
          type="monotone"
          dataKey="value"
          stroke={
            match(type)
              .with("zero", () => "#625FF4")
              .with("positive", () => "#0ECB7B")
              .with("negative", () => "#E42222")
              .exhaustive()
          }
          fill={`url(#areaGradient-${type}-${chartId})`}
          dot={false}
          connectNulls
          strokeWidth={1.5}
          filter={`url(#drop-shadow-up-${chartId})`}
        />

        <Area
          type="monotone"
          dataKey="value"
          stroke="transparent"
          fill={`url(#areaGradient-${type}-${chartId})`}
          dot={false}
          connectNulls
          filter={`url(#drop-shadow-down-${chartId})`}
        />

      </AreaChart>
    </ResponsiveContainer>
  )
};*/
