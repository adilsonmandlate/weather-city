import Input from "components/Input/Input";
import { ListWeather, WeekDays } from "lib";
import { FC } from "react";
import styled from "styled-components";
import { Icons } from "components";

type Props = {
  inputValue: string;
  loading: boolean;
  error: any;
  unit: string;
  onUnitChange: (value: string) => void;
  onSearch: (value: string) => void;
  currentWeather: ListWeather;
  data: {
    country: string;
    name: string;
    sunrise: number;
    sunset: number;
  };
};

const Container = styled.div`
  padding: 60px 20px;
  @media (min-width: 820px) {
    padding: 60px 40px;
  }
`;

const DataContainer = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr;
  padding-top: 40px;

  @media (min-width: 820px) {
    display: block;
    padding: 0;
  }
`;

const CurrentTemp = styled.p`
  font-size: 4.2rem;
  margin: 0;
`;

const DateStamp = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0;
`;

const DateTimeStamp = styled.span`
  font-weight: 400;
  color: var(--colors-concrete);
`;

const Separator = styled.hr`
  padding: 0;
  border: 0;
  height: 1px;
  width: 15%;
  margin: 1rem 0;
  background-color: var(--colors-green);

  @media (min-width: 820px) {
    margin: 3rem 0;
  }
`;

const WeatherDetails = styled.p`
  text-transform: capitalize;
  margin: 0;
`;

const City = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0.5rem 0;
`;

const LoadingMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--colors-concrete);
  @media (min-width: 820px) {
    text-align: left;
  }
`;

const Sidebar: FC<Props> = ({
  inputValue,
  unit,
  error,
  loading,
  onUnitChange,
  onSearch,
  data,
  currentWeather,
}) => {
  return (
    <Container>
      <Input
        value={inputValue}
        onClick={onSearch}
        unit={unit}
        onUnitChange={onUnitChange}
      />

      {loading && <LoadingMessage>Loading data...</LoadingMessage>}
      {error && <LoadingMessage>N/A</LoadingMessage>}

      {!loading && !error && (
        <DataContainer>
          <Icons
            mode={currentWeather?.sys?.pod}
            icon={currentWeather?.weather[0]?.id}
            big
          />
          <div>
            <CurrentTemp>
              {Math.round(currentWeather?.main?.temp)}&deg;
              {unit === "metric" ? "C" : "F"}
            </CurrentTemp>

            <DateStamp>
              {WeekDays[new Date(data?.sunrise * 1000).getDay()]},{" "}
              <DateTimeStamp>{`${currentWeather?.time}:00`}</DateTimeStamp>
            </DateStamp>
            <Separator />
            <WeatherDetails>
              {currentWeather?.weather[0]?.description}
            </WeatherDetails>
            <City>
              {data?.name}, {data?.country}
            </City>
          </div>
        </DataContainer>
      )}
    </Container>
  );
};

export default Sidebar;
