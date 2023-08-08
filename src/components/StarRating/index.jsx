import Styled from "styled-components";

const Button = Styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
&.on {
  color: #000;
}
&.off {
  color: #ccc;
}
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
            <span className="star">&#9733;</span>
          </Button>
        );
      })}
    </div>
  )
}

export default StarRating;