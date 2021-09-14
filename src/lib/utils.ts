/* eslint-disable @typescript-eslint/no-explicit-any */
export type WeatherAPIType = {
  city: {
    coord: { lat: number; lon: number };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  list: ListWeather[];
};

export type ListWeather = {
  clouds: { all: number };
  day: number;
  dt: number;
  dt_txt: string;
  main: {
    humidity: number;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    temp_kf: number;
  };
  pop: number;
  sys: { pod: "d" | "n" };
  time?: number;
  weather: { description: string; icon: string; id: number; main: string };
  wind: { speed: number };
};

export type CustomList = {
  date: number;
  date_txt: string;
  description: string;
  icon_id: string;
  temp: number;
  feels_like: number;
  humidity: number;
  wind: number;
};

export const customWeatherData = (
  weatherData: WeatherAPIType
): WeatherAPIType => {
  const dailyData: any = {};

  weatherData?.list.forEach((data: ListWeather) => {
    const dateTime = new Date(data.dt * 1000);
    const day = dateTime.getDate();
    const time = dateTime.getUTCHours();

    if (!dailyData[day]) {
      dailyData[day] = [];
    }

    dailyData[day].push({ ...data, day, time });
  });

  return { ...weatherData, list: dailyData };
};

export const mapWeatherData = (list: ListWeather) => {
  return {
    date: list.dt * 1000, // convert from seconds to milliseconds
    date_txt: list.dt_txt,
    description: list.weather[0].description,
    icon_id: list.weather[0].id,
    temp: Math.round(list.main.temp),
    feels_like: Math.round(list.main.feels_like),
    humidity: list.main.humidity,
    wind: Math.round(list.wind.speed * 3.6),
  };
};

export const mapWeatherDataForecast = (data: WeatherAPIType): CustomList[] => {
  const list: CustomList[] = data?.list
    .filter((w: ListWeather) => {
      // Return only 12:00 forecast, the highest of the day and data from tomorrow on...
      return (
        w.dt_txt.match(/12:00:00/) &&
        new Date(w.dt * 1000).getDate() !== new Date().getDate()
      );
    })
    .map(mapWeatherData);

  return list;
};

export const WeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const WeekDaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default customWeatherData;
