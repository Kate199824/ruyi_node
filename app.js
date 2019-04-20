const express = require('express');
const path = require('path');
const https = require('https');
const app = express();

const connectServer = {
  port: '',
  protocol: 'https://',
  host: 'easy-mock.com/mock/5cb7f44dd6c1e752a6132591/api'
};

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/*', function(req, res) {
  const requestURL =
    'https://easy-mock.com/mock/5cb7f44dd6c1e752a6132591' + req.url;
  https
    .get(requestURL, sres => {
      const { statusCode } = sres;
      const contentType = sres.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('请求失败\n' + `状态码: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error(
          '无效的 content-type.\n' +
            `期望的是 application/json 但接收到的是 ${contentType}`
        );
      }
      if (error) {
        console.error(error.message);
        // 消费响应数据来释放内存。
        sres.resume();
        res.status(500).end();
        return;
      }

      sres.setEncoding('utf8');
      let rawData = '';
      sres.on('data', chunk => {
        rawData += chunk;
      });
      sres.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
          res.json(parsedData);
        } catch (e) {
          console.error(e.message);
          res.status(500).send(e.message);
        }
      });
    })
    .on('error', e => {
      console.error(`出现错误: ${e.message}`);
      res.status(500).end();
    });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/student', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'student.html'));
});
app.get('/studio', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'studio.html'));
});
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'about.html'));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
console.log('server is listening on port 9000');
