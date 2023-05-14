const db = require('../config');

const createTask = (title, projectId, userId, status, callback) => {
    db.run(
        'INSERT INTO tasks (title, projectId, userId, status) VALUES (?, ?, ?, ?)',
        [title, projectId, userId, status],
        function (err) {
            if (err) {
                callback(err);
                return;
            }
            callback(null, this.lastID); // Retorna o ID da nova tarefa criada
        }
    );
};

const getAllTasks = (callback) => {
    db.all('SELECT * FROM tasks', function (err, rows) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, rows);
    });
};

const getTaskById = (id, callback) => {
    db.get('SELECT * FROM tasks WHERE id = ?', [id], function (err, row) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, row);
    });
};

const updateTask = (id, title, projectId, userId, status, callback) => {
    db.run(
        'UPDATE tasks SET title = ?, projectId = ?, userId = ?, status = ? WHERE id = ?',
        [title, projectId, userId, status, id],
        function (err) {
            if (err) {
                callback(err);
                return;
            }
            callback(null);
        }
    );
};

const deleteTask = (id, callback) => {
    db.run('DELETE FROM tasks WHERE id = ?', [id], function (err) {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
};
