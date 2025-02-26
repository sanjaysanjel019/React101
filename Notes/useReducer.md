It is similar to useState.

useReducer() is a hook that is similar to useState, but it is designed for more complex state objects or state transitions that involves
multiple sub-values. It allows you to manage state in a funtional, immutable way.

##Basics of useReducer()

`const [state, dispatch] = useReducer(reducer, initialState);`


state: The current state value
dispatch: A function to send actions to the reducer
reducer: A function that takes the current state and an action, then returns the new state
initialState: The starting state value