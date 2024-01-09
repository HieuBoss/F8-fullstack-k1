-- cau 1: lấy danh sách khóa học mà user có id = 1 đã mua
-- yêu cầu : trả về thông tin khóa học, tên email của user

SELECT courses.*, users.name AS username,users.email AS user_email  FROM users_courses 
INNER JOIN courses 
ON courses.id = users_courses.course_id
INNER JOIN users 
ON users.id = users_courses.users_id
INNER JOIN phones 
ON users.id = phones.users_id

WHERE phones.phone = '0385669003'