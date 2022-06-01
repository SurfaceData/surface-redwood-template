# README

Welcome to the Surface Data Collective template for setting up
[RedwoodJS](https://redwoodjs.com) websites.

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (>=14.19.x <=16.x) and
>   [Yarn](https://yarnpkg.com/) (>=1.15)
> - We use [Supabase](https://supabase.com/) for authentication.  Make sure you
>   have an account and a project with User Authentication.
> - Deployment uses [Docker Compose](https://docs.docker.com/compose/).


## Getting Started

Copy this template project into a new project and copy it to your local computer.

Then, to start the project:

1.  Run `yarn install` to download all dependencies
1.  Create a `.env` file with three Supabase keys for user authentication:
  1.  `SUPABASE_URL`
  1.  `SUPABASE_KEY`
  1.  `SUPABASE_JWT_SECRET`
1.  Run `yarn rw dev` to run the dev server.

## Deploying with Docker

Provided in this package is a simple docker compose setup with the API and Web
nodes in separate containers.

You can deploy the template by running:

```
docker compose build
docker compose up -d
```

## Quick Links

-  [Redwood Docs](https://redwoodjs.com/docs/introduction) provide details on
   how to build with Redwood.
-  [Prisma](https://www.prisma.io/) provides details on how to manage the
   database.
-  [Supabase](https://supabase.com/) provides details on storage and
   authentication.
-  [Tailwind](https://tailwindcss.com/) provides instructions for some of our
   styling.
-  [Styled Components](https://styled-components.com/) documents the other
   structure we use for styling.
-  [Rsuite](https://rsuitejs.com/) documents some common components we use.
