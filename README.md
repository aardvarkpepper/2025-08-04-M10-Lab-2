<p align="center">
<img src="image.png" alt="Joke about 'breaking' code, referencing Ivan Drago from Rocky IV." width="600"/>
</p>

## Notes

Instead of using console.log for debounceValue, I displayed to HTML.

'You can simulate an API call or filtering action whenever the debouncedValue changes by logging to the console (e.g., “Searching for: [debouncedValue]”).'

Looks like the example had a text input, when any character entered, there's a delay, then 'debounced value (after 500ms) updates.

There's a section with 'Simulated Search Sesults' that shows 'Type to see results' if text input is empty.  If not, displays a ul with three li's that has 'Result for "(textinput value)": Item 1', then for Item 2 and Item 3 respectively; that ul displaying / hidden after delay.  It's just conditional rendering on what's already in the assignment.

The example showed functionality not mentioned in the assignment.  The text 'Simulated Search Results' itself changes after a delay to 'Searching' on new text input if text input is not empty.  Then 'Searching' reverts to 'Simulated Search Results' and displays data as described above.  I expect in the useDebounce.ts, the anonymous function passed to useEffect is made async, await is performed on a setTimeout that changes a state (hence the delay), then the second setTimeout triggers (hence the second delay).


## Resources

https://www.typescriptlang.org/docs/handbook/2/generics.html#variance-annotations
https://www.typescriptlang.org/docs/handbook/interfaces.html
https://www.tutorialsteacher.com/typescript/typescript-boolean
https://www.tutorialspoint.com/typescript/typescript_boolean.htm
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#defining_methods
https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
https://react.dev/reference/react-dom/components/form

## Notes Part 2

React documentation indicates using 'action' property on form element that uses async.