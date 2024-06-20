const data = require('../../data');

module.exports = (req, res) => {
  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    const parseBody = new URLSearchParams(body);
    const name = parseBody.get('name');
    const age = parseBody.get('age');

    if (name && age) {
      const user = { name, age: parseInt(age) };
      data.addUsers(user);
      res.writeHead(200);
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: "Name and age are required" }));
    }
  });
};