create-tables:
	psql -d not_reddit_express -U nr_express_user -f ./src/database/database.sql