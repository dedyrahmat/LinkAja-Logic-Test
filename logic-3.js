function groupWord(array) {
  const result = [];
  const mapArray = array.map((value) => [...value].sort().join(""));
  const unique = [...new Set(mapArray)];
  unique.forEach((word) => {
    const filtered = array.filter((v) => word === [...v].sort().join(""));

    result.push(filtered.sort());
  });
  return result;
}
const words = ["katak", "takak", "kasur", "rusak", "surak", "foo", "bar"];
console.log(groupWord(words));
