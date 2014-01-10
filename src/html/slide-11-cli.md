{{#markdown}}
### Supprimer des fichier : rm

```bash
# Supprimer un ou plusieurs fichiers mais pas les dossiers.
$ rm <fichier> …
```

```bash
# Supprimer tous les fichiers ET dossiers des chemins spécifiés.
$ rm -r <chemin> …
```

```bash
# La même chose, mais sans demander de confirmation de suppression.
$ rm -rf <chemin> …
```

```bash
# La même chose, mais en demandant systematiquement une confirmation.
$ rm -ri <chemin> …
```

<div class="fragment">
{{#markdown}}
Et JAMAIS tu ne fera ça :
```bash
# Aussi connu sous le nom de "Barillette" chez Clever Age :)
$ rm -rf /
```
{{/markdown}}
</div>

{{/markdown}}