import user from "../mock/profile";

let me_data;

export function me() {
  return new Promise(res => {
    if (!me_data) {
      //fetch data
      me_data = user;
    }
    res(user);
  });
}
