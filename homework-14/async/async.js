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

if (usersLocalData) {
  console.log("Данные есть");

  const users = JSON.parse(usersLocalData);

  renderUsers(users);
} else {
  console.log("Данных нет");

  document.getElementById("loading").textContent =
    "Данные загружаются";

  setTimeout(() => {
    fetch("users.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }

        return response.json();
      })
      .then((data) => {
        localStorage.setItem("users", JSON.stringify(data.users));

        document.getElementById("loading").textContent = "";

        renderUsers(data.users);
      })
      .catch((error) => {
        console.error(error);

        showError();
      });
  }, 2000);
}

const deleteAllButton = document.getElementById("delete-all");

deleteAllButton.addEventListener("click", () => {
  localStorage.setItem("users", JSON.stringify([]));

  document.querySelector(".container").innerHTML = "";
});

const getAllButton = document.getElementById("get-all");

getAllButton.addEventListener("click", () => {
  const usersLocalData = localStorage.getItem("users");

  if (usersLocalData) {
    const users = JSON.parse(usersLocalData);

    const cardsCount = document.querySelectorAll(".card").length;

    if (users.length === 0) {
      setTimeout(() => {
        fetch("users.json")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Ошибка при загрузке данных");
            }

            return response.json();
          })
          .then((data) => {
            localStorage.setItem("users", JSON.stringify(data.users));

            renderUsers(data.users);
          })
          .catch((error) => {
            console.error(error);

            showError();
          });
      }, 2000);
    } else if (cardsCount === users.length) {
      document.getElementById("loading").textContent =
        "Все пользователи уже отображены";
    } else {
      renderUsers(users);
    }
  } else {
    setTimeout(() => {
      fetch("users.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Ошибка при загрузке данных");
          }

          return response.json();
        })
        .then((data) => {
          localStorage.setItem(
            "users",
            JSON.stringify(data.users)
          );

          renderUsers(data.users);
        })
        .catch((error) => {
          console.error(error);

          showError();
        });
    }, 2000);
  }
});