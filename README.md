# Munchies Umain project by E-Joon Ko

This is the umain test project for creating the frontend of Munchies.

## Sanity CMS

This project uses Sanity as its headless CMS service, and https://github.com/ejoonko/umain-work-test-sanity-ejoonko is where you can find the codebase for the deployed sanity platform.
One will require a proper sanity project ID as a environment variable to run locally, and this can be provided privately by the author of this repository.

## Getting Started

1: create a copy of .env.local.example named .env.local

2: install dependencies

```
yarn
```

3: run development

```
yarn run dev
```

## Running production build

You can also run a production build with the following commands:

```
yarn run build
yarn run start
```

## Linting and formatting

This projects uses eslint together with prettier with typescript and tailwindCSS plugins for linting and formatting the project.

Run the linting and formatting commands with:

```
yarn run lint
yarn run lint:fix
yarn run format
yarn run format:check
```

## Deployment

This app is deployed with Vercel and is available here: https://umain-work-test-web-ejoonko.vercel.app/
