mkdir exspressmysql
cd exspressmysql
npm init -y

npm install nodemon express uuid body-parser express-promise-router mysql

database req: mysql
use studentdb;
drop table users;
create table users (uid varchar(40) not null primary key, fname varchar(30), lname varchar(30));
insert into users values ('001', 'Bruce', 'Banner');
insert into users values ('002', 'Bruce', 'Wayne');
insert into users values ('003', 'Peter', 'Parker');
insert into users values ('004', 'Hal', 'Jordan');
select * from users;

