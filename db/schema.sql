CREATE DATABASE IF NOT EXISTS burgers_db ;
USE burgers_db;

CREATE TABLE burgers
( id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN default false,
    PRIMARY KEY (id)

)