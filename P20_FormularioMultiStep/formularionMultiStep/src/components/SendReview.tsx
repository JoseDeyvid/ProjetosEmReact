import "./SendReview.css";
import { Review } from "../utils/Types";
import {
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
  BsFillEmojiHeartEyesFill,
} from "react-icons/bs";

type Props = {
  user: {
    name: string;
    review: Review | null;
    comment: string;
  };
};

const SendReview = ({ user }: Props) => {
  const getEmoji = (review: Review | null) => {
    switch (review) {
      case Review.Unsatisfied:
        return <BsFillEmojiFrownFill />;
      case Review.Normal:
        return <BsFillEmojiNeutralFill />;
      case Review.Satisfied:
        return <BsFillEmojiSmileFill />;
      case Review.VerySatisfied:
        return <BsFillEmojiHeartEyesFill />;
    }
  };

  return (
    <div className="sendReviewContainer">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom com
        10% de desconto para a sua próxima compra. Para concluir sua avaliação
        clique no botão de Enviar.
      </p>
      <div className="resume">
        <h3>Aqui está o resumo da sua avaliação {user.name}:</h3>
        <p>Satisfação com o produto: {getEmoji(user.review)}</p>
        <p>
          Comentário: <span>{user.comment}</span>
        </p>
      </div>
    </div>
  );
};

export default SendReview;
