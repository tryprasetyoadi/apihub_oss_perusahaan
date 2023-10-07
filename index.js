const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Konfigurasi database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'example_struct',
});

db.connect((err) => {
  if (err) {
    console.error('Koneksi database gagal: ' + err.stack);
    return;
  }
  console.log('Terhubung ke database dengan ID ' + db.threadId);
});

// Endpoint untuk membuat data baru
app.post('/perusahaan', (req, res) => {
  const data = req.body;
  db.query(
    'INSERT INTO oss_01_perusahaan SET ?',
    data,
    (err, result) => {
      if (err) {
        console.error('Gagal menambahkan data perusahaan: ' + err);
        res.status(500).json({ error: 'Gagal menambahkan data perusahaan' });
        return;
      }
      res.status(201).json({ message: 'Data perusahaan berhasil ditambahkan' });
    }
  );
});

// Endpoint untuk membaca data perusahaan
app.get('/perusahaan', (req, res) => {
  db.query('SELECT * FROM oss_01_perusahaan', (err, results) => {
    if (err) {
      console.error('Gagal membaca data perusahaan: ' + err);
      res.status(500).json({ error: 'Gagal membaca data perusahaan' });
      return;
    }
    res.json(results);
  });
});

// Endpoint untuk mengupdate data perusahaan
app.put('/perusahaan/:record_id', (req, res) => {
  const record_id = req.params.record_id;
  const data = req.body;
  db.query(
    'UPDATE oss_01_perusahaan SET ? WHERE record_id = ?',
    [data, record_id],
    (err, result) => {
      if (err) {
        console.error('Gagal mengupdate data perusahaan: ' + err);
        res.status(500).json({ error: 'Gagal mengupdate data perusahaan' });
        return;
      }
      res.json({ message: 'Data perusahaan berhasil diupdate' });
    }
  );
});

// Endpoint untuk menghapus data perusahaan
app.delete('/perusahaan/:record_id', (req, res) => {
  const record_id = req.params.record_id;
  db.query(
    'DELETE FROM oss_01_perusahaan WHERE record_id = ?',
    record_id,
    (err, result) => {
      if (err) {
        console.error('Gagal menghapus data perusahaan: ' + err);
        res.status(500).json({ error: 'Gagal menghapus data perusahaan' });
        return;
      }
      res.json({ message: 'Data perusahaan berhasil dihapus' });
    }
  );
});

