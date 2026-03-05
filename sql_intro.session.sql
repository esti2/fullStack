-- exe1
-- CREATE TABLE Dolphin(
--     name VARCHAR(30) NOT NULL PRIMARY KEY,
--     color VARCHAR(20),
--     height SMALLINT,
--     healthy BOOLEAN DEFAULT TRUE
-- );
-- INSERT INTO Dolphin
-- VALUES ('Daron', 'gray', 3, TRUE),
--     ('Splash', 'blue', 1, TRUE),
--     ('Tiny', 'white', 1, TRUE),
--     ('Goliath', 'gray', 4, TRUE),
--     ('Leaf', 'green', 2, TRUE);
-- select * from dolphin where height>2
-- exe2
-- select * from dolphin where name like '%on%'
-- exe3
-- DELETE from dolphin where height<2 and color= 'blue'
-- exe4
-- Update dolphin set height='6' where name='Daron' 
-- exe5
-- UPDATE dolphin set healthy='FALSE' WHERE color='green' OR color='brown'
-- exe6
SELECT name,
    height
FROM dolphin
where healthy = 'TRUE'
ORDER BY height DESC;