FROM node:12.13.0-alpine
WORKDIR /usr/app
RUN apk update

COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE 8081
ENV PORT 8081
ENV NODE_ENV development

CMD ["npm", "start"]
