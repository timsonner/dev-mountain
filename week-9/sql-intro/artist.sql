-- In the artist.sql file, write out the code for the following problems:

-- Add 3 new artists to the artist table. (It already exists.)
INSERT INTO artist(name, artist_id) VALUES('The Black Keys', 276);
INSERT INTO artist(name, artist_id) VALUES('Blackalicious', 277);
INSERT INTO artist(name, artist_id) VALUES('Black Rebel Motorcycle Club', 278);
-- Select 10 artists in reverse alphabetical order.
SELECT * FROM artist ORDER BY name DESC LIMIT 10;
-- Select 5 artists in alphabetical order.
SELECT * FROM artist ORDER BY name LIMIT 5;
-- Select all artists that start with the word ‘Black’.
SELECT * FROM artist WHERE name LIKE 'Black%';
-- Select all artists that contain the word ‘Black’.
SELECT * FROM artist WHERE name LIKE '%Black%';
-- Select the last 10 artist_id starting with the largest int
SELECT * FROM artist ORDER BY artist_id DESC LIMIT 10;





