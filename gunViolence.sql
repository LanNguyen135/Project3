
--drop if exits
DROP TABLE IF EXISTS gunViolence;

--create table
CREATE TABLE gunViolence (
	incident_id INT PRIMARY KEY,
	date DATE,
	state VARCHAR(15),
	state_code VARCHAR(2),
	city_or_county VARCHAR(50),
	n_killed INT,
	n_injured INT,
	population_2020 INT
);
