import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(["0"]);

  const buttons = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { value, type } = e.currentTarget.dataset || undefined;

    // TODO: Add better error handling
    if (!value || !type) return;
    console.info(value, type);

    // Handle number buttons
    if (type === "number") {
      // Remove the `0`, after the first button is pressed
      display[0] === "0"
        ? setDisplay([value])
        : setDisplay((prev) => [...prev, value]);
      return;
    }

    // Handle control buttons
    switch (value.toLowerCase()) {
      case "ac":
        clearDisplay();
        break;
    }
  };

  const clearDisplay = () => setDisplay(["0"]);

  /**
   * Determines if a character can be converted to a number.
   * @param char The character to check.
   * @returns True if the character can be converted to a number, false otherwise.
   */
  const isNumber = (char: string): boolean => {
    return !isNaN(Number(char)) ? true : false;
  };

  return (
    <main className="container">
      <input id="display" type="text" value={display.join("")} />
      <div className="calculator">
        {buttons.map((button) => (
          <button
            data-value={button}
            data-type={isNumber(button) ? "number" : "control"}
            key={button}
            type="button"
            onClick={(e) => handleButtonClick(e)}
          >
            {button}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;
