FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/pm2:15-alpine AS base
RUN apk update --no-cache

FROM base AS development
ENV APP_HOME /usr/src/app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
COPY . $APP_HOME
EXPOSE 3000
CMD ["yarn", "run", "start:dev"]

FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/new-relic-builder:latest as newrelic
RUN /tmp/get-new-relic-js.sh

FROM development AS builder
RUN yarn install --production --non-interactive \
  && yarn cache clean --mirror \
  && npx tsc --removeComments

FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/pm2:15-alpine AS production
ENV APP_HOME /usr/src/app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
COPY --from=newrelic /tmp/newrelic.js $APP_HOME
COPY --from=builder $APP_HOME/dist/ $APP_HOME/dist
COPY --from=builder $APP_HOME/docs/swagger.yaml/ $APP_HOME/docs/swagger.yaml
COPY --from=builder $APP_HOME/node_modules/ $APP_HOME/node_modules
COPY --from=builder $APP_HOME/package.json $APP_HOME/package.json
COPY --from=builder $APP_HOME/yarn.lock $APP_HOME/yarn.lock
EXPOSE ${APP_PORT}
CMD ["yarn", "run", "start"]

