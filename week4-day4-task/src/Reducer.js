import * as actions from "./ActionType";

// Central Storage of State
const initState = {
  arrOfObj: [
    { gender: "female", firstName: "Susan", lastName: "Jimenez", email: "susan.jimenez@example.com" },
    { gender: "male", firstName: "Samuel", lastName: "Moilanen", email: "samuel.moilanen@example.com" },
    { gender: "female", firstName: "Lucy", lastName: "Wright", email: "lucy.wright@example.com" },
    { gender: "male", firstName: "Pijke", lastName: "Hoogerwerf", email: "pijke.hoogerwerf@example.com" },
    { gender: "male", firstName: "Viljami", lastName: "Pulkkinen", email: "viljami.pulkkinen@example.com" }
  ]
}

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.UPD:
      let tempArrOfObj = state.arrOfObj.map(person => {
        if (person.firstName === "Pijke" && person.lastName === "Hoogerwerf") {
          return action.payload;
        } else if (person.firstName === "Luke" &&  person.lastName === "McCoy") {
          return { gender: "male", firstName: "Pijke", lastName: "Hoogerwerf", email: "pijke.hoogerwerf@example.com" };
        }
        return person;
      })
      return { ...state, arrOfObj: tempArrOfObj };
    default:
      return state;
  }
}

export default Reducer;