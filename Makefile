up:
	cd frontend && npm run build
	docker compose up -d   

stop:
	docker stop django

logs:
	docker logs django

in:
	docker exec -it django bash