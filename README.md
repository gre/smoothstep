[![browser support](https://ci.testling.com/gre/smoothstep.png)](https://ci.testling.com/gre/smoothstep)

# smoothstep

[![frozen](http://badges.github.io/stability-badges/dist/frozen.svg)](http://github.com/badges/stability-badges)

Bare-bones [smoothstep function](http://en.wikipedia.org/wiki/Smoothstep) (cubic Hermite interpolation), returning a value in the range 0.0 to 1.0. 

Use:

```js
var smoothstep = require('smoothstep')

var res = smoothstep(a, b, t);
```

## Usage

[![NPM](https://nodei.co/npm/smoothstep.png)](https://nodei.co/npm/smoothstep/)

```smoothstep(min, max, t)```

Performs smoothstep from min to max using the given value, by clamping and then using cubic Hermite interpolation.

## License

BSD, see [LICENSE.md](http://github.com/gre/smoothstep/blob/master/LICENSE.md) for details.
