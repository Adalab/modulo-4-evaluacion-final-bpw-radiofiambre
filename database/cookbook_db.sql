CREATE DATABASE cookbook_db;
USE cookbook_db;

CREATE TABLE recipes(
	id INT auto_increment primary key,
	creationDate date not null,
	recipeName VARCHAR(50) not null unique,
    category VARCHAR(20) not null,
    pax INT,
    cookingTimeMin INT,
	ingredients TEXT,
	steps TEXT,
	notes TEXT,
    referenceLink TEXT,
    isFavorite BOOLEAN not null,
    cookedTimes INT not null
);


-- V2. Meter ingredientes en una tabla relacionada
CREATE TABLE ingredients(
	ingredientname VARCHAR(20) not null,
    ingredientcategory VARCHAR(20)
);