import React, { useContext } from 'react'
import { StateContext } from '../../contexts/useStateContext';
import Flastlit from './FlatList';
import InputSearch from './InputSearch';

export default function SectionList() {

  const { state, onChange, onSearchListDrink } = useContext(StateContext);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    onSearchListDrink()
  }

  return (
    <section>
      <InputSearch
        onChange={onChange}
        onClick={handleSearch}
        value={state.searchValue}
      />
      <Flastlit
        rows={state.listDrink}
        load={state.load}
      />
    </section>
  )
}
