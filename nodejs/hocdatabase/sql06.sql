-- Ham tong hop : COUNT(), SUM(), AVG(), MAX(), MIN(), -->đi kèm với mệnh đề GROUP BY ,HAVING



-- Câu 1: truy vấn trả về danh sách users và số lượng bài posts của từng users
-- Câu 2: truy vấn trả về danh sách users và số lượng bài posts>=2
-- Câu 3: truy vấn trả về danh sách users số bài posts lớn nhất (k dùng limit,offset)

-- SELECT users.*, COUNT(posts.id) AS luot
-- FROM users
-- LEFT JOIN posts ON posts.users_id = users.id
-- GROUP BY users.id;

-- SELECT users.*, COUNT(posts.id) AS luot
-- FROM users
-- LEFT JOIN posts ON posts.users_id = users.id
-- GROUP BY users.id
-- HAVING count(posts.id) >= 2;

SELECT users.*, COUNT(posts.id) AS count_posts
FROM users
LEFT JOIN posts ON posts.users_id = users.id
GROUP BY users.id
HAVING count(posts.id) = (
	SELECT MAX(count_posts) 
	FROM (
		SELECT COUNT(id) AS count_posts
		FROM posts
		GROUP BY users_id
	)
) 

fetch first 1 rows only;
-- ORDER BY COUNT(posts.id) DESC
-- LIMIT 1;
