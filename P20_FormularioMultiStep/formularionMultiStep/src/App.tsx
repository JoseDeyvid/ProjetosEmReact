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
    console.log(user);
    setUser((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const stepsComponents = [
    <UserForm user={user} handleChangeUser={handleChangeUser} />,
    <ReviewForm />,
    <SendReview />,
  ];
  const [step, setStep] = useState(0);

  const handleChangeStep = (newStep: number, e?: FormEvent) => {
    console.log(newStep);
    if (e) e.preventDefault();
    if (newStep < 0 || newStep === stepsComponents.length) return;

    setStep(newStep);
  };
  return (
    <div>
      <h1>Deixe sua avaliação</h1>
      <p>
        Ficamos felizes com a sua compra. Utilize o formulário abaixo para
        avaliar o produto
      </p>
      <div className="content">
        <div className="steps">
          <PiUser />
          <CiStar />
          <FiSend />
        </div>
        <form onSubmit={(e) => handleChangeStep(step + 1, e)}>
          {stepsComponents[step]}
          <button type="button" onClick={() => handleChangeStep(step - 1)}>
            <RiArrowLeftWideFill />
            Voltar
          </button>
          <button type="submit">
            Avançar
            <RiArrowRightWideFill />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
