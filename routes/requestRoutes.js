
const catalogBuilder = require('../services/catalogBuilder')
module.exports = (app) =>{
    app.post('/api/newrequest', (req, res) =>{
        console.log(req.params)
        const catalog = catalogBuilder('')
        var data = {
            catalog
        }
        res.send(data)
    })
}