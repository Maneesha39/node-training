exports.login = (username, password) => {
    if ((username === "admin") && (password === "admin@123")) {
        console.log("A");
        return;
    }

    throw 'Invalid credentials';

}