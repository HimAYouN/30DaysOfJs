const url = "https://jsonplaceholder.typicode.com/users";

const fetchData = async () => {
  const res = await fetch(url);
  const data = await res.json();

  const objects = data.map((obj) => {
    return {
      name: obj.name,
      address: obj.address.city,
      email: obj.email,
      phone: obj.phone,
    };
  });

  return objects;
};

const displayObjects = async () => {
  const objects = await fetchData();

  objects.forEach((object, index) => {
    const divId = `usID${index + 1}`;
    displayObject(object, divId);
  });
};

function displayObject(object, divId) {
  const div = document.querySelector(`.${divId}`);
  div.innerHTML = `
    <h1>Name: ${object.name}</h1>
    <p>Address: ${object.address}</p>
    <p>Email: ${object.email}</p>
    <p>Phone: ${object.phone}</p>
  `;
}

displayObjects();
