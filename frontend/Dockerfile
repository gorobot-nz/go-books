FROM node:17.4.0

ENV PROJECT_REPO=github.com/gorobot-nz/frontend
ENV APP_PATH=/node/src/${PROJECT_REPO}/
RUN adduser -S nonrootuser
WORKDIR ${APP_PATH}
COPY package.json ${APP_PATH}
COPY package-lock.json ${APP_PATH}
RUN npm install
COPY . ${APP_PATH}
EXPOSE 3000
USER nonrootuser
CMD ["npm", "start"]