import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button component", () => {
  it("default props and styles applies correctly", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Random</Button>);

    expect(screen.getByText(/submit/i).closest("button")).toHaveClass(
      "button primary normal"
    );

    userEvent.click(screen.getByText(/submit/i));

    expect(handleClick).toBeCalledTimes(1);
  });
});
