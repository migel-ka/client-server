const userList = document.querySelector("#userList"); //раздел для добавления списка
const ButtonUserUp = document.querySelector("#butttonUserUp"); //кнопка упорядочить по возрастанию ID
const ButtonUserDown = document.querySelector("#butttonUserDown"); //кнопка упорядочить по убыванию ID

let users =[]; //массив для хранения пользователей


//получение и отображение массива пользователей
async function fetchUser() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  users = await response.json();
  renderUsers(users);
}

function renderUsers (userArray){
    userList.textContent = '';
    userArray.forEach(user => {
      const userHtml = `
         <tr>
          <th scope="row">${user[key].id}</th>
          <td>${user[key].name}</td>
          <td>${user[key].username}</td>
          <td><a href="mailto:${user[key].email}">${user[key].email}</a></td>
          <td><a href= "tel:${user[key].phone}">${user[key].phone}</a></td>
          <td><a href="${user[key].website}">${user[key].website}</a></td>
          <td>${user[key].company.name}, ${user[key].company.catchPhrase}, ${user[key].company.bs}</td>
          <td>
            <div class="card" style="width: 18rem;">
              <img src="https://static-maps.yandex.ru/v1?ll=${user[key].address.geo.lat},${user[key].address.geo.lng}&size=200,100&z=10&pt=37.620070,55.753630,pmwtm1~37.64,55.76363,pmwtm99&apikey=84310c9b-ee2c-4c30-8d2f-3ec63d115580" class="card-img-top" alt="Расположение на карте">
              <div class="card-body">
                <p class="card-text">${user[key].address.street}, ${user[key].address.suite}, ${user[key].address.city}, ${user[key].address.zipcode}</p>
              </div>
            </div>
          </td>
        </tr>`;
        userList.insertAdjacentHTML ('afterend', userHtml);
    });
}



ButtonUserUp.addEventListener ("click", function() {
  const sortArryUsers = [...users].sort((a,b) => a.id - b.id);
  renderUsers(sortArryUsers);
});

ButtonUserDown.addEventListener ("click", function() {
  const sortArryUsers = [...users].sort((a,b) => b.id - a.id);
  renderUsers(sortArryUsers);;
});

document.addEventListener('DOMContentLoaded', getUserUp);