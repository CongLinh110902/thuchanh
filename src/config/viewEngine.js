//không dùng require
import express from "express"
let configViewEngine = (app) => {
    app.use(express.static('./src/public'))//cho phép truy cập vào public
    //app.use(express.static(__dirname+"/public"))
    app.set("view engine", "ejs") //view engine sử dụng là ejs - thư viện này đã được cài đặt

    app.set("views", "./src/views") //các file ejs phải được viết trong thư mục views, phía sau là đường link tới thư mục

}
//dùng default thì import không được phép dùng dấu {}
//không viết module.exports=configViewEngine
export default configViewEngine