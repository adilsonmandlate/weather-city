import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page text", () => {
  render(<App />);
  const textElement = screen.getByText(/Home Page/i);
  expect(textElement).toBeInTheDocument();
});
