import { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["+", "-", "/", "*"];
  const deci = ["."];
  ///////////////////////////////////////////////////////////////////////////////////
  const updateCalc = (value) => {
    try {
      if (operators.includes(value) && calc === "" && value !== "-") return;

      if (deci.includes(value) && calc === "") {
        setCalc(0 + value);
        return;
      }

      if (
        (operators.includes(value) &&
          operators.includes(calc.slice(-1)) &&
          value !== "-") ||
        (deci.includes(value) && deci.includes(calc.slice(-1)))
      ) {
        const valup = calc.slice(0, -1);

        setCalc(valup + value);
        return;
      }

      if (value === "-" && value === calc.slice(-1)) return;

      // if (calc[-1] == calc[-2]) {
      //   setCalc(calc.slice(0, -2));
      // }

      ////////////////////////////////////////////////////////////////////////////////
      setCalc(calc + value);
      if (!operators.includes(value)) {
        setResult(eval(calc + value).toString());
      }
    } catch (error) {
      setCalc(calc);
      return;
    }
  };

  if (
    operators.includes(calc.slice(-1)) &&
    operators.includes(calc.slice(-2, -1)) &&
    calc.slice(-1) !== "-"
  ) {
    setCalc(calc.slice(0, -2).concat(calc.slice(-1)));
  }

  console.log(calc.slice(-1), calc.slice(-2, -1));
  console.log(
    operators.includes(calc.slice(-1)) && operators.includes(calc.slice(-2, -1))
  );

  ////////////////////////////////////////////////////////////////////////////////////
  const clear = () => {
    setCalc("");
  };
  const backSpace = () => {
    if (calc === "") return;
    setCalc(calc.slice(0, -1));
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  /////////////////////////////////////////////////////////////////
  return (
    <div className="app">
      <div className="calculator">
        <div id="display" className="display">
          {calc || 0}
        </div>
        <div className="operators">
          <button name="/" id="divide" onClick={() => updateCalc("/")}>
            /
          </button>
          <button name="*" id="multiply" onClick={() => updateCalc("*")}>
            X
          </button>
          <button name="+" id="add" onClick={() => updateCalc("+")}>
            +
          </button>
          <button name="-" id="subtract" onClick={() => updateCalc("-")}>
            -
          </button>

          <button id="delete" onClick={backSpace}>
            DEL
          </button>
          <button id="clear" onClick={clear}>
            AC
          </button>
        </div>
        <div className="numbers">
          <button name="1" id="one" onClick={() => updateCalc("1")}>
            1
          </button>
          <button name="2" id="two" onClick={() => updateCalc("2")}>
            2
          </button>
          <button name="3" id="three" onClick={() => updateCalc("3")}>
            3
          </button>
          <button name="4" id="four" onClick={() => updateCalc("4")}>
            4
          </button>
          <button name="5" id="five" onClick={() => updateCalc("5")}>
            5
          </button>
          <button name="6" id="six" onClick={() => updateCalc("6")}>
            6
          </button>
          <button name="7" id="seven" onClick={() => updateCalc("7")}>
            7
          </button>
          <button name="8" id="eight" onClick={() => updateCalc("8")}>
            8
          </button>
          <button name="9" id="nine" onClick={() => updateCalc("9")}>
            9
          </button>
          <button
            name="0"
            id="zero"
            onClick={calc ? () => updateCalc("0") : clear}
          >
            0
          </button>
          <button name="." id="decimal" onClick={() => updateCalc(".")}>
            .
          </button>
          <button name="=" id="equals" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
