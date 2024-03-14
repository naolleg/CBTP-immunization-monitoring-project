const childquery={
    getchildbyid:'SELECT * FROM child WHERE child_id = ?;',
    getchildbymother:'SELECT * FROM child WHERE motherId = ?;',
   getchildlastvaccination: 'SELECT creationDate FROM vaccination WHERE child_id = ? ORDER BY creationDate DESC LIMIT 1;',

}
module.exports=childquery