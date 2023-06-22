import { useState } from "react";

export default function App() {
  const [isRed, setIsRed] = useState(true);
  const newButtonColor = isRed ? "red" : "blue";
  return (
    <div>
      <button style={{ backgroundColor: newButtonColor }} onClick={() => setIsRed((prev) => !prev)}>
        {isRed ? "파란색으로 변경" : "빨간색으로 변경"}
      </button>
      <input type="checkbox" />
    </div>
  );
}
