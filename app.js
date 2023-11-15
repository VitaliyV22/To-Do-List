const ItemsContainer = document.getElementById("items");
const ItemTemplate = document.getElementById("itemTemplate");
const addButton = document.getElementById("add");

let items = getItems();

function getItems() {
  const value = localStorage.getItem("todo") || "[]";

  return JSON.parse(value);
}

function setItems(items) {
  const itemsJson = JSON.stringify(items);

  localStorage.setItem("todo", itemsJson);
}


