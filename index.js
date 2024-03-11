const express = require('express')
const app = express()
const port = 3000

app.get('/palabra', (req, res) => {
    res.send('Totalmente de acuerdo con la desconocida 01001101')
})

app.listen(port, () => {
    console.log('La aplicación se está ejecutando por el puerto' + port)
})