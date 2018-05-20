import groups from "../mock/groups";
/*
  {
    id: 1,
    name: "some name",
    peopleCount: 23,
    tag: "Metallica, Van Halen",
    peopleImages: [
      "https://www.fakepersongenerator.com/Face/male/male20171086013288269.jpg",
      "https://www.fakepersongenerator.com/Face/female/female1022939203919.jpg",
      "https://www.fakepersongenerator.com/Face/male/male108414886914.jpg"
    ]
  },
  */

function parseDto(dto) {
  const matched = dto.matchedGroups.map(parseGroup);
  const potential = dto.nonExistentGroups
    .map(parseGroup)
    .map(g => ((g.potential = true), g));

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

export function getGroups() {
  return new Promise(res => {
    fetch("http://localhost:8080/api/matcher/greg")
      .then(res => res.json())
      .then(groups => res(parseDto(groups)));
  });
}

export function getGroup(id) {
  return new Promise(res => {
    getGroups().then(groups => {
      const group = groups.find(g => Number(g.id) === Number(id));
      res(group);
    });
  });
}
