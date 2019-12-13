CREATE DATABASE IF NOT EXISTS oq7lu99c273iylwa;
USE oq7lu99c273iylwa;

CREATE TABLE burgers
( id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN default false,
    PRIMARY KEY (id)

)