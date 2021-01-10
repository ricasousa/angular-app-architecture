# Angular App

Projeto criado afim de testar uma arquitetura que seja escalável.

Na pasta **app** encontramos os módulos compartilhados dentro da pasta **shared** enquanto os módulos core, dentro da pasta **core**. No core vão os módulos como `TranslateModule`, `HttpClientModule` e o que mais for necessário a nível de aplicação. Caso gerenciamento de estado de faça necessário, deverá ficar aqui também. Além dos módulos citados acima, teremos também os interceptors, `CanGuard` e etc.

Além disso, há também alguns exemplos básicos de utilização de **Dynamic Forms**

Algumas alterações realizadas.

**angular.json**

Adição de uma configuração para facilitar os `@imports` nos arquivos .scss da aplicação. Semelhante ao `paths` do tsconfig.json.

```json
"styles": [...],
"stylePreprocessorOptions": {
  "includePaths": ["src/styles"]
},
```

**tsconfig.json**

Para evitar imports com paths relativas, adicionamos a configuração abaixo:

```json
"compilerOptions": {
  "baseUrl": "./src",
  "paths": {
    "@env": ["environments/environment"],
    "@shared/*": ["app/shared/*"],
    "@core/*": ["app/core/*"]
  }
},
```

# src/app/pages

A principio essa pasta serviria para criar features que não necessitariam de um módulo.

# Refinar


Regarding the Application structure, you have to keep in mind being LIFT:

Do structure the app such that you can Locate code quickly, Identify the code at a glance, keep the Flattest structure you can, and Try to be DRY

Locate
Do make locating code intuitive, simple and fast.

Identify
Do name the file such that you instantly know what it contains and represents.

Do be descriptive with file names and keep the contents of the file to exactly one component.

Avoid files with multiple components, multiple services, or a mixture.

Flat
Do keep a flat folder structure as long as possible.

Consider creating sub-folders when a folder reaches seven or more files.

Consider configuring the IDE to hide distracting, irrelevant files such as generated .js and .js.map files.

Try to be DRY
Do be DRY (Don't Repeat Yourself).

Avoid being so DRY that you sacrifice readability.

## Reference

https://medium.com/dev-jam/5-tips-best-practices-to-organize-your-angular-project-e900db08702e

https://medium.com/@shijin_nath/angular-right-file-structure-and-best-practices-that-help-to-scale-2020-52ce8d967df5
