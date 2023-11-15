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

function addItem() {
    items.unshift({
      description: "",
      completed: false
    });
  
    setItems(items);
    refreshList();
  }
  
  
  
  function refreshList() {
    ItemsContainer.innerHTML = "";
  
    for (const item of items) {
      const itemElement = ItemTemplate.content.cloneNode(true);
      const descriptionInput = itemElement.querySelector(".item-description");
      const completedInput = itemElement.querySelector(".item-completed");
  
      descriptionInput.value = item.description;
      completedInput.checked = item.completed;
  
      ItemsContainer.append(itemElement);
    }
  }
  
  
  
  addButton.addEventListener("click", () => {
      addItem()
  })
  
