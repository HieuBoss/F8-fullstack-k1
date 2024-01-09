SELECT users.*, groups.name AS group_name 
FROM users 
INNER JOIN groups 
ON users.group_id = groups.id
WHERE LOWER(groups.name) LIKE '%admin%'


--Câu 1 : viết câu lệnh truy vẫn lấy ra danh sách users và tên group theo điều kiện sau:
-- tên group chứa từ khóa "admin"