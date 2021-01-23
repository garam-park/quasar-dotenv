const { config, parse } = require('dotenv')

const defaultOptions = {
    encoding: 'utf8',
    examplePath: process.cwd()
}
module.exports = {
    config: function (options = {}) {

        const configOptions = { ...defaultOptions, ...options }
        const parsedEnv = config(configOptions).parsed

        let quasarEnv = {}

        if(parsedEnv){
            quasarEnv = { ...quasarEnv, ...parsedEnv }
        }

        const fs = require('fs')
        const path = require('path')
        const encoding = configOptions.encoding
        const baseEnvPath = path.resolve(configOptions.examplePath, '.env.example')
        const baseEnvBuffer = fs.readFileSync(baseEnvPath, { encoding })
        const baseEnv = parse(baseEnvBuffer)

        if(baseEnv){
            
            quasarEnv = { ...quasarEnv, ...baseEnv }

            for (const [key] of Object.entries(baseEnv)) {
                const tmp = process.env[key];
                if(tmp) quasarEnv[key] = tmp;
            }
            
        }
        return quasarEnv
    }
}
