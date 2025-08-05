// import { useState, useEffect } from 'react';

// export const useLocalStorage = (key: string, initialValue?: string): [string, () => void] => {
//   const [storedValue, setStoredValue] = useState<string>("");

//   useEffect(() => {
//     let localStorageItems = localStorage.getItem(key);
//     if (!localStorageItems) {
//       localStorageItems = initialValue ? initialValue : "";
//     } else {
//       localStorageItems = JSON.parse(localStorageItems);
//       if (!localStorageItems) {
//         localStorageItems = initialValue ? initialValue : "";
//       }
//     }
//   }, []);

//   // function(){}

//   return [storedValue, setStoredValue];
// }

// /**
//  * Activity 2: useLocalStorage Hook
// Task: Create a custom Hook named useLocalStorage that allows a component to synchronize a piece of state with the browser’s localStorage.

// Requirements:

// The Hook should accept two arguments: key (string, for the localStorage key) and initialValue (the initial value if nothing is in localStorage for that key).
// It should return an array similar to useState: [storedValue, setStoredValue].

// When the Hook is first used:
// It should try to retrieve the value from localStorage using the provided key.
// If a value exists in localStorage, it should be parsed (assume JSON) and used as the initial state.
// If no value exists or if parsing fails, initialValue should be used.

// The setStoredValue function should:
// Update the state in the component.
// Update the value in localStorage (serializing it to JSON).
// Consider how this Hook would behave if used by multiple components with the same key (optional, for advanced thought).
// Provide an example component that uses useLocalStorage to store and retrieve a user’s preference (e.g., a theme name or a simple counter).
//  */