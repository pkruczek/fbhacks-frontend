import groups from "../mock/groups";

export function getGroups() {
  return new Promise(res => {
    res(groups);
  });
}
