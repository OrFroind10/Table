const body = document.querySelector('body');
let endpoint = `https://appleseed-wa.herokuapp.com/api/users/`;
const apple = new Participants();

async function createTable(){
  
  const table = document.createElement('table');
  body.appendChild(table);    
  
  let src1 = await getAPI(endpoint);
  
  for(let i=0; i<src1.length ;i++){
    let src2 = await getAPI(endpoint+`${src1[i].id}`);
    apple.addPerson(src1[i],src2)
  }
  createHead()
  for (let index = 0; index < apple.list.length; index++) {
    insertToRow(apple.list[index])
  }
  
}
function createHead(){
  let table = document.querySelector('table');
  table.innerHTML += `
  <tr>
    <th>ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Capsule</th>
    <th>Age</th>
    <th>City</th>
    <th>Gender</th>
    <th>Hobby</th>
    <th>Buttons</th>
  </tr>
  `;
}
function insertToRow(person){
  let table = document.querySelector('table');
  table.innerHTML += `
  <tr>
    <td>${person.id}</td>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>${person.capsule}</td>
    <td>${person.age}</td>
    <td>${person.city}</td>
    <td>${person.gender}</td>
    <td>${person.hobby}</td>
    <button>edit</button>
    <button>confirm</button>
  </tr>
  `;
}

async function getAPI(endpoint){
  try{
    const promise = await fetch(endpoint);
    return await promise.json();
  }catch(err){
    console.log(err);
  }
}
