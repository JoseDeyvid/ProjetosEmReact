import React from "react";

import { BsFillEmojiFrownFill } from "react-icons/bs";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { Review } from "../utils/Types";

type Props = {
  user: {
    comment: string;
    review: Review | null;
  };
  handleChangeUser: (key: string, value: string | Review) => void;
};

const ReviewForm = ({ user, handleChangeUser }: Props) => {
  return (
    <div>
      <div className="reviews">
        <label className="reviewOption">
          <input
            type="radio"
            value={Review.Unsatisfied}
            checked={user.review === Review.Unsatisfied}
            onChange={(e) => handleChangeUser("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Instatisfeito</p>
        </label>
        <label className="reviewOption">
          <input
            type="radio"
            value={Review.Normal}
            checked={user.review === Review.Normal}
            onChange={(e) => handleChangeUser("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Normal</p>
        </label>
        <label className="reviewOption">
          <input
            type="radio"
            value={Review.Satisfied}
            checked={user.review === Review.Satisfied}
            onChange={(e) => handleChangeUser("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="reviewOption">
          <input
            type="radio"
            value={Review.VerySatisfied}
            checked={user.review === Review.VerySatisfied}
            onChange={(e) => handleChangeUser("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="commentContainer">
        <label htmlFor="comment">Comentário: </label>
        <textarea
          name="comment"
          placeholder="Conte-nos como foi a sua experiência com o produto..."
          value={user.comment}
          onChange={(e) => handleChangeUser("comment", e.target.value)}
        />
      </div>
    </div>
  );
};

export default ReviewForm;
