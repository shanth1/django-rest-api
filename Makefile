up:
	cp docker/.example.env docker/.env
	cd frontend && npm run build
	cd docker && docker compose up -d   

stop:
	docker stop django

logs:
	docker logs django

in:
	docker exec -it django bash