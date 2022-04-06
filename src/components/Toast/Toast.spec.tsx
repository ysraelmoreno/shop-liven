import { render, screen } from "@testing-library/react";
import Toast, { ToastMessage } from ".";

const toastMessagesMock: ToastMessage[] = [
  {
    id: "1",
    type: "success",
    title: "Success",
    description: "This is a success message",
  },
  {
    id: "2",
    type: "error",
    title: "Error",
    description: "This is an error message",
  },
  {
    id: "3",
    type: "info",
    title: "Info",
    description: "This is an info message",
  },
];

const singleToast: ToastMessage[] = [
  {
    ...toastMessagesMock[0],
  },
];

describe("Toast component", () => {
  it("should be able rendered properly", () => {
    const { container } = render(<Toast messages={toastMessagesMock} />);

    expect(container).toBeDefined();
  });

  it("should render a toast message", () => {
    render(<Toast messages={singleToast} />);

    expect(screen.getByText("Success")).toBeInTheDocument();
  });

  it("should render multiple toasts", () => {
    render(<Toast messages={toastMessagesMock} />);

    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByText("Info")).toBeInTheDocument();
  });
});
