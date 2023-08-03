//2 tham số của express luôn là req, res
let getHomePage = (req, res) => {
    //Theo gì render ra dữ liệu trong controller thì mình sẽ gọi file HTML (view)
    //return res.send("hello world from controller")
    return res.render('homePage.ejs')
}
export default { getHomePage }