// Endpoint untuk membuat data pemegang saham baru
app.post('/pemegang_saham', (req, res) => {
    const data = req.body;
    db.query(
      'INSERT INTO oss_02_pemegang_saham SET ?',
      data,
      (err, result) => {
        if (err) {
          console.error('Gagal menambahkan data pemegang saham: ' + err);
          res.status(500).json({ error: 'Gagal menambahkan data pemegang saham' });
          return;
        }
        res.status(201).json({ message: 'Data pemegang saham berhasil ditambahkan' });
      }
    );
  });
  
  // Endpoint untuk membaca data pemegang saham
  app.get('/pemegang_saham', (req, res) => {
    db.query('SELECT * FROM oss_02_pemegang_saham', (err, results) => {
      if (err) {
        console.error('Gagal membaca data pemegang saham: ' + err);
        res.status(500).json({ error: 'Gagal membaca data pemegang saham' });
        return;
      }
      res.json(results);
    });
  });
  
  // Endpoint untuk mengupdate data pemegang saham
  app.put('/pemegang_saham/:record_id', (req, res) => {
    const record_id = req.params.record_id;
    const data = req.body;
    db.query(
      'UPDATE oss_02_pemegang_saham SET ? WHERE record_id = ?',
      [data, record_id],
      (err, result) => {
        if (err) {
          console.error('Gagal mengupdate data pemegang saham: ' + err);
          res.status(500).json({ error: 'Gagal mengupdate data pemegang saham' });
          return;
        }
        res.json({ message: 'Data pemegang saham berhasil diupdate' });
      }
    );
  });
  
  // Endpoint untuk menghapus data pemegang saham
  app.delete('/pemegang_saham/:record_id', (req, res) => {
    const record_id = req.params.record_id;
    db.query(
      'DELETE FROM oss_02_pemegang_saham WHERE record_id = ?',
      record_id,
      (err, result) => {
        if (err) {
          console.error('Gagal menghapus data pemegang saham: ' + err);
          res.status(500).json({ error: 'Gagal menghapus data pemegang saham' });
          return;
        }
        res.json({ message: 'Data pemegang saham berhasil dihapus' });
      }
    );
  });
  
  // Endpoint untuk membuat data penanggung jawab baru
  app.post('/penanggung_jawab', (req, res) => {
    const data = req.body;
    db.query(
      'INSERT INTO oss_03_penanggung_jawab SET ?',
      data,
      (err, result) => {
        if (err) {
          console.error('Gagal menambahkan data penanggung jawab: ' + err);
          res.status(500).json({ error: 'Gagal menambahkan data penanggung jawab' });
          return;
        }
        res.status(201).json({ message: 'Data penanggung jawab berhasil ditambahkan' });
      }
    );
  });
  
  // Endpoint untuk membaca data penanggung jawab
  app.get('/penanggung_jawab', (req, res) => {
    db.query('SELECT * FROM oss_03_penanggung_jawab', (err, results) => {
      if (err) {
        console.error('Gagal membaca data penanggung jawab: ' + err);
        res.status(500).json({ error: 'Gagal membaca data penanggung jawab' });
        return;
      }
      res.json(results);
    });
  });
  
  // Endpoint untuk mengupdate data penanggung jawab
  app.put('/penanggung_jawab/:record_id', (req, res) => {
    const record_id = req.params.record_id;
    const data = req.body;
    db.query(
      'UPDATE oss_03_penanggung_jawab SET ? WHERE record_id = ?',
      [data, record_id],
      (err, result) => {
        if (err) {
          console.error('Gagal mengupdate data penanggung jawab: ' + err);
          res.status(500).json({ error: 'Gagal mengupdate data penanggung jawab' });
          return;
        }
        res.json({ message: 'Data penanggung jawab berhasil diupdate' });
      }
    );
  });
  
  // Endpoint untuk menghapus data penanggung jawab
  app.delete('/penanggung_jawab/:record_id', (req, res) => {
    const record_id = req.params.record_id;
    db.query(
      'DELETE FROM oss_03_penanggung_jawab WHERE record_id = ?',
      record_id,
      (err, result) => {
        if (err) {
          console.error('Gagal menghapus data penanggung jawab: ' + err);
          res.status(500).json({ error: 'Gagal menghapus data penanggung jawab' });
          return;
        }
        res.json({ message: 'Data penanggung jawab berhasil dihapus' });
      }
    );
  });
  
  // Endpoint untuk membuat data legalitas baru
  app.post('/legalitas', (req, res) => {
    const data = req.body;
    db.query(
      'INSERT INTO oss_04_legalitas SET ?',
      data,
      (err, result) => {
        if (err) {
          console.error('Gagal menambahkan data legalitas: ' + err);
          res.status(500).json({ error: 'Gagal menambahkan data legalitas' });
          return;
        }
        res.status(201).json({ message: 'Data legalitas berhasil ditambahkan' });
      }
    );
  });
  
  // Endpoint untuk membaca data legalitas
  app.get('/legalitas', (req, res) => {
    db.query('SELECT * FROM oss_04_legalitas', (err, results) => {
      if (err) {
        console.error('Gagal membaca data legalitas: ' + err);
        res.status(500).json({ error: 'Gagal membaca data legalitas' });
        return;
      }
      res.json(results);
    });
  });
  
  // Endpoint untuk mengupdate data legalitas
  app.put('/legalitas/:record_id', (req, res) => {
    const record_id = req.params.record_id;
    const data = req.body;
    db.query(
      'UPDATE oss_04_legalitas SET ? WHERE record_id = ?',
      [data, record_id],
      (err, result) => {
        if (err) {
          console.error('Gagal mengupdate data legalitas: ' + err);
          res.status(500).json({ error: 'Gagal mengupdate data legalitas' });
          return;
        }
        res.json({ message: 'Data legalitas berhasil diupdate' });
      }
    );
  });
  
  // Endpoint untuk menghapus data legalitas
  app.delete('/legalitas/:record_id', (req, res) => {
    const record_id = req.params.record_id;
    db.query(
      'DELETE FROM oss_04_legalitas WHERE record_id = ?',
      record_id,
      (err, result) => {
        if (err) {
          console.error('Gagal menghapus data legalitas: ' + err);
          res.status(500).json({ error: 'Gagal menghapus data legalitas' });
          return;
        }
        res.json({ message: 'Data legalitas berhasil dihapus' });
      }
    );
  });
  

app.listen(port, () => {
  console.log('Server berjalan di port ' + port);
});
