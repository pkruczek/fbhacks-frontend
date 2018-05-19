export function sendMessage(message, user, groupId) {
  return new Promise(res => {
    mockChat.push({ message, name: user.name, pic: user.photoUrl });
    res("ok");
  });
}

const mockChat = [
  {
    name: "Some name",
    pic: "https://www.fakepersongenerator.com/Face/male/male1084293951446.jpg",
    message: "Hello"
  }
];

export function getAllMessages(groupId) {
  return new Promise(res => {
    res(mockChat);
  });
}
