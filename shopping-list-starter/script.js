let shoppingListItems = [];

const addItem = () => {
    let inputElement = document.getElementById("new-item-text");
    let item = inputElement.value;

    shoppingListItems = [...shoppingListItems, item];
    updateItems();

    inputElement.value = "";
};

const updateItems = () => {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";

    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }
};

const clearList = () => {
    shoppingListItems = [];
    updateItems();
};