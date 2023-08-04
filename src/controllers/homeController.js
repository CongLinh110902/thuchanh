//2 tham số của express luôn là req, res
import db from "./../models/index"
let getHomePage = async (req, res) => {
    //Theo gì render ra dữ liệu trong controller thì mình sẽ gọi file HTML (view)
    //return res.send("hello world from controller")
    try {
        let users = await db.User.findAll() //lấy dữ liệu theo ORM - User là model (user.js), hoặc viết bằng SQL
        //cách 1: chuyển từ array sang object
        // users = users.map((row) => { return { id: row.id, firstName: row.firstName } })
        // cách 2: chuyển từ array sang object
        let objectUsers = Object.assign({}, users)
        // render chỉ render object
        return res.render('homePage.ejs', { data: objectUsers })
    } catch (e) {
        console.log(e)
    }


}
export default { getHomePage }