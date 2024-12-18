import { FormEvent, useState } from "react";
import "./App.css";
import ReviewForm from "./components/ReviewForm";
import SendReview from "./components/SendReview";
import UserForm from "./components/UserForm";
import { Review, User } from "./utils/Types";

import { PiUser } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

function App() {
  const [user, setUser] = useState<User>({
    comment: "",
    email: "",
    name: "",
    review: null,
  });

  const handleChangeUser = (key: string, value: string | Review) => {
    setUser((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const stepsComponents = [
    <UserForm user={user} handleChangeUser={handleChangeUser} />,
    <ReviewForm user={user} handleChangeUser={handleChangeUser} />,
    <SendReview user={user} />,
  ];
  const [step, setStep] = useState(0);

  const handleChangeStep = (newStep: number, e?: FormEvent) => {
    if (e) e.preventDefault();
    if (newStep < 0 || newStep === stepsComponents.length) return;

    setStep(newStep);
  };
  return (
    <div className="container">
      <h1>Deixe sua avaliação</h1>
      <p>
        Ficamos felizes com a sua compra. Utilize o formulário abaixo para
        avaliar o produto
      </p>
      <div className="content">
        <div className="steps">
          <div className="step">
            <PiUser className="stepCompleted test" />
            <p>Identificação</p>
          </div>

          <div className="step">
            <CiStar className={step >= 1 ? "stepCompleted" : ""} />
            <p>Avaliação</p>
          </div>
          <div className="step">
            <FiSend className={step === 2 ? "stepCompleted" : ""} />
            <p>Envio</p>
          </div>
        </div>
        <form onSubmit={(e) => handleChangeStep(step + 1, e)}>
          <div className="component">{stepsComponents[step]}</div>
          <div className="actions">
            <button
              type="button"
              onClick={() => handleChangeStep(step - 1)}
              disabled={step === 0}
            >
              <RiArrowLeftWideFill />
              Voltar
            </button>
            {step === stepsComponents.length - 1 ? (
              <button type="submit">
                Enviar
                <FiSend />
              </button>
            ) : (
              <button type="submit">
                Avançar
                <RiArrowRightWideFill />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
