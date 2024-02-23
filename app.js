const express = require('express');
const app = express();
require('dotenv').config();
//port env파일로 가져오면 문제가 생긴다 listen 매개변수에 넣을때 문제가 생김
// 문자열로 들어가서 문제인가했는데 Number()로해도 안되어서 추후 찾아봐야할 듯
const PORT = 8000;

//미들웨어 설정
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

//라우터 설정
const router = require('./routes');
app.use('/', router);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
