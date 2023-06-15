//@ts-check
/**

@typedef {Object} State - Represents the state object.
@prop {number} value - The current value in the state.
*/
/**
 * @typedef {Object} IncrementAction - Represents an action to increment the count.
 * @prop {"INCREMENT_COUNT"} type - The action type.
 */

/**
 * @typedef {Object} DecrementAction - Represents an action to decrement the count.
 * @prop {"DECREMENT_COUNT"} type - The action type.
 */

/**
 * @typedef {Object} ResetAction - Represents an action to reset the count.
 * @prop {"RESET_COUNT"} type - The action type.
 */

/**
 * @typedef {IncrementAction | DecrementAction | ResetAction} Action - Represents a union type of all possible actions.
 */

export const State = {
    value: 0,
    };
    /**

    Retrieves the current state.
    @callback getState
    @returns {State} - The current state object.
    */
    /**

    Returns the current value in the state.
    @return {number} - The current value.
    */
    export const getState = () => {
    return State.value;
    };
    /**

    Increases the value in the state by 1.
    @returns {void}
    */
    export const increment = () => {
    State.value += 1;
    };
    /**

    Decreases the value in the state by 1.
    @returns {void}
    */
    export const decrement = () => {
    State.value -= 1;
    };
    /**

    Resets the value in the state to 0.
    @returns {void}
    */
    export const reset = () => {
    State.value = 0;
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