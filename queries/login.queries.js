const loginquery={
  getUserPasswordByUserId: 'SELECT * FROM password WHERE user_id = ? ORDER BY createdDate DESC;',
  getUserByusername: 'SELECT * FROM users WHERE username = ?;',
  getUserRoleAndFirstName: 'SELECT role, firstname FROM users WHERE user_id = ?',
  getUserStatus: 'SELECT status FROM users WHERE user_id = ?'
};

module.exports=loginquery