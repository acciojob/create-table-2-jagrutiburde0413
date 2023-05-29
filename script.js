function createTable() {
  // Prompt for the number of rows
  const numRows = parseInt(prompt("Input number of rows"));

  // Prompt for the number of columns
  const numCols = parseInt(prompt("Input number of columns"));

  // Get the table element
  const table = document.getElementById('myTable');

  // Clear the existing table
  table.innerHTML = '';

  // Create the table rows and columns
  for (let i = 0; i < numRows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < numCols; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}

// Get the button element
const createBtn = document.getElementById('createBtn');

// Add click event listener to the button
createBtn.addEventListener('click', createTable);
