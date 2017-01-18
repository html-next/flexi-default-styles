/*jshint node:true*/
module.exports = {
  description: 'Installs config',

  afterInstall: function(options) {
    return this.addAddonToProject({ name: 'flexi-config' });
  }
};
