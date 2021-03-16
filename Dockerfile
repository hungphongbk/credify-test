

# Setup and build the frontend

FROM node:12.13.0-alpine as frontend
ENV API_ENV ""
WORKDIR /usr/app/frontend/
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build


# Setup the backend
FROM node:12.13.0-alpine

WORKDIR /usr/app/
COPY --from=frontend /usr/app/frontend/build/ ./frontend/build/

WORKDIR /usr/app/backend/
ENV PORT 8000
COPY backend/package*.json ./
RUN npm ci
COPY backend/ ./
RUN npm run build
EXPOSE 8000

CMD ["npm", "run", "start:prod"]
