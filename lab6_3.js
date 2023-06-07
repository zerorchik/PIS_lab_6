const http = require('http')

// Створення серверу
const server = http.createServer((req, res) => {
  // Якщо корінь
  if (req.url === '/') {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    const data = {
      message: 'Home',
    }
    res.end(JSON.stringify(data))
    // Якщо логін у мудлі
  } else if (req.url === '/is-12fiot-21-159') {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    const data = {
      name: 'Софія',
      surname: 'Павлова',
      course: '2',
      group: 'ІС-12',
    }
    res.end(JSON.stringify(data))
  }
  // Інше = помилка
  else {
    res.statusCode = 404
    res.end('Not found')
  }
})

// Звернення до сервера і запуск прослуховування відповідей в порту 3000
const port = 3000
server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
