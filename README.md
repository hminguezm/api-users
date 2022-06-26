# API Users
### A expressJS server application (NodeJS - Typescript) up [Docker](https://docker.com/) with Hexagonal Architecture.

# Requirement
-  [dotenv-cli](https://www.npmjs.com/package/dotenv-cli) (by local stage)
-  [Docker](https://www.docker.com/) ~>18 (Optional)
-  [Docker compose](https://docs.docker.com/compose/) ~>1.28.0 (Optional)

# Running in local stages

create a .env file configuration in de root file directory for local deploy

variables required

```dotenv
NODE_ENV=${NODE_ENV}
ENVIRONMENT_TYPE=${NODE_ENV}
PORTSERVER=${APP_PORT}
BASE_PATH=${BASE_PATH}
CORS_ORIGIN=*${CORS_ORIGIN}
MONGODB_URL=${MONGODB_URL}

and run

```shell
yarn && yarn start:<>
```

# Running in local stages with dotenv

```dotenv
  dotenv -e .env yarn run start<>
```

# Running with Docker

### environments variables

The application includes several docker-compose configuration file where you can change the env vars

env_file:
  - .env

# Swagger docs configuration

Edit: swagger.config.yml

```swagger
basePath: %{BASE_PATH}%; ex: /api/projectname
```

Note: This basePath value must be igual to ```BASE_PATH```, into .env file


## Run with environment file

```shell
docker-compose -f docker-compose.yml up -d --build
```

## Running a new container every time and then log output (default environment):

```shell
docker-compose up -d --build --force-recreate; docker-compose logs -f
```

## Running a new container every time and then log output (with environment):

```shell
docker-compose -f docker-compose.yml up -d --build --force-recreate; docker-compose -f docker-compose.yml logs -f
```

## Reference Links

+ [docker-compose Documentation](https://docs.docker.com/compose/)
+ [typescript-rest-swagger Documentation](https://github.com/thiagobustamante/typescript-rest-swagger)
