# David Costa - Viewstats Full Stack Project

## Installation

### Create your env

`cp .env.example .env`

> if it's need change your `.env`.

### Using docker-compose

`docker-compose up -d`

the pgweb can be accessed here: `http://localhost:8888/`

### Using yarn

`yarn install`

### Prisma

Apply the migrations and initial state of prisma

`yarn prisma db push`

### Development

`yarn dev`

### Building

`yarn build`

### Running in Producing

`yarn start`

### Generating graphql types and hooks

`yarn generate`
