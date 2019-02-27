# Load MySQL

`brew install mysql` to install MySQL


`brew services start mysql` to start MySQL


`mysqladmin -u root password 'password'` to create a user with a password


`mysql -u root -p` to open up the MySQL prompt `mysql>` with that user, prompted for the password. `mysql -u root -p <database_name>` to select on login


`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';` to fix up MySQL 8 problem with password security by editing the user. Ensure `localhost` is used rather than the IP address.
**this is probably not OK in production**





# MySQL on the Command Line

* **Remember the end statements in semi-colons**
* `SHOW DATABASES` will list all DBs
* `USE <database_name>` will select the database provided
* `DESCRIBE table` will provide the schema for the `table`
* `USE db` will switch to `db`
* `SHOW tables` will list all the tables in the current DB.


# Knex

* Uses migrations like Rails or CakePHP.
* Each migration is a dated file with the name it's given at the time, such as 'create_user_table'.
* Each migration file comprises of an `up` and a `down` function which are used to either perform or undo the migration. Migrations can be rolled back or forward with this mechanism.
* Knex also provides the `knex` function which allows SQL commands to be called on the DB.