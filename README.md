# Shopping Time Angular Web App

Shopping Cart Application with Angular 7.2.0

## Demo

https://iamalperen.github.io/demo/shopping-time/


## Build

- make sure you have npm on your dev machine
- run `npm install -g @angular/cli` to install angular-cli tool
- run `npm install` to install npm dependencies of project
- run `ng build` to build project

## Development server

- Run `ng serve` for a dev server after first build. 

- Navigate to `http://localhost:4200/`. 

- The app will automatically reload if you change any of the source files.

### For Different Environment Configurations

#### Production Build 
- run `ng build --configuration=production` to build project in prod environment
- run `ng serve --configuration=production` to serve project in prod environment

#### Development Build 
- run `ng build --configuration=development` to build project in dev environment
- run `ng serve --configuration=development` to serve project in dev environment

#### Test Build 
- run `ng build --configuration=test` to build project in test environment
- run `ng serve --configuration=test` to serve project in test environment

## Running unit tests
- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Docker

First pull ngnix

```
docker pull nginx:alpine
```
Run ngnix

```
docker run -d -p 8080:80 nginx:alpine
```

Build prod version of project

```
ng build --configuration=production
```

Build docker container

```
docker build . -t shopping-time:latest
```

Run docker container

```
docker run -d -p 8080:80 shopping-time:latest
```

And now the app is accessible on `http://localhost:8080`


## Author and License
Created and maintained by [Alperen](https://github.com/alperentalaslioglu) under [MIT](LICENCE.md) License
