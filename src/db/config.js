module.exports = {
    DB: process.env.VUE_APP_MONGOLAB_URI || "mongodb://localhost:27017/vdatabase",
    BASE_URL: process.env.VUE_APP_API_URL || "http://localhost:4000/api"
}
