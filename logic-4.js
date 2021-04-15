function linkAja(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 3 === 0 && element % 7 === 0) {
      console.log("Link Aja Bro");
    } else if (element % 7 === 0) {
      console.log("Aja");
    } else if (element % 3 === 0) {
      console.log("Link");
    } else {
      console.log(element);
    }
  }
}
const input = [23, 2, 45, 98, 27, 4, 28, 8, 30, 70, 16, 15, 21, 14, 42];
linkAja(input);
