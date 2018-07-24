# sinon-express-mock

Simple request and response mock objects to pass into Express routes when testing using Sinon.

The mock objects attach Sinon spys to request methods. See `src/index.js` for a full list of stubbed out methods.

## Install

```shell
npm install --save-dev sinon-express-mock sinon
```

Depends on:

* Node v4+ (or `Object.assign` support needed)
* Sinon

## Usage

Contents of `src/foo.js`:

```js
export default (req, res) => {
  res.json({ foo: req.body.foo })
}
```

Contents of `test/foo-test.js`:

```js
import route from '../src/foo'
import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import { mockReq, mockRes } from 'sinon-express-mock'

chai.use(sinonChai);

describe('my route', () => {
  it('should foo the bar', () => {
    const request = {
      body: {
        foo: 'bar',
      },
    }
    const req = mockReq(request)
    const res = mockRes()

    route(req, res)

    expect(res.json).to.be.calledWith({ foo: request.body.foo })
  })
})
```

## Changelog

### v2.0.3

* `res.write()` is now stubbed.

### v2.0.0

* Make sinon a `peerDependency`.

### v1.3.1

* Bundle fix from #3

### pre v1.3.1

* Changelog didn't exist! 😱

## Credits

Dana Woodman and [contributors](https://github.com/danawoodman/sinon-express-mock/graphs/contributors)

## License

MIT
