
// Scenario 1 
const initialArray: number[] = [1, 2, 3, 4, 5];

initialArray.push(6, 7);
console.log(`After push: ${initialArray}`);

const poppedElement = initialArray.pop();
console.log(`After pop: ${initialArray}, Popped Element: ${poppedElement}`);

const shiftedElement = initialArray.shift();
console.log(`After shift: ${initialArray}, Shifted Element: ${shiftedElement}`);

initialArray.unshift(-1, 0);
console.log(`After unshift: ${initialArray}`);

const removedItems = initialArray.splice(2, 2); 
console.log(`Removed Items: ${removedItems}, After splice: ${initialArray}`);

const subArray = initialArray.slice(1, 4); // Creates a subarray from index 1 to 3
console.log(`Subarray: ${subArray}, Original Array remains: ${initialArray}`);