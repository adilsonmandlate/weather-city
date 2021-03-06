import { Home, NotFound } from "pages";
import { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MainStyles, Theme } from "./theme";

export type ThemeType = typeof Theme;

const App: FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <MainStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
