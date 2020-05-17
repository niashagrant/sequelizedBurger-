CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger
(
  id INT
  AUTO_INCREMENT NOT NULL,
 name VARCHAR
  (100) NOT NULL,
 devoured BOOLEAN DEFAULT false,
 PRIMARY KEY
  (id)
 );
 
