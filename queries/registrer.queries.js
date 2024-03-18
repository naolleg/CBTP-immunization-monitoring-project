const registrerQuery={
    registermother:'INSERT INTO mother (userid, date_of_birth, address, phonenumber) VALUES (?, ?, ?, ?);',
    registermotherAsuser :"INSERT INTO users (firstname, lastname, username, role, password, createdDate, status) VALUES (?, ?, ?,'mother' , ?, NOW(), 1);" , 
    registerchild:

}
module.exports=registrerQuery