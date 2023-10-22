DROP TABLE IF EXISTS metadata;

CREATE TABLE metadata (
	year INT NOT NULL,
	state VARCHAR(15) NOT NULL,
	n_killed INT,
	n_injured INT,
	mass_shooting INT,
	PRIMARY KEY (year, state)
)

SELECT * FROM metadata