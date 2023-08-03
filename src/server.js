import express from "express" // đã sử dụng import là dùng import hết, không dùng require
import bodyParser from "body-parser" //file này hỗ trợ lấy các tham số từ client gửi lên, ví dụ: query param user?id=7, muốn lấy 7
import viewEngine from "./config/viewEngine"
import initWebRoute from "./route/web"
//để chạy được dòng code : process.env.PORT
import dotenv from "dotenv"
dotenv.config()
//tạo instance của express
let app = express()
//config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

viewEngine(app)
initWebRoute(app)

let port = process.env.PORT || 6969
app.listen(port, () => {
    //callback
    console.log("Backend nodejs is running on port: " + port)
})
