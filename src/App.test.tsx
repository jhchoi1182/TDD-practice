import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("체크 박스 클릭 시 버튼 비활성화 유무와 버튼 클릭 시 색상 변경 기능 테스트", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "파란색으로 변경" });
  const checkBox = screen.getByRole("checkbox", { name: "버튼 비활성화" });
  expect(colorButton).toHaveStyle("background-color: red");
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle("background-color: gray");
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle("background-color: red");
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle("background-color: blue");
  expect(colorButton).toHaveTextContent("빨간색으로 변경");
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle("background-color: red");
});
