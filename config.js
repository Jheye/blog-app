'use strict';

//Import values from here and use to configure values for the mongodb url ans port

exports.DATABASE_URL = process.env.DATABASE_URL ||
                         'mongodb://localhost/blog-app';

//Future URL for running our integration tests from test DB
// exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
//                       'mongodb://localhost/test-blogPost-app';

exports.PORT = process.env.PORT || 8080;