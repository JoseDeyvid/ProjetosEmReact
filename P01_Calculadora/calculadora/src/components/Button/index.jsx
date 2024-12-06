import "./styles.css";
import PropTypes from "prop-types";

const Button = ({ value, handleClick }) => {
  return (
    <button className="button" onClick={handleClick}>
      {value}
    </button>
  );
};

Button.PropTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
