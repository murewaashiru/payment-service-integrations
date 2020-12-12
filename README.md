## Overview

Payment service refers to any service provided by a financial institution to allow one person or organization to pay another for a product or service. This repo provides a guide to integration to payment service providers around the world.

## Payment service providers covered

| Company/Product | Platform | Location      |
| --------------- | -------- | ------------- |
| eWay            | Online   | Australia     |
| Paystack        | Online   | Africa        |
| PayPal          | Online   | North America |

## How to Install and run the application

- Clone the application. In each of the folders, run the following commands
- Run `npm install`
- Run `cp .env.example .env` to create the .env variables and fill them
- Run `npm run dev` to start development server

NOTE: This repo is simply a guide. It does NOT include

1. Integrating to all the APIs of the service providers
2. Interacting with a database
3. Writing tests
4. Handling errors
5. Deploying on any infrastructure

## Contribution

Notice a bug or want to add a new PSP?

1. Fork this repo
2. Checkout to a new branch (from the branch for your stack)
3. Make your changes
4. Push your changes
5. Make a PR to the branch for your stack
