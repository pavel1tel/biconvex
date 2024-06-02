export const chart = {
  series: [
    {
      data: [3000, 3100, 3200, 3400, 3600, 3800, 4000, 4200, 4300],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      type: "line",
      zoom: {
        enabled: false,
      },
    } as ApexChart,
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: ["rgba(255, 255, 255, 1)"],
      width: 2,
    } as ApexStroke,
    markers: {
      size: 3,
      colors: ["rgba(255, 255, 255, 1)"],
      strokeOpacity: 0,
    },
    grid: {
      borderColor: "rgba(255, 255, 255, 0.8)",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      categories: ["1", "2", "4", "6", "8", "10", "12", "14", "15"],
      labels: {
        style: {
          colors: ["rgba(255, 255, 255, 0.8)"],
          fontSize: "20px",
          fontFamily: "ProximaNova, sans-serif",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      min: 2800,
      max: 4800,
      labels: {
        style: {
          colors: ["rgba(255, 255, 255, 0.6)"],
          fontSize: "16px",
          fontFamily: "ProximaNova, sans-serif",
          fontWeight: 400,
        },
      },
    },
  },
};
