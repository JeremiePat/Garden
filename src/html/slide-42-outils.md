{{#markdown}}
### Utiliser Bundler

Installer bundler
```bash
$ gem install bundler
```

Créez un fichier `Gemfile` à la racine de votre projet
```
source 'https://rubygems.org'
gem 'compass', '0.12.2'
```

Mettre à jour son environnement
```bash
$ bundle install
```

Pensez à versionner les fichiers avec le projet
```bash
$ git add Gemfile Gemfile.lock
```

Et pour l'utiliser
```bash
$ bundle exec compass compile
```
{{/markdown}}