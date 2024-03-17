const vaccinequery={
    registervaccine:'INSERT INTO Vaccine(v_name,description) VALUES(?,?);',
    getvaccine: 'SELECT * FROM vaccine;',
    
}
module.exports=vaccinequery