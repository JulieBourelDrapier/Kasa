import { useParams } from 'react-router-dom';
import accommodationInfo from '../../data/logements.json';
import Gallery from '../../components/gallery'
import StarRating from '../../components/starRating';
import Tag from '../../components/tag';
import Collapse from '../../components/collapse';
import Styled from 'styled-components';

const Section = Styled.section`
  display: flex;  
  flex-direction: column;
  `

const AccommodationHeader = Styled.header`
  display: flex;
  flex-direction: row;
`

const AccommodationTitle = Styled.h2`
  color: #FF6060; 
  font-size: 18px;
`

const AccommodationAdress = Styled.h3`
color: #FF6060; 
font-size: 14px;
`
const TagDiv = Styled.div`
  display: flex;
  gap: 10px;
  width: 80px;
  height: 18px;
`
const HostDiv = Styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 50px;
`
const DivWho = Styled.div`
display: flex;
flex-direction: column;
`
const DivRate = Styled.div`
`

const Avatar = Styled.img`
border-radius: 50%;
width: 32px;
height: 32px;
`
const HostName = Styled.h4`
  color: #FF6060;
  font-size: 12px;
`

function Accommodation() {
  const { accommodationId } = useParams();
  const accommodation = accommodationInfo.find((a) => a.id === accommodationId);

  return (
      <Section>
          <div>
            <Gallery imgSrc={accommodation.pictures} title={accommodation.title}/>
          </div>

        <AccommodationHeader>
          <article>
                <AccommodationTitle>{accommodation.title}</AccommodationTitle>
                <AccommodationAdress>{accommodation.location}</AccommodationAdress>
                <TagDiv>
                      {accommodation.tags.map((tag, index) => 
                      <Tag name={tag} key={`tag-${index}`}></Tag>
                      )}
                </TagDiv>
          </article>

          <article>
                  <HostDiv>
                    <DivWho>
                        <HostName>{accommodation.host.name}</HostName>
                        <Avatar src={accommodation.host.picture} alt="avatar de l'hôte" />
                    </DivWho>
                    <DivRate> 
                        <StarRating rating={accommodation.rating} />
                    </DivRate>
                  </HostDiv>
          </article>        
        </AccommodationHeader>
       
        
          
        <Collapse title="Description" content={accommodation.description} />
        <Collapse title="Équipement" content={accommodation.equipments.join('\n')} />
          </Section>
  )
}

export default Accommodation