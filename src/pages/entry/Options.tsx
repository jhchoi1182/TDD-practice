import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOption, { IScoopOption } from "./ScoopOption";
import ToppingOption from "./ToppingOption";

interface IOptions {
  optionType: "scoops" | "toppings";
}

export default function Options({ optionType }: IOptions) {
  const [items, setItems] = useState<IScoopOption[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, [optionType]);

  const ItemComponent: React.ComponentType<IScoopOption> | null = optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems =
    ItemComponent &&
    items.map((item) => (
      <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
    ));

  return <Row>{optionItems}</Row>;
}
