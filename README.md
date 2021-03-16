# Credify Interview Test (Frontend Developer)

Author: **_Truong Hung Phong (@hungphongbk)_**

## Available Scripts

### Requirements

- [Docker](https://www.docker.com/)
- [NodeJS](https://nodejs.org/en/) >=12.13.0 _(optional for development mode)_

### In development mode

Let's start backend (for API call) first by using below command

```shell
$ docker-compose -f docker-compose.dev.yml up -d --build
```

After BE build is completed, let's start frontend by using these commands

```shell
$ cd frontend
$ npm run start
```

### In production mode

Just execute the command below. All things have been bundled in Docker for one-time build and execution.

```shell
$ docker-compose -f docker-compose.prod.yml up -d --build
```

## Technique frameworks & libraries

> Although I applied for FE developer position, in this test I've been doing as JS fullstack developer, \
> included building backend using Express.js & TsED framework which helps me to scaffold any \
> simple API as soon as possible

### Frontend

- React.js
- [Axios](https://github.com/axios/axios)
- [Material UI](https://material-ui.com/)
- [Recharts.js](https://recharts.org/) for drawing a graph

### Backend

- Docker
- Typescript
- Express.js & [TsED](https://tsed.io/)
- PostgreSQL for storing faked-generated data

Cause this test focused on my own FE skill, I've not implemented too many things on BE code, all just for mocking.

### Code linting & prettifying

- Eslint
- Prettier

Those configs have been generated (or implemented) from CLI by default.
