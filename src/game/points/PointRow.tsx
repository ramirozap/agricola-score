import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as quantitiesActions from '../quantities/quantitiesActions';
import { getTypePoints } from './pointSelectors';
import { QuantitiesKeys } from '../quantities/quantitiesTypes';
import { getQuantity, getPlayerQuantities } from '../gameSelectors';
import { RootState } from '../gameTypes';

interface Props {
	name: string;
	decrement: typeof quantitiesActions.decrement;
	increment: typeof quantitiesActions.increment;
	setQuantity: typeof quantitiesActions.setQuantity;
	pointType: QuantitiesKeys;
	pointsFunction: any;
	quantity: number;
}

const PointRow = ({
	name,
	decrement,
	increment,
	setQuantity,
	pointType,
	pointsFunction,
	quantity
}: Props) => {
	return (
		<>
			<div>{name}</div>
			<div>
				<button onClick={() => decrement(pointType, name)}>-</button>
			</div>
			<div>
				<input
					type="number"
					value={quantity}
					onChange={e =>
						setQuantity(pointType, parseInt(e.target.value) || 0, name)
					}
				/>
			</div>
			<div>
				<button onClick={() => increment(pointType, name)}>+</button>
			</div>
			<div>{pointsFunction}</div>
		</>
	);
};

const mapStateToProps = (
	state: RootState,
	props: { pointType: QuantitiesKeys; name: string }
) => {
	return {
		quantity: getQuantity(state, props.pointType, props.name),
		pointsFunction: getTypePoints(
			getPlayerQuantities(state, props.name),
			props.pointType
		)
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return bindActionCreators(quantitiesActions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PointRow);
