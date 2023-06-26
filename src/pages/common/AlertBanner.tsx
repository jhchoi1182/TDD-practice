import Alert from "react-bootstrap/Alert";

interface IAlertBanner {
  message: string;
  variant: string;
}

export default function AlertBanner({ message, variant }: IAlertBanner) {
  const alertMessage = message || "An unexpected error occurred. Please try again later.";
  const alertVariant = variant || "danger";

  return (
    <Alert variant={alertVariant} style={{ backgroundColor: "red" }}>
      {alertMessage}
    </Alert>
  );
}
