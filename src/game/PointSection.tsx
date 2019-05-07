import React from 'react';
import { Link, match } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState, Players } from './gameTypes';
import STATES from './states.constants';
import { getTypePoints } from './quantities/pointSelectors';
import * as quantitiesActions from './quantities/quantitiesActions';
import {
  IncrementQuantityAction,
  DecrementQuantityAction,
  SetQuantityAction,
  QuantitiesKeys,
  PlayersQuantities
} from './quantities/quantitiesTypes';
import { bindActionCreators } from 'redux';
import { Color } from 'csstype';

interface Match extends match {
  params: { pointType: QuantitiesKeys };
}

type props = {
  players: Players;
  match: Match;
  quantities: PlayersQuantities;
  increment: (
    pointType: QuantitiesKeys,
    color: Color
  ) => IncrementQuantityAction;
  decrement: (
    pointType: QuantitiesKeys,
    color: Color
  ) => DecrementQuantityAction;
  setQuantity: (
    pointType: QuantitiesKeys,
    value: number,
    color: Color
  ) => SetQuantityAction;
};

const PointSection = ({
  players,
  match,
  increment,
  decrement,
  setQuantity,
  quantities
}: props) => {
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
        {players.allPlayers.map(playerId => {
          const { color, name } = players.playersById[playerId];
          return (
            <React.Fragment key={color}>
              <div>{name}</div>
              <div>
                <button onClick={() => decrement(pointType, name)}>-</button>
              </div>
              <div>
                <input
                  type="number"
                  value={quantities[name][pointType]}
                  onChange={e =>
                    setQuantity(pointType, parseInt(e.target.value) || 0, name)
                  }
                />
              </div>
              <div>
                <button onClick={() => increment(pointType, name)}>+</button>
              </div>
              <div>{getTypePoints(quantities[name], pointType)}</div>
            </React.Fragment>
          );
        })}
      </div>
      {prevStateControls}
      {nextStateControls}
    </div>
  );
};

const getPlayers = (state: RootState) => state.entities.players;

const mapStateToProps = (state: RootState) => {
  return {
    players: getPlayers(state),
    quantities: state.entities.quantities
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(quantitiesActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PointSection);
