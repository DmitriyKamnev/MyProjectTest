const mysql = require('mysql2/promise');

class database {
    constructor() {
        this.pool = null
    }


    async connect() {
        try {
            this.pool = mysql.createPool({
                host: 'localhost',
                user: 'root',          // Ваш пользователь MySQL
                password: '',          // Ваш пароль MySQL
                database: 'todo_app',
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0
            });

    console.log('✅ База данных подключена');
            return this.pool;
        } catch (error) {
            console.error('❌ Ошибка подключения к БД:', error);
            throw error;
        }
    }
    
     getPool() {
        if (!this.pool) {
            throw new Error('База данных не подключена');
        }
        return this.pool;
    }
}

module.exports = new Database();