-- In the group_by.sql file, write out the code for the following problems:

-- These questions reference the invoice, track and album tables.

-- Find the sum of totals in the invoice table grouped by billing_state.
SELECT billing_state, SUM(total) FROM invoice GROUP BY billing_state;
-- Find the average track length (in milliseconds) by album. Order the table by the averages.
SELECT AVG(milliseconds), album_id FROM track GROUP BY album_id;
