import Styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Button = Styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  height: 18px;
  padding-top: 20px; 
`;


function StarRating({rating}) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <Button
            type="button"
            key={index}
            className={index <= (parseInt(rating) || 0) ? "on" : "off"}
          >
            <FontAwesomeIcon icon={faStar} className="star" />
          </Button>
        );
      })}
    </div>
  )
}

export default StarRating;