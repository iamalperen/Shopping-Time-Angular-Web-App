# Shopping Time App

Sizden B2B alanında hizmet edecek bir web portali için ürün listeleme ve alışveriş sepeti yönetimi yapmanız istenmektedir. Bu case’de alışveriş sepeti tasarlamanızı ve ürün listesinden herhangi bir ürünü sepete ekleyebilmeyi istiyoruz. Sepette kaç farklı ürün olduğu bilgisini sitenin üst bölümündeki menülerde de görebilmeliyiz. Sepet içerisinden eklenen ürünlerin adetlerini değiştirebilmeyi veya silebilmeyi istiyoruz. 0 adetli bir ürün sepette bulunamaz, en az 1 adet olabilmeli. Bu problemi merkezi durum yönetimi (State Management - Redux / NGRX) yaklaşımıyla hazırlamanızı istiyoruz. Kodunuzun test edilebilir olması ve gerekli test / build scriptlerinin package.json dosyasında hazırlanmasını istiyoruz. Geliştirdiğiniz uygulama dev, test ve prod ortamlarına farklı konfigürasyonlarda dağıtıma hazırlanmalı. Konfigürasyonları dışarıdan değiştirebilir halde tutun. Dağıtım için konteyner teknolojisi kullanabilirsiniz. Geliştirdiğiniz uygulamanın bakımı ve yeni özelliklerin geliştirilebilmesi için test kodlarını ve Commit mesajlarınızı düzenli yazmanız önemli.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
