/*global module */

module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        lint: {
            files: [
                'grunt.js',
                'jquery-simple-touch.js'
            ]
        },
        uglify: {
            options: {
                banner: '/**\n' +
                        ' * <%= pkg.name %> \n' +
                        ' * <%= pkg.description %>  \n' +
                        ' * @author <%= pkg.author %>\n' +
                        ' * @version <%= pkg.version %> [<%= grunt.template.today("yyyy-mm-dd") %>]\n' +
                        ' */\n'
            },
            build: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint'
        },
        jshint: {
            options: {
                "asi": false,
                "bitwise": true,
                "boss": false,
                "browser": true,
                "couch": false,
                "curly": true,
                "debug": false,
                "devel": false,
                "dojo": false,
                "eqeqeq": true,
                "eqnull": false,
                "es5": false,
                "esnext": false,
                "evil": false,
                "expr": false,
                "forin": true,
                "funcscope": false,
                "globalstrict": false,
                "immed": true,
                "iterator": false,
                "jquery": false,
                "lastsemic": false,
                "latedef": true,
                "laxbreak": false,
                "laxcomma": false,
                "loopfunc": false,
                "mootools": false,
                "multistr": false,
                "newcap": true,
                "noarg": true,
                "node": false,
                "noempty": true,
                "nomen": false,
                "nonew": false,
                "nonstandard": true,
                "onecase": false,
                "onevar": true,
                "passfail": false,
                "plusplus": false,
                "proto": false,
                "prototypejs": false,
                "regexdash": false,
                "regexp": true,
                "rhino": false,
                "scripturl": false,
                "shadow": false,
                "smarttabs": true,
                "strict": true,
                "sub": false,
                "supernew": false,
                "trailing": true,
                "undef": true,
                "validthis": false,
                "white": true,
                "wsh": false
            },
            globals: {
                jQuery: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};
