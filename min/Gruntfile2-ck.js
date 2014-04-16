module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),src:"src/*.js",clean:{dist:["dist"]},less:{files:{"css/style.css":"less/style.less"}},less:{development:{files:{"css/style.css":"less/style.less"}},production:{options:{cleancss:!0},files:{"css/style.css":"less/style.less"}}},requirejs:{options:{baseUrl:"src",include:["FamilySearch"],wrap:{startFile:"src/header.frag",endFile:"src/footer.frag"}},dev:{options:{out:"dist/familysearch-javascript-sdk.js",optimize:"none"}},prod:{options:{out:"dist/familysearch-javascript-sdk.min.js",optimize:"uglify2"}}},connect:{server:{options:{port:9e3,open:"http://localhost:9000/",livereload:!0}}},watch:{files:["<%= src %>","!js/familysearch-javascript-sdk.js","js/*.js","less/*.less","templates/**/*.html","Gruntfile.js"],tasks:["hogan","less:development"],options:{livereload:!1,spawn:!1}},hogan:{publish:{options:{prettify:!0,namespace:"fsWidgetTemplates",defaultName:function(s){return s.split("/").pop()}},files:{"js/fs-widget-templates.js":["templates/**/*.html"]}}}}),s.loadNpmTasks("grunt-contrib-clean"),s.loadNpmTasks("grunt-contrib-jshint"),s.loadNpmTasks("grunt-contrib-connect"),s.loadNpmTasks("grunt-contrib-watch"),s.loadNpmTasks("grunt-karma"),s.loadNpmTasks("grunt-requirejs"),s.loadNpmTasks("grunt-contrib-hogan"),s.loadNpmTasks("grunt-contrib-less"),s.registerTask("default",["build"])};