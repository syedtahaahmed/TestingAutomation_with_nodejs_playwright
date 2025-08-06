const { exec } = require('child_process');
exports.runAlltests=(req,res,next)=>{
    try {
           exec('npx playwright test',{ shell: true }, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return res.status(500).json({ success: false, error: error.message });
        }
        if (stderr) {
          console.error(`Stderr: ${stderr}`);
        }
        console.log(`Stdout: ${stdout}`);
        res.json({ success: true });
      });
    } catch (error) {
        throw new Error(error);
        
    }
   
}

exports.runTestById=(req,res,next)=>{
   
    
};
exports.runBatchTests=(req,res,next)=>{

   
};
