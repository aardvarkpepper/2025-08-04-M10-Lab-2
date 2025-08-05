import { useState } from 'react';

export const DebounceDemo = () => {
  const [debounceArguments, setDebounceArguments] = useState({ value: "", delay: 0 });
  const [data, setData] = useState("");

  const handleChange = (event: any) => {
    const {name, value} = event.target;
    setDebounceArguments(prev => {
      console.log('sDA invoked');
      return {...prev, [name]: value}
    })
  }
  // note:  React documentation indicates using 'action' property on form element, using async.
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // setData(JSON.stringify(formData.get('delay'))); - note:  just stringifying formData doesn't work.  Naturally, as properties cannot be safely stored directly; imagine if a property had the name 'get' for example; it would overwrite the method.

    // setState later.

  }
  return (
    <div>
      <h2>
        Debounce Demo
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='debounceValue'>Value to debounce:</label>
        <input type='text' id='debounceValue' name='value' value={debounceArguments.value} onChange={(event) => handleChange(event)}></input>
        <br />
        <label htmlFor='debounceDelay'>Delay (milliseconds):</label>
        <input type='number' id='debounceDelay' name='delay' value={debounceArguments.delay} onChange={(event) => handleChange(event)}></input>
        <br />
        <button type='submit'>Submit</button>
      </form>
      <div>
        {data}
      </div>

    </div>
  )
}