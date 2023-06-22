import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("버튼의 초기 색상이 올바른지 확인하고 클릭 시 업데이트", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "파란색으로 변경" });
  expect(colorButton).toHaveStyle("background-color: red");
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle("background-color: blue");
  expect(colorButton).toHaveTextContent("빨간색으로 변경");
});

test("체크박스", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "파란색으로 변경" });
  expect(colorButton).toBeEnabled();
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});