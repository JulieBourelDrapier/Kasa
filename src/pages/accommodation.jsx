import { useParams, useNavigate } from 'react-router-dom';
import accommodationInfo from '../data/logements.json';
import getAccommodation from '../components/card';
import Gallery from '../components/gallery'
import StarRating from '../components/starRating';
import Tag from '../components/tag';
import Collapse from '../components/collapse';
import Styled from 'styled-components';
import { useEffect } from 'react';

const Section = Styled.section`
  display: flex;  
  flex-direction: column;
  margin: 20px;
  @media (min-width: 768px) {
    margin: 70px;
  }
  `

const AccommodationHeader = Styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

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
    font-size: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 36px;
  }
`

const AccommodationAdress = Styled.h3`
color: #FF6060; 
font-size: 14px;
margin: 0;

@media (min-width: 768px) {
  font-size: 16px;
}

@media (min-width: 1200px) {
  font-size: 18px;
}
`

const DivTag = Styled.div`
margin-top: 15px;
display: flex;
flex-direction: row;
gap: 10px;
flex-wrap: wrap;
`

const HostDiv = Styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: column;
    margin-top: -27px;
  }
`
const DivWho = Styled.div`
display: flex;
padding-top: 10px;
order: 1;

@media (min-width: 768px) {
    justify-content: flex-end;
}

@media (min-width: 1200px) {
  gap: 17px;
  padding-top: 20px;
  order: 2;
}
`

const Avatar = Styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-top: 15px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

@media (min-width: 1200px) {
  width: 60px;
  height: 60px; 
}
`
const HostName = Styled.h4`
  color: #FF6060;
  font-size: 12px;
  width: 55px;

  @media (min-width: 768px) {
    font-size: 13px;
    width: 56px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    width: 80px;
  }
`

const DivStar = Styled.div`
display: flex;
padding-top: 30px;

@media (min-width: 768px) {
  order: 2;
}
@media (min-width: 1200px) {
  order: 3;
  padding-top: 0;
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
  const navigate = useNavigate();
  const accommodation = accommodationInfo.find((a) => a.id === accommodationId);

  useEffect(() => {
    const fetchedAccommodation = {accommodationId};
    if (!fetchedAccommodation) {
      navigate('*');
    }
  }, [accommodationId, navigate]);


  return (
      <Section>
              <Gallery imgSrc={accommodation.pictures} title={accommodation.title}/>
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