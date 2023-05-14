const db = require('./config');

// Criação da tabela "tasks"
db.run(
    `
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            projectId INTEGER,
            userId INTEGER,
            status TEXT
        )
`,
    (error) => {
        if (error) {
            console.error('Erro ao criar a tabela "tasks":', error);
        } else {
            console.log('Tabela criada com sucesso');
        }
    }
);

// Criação da tabela "users"
db.run(
    `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            projectId INTEGER
        )
`,
    (error) => {
        if (error) {
            console.error('Erro ao criar a tabela "users":', error);
        } else {
            console.log('Tabela criada com sucesso');
        }
    }
);

// Criação da tabela "projects"
db.run(
    `
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT
        )
`,
    (error) => {
        if (error) {
            console.error('Erro ao criar a tabela "projects":', error);
        } else {
            console.log('Tabela criada com sucesso');
        }
    }
);
