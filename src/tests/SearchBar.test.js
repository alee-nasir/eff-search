import SearchBar from "../components/SearchBar";
import { fireEvent, render, screen } from "@testing-library/react";

test("renders Searchbar container", () => {
  render(<SearchBar />);
  const searchContainer = screen.getByTestId("searchcontainer");
  expect(searchContainer).toBeInTheDocument();
});

test("renders search input field", () => {
  render(<SearchBar />);
  const searchInputEl = screen.getByPlaceholderText(
    /Enter Keywords to search.../i
  );
  expect(searchInputEl).toBeInTheDocument();
});

test("renders Button", () => {
  render(<SearchBar />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("search input should empty", () => {
  render(<SearchBar />);
  const searchInput = screen.getByPlaceholderText(
    /Enter Keywords to search.../i
  );
  expect(searchInput.value).toBe("");
});

test("search input should change", () => {
  render(<SearchBar />);
  const searchInput = screen.getByPlaceholderText(
    /Enter Keywords to search.../i
  );
  const testValue = "test";

  fireEvent.change(searchInput, { target: { value: testValue } });
  expect(searchInput.value).toBe(testValue);
});

test("renders DataList component", () => {
  const component = render(<SearchBar />);
  const childElement = component.getByLabelText(/surname/i);
  expect(childElement).toBeTruthy();
});
