import groups from "../mock/groups";

export function getGroups() {
  return new Promise(res => {
    res(groups);
  });
}

export function getGroup(id) {
  return new Promise(res => {
    getGroups().then(groups => {
      console.log(groups);
      console.log(id);
      const group = groups.find(g => Number(g.id) === Number(id));
      res(group);
    });
  });
}
