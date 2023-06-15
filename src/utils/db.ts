import mongoose from 'mongoose'
import config from '../app/config'

const connectToDB = ()=>{
    if(!config.CONNECTION_STRING) {
        console.log('No valid CONNECTION_STRING')
        process.exit(0)
    }
    mongoose.connect(config.CONNECTION_STRING)
    mongoose.connection.on('connected', ()=>{
        console.log('DB connected')
    })
    mongoose.connection.on('error', (error)=>{
        console.log(error)
        process.exit(1)
    })
    mongoose.connection.on('disconnected', ()=>{
        console.log('DB disconnected')
        process.exit(2)
    })
}

export default connectToDB
