module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            build: {
                options: {
                    force: true
                },
                src: 'dist/**/*'
            }
        },
        
        connect: {
            default: {
                options: {
                    port: 3000,
                    // Change this to '0.0.0.0' to access the server from outside.
                    hostname: 'localhost',
                    base: ['public'],
                    keepalive: true
                }
            },
            build: {
                options: {
                    port: 3000,
                    // Change this to '0.0.0.0' to access the server from outside.
                    hostname: 'localhost',
                    base: ['dist'],
                    keepalive: true
                }
            }
        },

        jshint: {
            all: ['app.js',
                  'public/scripts/**/*.js']
        },

        less: {
            build: {
                files: [{
                    src: 'public/styles/less/style.less',
                    dest: 'public/styles/css/style.css'
                }]
            }
        },

        useminPrepare: {
            html: 'public/index.html',
            options: {
                dest: 'dist',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        htmlmin: {
            build: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: ['**/*.html'],
                    dest: 'dist/'
                }]
            }
        },

        copy: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'public/',
                    src: ['*.{ico,png,txt}',
                          '**/*.html',
                          'img/**/*.*'],
                    dest: 'dist'
                }, {
                    expand: true,
                    flatten: true,
                    cwd: 'public',
                    src: ['**/fonts/**/*.*'],
                    dest: 'dist/fonts'
                }]
            }
        },

        usemin: {
            html: ['dist/{,*/}*.html'],
            css: ['dist/styles/{,*/}*.css'],
            js: ['dist/scripts/{,*/}*.js']
        },

        filerev: {
            build: {
                src: ['dist/scripts/{,*/}*.js',
                      'dist/styles/{,*/}*.css']
            }
        },

        watch: {
            default: {
                files: ['public/styles/**/*.less', 'public/scripts/**/*.js'],
                tasks: ['less', 'jshint']
            }
        },

        concurrent: {
            default: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: ['connect:default', 'watch:default']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', [
        'less',
        'jshint',
        'concurrent:default'
    ]);

    grunt.registerTask('build', [
        'clean',
        'less',
        'jshint',
        'useminPrepare',
        'copy:build',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin',
        'connect:build'
    ]);

};