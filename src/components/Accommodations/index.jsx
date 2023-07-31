import Card from "../../components/Card";
import accommodationsInfo from '../../data/logements.json';

function accommodations() {
  return (
      <div>
        {accommodationsInfo.map((accommodation, index) => (
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