const vaccinequery={
    registervaccine:'INSERT INTO Vaccine(v_name,description) VALUES(?,?);',
    getvaccine: 'SELECT * FROM Vaccine;',
    
}
module.exports=vaccinequery