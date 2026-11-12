const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
    testDir: "./tests",

    reporter: "html",

    use: {
        baseURL: "http://localhost:8000",
        browserName: "chromium",
        headless: true
    }
});