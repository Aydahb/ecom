CREATE DATABASE ecom

CREATE TABLE ecom
(
    ecom_id SERIAL PRIMARY KEY ,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    quantity INT NOT NULL
);