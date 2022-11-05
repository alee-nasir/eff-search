import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("renders Navbar", () => {
  render(<Navbar />);
  const navElement = screen.getByTestId("Navbar");
  expect(navElement).toBeInTheDocument();
});

test("renders Title", () => {
  render(<Navbar />);
  const titleElement = screen.getByText(/react tourism/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders number of listitems", () => {
  render(<Navbar />);
  const listElement = screen.getAllByRole("listitem");
  expect(listElement).toHaveLength(4);
});

test("renders links", () => {
  render(<Navbar />);
  const linkElement = screen.getAllByRole("link");
  expect(linkElement).toHaveLength(3);
});

test("renders theme button", () => {
  render(<Navbar />);
  const buttonElement = screen.getByTestId("theme-btn");
  expect(buttonElement).toBeInTheDocument();
});
