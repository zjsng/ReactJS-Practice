import * as actions from "./ActionType";

// Central Storage of State
const initState = {
  scores: [
    { playerName: "Messi", playerScore: "5" },
    { playerName: "Lionel", playerScore: "7"},
  ]
}

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_SCORE:
      console.log("Adding score...");
      return { ...state, scores: [...state.scores, action.payload] };
    case actions.DEL_SCORE:
      console.log("Deleting score...");
      const tempScoresArray = state.scores.filter(entry => {
        console.log(`State Player Name: "${entry.playerName}" | Payload: "${action.payload}"`)
        return entry.playerName !== action.payload;
      });
      console.log(tempScoresArray);
      return { ...state, scores: tempScoresArray};
    default:
      return state;
  }
}

export default Reducer;