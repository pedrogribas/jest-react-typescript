import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("should render with red background with disabled", () => {
    render(
      <Button onClick={() => {}} disabled={true}>
        Click me
      </Button>
    );
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveStyle({ backgroundColor: "red" });
  });
  it("should render with blue background with enabled", () => {
    const onClick = jest.fn();
    render(
      <Button onClick={() => {}} disabled={false}>
        Click me
      </Button>
    );
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveStyle({ backgroundColor: "blue" });
  });
  it("should call onClick prop on click", () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} disabled>
        Click me
      </Button>
    );
    const button = screen.getByText(/click me/i);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledWith(10);
  });
});

export default {};
