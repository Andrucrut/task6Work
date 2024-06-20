const data = require('../../data');

module.exports = (req, res) => {
  const id = parseInt(req.url.split('/')[2]);
  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    const parseBody = new URLSearchParams(body);
    const updateData = {};
    parseBody.forEach((value, key) => {
      updateData[key] = key === 'age' ? parseInt(value) : value;
    });

    const updatedUser = data.updateUser(id, updateData);

    if (updatedUser) {
      res.writeHead(200);
      res.end(JSON.stringify(updatedUser));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'User not found' }));
    }
  });
};
