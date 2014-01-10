{{#markdown}}
### Gérer les conflit (2/2)

```bash
# Savoir quels outils de résolution de conflit sont disponible
$ git mergetool --tool-help

# Lancer un outil de résolution de conflit
$ git mergetool -t <outil>
```

```bash
# Annuler une fusion conflictuelle
$ git merge --abort
```

```bash
# Reprendre un rebase après la résolution des conflits
$ git rebase --continue

# Annuler un rebase avec conflit
$ git rebase --abort
```
{{/markdown}}