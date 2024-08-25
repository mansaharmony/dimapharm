function addItem() {
    const name = document.getElementById('item-name').value;
    const quantity = document.getElementById('item-quantity').value;
    const price = document.getElementById('item-price').value;
    const table = document.getElementById('inventory-list').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = quantity;
    row.insertCell(2).textContent = price;
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
    document.getElementById('item-price').value = '';
}
