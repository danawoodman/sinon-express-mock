import sinon from 'sinon'

// Returns a new mock request for use in testing.
export const mockReq = (options = {}) => {
  return Object.assign({
    session: {},
    params: {},
    body: {},
    query: {},
    flash: sinon.spy(),
  }, options)
}

// Returns a new mock response for use in testing.
export const mockRes = (options = {}) => {
  return Object.assign({
    json: sinon.spy(),
    redirect: sinon.spy(),
    render: sinon.spy(),
    sendStatus: sinon.spy(),
    locals: {},
  }, options)
}
