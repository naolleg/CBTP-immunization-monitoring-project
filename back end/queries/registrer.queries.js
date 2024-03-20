const registrerQuery={
    registermother:'INSERT INTO mother (userid, date_of_birth, address, phonenumber) VALUES (?, ?, ?, ?);',
    registermotherAsuser :"INSERT INTO users (firstname, lastname, username, role, password, createdDate, status) VALUES (?, ?, ?,'mother' , ?, NOW(), 1);" , 
    registerchild:"INSERT INTO child (mother_id, firstname, middlename, lastname, gender, date_of_birth, blood_type) VALUES (?, ?, ?, ?, ?, ?, ?);",
    getallmother:"SELECT * from users where role = 'mother';"
}
module.exports=registrerQuery