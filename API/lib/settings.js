exports = module.exports = () =>{
    return {
        http: {
            port: 3001 || process.env.port,
            host: 'localhost' || process.env.host
        }
    }

}

exports['@singleton'] = true;