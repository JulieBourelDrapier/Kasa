import Styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StyledFontAwesomeIcon = Styled(FontAwesomeIcon)`
  color: rgba(227, 227, 227, 1);
  &.on {
    color:#FF6060
  }
`;
function StarRating({rating}) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <StyledFontAwesomeIcon  icon={faStar} className={`star ${index <= (parseInt(rating) || 0) ? 'on' : 'off'}`} />
        );
      })}
    </div>
  )
}

export default StarRating;