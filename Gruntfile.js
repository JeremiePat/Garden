/*global module*/

module.exports = function (grunt) {
  'use strict';

  // Initialize grunt
  grunt.initConfig({
    // Read meta-data from the package.json file
    pkg: grunt.file.readJSON('package.json'),

    // Define the "copy" tasks
    copy: {
      // copy:scripts roughly copy js source into the build directory
      scripts : {
        files : [
          {
            expand: true,
            cwd : 'src/js/',
            src : ['**/*.js'],
            dest: 'build/js/'
          }
        ]
      },

      // copy:assets roughly copy img and fonts into the build directory
      assets : {
        files : [
          {
            expand: true,
            cwd : 'src/img/',
            src : ['**/*.*'],
            dest: 'build/img/'
          },
          {
            expand: true,
            cwd : 'src/fonts/',
            src : ['**/*.*'],
            dest: 'build/fonts/'
          }
        ]
      }
    },

    // Define the "compass" tasks
    compass: {
      dev: {
        options: {
          config: 'config.rb',
          bundleExec: true,
          force: true
        }
      }
    },

    // Define the "assemble" tasks
    assemble: {
      options: {
        assets: 'build/',
        data: 'src/html/_data/*.json',
        helpers: ['src/html/_helpers/*.js', 'helper-aggregate'],
        partials: 'src/html/_inc/*.{md,html}',
        layoutdir: 'src/html/_layouts',
        layout: 'default.html',

        // Prettify helpers configuration
        prettify: {
          indent: 2,
          condense: true,
          newlines: true
        }
      },

      html: {
        files: [{
          expand: true,
          cwd : 'src/html/',
          src : ['**/*.html', '!_**/*.html', '!**/_*.html'],
          dest: 'build/'
        }]
      }
    },

    // define the "connect" task
    connect: {
      options: {
        base: 'build'
      },
      basic : {
        options: {
          livereload: true,
        }
      },
      server: {
        options : {
          keepalive : true
        }
      }
    },

    // Define the "watch" task
    watch: {
      options: {
        livereload: true,
      },
      html : {
        files: ['src/html/**/*.*'],
        tasks: ['html']
      },
      css : {
        files: 'src/sass/**/*.scss',
        tasks: ['css']
      },
      assets : {
        files: ['src/js/**/*.js', 'src/img/**/*.*', 'src/fonts/**/*.*'],
        tasks: ['scripts', 'images']
      }
    }
  });

  // Load relevant grunt task (available as NPM plug-in)
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Define some extra task for command line usage
  grunt.registerTask('html',    ['assemble:html']);
  grunt.registerTask('css',     ['compass:dev']);
  grunt.registerTask('scripts', ['copy:scripts']);
  grunt.registerTask('images',  ['copy:assets']);
  grunt.registerTask('build',   ['images', 'css', 'scripts', 'html']);
  grunt.registerTask('live',    ['connect:basic', 'watch']);
};