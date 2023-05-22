import axios from 'axios';
import { Dispatch } from 'redux';
import { GET } from './actionTypes';
import { ActionType, Card } from '../interface/interfaces';

export const getCard = () => async (dispatch: Dispatch<ActionType<Card[]>>) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
    dispatch({
      type: GET,
      payload: response.data,
    });
  } catch (err) {
    throw new Error('error getting cards');
  }
};
