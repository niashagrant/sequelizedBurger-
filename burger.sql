
USE hqgwf8j4k7qy4kvu;

CREATE TABLE burger;
DROP TABLE burger;

CREATE TABLE burger
(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(100) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
 );
 
 
 
INSERT INTO burger
    (name, devoured)
VALUE
("Donut",
true
),
("Macaron", false),
("Muffin", true)