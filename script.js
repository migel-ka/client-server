const userList = document.querySelector("#accordionFlushExample");

async function getUser (){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let user = await response.json();

    let key;

    for (key in user) {
        const userHtml = `
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            ${user[key].name} (${user[key].username})
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">${user[key].email} ${user[key].phone} ${user[key].website}</div>
          </div>
        </div>`;
       userList.insertAdjacentHTML ('beforeend', userHtml);  
        console.log(user [key]);
    }
}

getUser()


