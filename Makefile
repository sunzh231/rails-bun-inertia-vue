
init:
	bundle install
	yarn install

dev:
	bin/dev

routes:
	rails generate routes

annotate:
	rake annotate_models

rubocop:
	rubocop --autocorrect

migrate:
	rake db:migrate
