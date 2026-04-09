.PHONY: build deploy migrate seed clean

# Build the application and docker images
build:
	npm run build
	docker-compose build

# Deploy/Start the application stack
deploy:
	docker-compose up -d

# Run Drizzle database migrations
migrate:
	npx drizzle-kit push

# Seed the database (placeholder command)
seed:
	@echo "Seeding database..."
	# Insert your seeding command here, e.g., npx tsx src/db/seed.ts

# Stop and clean up containers and volumes
clean:
	docker-compose down -v
	rm -rf .next
	rm -rf node_modules
	npm install
