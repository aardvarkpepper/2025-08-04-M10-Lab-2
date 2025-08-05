import { useState } from 'react';

export const DebounceDemo = () => {
  const [debounceArguments, setDebounceArguments] = useState({ value: "", delay: 500 });
  const [data, setData] = useState("");

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setDebounceArguments(prev => {
      console.log('sDA invoked');
      return { ...prev, [name]: value }
    })
  }

  // I initially planned to use a form as I'm rusty on forms.  But during implementation, I realized this particular implementation is unwieldy with a form.
  // If a user has to input text then press 'submit form', there's a delay.  The assignment specifies debounceValue should be rendered, and the assignment specifies a 0.5 second default delay.
  // In other words, it's faster to do a bunch of keypresses with a simple input field than entering text and pressing a submit button in a form, especially if the process is to be repeated.
  // So, no form.
  // <form onSubmit={handleSubmit}>
  // note:  React documentation indicates using 'action' property on form element, using async.
  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   // const formData = new FormData(event.target);
  //   // setData(JSON.stringify(formData.get('delay'))); - note:  just stringifying formData doesn't work.  Naturally, as properties cannot be safely stored directly; imagine if a property had the name 'get' for example; it would overwrite the method.

  //   // setState later.  
  // }

  return (
    <div>
      <h2>
        Debounce Demo
      </h2>
      <div>
        <label htmlFor='debounceValue'>Value to debounce:</label>
        <input type='text' id='debounceValue' name='value' value={debounceArguments.value} onChange={(event) => handleChange(event)}></input>
        <br />
        <label htmlFor='debounceDelay'>Delay (milliseconds):</label>
        <input type='number' id='debounceDelay' name='delay' value={debounceArguments.delay} onChange={(event) => handleChange(event)}></input>
      </div>

      <div>
        {data}
      </div>

    </div>
  )
}