function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function randomChartData(): { name: string; value: number }[] {
  const result : any  = [];

  const count = getRandomInt(10, 50);

  for (let i = 0; i < count; i++) {
    result.push({
      name: "P-" + i,
      value: Math.floor(Math.random() * 7500),
    });
  }

  return result;
}
