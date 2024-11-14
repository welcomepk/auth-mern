import { config as conf } from "dotenv"

conf()

interface Config {
    port: string;
    dbConnectionUrl: string;
    env: string;
    jwtSecret: string;
    jwtRefreshSecret: string;
}
const _config: Config = {
    port: process.env.PORT as string,
    dbConnectionUrl: process.env.MONGO_URI as string,
    env: process.env.NODE_ENV as string,
    jwtSecret: process.env.JWT_SECRET as string,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET as string
}

export const config = Object.freeze(_config)    