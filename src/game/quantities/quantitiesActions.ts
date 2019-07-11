import {
	DecrementQuantityAction,
	IncrementQuantityAction,
	SetQuantityAction,
	QuantitiesKeys
} from './quantitiesTypes';

export function increment(
	key: QuantitiesKeys,
	playerName: string
): IncrementQuantityAction {
	return {
		type: 'INCREMENT_QUANTITY',
		payload: {
			key,
			playerName
		}
	};
}

export function decrement(
	key: QuantitiesKeys,
	playerName: string
): DecrementQuantityAction {
	return {
		type: 'DECREMENT_QUANTITY',
		payload: { key, playerName }
	};
}

export function setQuantity(
	key: QuantitiesKeys,
	newQuantity: number,
	playerName: string
): SetQuantityAction {
	return {
		type: 'SET_QUANTITY',
		payload: { key, newQuantity, playerName }
	};
}
