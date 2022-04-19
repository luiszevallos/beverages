/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import getSearchIngredient from '../apis/getSearchIngredient';
import getSearchBeverages from '../apis/getSearchBeverages';
import getDrinkDetails from '../apis/getDrinkDetails';

const STATE_INITIAL = {
  searchValue: '',
  load: false,
  loadIngredient: false,
  loadDrink: false,
  listDrink: [],
  detailsDrink: undefined,
  detailIngredient: undefined,
};

const StateContext = createContext(STATE_INITIAL);

function StateProvider(props) {
  const [state, setState] = useState(STATE_INITIAL);

  const { children } = props;

  const onChange = (searchValue) => setState({ ...state, searchValue })

  const onSearchListDrink = async () => {
    try {
      setState({...state, load: true})
      const {data} = await getSearchBeverages(state.searchValue);
      setState({
        ...state,
        load: false,
        listDrink: data.drinks
      })
    } catch (error) {
      console.error(error.message)
    }
  }

  const onSearchDetail = async (id) => {
    try {
      setState({...state, detailsDrink: undefined, loadDrink: true })
      const { data } = await getDrinkDetails(id);
      setState({
        ...state,
        loadDrink: false,
        detailsDrink: data.drinks[0]
      })
    } catch (error) {
      console.error(error.message)
    }
  }

  const onSearchIngredient = async (ingredient) => {
    try {
      setState({...state, detailIngredient: undefined, loadIngredient: true})
      const { data } = await getSearchIngredient(ingredient);
      setState({
        ...state,
        loadIngredient: false,
        detailIngredient: data.ingredients[0]
      })
    } catch (error) {
      console.error(error.message)
    }
  }
  
  return (
    <StateContext.Provider
      value={ {
        state,
        onChange,
        onSearchDetail,
        onSearchListDrink,
        onSearchIngredient,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export { StateProvider, StateContext };
