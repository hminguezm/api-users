
<h1 align="center">
  Ripley API users
</h1>

<p align="center">
  A expressJS server application (NodeJS - Typescript) up [Docker](https://docker.com/) with Hexagonal Architecture.
</p>

</br>

# Running in local stages

create a .env file configuration in de root file directory for local deploy

and run

```
yarn && yarn start:{dev|prod}
```

# Running with Docker

### environments variables

The application includes several docker-compose configuration file where you can change the env vars

env_file:
  - /app/secrets/ripley-api-user/app.{local|devel|production}.env

## Run with environment file

```
docker-compose -f docker-compose.yml up -d --build
```

## Running a new container every time and then log output (default environment):

```
docker-compose up -d --build --force-recreate; docker-compose logs -f
```

## Running a new container every time and then log output (with environment):
```
docker-compose -f docker-compose.yml up -d --build --force-recreate; docker-compose -f docker-compose.yml logs -f
```

## Reference Links

+ [docker-compose Documentation](https://docs.docker.com/compose/)
