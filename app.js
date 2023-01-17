import express from "express";

import { omikujiRouter } from "./routes/omikuji.route.js";
import { jankenRouter } from "./routes/janken.route.js";

const app = express();
// POSTでデータを受け取るために必要
app.use(express.urlencoded({ extended: true }));
// JSONデータを使用するために必要
app.use(express.json());
const port = 3001;

// Hello World
app.get("/", (req, res) => {
  // res.send("Hello Node.js!");
  res.json({
    uri: "/",
    message: "Hello Node.js!!!!"
  })
});

// おみくじの処理
// app.get("/omikuji", (req, res) => {
//   const omikuji = ["大吉", "吉", "中吉", "小吉", "末吉", "凶"];
//   const min = 0;
//   const max = omikuji.length - 1;
//   const index = Math.floor(Math.random() * (max - min + 1) + min);
//   res.json({
//     uri: "/omikuji",
//     message: omikuji[index]
//   })
// });

// じゃんけんの処理
// app.get("/janken", (req, res) => {
//   res.json({
//     uri: "/",
//     message: "janken!!!!"
//   })
// });

// おみくじ処理をroute/controller/serviceでわけた
app.use("/omikuji", (req, res) => omikujiRouter(req, res));

// じゃんけん処理をroute/controller/serviceでわけた
app.use("/janken", (req, res) => jankenRouter(req, res));


// サーバーの立ち上げ
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
