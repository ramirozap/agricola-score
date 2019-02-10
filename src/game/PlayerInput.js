import React from "react";

import PlayerList from "./PlayerList";

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      selectedColor: "blue",
      colorList: ["blue", "red", "purple", "green", "white"]
    };
  }
  handleChange = event => {
    this.setState({ playerName: event.target.value });
  };
  selectColor = event => {
    this.setState({ selectedColor: event.target.value });
  };
  addPlayer = () => {
    this.props.addPlayer(this.state.playerName, this.state.selectedColor);
    this.setState({
      playerName: ""
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.playerName}
          onChange={this.handleChange}
        />
        <select
          name=""
          id="color-select"
          onChange={this.selectColor}
          disabled={this.state.colorList.length === 0}
        >
          {this.state.colorList.map((color, i) => {
            return (
              <option
                value={color}
                key={i}
                defaultValue={this.state.selectedColor === color}
              >
                {color}
              </option>
            );
          })}
        </select>
        <button
          onClick={this.addPlayer}
          type="button"
          disabled={this.props.players && this.props.players.length >= 5}
        >
          Add Player
        </button>
        <PlayerList players={this.props.players} />
      </div>
    );
  }
}

export default PlayerInput;
