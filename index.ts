import express from 'express'
import routesAlunos from './routes/alunos'

const app = express()
const port = 3000

app.use(express.json())
app.use('/alunos', routesAlunos)

app.get('/', (req, res) => {
    res.send('Hello Wolrd')
})

app.listen(port, () =>{
    console.log(`API rondando na porta ${port}`)
})