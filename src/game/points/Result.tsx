import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../gameTypes';
import { getResults } from './pointSelectors';

const Result = ({ results }: any) => {
  return (
    <div>
      {results.map((result: any) => {
        return (
          <div key={result.playerName}>
            {result.playerName}: {result.total}
            <ul>
              {Object.keys(result.playerQuantities).map(quantity => {
                return (
                  <li key={result.playerQuantities}>
                    {quantity}: {result.playerQuantities[quantity]}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    results: getResults(state)
  };
};

export default connect(mapStateToProps)(Result);
