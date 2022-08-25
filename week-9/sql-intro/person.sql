--init
DROP TABLE person;
-- Create a table called person that records a person’s id, name, age, height (in cm) , city, favorite_color. id should be an auto-incrementing id/primary key (use type: SERIAL)
CREATE TABLE person (
  person_id SERIAL, name varchar(20), age int, height int, city varchar(20), favorite_color varchar(20));

-- Add 5 different people into the person database. Remember to not include the person_id because it should auto-increment.
INSERT INTO person (name, age, height, city, favorite_color) VALUES ('person 1', '31', '300', 'Orange city', 'orange');
INSERT INTO person (name, age, height, city, favorite_color) VALUES ('person 2', '15', '70', 'Green city', 'green');
INSERT INTO person (name, age, height, city, favorite_color) VALUES ('person 3', '27','800', 'Red city', 'red');
INSERT INTO person (name, age, height, city, favorite_color) VALUES ('person 4', '600', '668', 'Blue city', 'blue');
INSERT INTO person (name, age, height, city, favorite_color) VALUES ('person 5', '5','2200', 'White city', 'white');
INSERT INTO person (name, age, height, city, favorite_color) VALUES ('person 6', '45','799', 'Purple city', 'purple');
INSERT INTO person (name, age, height, city, favorite_color) VALUES ('person 7', '1','22', 'Yellow city', 'yellow');
-- Select all the people in the person table by height from tallest to shortest.
SELECT * FROM person
ORDER BY height ASC;
-- Select all the people in the person table by height from shortest to tallest.
SELECT * FROM person
ORDER BY height DESC;
-- Select all the people in the person table by age from oldest to youngest.
SELECT * FROM person
ORDER BY age DESC
-- Select all the people in the person table older than age 20.
SELECT * FROM person
WHERE age > 20;
-- Select all the people in the person table that are exactly 18.
SELECT * FROM person WHERE age = 18;
-- Select all the people in the person table that are less than 20 and older than 30.
SELECT *
FROM person
WHERE age < 20 OR age > 30;
-- Select all the people in the person table that are not 27 (use not equals).
SELECT * FROM person WHERE NOT age = 27
-- Select all the people in the person table where their favorite color is not red.
SELECT * FROM person WHERE NOT favorite_color = 'red'
-- Select all the people in the person table where their favorite color is not red and is not blue.
SELECT * FROM person WHERE NOT favorite_color = 'red' AND NOT favorite_color = 'blue'
-- Select all the people in the person table where their favorite color is orange or green.
SELECT * FROM person WHERE favorite_color = 'orange' OR favorite_color = 'green'
-- Select all the people in the person table where their favorite color is orange, green or blue (use IN).
SELECT * FROM person WHERE favorite_color IN('orange', 'green', 'blue')
-- Select all the people in the person table where their favorite color is yellow or purple (use IN).
SELECT * FROM person WHERE favorite_color IN('yellow', 'purple')