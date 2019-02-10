import { addPlayer, removePlayer } from "./gameActions";

describe("Test Game Actions", () => {
  it("should create an action to add a player to the current game", () => {
    const playerName = "ramirozap";
    const color = "blue";
    const expectedAction = {
      type: "ADD_PLAYER",
      playerName,
      color
    };
    expect(addPlayer(playerName, color)).toEqual(expectedAction);
  });
  it("should create an action to remove a player", () => {
    const playerName = "ramirozap";
    const expectedAction = {
      type: "REMOVE_PLAYER",
      playerName
    };
    expect(removePlayer(playerName)).toEqual(expectedAction);
  });
});
