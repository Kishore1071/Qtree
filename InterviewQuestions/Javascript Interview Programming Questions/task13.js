// Write a Javascript program to generate password of eight character

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let password = "";
let required_length = 8

for (let i = 0; i < required_length; i++) {

    let randomIndex = Math.floor(Math.random() * charset.length);
    password = password + charset[randomIndex];

}

console.log(password);