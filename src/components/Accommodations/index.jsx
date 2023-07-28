import Card from "../../components/Card";
import accommodationsInfo from '../../data/logements.json';

// const accommodationsInfo = [	
// { 
//   name:	"Le rêve",
//   title:	"Appartement cosy",
// },
// { 	
//   name:	"Cocoon sympa",
//   title:	"Magnifique appartement",
// }
// ]

function accommodations() {
  return (
      <div>
        <h2>Locations</h2>
        {accommodationsInfo.map((accommodation, index) => (
        <Card 
        key={`${accommodation.id}`}
        label={accommodation.title}
        title={accommodation.description}
        />
        ))}
      </div>
  )
}

export default accommodations