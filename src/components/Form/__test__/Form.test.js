import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../Form";

describe("App", () => {
  it("should render heading element", async () => {
    render(<Form />);
    const headerEl = screen.getByRole("heading");
    expect(headerEl).toBeInTheDocument();
  });
  test("render email input", () => {
    render(<Form />);

    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });

  test("pass valid email to test email input field", () => {
    render(<Form />);

    const inputEl = screen.getByTestId("email-input");
    fireEvent.change(inputEl, { target: { value: "test@mail.com" } });

    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  test("pass invalid email to test input value", () => {
    render(<Form />);

    const inputEl = screen.getByTestId("email-input");
    fireEvent.change(inputEl, { target: { value: "test" } });

    expect(screen.getByTestId("email-input")).toHaveValue("test");
  });

  test("the button element in the document", async () => {
    render(<Form />);

    const inputEl = screen.getByRole("button");
    expect(inputEl).toBeInTheDocument();
  });

  test("min & max range of the salary input field", async () => {
    render(<Form />);

    const inputEl = screen.getByPlaceholderText("salary");
    expect(inputEl).toHaveAttribute("min", "30");
    expect(inputEl).toHaveAttribute("max", "100");
  });

  test("It should keep £ in front of the input && K in the end of the input", () => {
    render(<Form />);
    const inputEl = screen.getByPlaceholderText("salary");
    fireEvent.change(inputEl, { target: { value: "33" } });
    const inputEl1 = screen.getByTestId("input-range");
    expect(inputEl1.textContent).toBe("£ 33K");
  });
});
