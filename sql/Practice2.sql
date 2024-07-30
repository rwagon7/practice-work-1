-- setup
-- create database practice
-- insert data into playlist table
-- final solution 
select artist_id, count(artist_id) from playlist group by artist_id order by count desc limit 1;