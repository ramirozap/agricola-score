import React from 'react'

import PlayerList from './PlayerList'

class PlayerInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playerName: '',
      colorList: [
        {
          name: 'blue',
          used: false
        },
        {
          name: 'red',
          used: false
        },
        {
          name: 'purple',
          used: false
        },
        {
          name: 'green',
          used: false
        },
        {
          name: 'white',
          used: false
        }
      ]
    };

    this.addPlayer = this.addPlayer.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({playerName: event.target.value});
  }
  addPlayer(){
    this.props.addPlayer(this.state.playerName, 'blue')
    this.setState({playerName: ''});
  }
  render(){
    return (
      <div>
        <input type="text" value={this.state.playerName} onChange={this.handleChange} />
        <select name="" id="">
          {
            this.state.colorList.map((color, i) => {
              if (!color.used) {
                return <option value="color" key={i} defaultValue={i === 0}>{color.name}</option>
              }
            })
          }
        </select>
        <button onClick={this.addPlayer} type="button">Add Player</button>
        <PlayerList players={this.props.players}/>
      </div>
    )
  }
}

export default PlayerInput
