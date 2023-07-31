import Card from "../../components/Card";
import accommodationInfo from '../../data/logements.json';

function accommodations() {
  return (
      <div>
        {accommodationInfo.map((accommodation, index) => (
        <Card 
        key={`${accommodation.id}`}
        label={accommodation.title}
        cover={accommodation.cover}
        />
        ))}
      </div>
  )
}

export default accommodations