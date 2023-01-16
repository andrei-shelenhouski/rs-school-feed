# RSSFeed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Start Firebase emulators

`firebase use staging`
`firebase emulators:start`

## Kill processes on ports

`kill -9 $(lsof -ti:8080,8085,9000)`

## Deploying to Firebase

Cloud Build [documentation](https://cloud.google.com/build/docs/deploying-builds/deploy-firebase)

## Config environment

- [Environment variables](https://firebase.google.com/docs/functions/config-env#env-variables)
- [Managing secrets](https://firebase.google.com/docs/functions/config-env#managing_secrets)

## Missing necessary permission iam.serviceAccounts.actAs for cloud-functions-mixer on the service account

You can fix that by running
`gcloud iam service-accounts add-iam-policy-binding <$PROJECT_ID>@appspot.gserviceaccount.com --member=serviceAccount:<$SOME_ID_OF_CLOUDBUILD_SA>@cloudbuild.gserviceaccount.com --role=roles/iam.serviceAccountUser`
