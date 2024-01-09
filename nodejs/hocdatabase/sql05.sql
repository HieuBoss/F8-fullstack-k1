SELECT courses.*, users.name AS username, users.email,
CASE
	WHEN courses.prices >= 200000 THEN '10%'
	ELSE '0'
END AS discount,
(courses.prices - courses.prices * (CASE
	WHEN courses.prices >= 200000 THEN 10
	ELSE 0
END)/100) AS sale_price
FROM users
INNER JOIN users_courses
ON users.id = users_courses.users_id
INNER JOIN courses
ON courses.id = users_courses.course_id
INNER JOIN phones
ON phones.users_id = users.id
WHERE users.id = 2
ORDER BY courses.prices DESC, courses.id ASC
LIMIT 1 
OFFSET 1;

