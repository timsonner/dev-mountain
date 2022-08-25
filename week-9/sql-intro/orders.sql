-- In the orders.sql file, write out the code for the following problems:
-- Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.
-- Add 5 orders to the orders table.
CREATE TABLE orders (order_id SERIAL, person_id SERIAL, product_name varchar(50), product_price int, quantity int)
-- Make orders for at least two different people.
INSERT INTO orders (product_name, product_price, quantity) VALUES ('pizza', 20.5, 1);
INSERT INTO orders (product_name, product_price, quantity) VALUES ('lasagna', 14.5, 1);
INSERT INTO orders (product_name, product_price, quantity) VALUES ('shrimp scampi', 19, 2);
INSERT INTO orders (product_name, product_price, quantity) VALUES ('elk bolognese', 21.75, 1);
INSERT INTO orders (product_name, product_price, quantity) VALUES ('pasta carbonara', 12.5, 1);
-- person_id should be different for different people.
-- Select all the records from the orders table.
SELECT * FROM orders;
-- Calculate the total number of products ordered.
SELECT SUM(quantity) FROM orders;
-- Calculate the total order price.
SELECT SUM(product_price) FROM orders;
-- Calculate the total order price by a single person_id.
SELECT person_id, product_price * quantity AS order_total FROM orders person_id WHERE person_id = 3;
-- Calculate the total order price for all by person_id.
SELECT person_id, product_price * quantity AS order_total FROM orders person_id;

