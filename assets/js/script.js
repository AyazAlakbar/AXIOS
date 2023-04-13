
let data = {
  name: 'Ayaz',
  email: 'ayaz@example.com',
  username: 'Alakbarov',
  city: 'Baku',
  zipcode: 'az1000'
};


axios.post("https://jsonplaceholder.typicode.com/todos", data)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
