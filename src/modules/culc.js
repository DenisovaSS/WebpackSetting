const mult = (a, b) => a + b;
function myName(name) {
  const point = document.querySelector('p');
  const namePeople = document.createElement('div');
  namePeople.innerText = `Hello ${name}`;
  point.append(namePeople);
}
export { myName, mult };
