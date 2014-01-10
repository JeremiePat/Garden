{{#markdown}}
### Enregistrer des changements (1/2)

```bash
# Ajouter les changements d'un fichier au stage
# NOTE: Obligatoire la première foi que l'on veut suivre un fichier
$ git add <fichier>

# Pour tout ajouter d'un coup (aka "mode bourrin")
$ git add .
```

```bash
# Supprimer les changements du stage
$ git reset (<fichier>)

# Supprimer les changements du stage ET du workspace
$ git reset --hard
```
{{/markdown}}