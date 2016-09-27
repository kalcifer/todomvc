module.exports = function(grunt){
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ['babelify', {presets: ['es2015']}]
                    ]
                },
                src: ['js/app.js', 'js/constants/*.js', 'js/actions/*.js', 'js/controllers/*.js', 'js/services/*.js', 'js/directives/*.js', 'js/reducers/*.js'],
                dest: 'dist/app.js'
            }
        },
        watch: {
            scripts: {
                files: ['js/**/*.js'],
                task: ['browserify:dist']
            }
        }
    })
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['browserify:dist'])
}
