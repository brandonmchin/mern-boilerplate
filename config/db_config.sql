CREATE DATABASE IF NOT EXISTS sampledb;

USE sampledb;

CREATE TABLE IF NOT EXISTS elements (
  element_id INT(11) NOT NULL AUTO_INCREMENT,
  element_name VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (element_id)
) ENGINE=InnoDB;

INSERT INTO elements (element_name)
VALUES ("elem1");

INSERT INTO elements (element_name)
VALUES ("elem2");