const newsquery={
    postnewsquery:'INSERT INTO News(title,description,publication_date) VALUES(?,?,now());',
    getnewsquery: 'SELECT * FROM News ORDER BY publication_date DESC;',
    
}
module.exports=newsquery