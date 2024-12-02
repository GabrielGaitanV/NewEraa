const indexController = {

    //renderizado de todas las vistas
    index: (req,res) => {
        res.render("index")
    },

    us: (req, res) => {
        res.render("us")
    },

    contact:(req, res) => {
        res.render("contact")
    }
}

module.exports = indexController;