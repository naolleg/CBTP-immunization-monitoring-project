const childquery={
    getchildbyid:'SELECT * FROM child WHERE child_id = ?;',
    getchildbymother:'SELECT child_id FROM child WHERE motherId = ? ORDER BY child_id DESC LIMIT 1;',
   getchildlastvaccination: 'SELECT creationDate FROM vaccination WHERE child_id = ? ORDER BY creationDate DESC LIMIT 1;',

}
module.exports=childquery