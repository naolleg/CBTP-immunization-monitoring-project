const registrerQuery={
    registermother:'INSERT INTO mother (userid, date_of_birth, address, phonenumber) VALUES (?, ?, ?, ?);',
    registermotherAsuser :"INSERT INTO users (firstname, lastname, username,password, role, createdDate, status) VALUES (?, ?, ?, ? ,'mother' , NOW(), 1);" , 
    registerchild:"INSERT INTO Child (firstname, middlename, lastname, gender, date_of_birth, blood_type) VALUES (?, ?, ?, ?, ?, ?);",
    getallmother:"SELECT * from users where role = 'mother';",
    getchildrenbymotherId:"SELECT * from Child where mother_id = ?;"
}
module.exports=registrerQuery
