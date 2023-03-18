CREATE DATABASE IF NOT EXISTS improving;
USE improving;
DROP TABLE IF EXISTS record;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int AUTO_INCREMENT PRIMARY KEY,
  name varchar(50) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP()
) ENGINE=InnoDB;

CREATE TABLE record (
  id int AUTO_INCREMENT PRIMARY KEY,
  user_id int NOT NULL,
  origin_currency varchar(50) NOT NULL,
  origin_value DOUBLE NOT NULL,
  destination_currency varchar(255) NOT NULL,
  conversion_rate_used DOUBLE NOT NULL,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP(),
  FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;
