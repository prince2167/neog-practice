// https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => userData(data))
  .catch((error) => console.log(`Error found : ${error}`));

function userData(data) {
  data.map((item) => {
    console.log(`Name : ${item.name}`);
    console.log(`Email : ${item.email}`);
  });
}


