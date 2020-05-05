JSLINT = ./node_modules/.bin/eslint

tests: install lint jstests

install:
	npm install

lint:
	$(JSLINT) .

jstests:
	npm test -- --coverage --watchAll=false
