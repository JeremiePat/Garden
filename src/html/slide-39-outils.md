{{#markdown}}
### config.rb

C'est le fichier de configuration du projet Sass qui doit être à la racine de votre projet.

```ruby
# Racine HTTP à utiliser pour générer les chemins
http_path = "/"

# Dossiers ou doivent êtres les différents fichiers du projet
sass_dir = "src/sass"
css_dir = "build/css"
images_dir = "build/img"
javascripts_dir = "build/js"

# Spécifie le format de la CSS généré
# output_style = :expanded or :nested or :compact or :compressed
output_style = :expanded
```

Et on pense à le versionner avec le reste du projet
```bash
$ git add config.rb
```
{{/markdown}}