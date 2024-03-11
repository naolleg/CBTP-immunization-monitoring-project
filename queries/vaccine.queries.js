const vaccinequery={
    registervaccine:'INSERT INTO Vaccine(v_Name,description) VALUES(?,?);',
    getvaccine: 'SELECT * FROM vaccine;',
}
module.exports=vaccinequery