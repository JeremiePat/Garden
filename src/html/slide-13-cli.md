{{#markdown}}
### Chercher des fichiers (2/2) : grep

```bash
# Chercher à l'interieur d'un fichier
$ grep <recherche> <fichier> …
```

```bash
# Faire une recherche insensible à la casse
$ grep -i <recherche> <fichier> …
```

```bash
# Afficher le numéro de la ligne ou se trouve le resultat de recherche
$ grep -n <recherche> <fichier> …
```

```bash
# Étend la recherche à tous les sous-dossiers et leurs fichiers
$ grep -R <recherche> <fichier> …
```

```bash
# Pour n'afficher que les noms de fichiers correspondant à la recherche
$ grep -l <recherche> <fichier> …
```
{{/markdown}}