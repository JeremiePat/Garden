{{#markdown}}
### Enregistrer des changements (2/2)

```bash
# Renommer un fichier ou dossier
$ git mv <ancien> <nouveau>

# Supprimer un fichier
$ git rm <fichier>
```

```bash
# Enregistrer les changements de l'index dans le repository
$ git commit -m <message de commit>

# Enregistrer tous les changement du workspace directement dans le
# repository sans passer par le stage (sauf pour les nouveaux fichiers)
$ git commit -a -m <message de commit>
```
{{/markdown}}