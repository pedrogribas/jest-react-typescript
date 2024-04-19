import { fireEvent, getByText, render, screen } from "@testing-library/react";
import App from "./App";

const sum = (x: number, y: number) => {
  return x + y;
};

describe("App Component", () => {
  test("should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });
  //test and it do the same
  it("should render App with hello message", () => {
    render(<App />);
    screen.getByText("Hello world!");
  });
  test("should change message on button click", () => {
    render(<App />);
    screen.getByText("Let's learn more about testing in React");
    const button = screen.getByText(/change message/i);
    fireEvent.click(button);
    screen.getByText(/new message!/i);
    const oldMessage = screen.queryByText(
      "Let's learn more about testing in React"
    );
    //query não falha o teste
    expect(oldMessage).not.toBeInTheDocument();
  });
});
export default {};
