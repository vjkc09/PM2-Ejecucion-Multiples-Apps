module.exports = {
    apps: [{
        name: "project-1",
        script: "./Project-1/index.js",
        watch: true,
        env: {
            "NODE_ENV": "development",
        },
        env_production: {
            "NODE_ENV": "production"
        }
    }, {
        name: "project-2",
        script: "./Project-2/index.js",
        watch: true,
        env: {
            "NODE_ENV": "development",
        },
        env_production: {
            "NODE_ENV": "production"
        }
    }]
}