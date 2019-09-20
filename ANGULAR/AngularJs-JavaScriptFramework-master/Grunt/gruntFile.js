//exporrt grunt module to grunt command
module.exports = function (grunt) {
    console.log("this is grunt file");
    grunt.initConfig({ //initialize the configurations to configure plugins
        pkg: grunt.file.readJSON('package.json'), //read package.json for grunt plugins
        clean: ['release'],
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'release/output.css': ['stylesheet/*.css'], //combining css of one project
                    //                    'output2.css': ['folder/*.css'],     // combining css of other project

                }
            }
        },
        uglify: {
            admintarget: {

                files: {
                    'release/output.min.js': ['js1/*.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.*'],
                tasks: ['clean', 'cssmin', 'uglify:admintarget'], //watch see which file is changed and it restart the grunt
                options: {
                    spawn: false,
                },
            },
        }
    });
    //load the plugin
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //register the task to manage or run all the task
    grunt.registerTask("default", ['watch']); //['clean','cssmin','uglify:admintarget']);
};
