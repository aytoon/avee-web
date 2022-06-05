const express = require('express')
const app = express()
const port = 8080

// Statics

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('/', (req, res) => {
  res.render('index.ejs')
})

// app.get('/about', (req, res) => {
//  res.sendFile(__dirname + '/views/about.html')
// })

// Listen Port
app.listen(port, () => {
  console.info(`☕ Website is going to a coffee at port ${port}`)
})