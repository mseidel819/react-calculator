import { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "+", "-"];
  const deci = ["."];

  ///////////////////////////////////////////////////////////////////////
  const updateCalc = (value) => {
    if (operators.includes(value) && calc === "") return;

    if (deci.includes(value) && calc === "") {
      setCalc(0 + value);
      return;
    }

    if (
      (operators.includes(value) && operators.includes(calc.slice(-1))) ||
      (deci.includes(value) && deci.includes(calc.slice(-1)))
    ) {
      const valup = calc.slice(0, -1);

      setCalc(valup + value);
      return;
    }
    // decimal toggler
    ////////////////////////////////////////////////////////////////
    let deciClicked = false;

    if (calc.lastIndexOf(".") > calc.lastIndexOf("/")) {
      deciClicked = true;
    }

    if (calc.lastIndexOf(".") > calc.lastIndexOf("*")) {
      deciClicked = true;
    }
    if (calc.lastIndexOf(".") > calc.lastIndexOf("+")) {
      deciClicked = true;
    }
    if (calc.lastIndexOf(".") > calc.lastIndexOf("-")) {
      deciClicked = true;
    }

    // if (deci.includes(value)) deciClicked = true;
    if (operators.includes(value)) deciClicked = false;
    console.log(calc.lastIndexOf("."), calc.lastIndexOf("/"));
    console.log(deciClicked);
    ///////////////////////////////////////////////////////////////////////
    if (deci.includes(value) && deciClicked === true) {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
      // console.log(typeof (calc + value));
    }
  };

  ////////////////////////////////////////////////////////////////////

  const numsButt = () => {
    const digits = [];
    const ids = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          id={ids[i - 1]}
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clear = () => {
    setCalc("");
  };

  return (
    <div className="app">
      <div className="calculator">
        <div id="display" className="display">
          {calc || 0}
        </div>
        <div className="operators">
          <button id="divide" onClick={() => updateCalc("/")}>
            /
          </button>
          <button id="multiply" onClick={() => updateCalc("*")}>
            X
          </button>
          <button id="add" onClick={() => updateCalc("+")}>
            +
          </button>
          <button id="subtract" onClick={() => updateCalc("-")}>
            -
          </button>

          <button onClick={deleteLast}>DEL</button>
          <button id="clear" onClick={clear}>
            AC
          </button>
        </div>
        <div className="numbers">
          {numsButt()}
          <button id="zero" onClick={calc ? () => updateCalc("0") : clear}>
            0
          </button>
          <button id="decimal" onClick={() => updateCalc(".")}>
            .
          </button>

          <button id="equals" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
