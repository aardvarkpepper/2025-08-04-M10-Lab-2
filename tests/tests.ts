console.log(2 % 3);
console.log(3 % 3);
console.log(4 % 3);
console.log(5 % 3);
console.log(6 % 3);
console.log(7 % 3);

const bfalse = new Boolean(false);
const btrue = new Boolean(true);
const bf = bfalse.valueOf();
const bt = btrue.valueOf();

console.log("bfalse value", bf, "btrue value", bt); // false true
console.log(bfalse, btrue); // Boolean objects
console.log(Boolean(bfalse), Boolean(btrue)); // true true

//Below is Boolean implementation; switched to boolean instead.  Probably 'Boolean' was capitalized as being the first word in the sentence.
const currentPage = 3; // taking place of state
const canPrevPage = (): Boolean => {
  let booleanValue;
  if (currentPage > 1) {
    booleanValue = true;
  } else {
    booleanValue = false;
  }
  const booleanReturn = new Boolean(booleanValue);
  return booleanReturn;
};

/**
 * Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
 * . . .
 * Well really, the function uses setState.  It seems even where setState is not actually used, it's still referenced as an error occurs, even when only attempting setPage(0); that error being:
 * Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
 * 
 * So when writing these chaps, I've got to hook into a React Functional Component - that is, a .tsx, something that returns something that's uses something like JSX, that is, HTML-looking stuff that's not actually HTML but is what React uses to define HTML components; the .tsx returning that JSX, being called .tsx as it's 'typescript' not Javascript.
 *
 */
// console.log(usePagination(50, 10).setPage(0));
// console.log(usePagination(50, 10).setPage(1));
// console.log(usePagination(50, 10).setPage(6));