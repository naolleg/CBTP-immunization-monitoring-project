const profilequery={
    
    getUserProfile:"SELECT JSON_OBJECT('username',username, 'firstname', firstname, 'lastname', lastname, 'role', role,'phone_number',phone_number) AS json_data FROM users WHERE userId = ?",
}
module.exports=profilequery