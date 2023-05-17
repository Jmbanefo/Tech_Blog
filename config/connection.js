const Sequelize = require('sequalize'); 
require('dotenv').config(); 

let sequalize; 

    if(process.env.JAWSB_URL) { 
        sequalize = new Sequelize(process.env.JAWSDB_URL); 
    } else { 
        sequalize = new Sequelize( 
            process.env.DB_NAME, 
            process.env.DB_USER, 
            process.env.DB_PASSWORD, 

            { 
                host: '127.0.0.1',
                diakect: "mysql",
                port:3306
            }   
        );
    }

    module.exports = sequalize; 