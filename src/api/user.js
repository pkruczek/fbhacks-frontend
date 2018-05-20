let me_data;

export function me() {
  return new Promise(res => {
    if (!me_data) {
      me_data = {
        name: sessionStorage.getItem("name"),
        photoUrl:
          "https://www.fakepersongenerator.com/Face/male/male1084293951446.jpg"
      };
    }
    res(me_data);
  });
}

export function login(login, password) {
  return fetch("http://localhost:8080/api/login", {
    method: "POST",
    body: JSON.stringify({ username: login, password }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
