function parseDto(dto) {
  const matched = dto.matchedGroups ? dto.matchedGroups.map(parseGroup) : [];
  const potential = dto.nonExistentGroups
    ? dto.nonExistentGroups.map(parseGroup).map(g => {
        g.potential = true;
        return g;
      })
    : [];

  return [...matched, ...potential];
}

function parseGroup(groupDto) {
  return {
    id: (Math.random() * 100) | 0,
    peopleCount: groupDto.users === null ? 0 : groupDto.users.length,
    tag: groupDto.intersectionInterests.join(", "),
    peopleImages: [
      "https://www.fakepersongenerator.com/Face/male/male20171086013288269.jpg",
      "https://www.fakepersongenerator.com/Face/female/female1022939203919.jpg",
      "https://www.fakepersongenerator.com/Face/male/male108414886914.jpg"
    ]
  };
}

let groups_data;

export function getGroups() {
  return new Promise(res => {
    if (!groups_data) {
      const userId = sessionStorage.getItem("token");
      fetch(`http://localhost:8080/api/matcher/greg`, {
        credentials: "include"
      })
        .then(res => res.json())
        .then(groups => {
          const groupss = parseDto(groups);
          console.log(groupss);
          groups_data = groupss;
          res(groupss);
        });
    } else {
      res(groups_data);
    }
  });
}

export function getGroup(id) {
  return new Promise(res => {
    getGroups().then(groups => {
      console.log(groups);
      const group = groups.find(g => Number(g.id) === Number(id));
      res(group);
    });
  });
}
