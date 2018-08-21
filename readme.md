#Command Line Commands
###First open up a command prompt (or bash, or powershell, or whatever) and cd into this directory
##Creating new (empty) tables in the database
###heroku run knex migrate:latest
###A 'migration' creates (empty) tables in the database.
##Drop all tables in the database
###heroku run knex migrate:rollback
###Rolling back this migration will remove those same tables.
##Clear all data from the database
###heroku run knex seed:run
###A 'seed' file will remove all of the data from a table and then replace it with the seed data (in this case none).  The above command runs all available seed files.
