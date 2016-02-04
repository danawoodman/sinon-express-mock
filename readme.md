# sinon-express-mock

Simple request and response mock objects to pass into Express routes when testing using Sinon.

The mock objects attach Sinon spys to request methods. Currently that list includes:

- `locals`
- `render()`
- `json()`
- `redirect()`
- `sendStatus()`


## Install

```shell
npm install --save-dev sinon-express-mock
```

Depends on:

- Node v4+ (or `Object.assign` support needed)
- Sinon


## Usage

Contents of `src/foo.js`:

```js
export default (req, res) => {
  res.json({ foo: req.body.bar })
}
```

Contents of `test/foo-test.js`:

```js
import route from '../src/foo'
import { mockReq, mockRes } from 'sinon-express-mock'

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

    expect(res.json).to.be.calledWith({ foo: request.body.foo.bar })
  })
})
```

## License

MIT
