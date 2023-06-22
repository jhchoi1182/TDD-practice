import { useState } from "react";

export default function App() {
  const [isRed, setIsRed] = useState(true);
  const [disabled, setdisabled] = useState(false);
  const newButtonColor = isRed ? "red" : "blue";
  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : newButtonColor }}
        onClick={() => setIsRed((prev) => !prev)}
        disabled={disabled}
      >
        {isRed ? "파란색으로 변경" : "빨간색으로 변경"}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setdisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">버튼 비활성화</label>
    </div>
  );
}
