const conn = require('../config/connect')

module.exports = {
  getCategory: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM tb_kategori', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertCategory: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO tb_kategori SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateCategory: (id_kategori, data) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE tb_kategori SET ? WHERE id_kategori=?', [data, id_kategori], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    }) 
  },
  deleteCategory: (id_kategori) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM tb_kategori WHERE id_kategori=?', id_kategori, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
