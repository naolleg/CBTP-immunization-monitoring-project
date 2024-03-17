const userquery={
    getRoleByUsername:'SELECT role FROM users WHERE username = ?;',
    getUserByusername:'SELECT * FROM users WHERE username = ?;',
    getuserquery:'SELECT * FROM users',
    registermother:'INSERT INTO mother (userid, date_of_birth, address, phonenumber) VALUES (?, ?, ?, ?);',
    registeruser :'INSERT INTO users (firstname, lastname, username, role, password, createdDate, status) VALUES (?, ?, ?, ?, ?, NOW(), 1);' , 
    deactivateUser:'UPDATE users SET status = 0 WHERE user_id = ?;',
    getmotherid:'SELECT mother_id FROM mother WHERE user_id = ?;'
}
module.exports=userquery