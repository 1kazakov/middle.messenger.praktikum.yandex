FROM  --platform=linux/amd64 node:12.22.0
ENV DOCKER_DEFAULT_PLATFORM=linux/amd64
COPY . .
RUN npm install
RUN npm build
EXPOSE 3000
CMD node ./server.js