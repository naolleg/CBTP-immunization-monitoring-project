const userquery={
    getUserByusername:'SELECT * FROM users WHERE username = ?;',
    getuserquery:'SELECT * FROM users',
    registeruser:'INSERT INTO users (firstname,lastname,username,email,role,password,createdDate,updatedDate) VALUES(?,?,?,?,?,?,?,?);',
    registermother:'INSERT INTO users (user_id,date_of_birth,address,phone_number) VALUES(?,?,?,?);',
}
module.exports=userquery