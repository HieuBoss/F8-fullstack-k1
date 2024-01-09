-- day la comment trong sql

-- 1. them du lieu
-- INSERT INTO users(id,name,email,password,status,created_at,update_at)
-- VALUES(1,'User 1','user1@gmail.com','123456',true,NOW(),NOW());

-- INSERT INTO users(id,name,email,password,status,created_at,update_at)
-- VALUES(2,'User 2','user2@gmail.com','123456',true,NOW(),NOW());

-- INSERT INTO users(id,name,email,password,status,created_at,update_at)
-- VALUES(3,'User 3','user3@gmail.com','123456', true, NOW(), NOW());

--2. cap nhat du lieu
-- UPDATE users SET name='User11', email='user11@gmail.com', status=false, update_at=NOW()
-- WHERE id=1;

--3. xoa du lieu
DELETE FROM users WHERE id=1