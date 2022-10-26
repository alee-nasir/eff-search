import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Navbar component", () => {
  const component = render(<App />);
  const childElement = component.getByLabelText(/React Tourism/i);
  expect(childElement).toBeTruthy();
});

test("renders Searchbar component", () => {
  const component = render(<App />);
  const childElement = component.getByPlaceholderText(
    "Enter Keywords to search..."
  );
  expect(childElement).toBeTruthy();
});
