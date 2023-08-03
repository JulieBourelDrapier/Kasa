import Card from "../Card";
import accommodationInfo from '../../data/logements.json';
import { Link } from "react-router-dom";

function ListCards() {
  return (
      <section>
        {accommodationInfo.map((accommodation, index) => (
      <Link to={`/accommodation/${accommodation.id}`}>
        <Card 
        key={`${accommodation.id}`}
        id={accommodation.id}
        label={accommodation.title}
        cover={accommodation.cover}
        />
        </Link>
        ))}
      </section>
  )
}

export default ListCards