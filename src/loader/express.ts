import express, {Request, Response} from 'express'
import cors from 'cors'
import config from '../app/config'
import connectToDB from '../utils/db'

const startServer = ()=>{
    const start:express.Express = express()
    try {
        start.listen(config.port, ()=>{
            console.log(`server running at http://localhost:${config.port}`)
        })
    } catch (error) {
        console.log('failed to start express')
        process.exit(0)
    }
    connectToDB()
    return start
}

export default ()=>{
    const app = startServer()
    // use express related middlewares
    app.use(cors())
    app.use(express.json())
    return app
}

// response for create express server