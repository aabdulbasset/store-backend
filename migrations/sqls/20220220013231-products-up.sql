/* Replace with your SQL commands */
create table products(id serial primary key, name varchar UNIQUE, price int, category int);
insert into products(name,price,category) values('pizza',34,1);
insert into products(name,price,category) values('burger',62,2);
insert into products(name,price,category) values('crepe',25,2);
insert into products(name,price,category) values('pasta',45,3);
insert into products(name,price,category) values('coke',5,4);