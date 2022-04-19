/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { TextRow, RectShape } from 'react-placeholder/lib/placeholders'

import ButtonGoBack from '../components/common/ButtonGoBack';
import { StateContext } from '../contexts/useStateContext';
import { css } from 'styled-components';

export default function DetailsDrinkScreen(props) {
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  const listItem = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

  const params = useParams();
  const { state, onSearchDetail } = useContext(StateContext);

  const { detailsDrink, loadDrink } = state

  useEffect(() => {
    onSearchDetail(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ params.id ])
  
  useEffect(() => {
    if (detailsDrink?.strIngredient1) {
      let ingredientsList = [];
      listItem.forEach(item => {
        if (detailsDrink[`strIngredient${item}`]) {
          ingredientsList.push(detailsDrink[`strIngredient${item}`]);
        }
      });
      setIngredients(ingredientsList)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailsDrink])
  
  useEffect(() => {
    if (detailsDrink?.strMeasure1) {
      let measuresList = [];
      listItem.forEach(item => {
        if (detailsDrink[`strMeasure${item}`]) {
          measuresList.push(detailsDrink[`strMeasure${item}`])
        }
      });
      setMeasures(measuresList);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ detailsDrink ])

  return (
    <Section>
      <ButtonGoBack />
      <DivContain>
        <DivDetails>
          {!loadDrink && detailsDrink?.strDrink ? (
            <Span title>{detailsDrink.strDrink}</Span> 
          ) : (
            <TextRow color="#E0E0E0" style={{ width: 200, borderRadius: 10, margin: '20px 0' }} />
          ) }
          <Span primary>Ingredientes: </Span>
          {!loadDrink && ingredients.length > 0 ?
            ingredients.map(item => (
              <NavLink
                key={item}
                style={({ isActive }) => {
                  return {
                    display: "block",
                    textDecoration: 'none',
                    padding: ".5rem 1rem",
                    color: isActive ? "#2b2b2b" : "#8b8b8b",
                  };
                }}
                to={ `/ingredients/${item.replaceAll(" ", "_")}` }>
                <Span>{ item }</Span>
              </NavLink>
            ))
          : (
            <div>
              <TextRow color="#E0E0E0" style={{ width: 150, borderRadius: 10, margin: '10px 0' }} />  
              <TextRow color="#E0E0E0" style={{ width: 150, borderRadius: 10, margin: '10px 0' }} />  
            </div>
          )}
          <Span primary>Medidas: </Span>
          {!loadDrink && measures.length > 0 ?
            measures.map(item => <Span key={item}>{item}</Span>)
          : (
            <div>
              <TextRow color="#E0E0E0" style={{ width: 150, borderRadius: 10, margin: '10px 0' }} />  
              <TextRow color="#E0E0E0" style={{ width: 150, borderRadius: 10, margin: '10px 0' }} />  
            </div>
          )}
        </DivDetails>
        <DivImage>
          {!loadDrink && detailsDrink?.strDrinkThumb ? (
            <Img src={detailsDrink.strDrinkThumb} alt={detailsDrink.strDrink} />
          ) : (
            <RectShape color='#E0E0E0' style={{ width: '90%', height: 300, marginLeft: '5%', borderRadius: 10 }} />
          )}
        </DivImage>
        <DivInstru>
          <Span primary>Instrucciones: </Span>
          {!loadDrink && detailsDrink?.strInstructions ? (
            <Span>{detailsDrink.strInstructions}</Span>
          ) : (
            <TextRow color="#E0E0E0" style={{ width: 150, borderRadius: 10, margin: '10px 0' }} />  
          )}
        </DivInstru>
      </DivContain>
    </Section>
  )
}

const Section = styled.section`
  overflow: auto;
  padding: 20px 30px 0;
  height: calc(100vh - 30px);
  @media (max-width: 750px) {
    padding: 50px 30px 0;
    height: calc(100vh - 50px);
  }
`;

const DivContain = styled.div`
  padding: 10px 0;
  display: grid;
  overflow: auto;
  height: 80vh;
  grid-template-areas: "data image" "instru instru";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  @media (max-width: 520px) {
    grid-template-areas: "image" "data" "instru";
    grid-template-columns: 1fr;
  }
`

const DivDetails = styled.div`
  grid-area: data;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const DivImage = styled.div`
  grid-area: image;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const DivInstru = styled.div`
  grid-area: instru;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 90%;
  margin: 10px 5%;
  object-fit: contain;
  border-radius: 10px;
`;

const Span = styled.span`
  color: #6b6b6b;
  font-size: ${props => props.primary ? '16px' : '13px'};
  font-weight: ${props => props.primary ? '600' : '300'};
  margin: ${props => props.primary ? '20px 0' : '5px 20px'};
  ${props => props.title && css`
    color: #2b2b2b;
    font-weight: 600;
    font-size: 16px;
    margin: 20px 0;
  `}
`