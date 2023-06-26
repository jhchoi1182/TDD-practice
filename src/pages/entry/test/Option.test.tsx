import { render, screen } from "../../../test-utils/test-utils";
import Options from "../Options";

test("각 스쿱 옵션의 이미지가 서버에 표시되는지", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((el) => el.getAttribute("alt"));

  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("각 토핑 옵션의 이미지가 서버에 표시되는지", async () => {
  render(<Options optionType="toppings" />);

  const toppingsImages = await screen.findAllByRole("img", { name: /toppings$/i });
  expect(toppingsImages).toHaveLength(3);

  const altText = toppingsImages.map((el) => el.getAttribute("alt"));

  expect(altText).toEqual(["Cherries toppings", "M&Ms toppings", "Hot fudge toppings"]);
});
