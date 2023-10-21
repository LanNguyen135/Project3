DROP TABLE IF EXISTS gunviolence;

CREATE TABLE gunviolence (
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