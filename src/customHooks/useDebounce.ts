/**
 * useDebounce Hook
Objective: Create a hook to debounce a rapidly changing value.

Functionality:

Inputs:
value: The value to debounce (e.g., a search string from an input field).
delay: The debounce delay in milliseconds (default to 500ms).
Return Value:
debouncedValue: The value after the debounce delay has passed without value changing.
Implementation Details:

Use useState to store the debouncedValue.
Use useEffect to set up a timer (setTimeout) whenever the input value or delay changes.
The effect should clear the timer (using clearTimeout) if value or delay changes before the timer fires (this is the core of debouncing).
When the timer finally fires, update the debouncedValue state.
Example Usage Component (DebounceSearchDemo.tsx):

Create a component with an input field.
As the user types into the input, use the useDebounce hook to get the debounced version of the input’s value.
Display both the current input value and the debounced value.
You can simulate an API call or filtering action whenever the debouncedValue changes by logging to the console (e.g., “Searching for: [debouncedValue]”).

 */
import { useEffect, useState } from 'react';

const useDebounce = (value: any, delay: number) => {

}