const generator = require('generate-password');
const md5 = require('md5');
module.exports = function newUser(username, password){
    let salt = generator.generate({
        length: 10,
        numbers: true,
        symbols:true,
        lowercase:true,
        uppercase:true
    });

    let newPass=password+salt;
    const hashPass=md5(newPass);
    console.log(username);
    console.log(hashPass);
    return {
        username: username,
        password: hashPass,
        salt: salt,
    }
}