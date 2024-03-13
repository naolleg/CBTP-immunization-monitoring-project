const userquery={
    getRoleByUsername:'SELECT role FROM users WHERE username = ?;',
    getUserByusername:'SELECT * FROM users WHERE username = ?;',
    getuserquery:'SELECT * FROM users',
    registeruser:'INSERT INTO users (firstname,lastname,username,email,role,password,createdDate,status) VALUES(?,?,?,?,?,?,NOW(),1);',
    registermother:'INSERT INTO users (user_id,date_of_birth,address,phone_number) VALUES(?,?,?,?);',
    deactivateUser:'UPDATE users SET status = 0 WHERE userId = ?;',
}
module.exports=userquery