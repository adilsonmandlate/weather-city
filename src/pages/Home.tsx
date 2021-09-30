import { Details, Sidebar } from "components";
import { customWeatherData, fetcher, mapWeatherDataForecast } from "lib";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Container = styled.main`
  margin: 0 auto;
  max-width: var(--layout-width);
  display: grid;
  grid-template-rows: 500px 1fr;

  @media (min-width: 820px) {
    grid-template-columns: 400px 1fr;
  }
`;

const Home = () => {
  const [unit, setUnit] = useState("metric");
  const [city, setCity] = useState("maputo");

  const URL = `${API_URL}?q=${city}&units=${unit}&appid=${API_KEY}`;
  const { data, error } = useSWR(URL, fetcher);
  const loading = !error && !data;

  const weatherData = customWeatherData(data);
  const currentWeather = weatherData?.list[new Date().getDate()]?.[0];
  const forecast = mapWeatherDataForecast(data);

  return (
    <Container>
      <Sidebar
        loading={loading}
        error={error}
        inputValue={city}
        onSearch={setCity}
        unit={unit}
        onUnitChange={setUnit}
        currentWeather={currentWeather}
        data={weatherData.city}
      />
      <Details
        loading={loading}
        error={error}
        unit={unit}
        forecast={forecast}
        weatherData={data}
      />
    </Container>
  );
};

export default Home;
