import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser';

import {router} from './routes'

const app = express()
const port = 3000;

const corsOptions = {origin: "http://localhost:8080"}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(router)

app.listen(port, ()=> console.log(`Server is running on port ${port}`))