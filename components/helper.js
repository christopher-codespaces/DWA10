import { State } from "./usestate.js";

/**

@typedef {Object} Increment - Represents an action to increment the count.
@prop {"INCREMENT_COUNT"} type - The action type.
@prop {State} payload - The state object.
*/
/**

@typedef {Object} Decrement - Represents an action to decrement the count.
@prop {"DECREMENT_COUNT"} type - The action type.
@prop {State} payload - The state object.
*/
/**

@typedef {Object} Reset - Represents an action to reset the count.
@prop {"RESET_COUNT"} type - The action type.
@prop {State} payload - The state object.
*/
/**

@typedef {Increment | Decrement | Reset} Action - Represents a union type of all possible actions.
*/
/**

Increments the count in the state.
@param {State} state - The state object.
@returns {Increment} - The increment action object.
*/
export const increment = () => {
State.value += 1;
return {
type: "INCREMENT_COUNT",
payload: State,
};
};
/**

Decrements the count in the state.
@param {State} state - The state object.
@returns {Decrement} - The decrement action object.
*/
export const decrement = () => {
State.value -= 1;
return {
type: "DECREMENT_COUNT",
payload: State,
};
};
/**

Resets the count in the state.
@param {State} state - The state object.
@returns {Reset} - The reset action object.
*/
export const reset = () => {
State.value = 0;
return {
type: "RESET_COUNT",
payload: State,
};
};
/**

Dispatches an action to the reducer.
@param {Action} action - The action object to dispatch.
@returns {State} - The updated state object.
*/
export const dispatch = (action) => {
return reducer(State, action);
};
/**

Reducer function to handle state updates based on actions.
@param {State} state - The current state object.
@param {Action} action - The action object.
@return {State} - The updated state object.
*/
const reducer = (state, action) => {
switch (action.type) {
case "INCREMENT_COUNT": {
// Perform increment logic here
state.value;
}
case "DECREMENT_COUNT": {
// Perform decrement logic here
state.value;
}
case "RESET_COUNT": {
// Perform reset logic here
state.value;
}
default:
return state;
}
};