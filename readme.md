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


## Usage

```js

// src/foo.js
export default (req, res) => {
  res.json({ foo: req.body.bar })
}

// test/foo-test.js
import route from '../src/foo'
import { mockReq, mockRes } from 'sinon-express-mock'

describe('my route', () => {
  it('should foo the bar', async () => {

    const body = {
      body: {
        foo: 'bar',
      },
    }
    const req = mockReq(body)
    const res = mockRes()

    route(req, res)

    expect(res.json).to.be.calledWith({ foo: body.foo.bar })
  })
})
```

## License

MIT
