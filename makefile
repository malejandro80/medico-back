#!/bin/bash

CONTAINER_NGINX = medicoapp_nginxserver
CONTAINER_MONGODB = medicoapp_mongodb
CONTAINER_NETWORK = medicoapp_network

help: ## Show this help message
	@echo 'usage: make [target]'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

up:	## Start the containers
	docker network create ${CONTAINER_NETWORK} || true
	docker-compose up -d --build

down: ## Down the containers
	docker-compose down

stop: ## Stop the containers
	docker-compose stop

restart: ## Restart the containers
	$(MAKE) stop && $(MAKE) up

bash: ## Allow to run nginx server commands
	docker exec -it $(CONTAINER_NGINX) bash

mongo: ## Allow to run mongodb comands
	docker exec -it $(CONTAINER_MONGODB) mongosh