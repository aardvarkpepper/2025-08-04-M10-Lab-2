import { useState } from 'react';
import { useDebounce } from '../../customHooks/useDebounce';

export const DebounceDemo = () => {
  const [debounceArguments, setDebounceArguments] = useState({ value: "", delay: 500 });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setDebounceArguments(prev => {
      console.log('sDA invoked');
      return { ...prev, [name]: value }
    })
  }

/**
 * useDebounce Hook

Example Usage Component (DebounceSearchDemo.tsx):

Create a component with an input field.
As the user types into the input, use the useDebounce hook to get the debounced version of the input’s value.
Display both the current input value and the debounced value.
You can simulate an API call or filtering action whenever the debouncedValue changes by logging to the console (e.g., “Searching for: [debouncedValue]”).

 */

  return (
    <div>

      <h2>
        Debounce Demo
      </h2>
      <div>
        <div>Current debounced data: {useDebounce(debounceArguments.value, debounceArguments.delay)}</div>
        <label htmlFor='debounceValue'>Value to debounce:</label>
        <input type='text' id='debounceValue' name='value' value={debounceArguments.value} onChange={(event) => handleChange(event)}></input>
        <br />
        <label htmlFor='debounceDelay'>Delay (milliseconds):</label>
        <input type='number' id='debounceDelay' name='delay' value={debounceArguments.delay} onChange={(event) => handleChange(event)}></input>
      </div>

    </div>
  )
}