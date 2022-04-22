const config = {
    database: {
        connection: "postgres://postgres:123456@localhost:5432/postgres",
    },
    api: {
        host: "localhost",
        port: 8080,
    },
    jwt: {
        secretKey: "secretKey123",
    },

    sendgrid: {
        secretKey: "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",
        fromEmail: "phamnam7221@gmail.com",
    },
    webClient: {
        url: "http://localhost:3000",
    },
};

module.exports = config;