import options from '../config/orm';
import fs = require('fs');

fs.writeFileSync('ormconfig.json', JSON.stringify(options, null, 2));
