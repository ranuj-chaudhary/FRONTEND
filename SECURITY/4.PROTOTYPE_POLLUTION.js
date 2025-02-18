const SOMEOBJECT = {};

app.get('/validateToken', (req, res) => {
  if (req.header('token')) {
    const token = Buffer.from(req.header('token'), 'base64');
    if (SOMEOBJECT[token] === token) {
      return res.send('true');
    }
  }
  return res.send('false');
});

// each object has prototype if send proto token
// if token === '__proto__'

app.get('/validateToken', (req, res) => {
  if (req.header('token')) {
    const token = Buffer.from(req.header('token'), 'base64');
    if (SOMEOBJECT['__proto__'] === '__proto__') {
      // due to protype pollution response will be sent true
      return res.send('true');
    }
  }
  return res.send('false');
});

// SOLUTION
// SOMEOBJECT.hasOwnProperty(token)

app.get('/validateToken', (req, res) => {
  if (req.header('token')) {
    const token = Buffer.from(req.header('token'), 'base64');
    if (SOMEOBJECT.hasOwnProperty(token) === token) {
      // due to protype pollution response will be sent true
      return res.send('true');
    }
  }
  return res.send('false');
});
