{{#markdown}}
### package.json

Ce fichier permettra de garantir que tout le monde utilisera les mêmes modules NodeJS

```json
{
  "name": "mon-projet",
  "author": "Jeremie Patonnier",
  "version": "0.0.1",
  "description": "Dependance pour le projet",
  "devDependencies": {}
}
```

Pour que tout le monde en bénéficie, pensez à le versionner dans le projet :

```bash
$ git add package.json
```
{{/markdown}}