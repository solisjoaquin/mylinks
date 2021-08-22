const { parsed } = require('dotenv').config();
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { env: parsed }) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;

    return {
        env: {
            REDIRECT_URI: isDev
                ? "htpp://localhost:3000/api/callback"
                : "htpps://mylinks.vercel.app/api/callback",
            POST_LOGOUT_REDIRECT_URI: isDev ?
                "htpp://localhost:3000/secret"
                : "htpps://mylinks.vercel.app/secret",
            AUTH0_SCOPE: "openid profile",
            SERVER_URL: isDev ?
                "htpp://localhost:3000/"
                : "htpps://mylinks.vercel.app"

        }
    }
}