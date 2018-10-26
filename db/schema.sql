DROP DATABASE IF EXISTS todo_db;

CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE todos (
    id int AUTO_INCREMENT NOT NULL,
    todo VARCHAR(255) NOT NULL,
    complete BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)