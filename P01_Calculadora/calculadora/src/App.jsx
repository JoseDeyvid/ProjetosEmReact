import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [equation, setEquation] = useState("0");
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operations = ["+", "-", "*", "/"];

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  const [shouldUpdateEquation, setShouldUpdateEquation] = useState(false);

  useEffect(() => {
    setFirstNumber(String(result));
  }, [result]);

  useEffect(() => {
    if (firstNumber !== "") {
      setEquation((prevState) => prevState + " = " + result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldUpdateEquation]);

  const insertNumberOnEquation = (n) => {
    if (equation === "0") {
      setFirstNumber(n);
      setEquation(n);
    } else if (secondNumber === "" && operation === "") {
      setFirstNumber((prevState) => prevState + n);
      setEquation((prevState) => prevState + n);
    } else {
      setSecondNumber((prevState) => prevState + n);
      setEquation((prevState) => prevState + n);
    }
  };

  const insertOperationOnEquation = (op) => {
    if (firstNumber === "") {
      return;
    }

    if (operation === "") {
      setOperation(op);
      setEquation(() => firstNumber + " " + op + " ");
    } else if (secondNumber === "") {
      setOperation(op);
      setEquation((prevEquation) => {
        let equationArray = prevEquation.split(" ");
        equationArray[equationArray.length - 2] = op;
        console.log(equationArray[equationArray.length - 2]);
        return equationArray.join(" ");
      });
    } else {
      calcResult(operation, firstNumber, secondNumber);
      setOperation(op);
      setSecondNumber("");
      setEquation((prevEquation) => prevEquation + " " + op + " ");
    }
  };

  const calcResult = (operation, first, second) => {
    switch (operation) {
      case "+":
        setResult(Number(first) + Number(second));
        break;
      case "-":
        setResult(Number(first) - Number(second));
        break;
      case "*":
        setResult(Number(first) * Number(second));
        break;
      case "/":
        setResult(Number(first) / Number(second));
        break;

      default:
        break;
    }
  };

  const handleClickEqualsSign = () => {
    if (equation.includes("=")) {
      return;
    }
    calcResult(operation, firstNumber, secondNumber);
    setSecondNumber("");
    setShouldUpdateEquation((prevState) => !prevState);
    setOperation("");
  };

  const clearEquation = () => {
    if (equation !== `${result}`) {
      setEquation(`${result}`);
      setFirstNumber(result);
      setSecondNumber("");
      setOperation("");
    } else {
      setEquation("0");
      setFirstNumber("");
      setSecondNumber("");
      setOperation("");
      setResult(0);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <input type="text" value={result} className="input-result" disabled />
        <div className="input-equation">
          {/* <input type="text" value={equation} disabled /> */}
          <p>{equation}</p>
        </div>
        <div className="calc-keyboard">
          <Button value={"AC"} handleClick={clearEquation} />
          {numbers.map((number) => (
            <Button
              key={number}
              value={number}
              handleClick={() => insertNumberOnEquation(number)}
            />
          ))}
          {operations.map((operation) => (
            <Button
              key={operation}
              value={operation}
              handleClick={() => insertOperationOnEquation(operation)}
            />
          ))}
          <Button value={"="} handleClick={() => handleClickEqualsSign()} />
        </div>
      </div>
    </div>
  );
}

export default App;
