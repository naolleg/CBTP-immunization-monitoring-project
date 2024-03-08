const userquery={
    getUserByusername:'SELECT * FROM users WHERE username = ?;',
    getuserquery:'SELECT * FROM users',
    registeruser:'INSERT INTO users (firstname,lastname,username,email,role,password,createdDate,updatedDate) VALUES(?,?,?,?,?,?,?,?);'
}
module.exports=userquery