import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOption, { IScoopOption } from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";
import { pricePerItem } from "../../constants";
import { formatCurrency } from "../../utils";
import { useOrderDetails } from "../../contexts/OrderDetails";

interface IOptions {
  optionType: "scoops" | "toppings";
}

export default function Options({ optionType }: IOptions) {
  const [items, setItems] = useState<IScoopOption[]>([]);
  const [error, setError] = useState(false);
  const { totals } = useOrderDetails();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        setError(error);
      });
  }, [optionType]);

  if (error) {
    return <AlertBanner message="" variant="" />;
  }
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();
  const ItemComponent: React.ComponentType<IScoopOption> | null = optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems =
    ItemComponent && items.map((item) => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />);

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {formatCurrency(totals[optionType])}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
}
