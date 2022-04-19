import React from 'react';
import styled from 'styled-components';

export default function InputSearch(props) {
  const { value, onChange, onClick } = props;

  const handleChange = ({ target }) => onChange(target.value);

  return (
    <Form onSubmit={onClick}>
      <Input
        onChange={handleChange}
        value={value}
        placeholder="Buscar Bedida"
        type="search"
      />
      <Button onClick={onClick}>
        Buscar
      </Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    padding-left: 50px;
  }
  @media (max-width: 450px) {
    width: calc(100% - 60px);
  }
`

const Input = styled.input`
  box-shadow: 10px 5px 11px #d4d4d4;
  border: 1px solid #eeeeee;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 7px 20px;
  max-width: 320px;
  width: 90%;
  margin: 10px;
  outline: 0;
  @media (max-width: 450px) {
    margin: 10px 5px;
    width: 85%;
  }
  `

const Button = styled.button`
  box-shadow: 10px 5px 11px #d4d4d4;
  border: 1px solid #eeeeee;
  background-color: #eeeeee;
  border-radius: 5px;
  padding: 7px 10px;
  border: 0;
`