# Instructions for Products Microservice

## After following the instructions in the README.md file for api.products and api.orders, follow the instructions below

### api.products

The product microservice uses node version 17. From the root of the `api.products` directory install the node dependencies using the command bellow

```Bash
npm ci
```

and build the docker image for the api.products container using the command bellow from the root of the `api.products` directory

```Bash
docker build -t api.products:latest .
```
