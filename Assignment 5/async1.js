function getUser(id, callback) {
  setTimeout(() => {
    const user = { id: id, name: "Ram" };
    callback(user);
  }, 2000);
}

// Calling the function
getUser(1, function (user) {
  console.log("User name:", user.name);
});
