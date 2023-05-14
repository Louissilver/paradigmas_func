const db = require('../config');

const createUser = (name, projectId, callback) => {
    db.run(
        'INSERT INTO users (name, projectId) VALUES (?, ?)',
        [name, projectId],
        function (err) {
            if (err) {
                callback(err);
                return;
            }
            callback(null, this.lastID); // Retorna o ID do novo usuário criado
        }
    );
};

const getAllUsers = (callback) => {
    db.all('SELECT * FROM users', function (err, rows) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, rows);
    });
};

const getUserById = (id, callback) => {
    db.get('SELECT * FROM users WHERE id = ?', [id], function (err, row) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, row);
    });
};

const updateUser = (id, name, projectId, callback) => {
    db.run(
        'UPDATE users SET name = ?, projectId = ? WHERE id = ?',
        [name, projectId, id],
        function (err) {
            if (err) {
                callback(err);
                return;
            }
            callback(null);
        }
    );
};

const deleteUser = (id, callback) => {
    db.run('DELETE FROM users WHERE id = ?', [id], function (err) {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};
