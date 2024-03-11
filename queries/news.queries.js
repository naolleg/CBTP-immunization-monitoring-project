const newsquery={
    postnewsquery:'INSERT INTO Vaccine(v_Name,description) VALUES(?,?);',
    getnewsquery: 'SELECT * FROM vaccine;',
    
}
module.exports=newsquery