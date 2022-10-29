create-tables:
	psql -d not_reddit_express -U nr_express_user -f ./src/database/database.sql

remove-branches:
	git branch --merged | egrep -v "(^\*|master|main|dev)" | xargs git branch -D