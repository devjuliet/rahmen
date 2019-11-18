FROM node
MAINTAINER cris
RUN mkdir -p /app
WORKDIR app
COPY ./ .
RUN npm install
RUN npm uninstall bcrypt
RUN npm install bcrypt
EXPOSE 3000
ENTRYPOINT npm start