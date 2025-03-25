// src/utils/debounce.ts
const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;   // Holds reference to the timeout object

  // Return a debounced function
  return function (...args: any[]) {
    // Clear the existing timer if another event happens before the delay
    clearTimeout(timer);

    // Set a new timer to call the function after the specified delay
    timer = setTimeout(() => func.apply(null, args), delay);
  };
};

export default debounce;