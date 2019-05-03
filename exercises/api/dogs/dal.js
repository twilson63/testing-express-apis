let sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database(':memory:')

module.exports = {
  post,
  all
}

db.serialize(function () {
  db.run('CREATE TABLE dogs (_id TEXT, _rev TEXT, name TEXT, breed TEXT)')
})

function post(_id, name, breed) {
  db.serialize(function () {
    let stmt = db.prepare('INSERT INTO dogs VALUES(?, ?, ?, ?)')
    stmt.run(_id, "1-1", name, breed)
    stmt.finalize()
  })
  return Promise.resolve({ok: true})
}

function all() {
  return new Promise(function(resolve, reject) {
    db.serialize(function() {
      db.all('SELECT * FROM dogs', (err, res) => {
        if (err) { reject(err) }
        resolve(res)
      })
    })
  })
}


