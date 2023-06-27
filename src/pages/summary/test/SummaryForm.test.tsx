import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("체크 박스 기본 기능", async () => {
  const user = userEvent.setup();

  render(<SummaryForm setOrderPhase={jest.fn()} />);
  const input = screen.getByRole("checkbox", { name: "I agree to Terms and Conditions" });
  const selectButton = screen.getByRole("button", { name: "Confirm order" });
  expect(input).not.toBeChecked();
  expect(selectButton).toBeDisabled();
  await user.click(input);
  expect(input).toBeChecked();
  expect(selectButton).toBeEnabled();
  await user.click(input);
  expect(input).not.toBeChecked();
  expect(selectButton).toBeDisabled();
});

test("popover 호버 기능 테스트", async () => {
  const user = userEvent.setup();

  render(<SummaryForm setOrderPhase={jest.fn()} />);
  const nullPopover = screen.queryByText("No ice cream will actually be delivered");
  expect(nullPopover).not.toBeInTheDocument();
  const term = screen.getByText("Terms and Conditions");
  await user.hover(term);
  const popover = screen.getByText("No ice cream will actually be delivered");
  expect(popover).toBeInTheDocument();
  await user.unhover(term);
  expect(popover).not.toBeInTheDocument();
});
