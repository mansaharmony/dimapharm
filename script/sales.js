function addSale() {
    const item = document.getElementById('sale-item').value;
    const amount = document.getElementById('sale-amount').value;
    const table = document.getElementById('sales-list').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    row.insertCell(0).textContent = item;
    row.insertCell(1).textContent = amount;
    document.getElementById('sale-item').value = '';
    document.getElementById('sale-amount').value = '';
}
