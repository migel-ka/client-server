const userList = document.querySelector("#userList"); //раздел для добавления списка
const ButtonUserUp = document.querySelector("#butttonUserUp"); //кнопка упорядочить по возрастанию ID
const ButtonUserDown = document.querySelector("#butttonUserDown"); //кнопка упорядочить по убыванию ID

let users = []; //массив для хранения пользователей

async function fetchUser() { //получение и отображение массива пользователей
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  users = await response.json();
  console.log('получение массива');
  renderUsers(users);
}

function renderUsers (userArray){
    userList.textContent = '';
    userArray.forEach(user => {
      const userHtml = 
         `<tr>
          <th scope="row">${user.id}</th>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td><a href="mailto:${user.email}">${user.email}</a></td>
          <td><a href= "tel:${user.phone}">${user.phone}</a></td>
          <td><a href="${user.website}">${user.website}</a></td>
          <td>${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</td>
          <td>
            <div class="card card-none" style="width: 18rem;">
              <img src="https://static-maps.yandex.ru/v1?ll=${user.address.geo.lat},${user.address.geo.lng}&size=200,100&z=10&pt=37.620070,55.753630,pmwtm1~37.64,55.76363,pmwtm99&apikey=84310c9b-ee2c-4c30-8d2f-3ec63d115580" class="card-img-top" alt="Расположение на карте">
              <div class="card-body">
                <p class="card-text">${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
              </div>
            </div>
          </td>
        </tr>`;
        userList.insertAdjacentHTML ('beforeend', userHtml);
        console.log('вывод массива');
    });
}

ButtonUserUp.addEventListener ("click", function() {
  const sortArryUsers = [...users].sort((a,b) => a.id - b.id);
  renderUsers(sortArryUsers);
  console.log('фильтр возрастание массива');
});

ButtonUserDown.addEventListener ("click", function() {
  const sortArryUsers = [...users].sort((a,b) => b.id - a.id);
  renderUsers(sortArryUsers);
  console.log('фильтр убывание массива');
});

fetchUser()