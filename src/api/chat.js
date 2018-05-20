export function sendMessage(message, user, groupId) {
  return new Promise(res => {
    mockChats[groupId].push({ message, name: user.name, pic: user.photoUrl });
    res("ok");
  });
}

const mockChats = {
  0: [
    {
      name: "Bob",
      pic:
        "https://www.fakepersongenerator.com/Face/male/male1084293951446.jpg",
      message: "Hello"
    },
    {
      name: "Julia",
      pic:
        "https://www.fakepersongenerator.com/Face/female/female1022939203919.jpg",
      message: "Hi!"
    }
  ],
  1: [
    {
      name: "Mike",
      pic:
        "https://www.fakepersongenerator.com/Face/male/male20171086013288269.jpg",
      message: "Who wants to go conference next week?"
    }
  ],
  2: [
    {
      name: "Michael",
      pic:
        "https://www.fakepersongenerator.com/Face/male/male1084293951446.jpg",
      message: "hi"
    }
  ]
};

export function getAllMessages(groupId) {
  return new Promise(res => {
    res(mockChats[groupId]);
  });
}
