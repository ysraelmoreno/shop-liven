import { render } from "@testing-library/react";
import Skeleton from ".";

describe("Skeleton Component", () => {
  it("should render properly", () => {
    const { container } = render(<Skeleton />);

    expect(container).toBeDefined();
  });
});
