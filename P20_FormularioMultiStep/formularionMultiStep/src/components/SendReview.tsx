import React from "react";
import { Review } from "../utils/Types";

type Props = {
  user: {
    name: string;
    review: Review | null;
    comment: string;
  };
};

const SendReview = ({ user }: Props) => {
  return (
    <div>
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom com
        10% de desconto para a sua próxima compra. Para concluir sua avaliação
        clique no botão de Enviar.
      </p>
      <h3>Aqui está o resumo da sua avaliação {user.name}</h3>
      <p>Satisfação com o produto: {user.review}</p>
      <p>
        Comentário: <span>{user.comment}</span>
      </p>
    </div>
  );
};

export default SendReview;
