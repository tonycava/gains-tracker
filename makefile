start-dev:
	docker-compose -f docker-compose.dev.yml up --build

reset:
	sudo rm -rf ./node_modules
	sudo rm -rf ./.svelte-kit
	sudo rm -rf ./yarn.lock