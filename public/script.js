const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', (event) => {
  async function paint(data) {
    tbody.innerHTML = "";
    for(let i = 0; i < data.length; i++) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${data[i][0]}</td>
      <td>${data[i][1].first_name}</td>
      <td>${data[i][1].first_name}</td>
      `;
      tbody.appendChild();
    }
  }
  getresults(123);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();
  console.log('data from back', data);
  //printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
