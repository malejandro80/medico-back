## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Setting Up the Database

### Using make file Commands or Docker compose

```bash
# Help about available commands
make help

# Start The containers
make up
# fisrt time
docker compose up -d --build
# rest oftimes
docker compose up

# Stop The containers
make stop
docker compose stop

# Down The containers
make down
docker compose down

# Restart de containers
make restart
docker-compose stop && docker compose up --build

# make commands inside the mongodb container
make mongo
docker exec -it $(CONTAINER_MONGODB) mongosh

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Developer Message

Hello, Beautiful Person :D, How are you?, How is going All?, I hope you have learned so much new things and grow in your personal career as a developer, together with your team, your bets mentor and software developer Miguel. Good luck friends 😎🫡✨