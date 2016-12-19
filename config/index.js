var configValues = require('./config.json');

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds139448.mlab.com:39448/nodetodo';
  }
}
