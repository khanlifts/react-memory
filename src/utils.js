console.log('utils.js is running');

const square = (x) => x * x;

// export { square };

const subtract = (a, b) => a - b;

export {square, subtract}

export default (a) => {
  if (a >= 18) {
    console.log('You are an adult');
  }
}
