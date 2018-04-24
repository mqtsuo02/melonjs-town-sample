FROM node:8.11.1
WORKDIR /work
COPY . .
RUN npm install -g grunt-cli
RUN npm install
EXPOSE 8000
CMD ["grunt", "serve"]
