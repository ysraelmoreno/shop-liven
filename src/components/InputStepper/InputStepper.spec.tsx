import { screen, render, fireEvent } from "@testing-library/react";

import InputStepper from ".";

describe("InputStepper component", () => {
  it("should render properly", () => {
    const { container } = render(<InputStepper />);

    expect(container).toBeDefined();
  });

  it("should render a input with a value 1 as default", async () => {
    render(<InputStepper />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("1");
  });

  it("should render a input with a value 2", async () => {
    render(<InputStepper value={2} />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("2");
  });

  it("should be able to increment value", () => {
    render(<InputStepper />);

    const incrementButton = screen.getByRole("button", { name: /\+/i });

    fireEvent.click(incrementButton);

    expect(screen.getByRole("textbox")).toHaveValue("2");
  });

  it("should be able to decrement value", () => {
    render(<InputStepper value={2} />);

    const decrementButton = screen.getByRole("button", { name: /-/i });

    fireEvent.click(decrementButton);

    expect(screen.getByRole("textbox")).toHaveValue("1");
  });

  it("should be able to change the input value", () => {
    render(<InputStepper />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "3" } });

    expect(input).toHaveValue("3");
  });
});
