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
  margin: 70px;
  `

const AccommodationHeader = Styled.header`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const AccommodationTitle = Styled.h2`
  color: #FF6060; 
  font-size: 18px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`

const AccommodationAdress = Styled.h3`
color: #FF6060; 
font-size: 14px;
margin: 0;

@media (min-width: 768px) {
  font-size: 18px;
}
`

const DivTag = Styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`

const HostDiv = Styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`
const DivWho = Styled.div`
display: flex;
gap: 10px;
padding-left: 100px;
order: 1;

`

const Avatar = Styled.img`
border-radius: 50%;
width: 32px;
height: 32px;
padding-top: 13px;
`
const HostName = Styled.h4`
  color: #FF6060;
  font-size: 12px;
  width: 40px;
`

const DivStar = Styled.div`
display: flex;
order: 2;

@media (min-width: 768px) {
  order: 3;
  padding-left: 65px;
}
`

const Description = Styled.section`

@media (min-width: 768px) {
  
display: flex;
flex-direction: row;
gap: 50px;
}
`
function Accommodation() {
  const { accommodationId } = useParams();
  const accommodation = accommodationInfo.find((a) => a.id === accommodationId);

  return (
      <Section>

        <article>
              <Gallery imgSrc={accommodation.pictures} title={accommodation.title}/>
        </article>

        <AccommodationHeader>
         
          <section>
                <AccommodationTitle>{accommodation.title}</AccommodationTitle>
                <AccommodationAdress>{accommodation.location}</AccommodationAdress>
             <DivTag>
                {accommodation.tags.map((tag, index) => 
                <Tag name={tag} key={`tag-${index}`}></Tag>
                )}  
              </DivTag>
          </section>

          <section>
             <HostDiv>
              <DivStar>
                <StarRating rating={accommodation.rating} />
              </DivStar>
                <DivWho>
                    <HostName>{accommodation.host.name}</HostName>
                    <Avatar src={accommodation.host.picture} alt="avatar de l'hôte" />
                </DivWho>
              </HostDiv>
          </section>        
        </AccommodationHeader>

          <Description>
                  <Collapse title="Description" content={accommodation.description} />
                  <Collapse title="Équipement" content={accommodation.equipments.join('\n')} />
          </Description>

          </Section>
  )
}

export default Accommodation