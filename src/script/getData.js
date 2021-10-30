const currentUrl = `https://jsonplaceholder.typicode.com/users`;
const displayData = document.querySelector('#displayData');
const dataList = document.createElement('ul');

fetch(currentUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const elemId = data[i].id;
      const elemUserName = data[i].username;
      dataList.innerHTML += `<li>${elemId}. ${elemUserName}</li>`;
      dataList.classList = 'text-xl text-purple-400';
    }

    displayData.append(dataList);
  });
