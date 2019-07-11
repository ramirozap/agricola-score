import React from 'react';
import { Link, match } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState, Players } from '../gameTypes';
import STATES from '../states.constants';
import * as quantitiesActions from '../quantities/quantitiesActions';
import {
	QuantitiesKeys,
	PlayersQuantities
} from '../quantities/quantitiesTypes';
import { bindActionCreators } from 'redux';
import PointRow from './PointRow';

interface Match extends match {
	params: { pointType: QuantitiesKeys };
}

interface Props {
	players: Players;
	match: Match;
	quantities: PlayersQuantities;
}

const PointSection = ({ players, match, quantities }: Props) => {
	const { pointType } = match.params;
	const { prevState, nextState, title } = STATES[pointType];
	const prevStateControls = prevState ? (
		<Link to={STATES[prevState].url}>
			<button type="button">{STATES[prevState].title}</button>
		</Link>
	) : null;
	const nextStateControls = nextState ? (
		<Link to={STATES[nextState].url}>
			<button type="button">{STATES[nextState].title}</button>
		</Link>
	) : null;
	return (
		<div>
			<h1>{title}</h1>
			<div className="grid">
				<div>Name</div>
				<div />
				<div>Total</div>
				<div />
				<div>Points</div>
				{players.allPlayers.map(playerId => (
					<PointRow
						key={playerId}
						name={players.playersById[playerId].name}
						pointType={pointType}
					/>
				))}
			</div>
			{prevStateControls}
			{nextStateControls}
		</div>
	);
};

const getPlayers = (state: RootState) => state.entities.players;

const mapStateToProps = (state: RootState) => {
	return {
		players: getPlayers(state)
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return bindActionCreators(quantitiesActions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PointSection);
