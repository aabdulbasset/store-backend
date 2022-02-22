/* Replace with your SQL commands */
create table orders_products(order_id int references orders(id), product_id int references products(id), quantity int);