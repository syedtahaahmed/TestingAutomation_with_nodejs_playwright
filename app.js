const express = require('express');
const { exec } = require('child_process');
const testsRouter=require('./routes/tests.routes')
const reportRouter=require('./routes/reports.routes')
const app = express();
const PORT = 3003;

app.use(express.static('public'));
app.use("/",testsRouter);

app.use("/",reportRouter);
//global error handling
app.use((error,req,res,next)=>{
    res.status(500).send(error);
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});






// const express = require('express');
// const { exec } = require('child_process');
// const app = express();
// const PORT = 3003;

// app.use(express.static('public')); // Serves index.html

// app.get('/run-tests', (req, res) => {
//   exec('npx playwright test', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error: ${error.message}`);
//       return res.status(500).json({ success: false, error: error.message });
//     }
//     if (stderr) {
//       console.error(`Stderr: ${stderr}`);
//     }
//     console.log(`Stdout: ${stdout}`);
//     res.json({ success: true });
//   });
// });

// app.get('/report', (req, res) => {
//   exec('npx playwright show-report', (error) => {
//     if (error) {
//       console.error(error);
//       return res.status(500).json({ success: false });
//     }
//     res.json({ success: true, message: "Report opened in browser" });
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
