-- Creando la base de datos
CREATE DATABASE crudnodejsmysql;
-- Utilizando la base de datos
use crudnodejsmysql;

-- Crear tabla
CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);
-- ver tabla
SHOW TABLES;

-- Estructura tabla
describe customer;