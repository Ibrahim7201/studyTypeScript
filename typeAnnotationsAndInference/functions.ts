const add = (a: number, b: number): number => a + b;

function divide(a: number, b: number): number {
  return a / b;
}

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
