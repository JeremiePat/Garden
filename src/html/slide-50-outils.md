{{#markdown}}
### Gruntfile.js (2/2)

```javascript
module.exports = function(grunt) {

  // Configuration des taches.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // configuration de la tache "copy"
    copy: {
      // Configuration de la sous-tache "copy:images"
      images: {
        src : '**/*.{jpg,gif,png,svg}',
        dest: 'img/'
      }
    }
  });

  // Charger le plugin qui fourni la tache "copy".
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Définition de la tache par défaut.
  grunt.registerTask('default', ['copy']);
};
```
{{/markdown}}