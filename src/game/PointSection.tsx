import React from 'react';
import { Link, match } from 'react-router-dom';
import { connect } from 'react-redux';
import { Player, GameState } from './gameTypes';
import states from './states.constants';
import { getTypePoints } from './quantities/pointSelectors';
import * as quantityActions from './quantities/quantitiesActions';
import {
  IncrementQuantityAction,
  DecrementQuantityAction,
  SetQuantityAction,
  QuantitiesKeys
} from './quantities/quantitiesTypes';
import { bindActionCreators } from 'redux';
import { Color } from 'csstype';

interface Match extends match {
  params: { pointType: QuantitiesKeys };
}

type props = {
  players: Player[];
  match: Match;
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
  setQuantity
}: props) => {
  const { pointType } = match.params;
  const { prevState, nextState, title } = states[pointType];
  const prevStateControls = prevState ? (
    <Link to={states[prevState].url}>
      <button type="button">{states[prevState].title}</button>
    </Link>
  ) : null;
  const nextStateControls = nextState ? (
    <Link to={states[nextState].url}>
      <button type="button">{states[nextState].title}</button>
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
        {players.map((player: Player) => {
          const { color, name } = player;
          return (
            <React.Fragment key={color}>
              <div>{name}</div>
              <div>
                <button onClick={() => decrement(pointType, color)}>-</button>
              </div>
              <div>
                <input
                  type="number"
                  value={player.quantities[pointType]}
                  onChange={e =>
                    setQuantity(pointType, parseInt(e.target.value) || 0, color)
                  }
                />
              </div>
              <div>
                <button onClick={() => increment(pointType, color)}>+</button>
              </div>
              <div>{getTypePoints(player.quantities, pointType)}</div>
            </React.Fragment>
          );
        })}
        {prevStateControls}
        {nextStateControls}
      </div>
    </div>
  );
};

const getPlayers = (state: GameState) => state.players;

const mapStateToProps = (state: GameState) => {
  return {
    players: getPlayers(state)
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(quantityActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PointSection);
