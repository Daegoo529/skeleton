// const express = require('express');

// const fs = require('fs/promises');

// const path = require('path');

// const app = express();

// const port = 3000;

// const dataFilePath = path.join(__dirname, '../db/db.json');

// app.use(express.json());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');

//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');

//   res.header('Access-Control-Allow-Headers', 'Content-Type');

//   next();
// });

// // 모든 데이터 가져오기
// app.get('/api/data', async (req, res) => {
//   try {
//     const data = await readDataFile();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({
//       error: 'Internal Server Error',
//     });
//   }
// });
