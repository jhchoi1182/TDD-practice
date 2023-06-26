import { Container } from "react-bootstrap";
import OrderSummary from "./pages/summary/OrderSummary";
import SummaryForm from "./pages/summary/SummaryForm";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import OrderEntry from "./pages/entry/OrderEntry";

export default function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}
