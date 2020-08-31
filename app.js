// 1
// use dotenv
// merupakan modul yang digunakan untuk memuat variabel konfigurasi ke dalam sebuah project.
require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// (Cross-Origin Resource Sharing) untuk memungkinkan javascript pada halaman yang berasal dari satu situs untuk mengakses metode di situs lain
const cors = require('cors')

// Mengimport yang ada didalam routes agar bisa digunakan
// ini versi sebelumnya, kurang efektif
// const productsRoutes = require("./src/routes/products");
// const categoriesRoutes = require("./src/routes/categories");
// const historiesRoutes = require("./src/routes/histories");

// yang ini sudah efektif
const routes = require('./src/routes')

// use modul
// parse
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// use cors
// Berguna agar tidak terkena block oleh browsernya
app.use(cors())

// Make router
// app.use("/products", productsRoutes);
// app.use("/categories", categoriesRoutes);
// app.use("/histories", historiesRoutes);

// Make routes index
app.use('/api/v1/', routes)

// Disini juga menggunakan dotenv agar lebih aman
const PORT = process.env.PORT

app.use('/uploads', express.static('./uploads'))
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})
