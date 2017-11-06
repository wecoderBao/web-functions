
seajs.config({
  // Set aliases for common libraries
  alias: {
    '$': 'jquery/1.8.2/jquery-min-1.8.2.js',
    'ztree' : 'plugin/ztree/3.5/jquery.ztree.all-3.5.js'
  },

  // Add plugins
  plugins: ['shim'],

  // Configure shim for non-CMD modules
  shim: {
    '$': {
      exports: 'jQuery'
    },
    'ztree': {
      deps: ['$']
    }
  }
});

