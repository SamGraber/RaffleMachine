(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'source', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'lodash':                     'node_modules/lodash',
	'toastr':                     'node_modules/toastr',
	'jquery':                     'node_modules/jquery',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    '@angular2-material':         'node_modules/@angular2-material',
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.browser.js',  defaultExtension: 'js' },
    'rxjs':                       { main: 'rx.js', defaultExtension: 'js' },
    'lodash':                     { main: 'lodash.js', defaultExtension: 'js' },
    'toastr':                     { main: 'toastr.js', defaultExtension: 'js' },
    'jquery':                     { main: 'dist/jquery.js', defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
	'@angular2-material/core':    { main: 'core.js' },
	'@angular2-material/input':   { main: 'input.js' },
	'@angular2-material/toolbar': { main: 'toolbar.js' },
	'@angular2-material/button':  { main: 'button.js' },
	'@angular2-material/list':    { main: 'list.js' },
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
