create database inmoPet;

use inmoPet;

create table user(
	user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR (200) NOT NULL,
	last_name VARCHAR(200),
	email VARCHAR(200) UNIQUE NOT NULL,
    telephone VARCHAR(10) NOT NULL,
    password VARCHAR(250) NOT NULL,	
	type TINYINT NOT NULL DEFAULT 1, -- TIPOS DE USUARIO: 0 admin, 1 user. 	
	register_date date NOT NULL default (CURDATE()),
    img VARCHAR(200),	
	enabled BOOLEAN NOT NULL DEFAULT 1 -- (enable 1 - TRUE puede loguearse, 0 - FALSE no puede loguearse) Marcado por un administrador. 
);

create table house(
	house_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    status TINYINT NOT NULL DEFAULT 1, -- TIPOS: 1 available, 2 reserved, 3 rented
	title VARCHAR (200) NOT NULL,
    city VARCHAR (200) NOT NULL,
    village VARCHAR (200) NOT NULL,
    room TINYINT NOT NULL DEFAULT 0,
    bath TINYINT NOT NULL DEFAULT 0,
    parking BOOLEAN,
    description VARCHAR(500) NOT NULL, 
    original_price DECIMAL(10,2) NOT NULL,
    reduced_price DECIMAL(10,2) NOT NULL,
    meter TINYINT UNSIGNED,
    terrace BOOLEAN,
    enabled BOOLEAN NOT NULL DEFAULT TRUE, -- (enable TRUE inmueble activo, FALSE inmueble inactivo) Marcado por un administrador. 
    user_id INT UNSIGNED,
    
    -- Referencia un comprador
	CONSTRAINT fk_user_id FOREIGN KEY (user_id)
	REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE image (
    img_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    house_id INT UNSIGNED,
    is_deleted TINYINT(1) DEFAULT 0,
    CONSTRAINT fk_house_id FOREIGN KEY (house_id) REFERENCES house (house_id) ON DELETE CASCADE ON UPDATE CASCADE
);