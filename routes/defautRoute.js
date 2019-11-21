
const catalogBuilder = require('../services/catalogBuilder')
module.exports = (app) =>{
    app.get('/api/default', (req, res) =>{
        const catalog = catalogBuilder("PLACE INSTANCE")
        var data = {
            catalog
        }
        res.send(data)
    })
}