import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <>
        <Button>Button</Button>
      </>
    );

    expect(container).toBeDefined();
  });

  it("should fire an event on click", async () => {
    const onClick = jest.fn();
    render(
      <>
        <Button onClick={onClick}>Button</Button>
      </>
    );

    const button = await screen.findByText("Button");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should be able to set disabled attribute", () => {
    render(
      <>
        <Button disabled>Button</Button>
      </>
    );

    expect(screen.getByText("Button")).toHaveAttribute("disabled");
  });

  it("should be able to set a secondary variant", async () => {
    render(
      <>
        <Button variant="secondary">Button</Button>
      </>
    );

    const button = await screen.findByText("Button");

    const buttonClass = button.className.includes("variant-secondary");

    expect(buttonClass).toBeTruthy();
  });

  it("should be able to set a alternative variant", async () => {
    render(
      <>
        <Button variant="alternative">Button</Button>
      </>
    );

    const button = await screen.findByText("Button");

    const buttonClass = button.className.includes("variant-alternative");

    expect(buttonClass).toBeTruthy();
  });

  it("should be able to set a ghost variant", async () => {
    render(
      <>
        <Button variant="ghost">Button</Button>
      </>
    );

    const button = await screen.findByText("Button");

    const buttonClass = button.className.includes("variant-ghost");

    expect(buttonClass).toBeTruthy();
  });
});
