import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ButtonGoBack() {

  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)}>
      <ArrowBackIosIcon sx={{ color: '#6b6b6b' }} />
      <Span>Regresar</Span>
    </Button>
  )
}

const Button = styled.button`
  background-color: transparent;
  align-items: center;
  padding: 10px 5px;
  cursor: pointer;
  display: flex;
  border: 0;
`;

const Span = styled.span`
  padding-left: 5px;
  color: #6b6b6b;
`;
