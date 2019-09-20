//exporrt grunt module to grunt command
module.exports = function(grunt){
    console.log("this is grunt file");
    grunt.initConfig({  //initialize the configurations to configure plugins
       pkg: grunt.file.readJSON('package.json'),  //read package.json for 
        karma: {
        unit: {
    configFile: 'karma.conf.js'
  }
}
    });
    //load the plugin
    grunt.loadNpmTasks('grunt-karma');
    //register the task to manage or run all the task
    grunt.registerTask("default",['karma']); //['clean','cssmin','uglify:admintarget']);
};