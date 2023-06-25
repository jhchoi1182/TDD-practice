import Col from "react-bootstrap/Col";
import { IScoopOption } from "./ScoopOption";

export default function ToppingOption({ name, imagePath }: IScoopOption) {
  return (
    <Col xs={6} sm={4} md={3} lg={2} style={{ textAlign: "center" }}>
      <img style={{ width: "75%" }} src={`http://localhost:3030/${imagePath}`} alt={`${name} toppings`} />
    </Col>
  );
}
