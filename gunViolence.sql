<<<<<<< HEAD

--drop if exits
DROP TABLE IF EXISTS gunViolence;

--create table
CREATE TABLE gunViolence (
=======
DROP TABLE IF EXISTS gunviolence;

CREATE TABLE gunviolence (
>>>>>>> 652af946a0bf57abb8953ee72cf68873c6e9e59e
	incident_id INT PRIMARY KEY,
	date DATE,
	state VARCHAR(15),
	state_code VARCHAR(2),
	city_or_county VARCHAR(50),
	n_killed INT,
	n_injured INT,
	latitude FLOAT,
	longitude FLOAT,
	population INT
);

SELECT * FROM gunviolence