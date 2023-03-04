const shoppingList = []; // create an empty array to hold the list items

// function to add items to the list
function addItem(item) {
  shoppingList.push(item);
}

// function to remove items from the list
function removeItem(item) {
  const index = shoppingList.indexOf(item);
  if (index > -1) {
    shoppingList.splice(index, 1);
  }
}

// function to display the current list items
function displayList() {
  console.log("Shopping List:");
  for (let i = 0; i < shoppingList.length; i++) {
    console.log(`${i + 1}. ${shoppingList[i]}`);
  }
}

// example usage
addItem("apples");
addItem("bread");
addItem("milk");
displayList(); // Shopping List: 1. apples 2. bread 3. milk
removeItem("bread");
displayList(); // Shopping List: 1. apples 2. milk
