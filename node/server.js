// --> Backend NodeJS
// ติดตั้งตัว npm i -g nodemon เพื่อทำการ run ค้างตลอดเวลา

// 1. npm i express --save
// เรียกใช้ตัว express library
const express = require('express');
// const app = express();

// 4.2
// เรียกใช้ตัว bodyparser library [require เหมือน import]
// npm i body-parser --save
// body parser คือตัวแปลงโค้ด ได้แก่พวก JSON
const bodyParser = require('body-parser');

const app = express();

require('./db')
const FeedbackModel = require('./feedback_schema');

// 4.3
// ให้ app ใช้ body-parser เป็นล่ามในการแปรพารามิเตอร์เป็น json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


// Allow client to access cross domain or ip-address
// การแก้ไข cross origin resource sharing!!! 
// --> เหมือนเรารัน front ใน port 4200 แต่เราดันขอดึง request server ที่ port 3000 หรือ port อื่น เหมือนมันเป็นการ แอบดึงข้อมูลแบบผิดกฏ
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');  // อนุญาติทุก port ที่การส่งข้อมูล
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // อนุญาติทุกๆ operation
    res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// 3.
app.get('/', (req, res) => {
    res.end("Welcome to root path");
})
app.get('/home', (req, res) => {
    res.end("Welcome to root Home");
})

// 4.1 ถ้าเป็น post ตอนส่งพารามิเตอร์ควรกำหนดเป็น json 
app.post('/api', (req, res) => {
    const feedback = req.body.feedback;
    const email = req.body.email;
    const name = req.body.name;
    // res.end("Received Feedback: " + feedback + ", username : " + username);
    // res.json({result:"success", username: username, feedback: feedback});

    FeedbackModel.create(req.body, (err, doc)=>{
        if(err) res.json({ result:"failed" });
        res.json({result:"success", email: email, name: name, feedback: feedback});
    })
});

app.get('/api', (req, res) => {
    FeedbackModel.find((err, doc) => {
        if(err) res.json({ result:"failed" });
        res.json({result: "success", data: doc});
    })
});

// 2. ให้ฝั่ง backend เป็น port 3000
app.listen(3000, () => {
    console.log("server is running.....?");
})