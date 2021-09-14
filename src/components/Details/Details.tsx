import { Card, Icons } from "components";
import { CustomList, WeatherAPIType } from "lib";
import { mapWeatherData, WeekDaysShort } from "lib/utils";
import { FC } from "react";
import styled from "styled-components";

type Props = {
  unit: string;
  loading: boolean;
  forecast: CustomList[];
  weatherData: WeatherAPIType;
};

const Container = styled.div`
  padding: 0 10px 20px;
  @media (min-width: 820px) {
    padding: 0 20px 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 160px);
  @media (min-width: 820px) {
    justify-content: flex-start;
  }
`;

const GridBig = styled(Grid)`
  grid-template-columns: repeat(auto-fit, 300px);
  @media (min-width: 820px) {
    justify-content: flex-start;
  }
`;

const TitleDescript = styled.h2`
  font-weight: 700;
  padding: 40px 0;
  text-align: center;
  color: var(--color-midnight);
  @media (min-width: 820px) {
    text-align: left;
  }
`;

const WeekDay = styled.p`
  font-weight: 700;
  margin: 0%; ;
`;

const Temp = styled.p`
  font-weight: 500;
  margin: 0;
`;

const TempDescript = styled.p`
  font-weight: 500;
  margin-top: 0.1rem;
  margin-bottom: 0;
  text-transform: capitalize;
  color: var(--colors-concrete);
`;

const CardTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: var(--colors-concrete);
`;

const IconTitle = styled.i`
  font-size: 2rem;
  color: var(--colors-green);
`;

const CardBody = styled.p`
  font-size: 3.2rem;
  font-weight: 600;
  color: var(--colors-green);
`;

const CardBodyHelper = styled.span`
  font-size: 1.7rem;
`;

const LoadingMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--colors-concrete);
`;

const hourHelper = (hour: number): string => {
  return hour > 9 ? `${hour}` : `0${hour}`;
};

const Details: FC<Props> = ({ forecast, loading, weatherData, unit }) => {
  const listMapped = weatherData?.list?.map(mapWeatherData)[0];

  return (
    <Container>
      <TitleDescript>Week Forecast</TitleDescript>
      {loading && <LoadingMessage>Loading data...</LoadingMessage>}

      {!loading && (
        <>
          <Grid>
            {forecast?.map((data) => {
              return (
                <Card key={data.date}>
                  <WeekDay>
                    {WeekDaysShort[new Date(data.date).getDay()]}
                  </WeekDay>
                  <Icons icon={data?.icon_id} mode="d" />
                  <Temp>
                    {data?.temp}&deg;{unit === "metric" ? "C" : "F"}
                  </Temp>
                  <TempDescript>{data?.description}</TempDescript>
                </Card>
              );
            })}
          </Grid>
        </>
      )}

      {!loading && (
        <>
          <TitleDescript>{"Today's"} Highlight</TitleDescript>
          <GridBig>
            <Card big={true}>
              <CardTitle>
                Wind Status <IconTitle className={`wi wi-strong-wind`} />
              </CardTitle>
              <CardBody>
                {listMapped?.wind} <CardBodyHelper>km/h</CardBodyHelper>
              </CardBody>
            </Card>
            <Card big={true}>
              <CardTitle>
                Sunrise
                <IconTitle className={`wi wi-direction-up`} />
              </CardTitle>
              <CardBody>
                {hourHelper(
                  new Date(weatherData?.city?.sunrise * 1000).getHours()
                )}
                :
                {hourHelper(
                  new Date(weatherData?.city?.sunrise * 1000).getMinutes()
                )}
              </CardBody>
            </Card>
            <Card big={true}>
              <CardTitle>
                Sunset <IconTitle className={`wi wi-direction-down`} />
              </CardTitle>
              <CardBody>
                {hourHelper(
                  new Date(weatherData?.city?.sunset * 1000).getHours()
                )}
                :
                {hourHelper(
                  new Date(weatherData?.city?.sunset * 1000).getMinutes()
                )}
              </CardBody>
            </Card>
          </GridBig>
        </>
      )}
    </Container>
  );
};

export default Details;
