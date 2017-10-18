
class GlobalFlavors {
  constructor(){
    var data = require('./data.json');
    this.flavors = data.flavors;
    this.names = data.names;
  }
}

// Singleton
export default (new GlobalFlavors());