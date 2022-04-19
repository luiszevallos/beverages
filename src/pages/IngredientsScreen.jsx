import React, { useEffect, useContext } from 'react';
import { TextRow } from 'react-placeholder/lib/placeholders'
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';

import ButtonGoBack from '../components/common/ButtonGoBack';
import { StateContext } from '../contexts/useStateContext';

export default function IngredientsScreen() {

  const { onSearchIngredient, state } = useContext(StateContext)
  const params = useParams();

  const { detailIngredient, loadIngredient } = state;

  useEffect(() => {
    if (params.ingredient) {
      onSearchIngredient(params.ingredient)
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ params.id ])

  return (
    <Section>
      <ButtonGoBack />
      <DivContain>
        <Span primary>Ingrediente: </Span>
        {!loadIngredient || detailIngredient?.strIngredient ? (
          <Span title>{detailIngredient?.strIngredient || ""}</Span>
        ) : ( 
          <TextRow color="#E0E0E0" style={{ width: 150, borderRadius: 10, margin: '10px 10px' }} />  
        )}
      </DivContain>
      <DivContain>
        <Span primary>Tipo: </Span>
        {!loadIngredient || detailIngredient?.strType ? (
          <Span title>{detailIngredient?.strType || ""}</Span>
        ) : ( 
          <TextRow color="#E0E0E0" style={{ width: 150, borderRadius: 10, margin: '10px 10px' }} />  
        )}
      </DivContain>
      <DivContain>
        <Span primary>Volumen de acohol: </Span>
        {!loadIngredient || detailIngredient?.strABV ? (
          <Span title>{detailIngredient?.strABV || ""}</Span>
        ) : ( 
          <TextRow color="#E0E0E0" style={{ width: 150, borderRadius: 10, margin: '10px 10px' }} />  
        )}
      </DivContain>
      <DivContain>
        <Span primary>Acoholico: </Span>
        {!loadIngredient || detailIngredient?.strAlcohol ? (
          <Span title>{detailIngredient?.strAlcohol || ""}</Span>
        ) : ( 
          <TextRow color="#E0E0E0" style={{ width: 150, borderRadius: 10, margin: '10px 10px' }} />  
        )}
      </DivContain>
      <DivContain column>
        <Span primary>Descripcion: </Span>
        {!loadIngredient || detailIngredient?.strDescription ? (
          <Span title>{detailIngredient?.strDescription || ""}</Span>
        ) : ( 
          <TextRow color="#E0E0E0" style={{ width: 150, borderRadius: 10, margin: '0px 0px' }} />  
        )}
      </DivContain>
    </Section>
  )
}

const Section = styled.section`
  padding: 20px 30px;
  @media (max-width: 750px) {
    padding: 50px 30px 0;
    height: calc(100vh - 50px);
  }
`;

const DivContain = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
`

const Span = styled.span`
  color: #3b3b3b;
  font-size: ${props => props.primary ? '16px' : '13px'};
  font-weight: ${props => props.primary ? '600' : '300'};
  margin: ${props => props.primary ? '10px 10px' : '5px 20px'};
  ${props => props.title && css`
    color: #5b5b5b;
    font-weight: 600;
    font-size: 16px;
    margin: 10px 0;
  `}
`
