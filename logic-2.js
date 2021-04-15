function isFibo(input) {
  return (
    isPerfectSqrt(5 * input * input + 4) || isPerfectSqrt(5 * input * input - 4)
  );
}
function isPerfectSqrt(x) {
  let num = parseInt(Math.sqrt(x));
  return num * num === x;
}
console.log(isFibo(8));
