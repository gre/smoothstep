var test = require('tape').test;
var smoothstep = require('./');

test('smoothstep returns correct values', function(t) {
    t.equal( smoothstep( 100, 200, 150 ), 0.5 );
    t.equal( smoothstep( 10, 20, 9 ), 0 );
    t.equal( smoothstep( 10, 20, 30 ), 1 );
    t.equal( smoothstep( 0, 1, 0.6 ), 0.648 );
    t.end();
});