## Push Schema to DB

`.env`

```
DATABASE_URL="Connection String"
```

Execute bellow command

```
yarn prisma db push
```

## Using GitHub Packages

`.yarnrc.yml`

```
yarnPath: .yarn/releases/yarn-3.2.1.cjs
nodeLinker: node-modules

npmScopes:
  'owner':
    npmAlwaysAuth: true
    npmRegistryServer: 'https://npm.pkg.github.com/'
    npmAuthToken: 'set your github PAT'
```
## Run development

```
yarn start:dev
```
