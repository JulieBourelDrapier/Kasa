import Card from "../../components/Card"; 

const accommodationsInfo = [	
{ 
  name:	"Le rêve",
  title:	"Appartement cosy",
},
{ 	
  name:	"Cocoon sympa",
  title:	"Magnifique appartement",
}
]

function accommodations() {
  return (
      <div>
        <h2>Locations</h2>
        {accommodationsInfo.map((accommodation, index) => (
        <Card 
        key={`${accommodation.name}-${index}`}
        label={accommodation.title}
        title={accommodation.name}
        />
        ))}
      </div>
  )
}

export default accommodations