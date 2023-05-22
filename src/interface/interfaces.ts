import { UPDATE_DATA, GET } from '../store/actionTypes';

export interface ActionType<T> {
  type: string;
  payload: T;
}
export interface rootState {
  reducerCard: {
    cards: Card[];
  }
}
export interface Card {
  key: number;
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  count: number;
  size: {
    width: number;
    height: number;
  },
  weight: string,
  comments: Comment[];
}

export interface EditableCellProps<T> {
  editing: boolean;
  dataIndex: number | string;
  title: string;
  inputType: 'text' | 'number';
  record: T;
  index: number;
  children: React.ReactNode;
}
export interface Comment {
  id: number;
  productId: number;
  description: string;
  date: string;
}

export interface GetCardAction {
  type: string;
  payload: Card[] | [];
}

export interface CardsInterface {
  cards: Card[] | []
}

export type actionsTypes = updateActionType | getActionType;

export type updateActionType = {
  type: typeof UPDATE_DATA,
  payload: Card[],
}

export type getActionType = {
  type: typeof GET,
  payload: Card[],
}

export type CardAction = GetCardAction;
