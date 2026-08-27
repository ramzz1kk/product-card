const usersLocalData = localStorage.getItem("users");

function renderUsers(users) {
  const container = document.querySelector(".container");
  const template = document.getElementById("user-template");

  users.forEach((user) => {
    const card = template.content.cloneNode(true);

    card.querySelector(".name").textContent = user.name;
    card.querySelector(".surname").textContent = user.surname;
    card.querySelector(".email").textContent = user.email;
    card.querySelector(".age").textContent = user.age;

    const deleteButton = card.querySelector("button");

    deleteButton.addEventListener("click", () => {
      const newUsers = users.filter((item) => item.id !== user.id);

      localStorage.setItem("users", JSON.stringify(newUsers));

      container.innerHTML = "";

      renderUsers(newUsers);
    });

    container.append(card);
  });
}

function showError() {
  document.getElementById("loading").textContent =
    "Ошибка при загрузке данных";
}

async function getUsers() {
  try {
    document.getElementById("loading").textContent =
      "Данные загружаются";

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch("users.json");

    if (!response.ok) {
      throw new Error("Ошибка при загрузке данных");
    }

    const data = await response.json();

    localStorage.setItem("users", JSON.stringify(data.users));

    document.getElementById("loading").textContent = "";

    return data.users;
  } catch (error) {
    console.error(error);
    showError();

    return [];
  }
}

if (usersLocalData) {
  console.log("Данные есть");

  const users = JSON.parse(usersLocalData);

  renderUsers(users);
} else {
  console.log("Данных нет");

  getUsers().then((users) => {
    if (users.length > 0) {
      renderUsers(users);
    }
  });
}

const deleteAllButton = document.getElementById("delete-all");

deleteAllButton.addEventListener("click", () => {
  localStorage.setItem("users", JSON.stringify([]));

  document.querySelector(".container").innerHTML = "";
});

const getAllButton = document.getElementById("get-all");

getAllButton.addEventListener("click", async () => {
  const usersLocalData = localStorage.getItem("users");

  if (usersLocalData) {
    const users = JSON.parse(usersLocalData);

    const cardsCount = document.querySelectorAll(".card").length;

    if (users.length === 0) {
      const newUsers = await getUsers();

      if (newUsers.length > 0) {
        renderUsers(newUsers);
      }
    } else if (cardsCount === users.length) {
      document.getElementById("loading").textContent =
        "Все пользователи уже отображены";
    } else {
      renderUsers(users);
    }
  } else {
    const users = await getUsers();

    if (users.length > 0) {
      renderUsers(users);
    }
  }
});