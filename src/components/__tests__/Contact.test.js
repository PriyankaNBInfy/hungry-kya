import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load Contact Us page", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load Button and input boxes inside Contact Us page", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  const inputBoxes = screen.getAllByRole("textbox");
  expect(button).toBeInTheDocument();
  expect(inputBoxes.length).toBe(2);
});
