const loginquery={
  getUserPasswordByUserId: 'SELECT * FROM password WHERE userId = ? ORDER BY createdDate DESC;',
  getUserByusername: 'SELECT * FROM users WHERE username = ?;',
  getUserRoleAndFirstName: 'SELECT role, firstname FROM users WHERE userId = ?',
};

module.exports=loginquery