import dotenv from 'dotenv'

dotenv.config()
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

const config = {
    port:process.env.PORT || 4000,
    CONNECTION_STRING:process.env.CONNECTION_STRING || 'mongodb+srv://{name}:{key}@cluster0.h0l0o2w.mongodb.net/{db}',
    API_PREFIX:process.env.API_PREFIX || '/api/v1',
}

export default config