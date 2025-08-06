const { exec } = require('child_process');
exports.runAllRespots=(req,res,next)=>{
    try {
        exec('npx playwright show-report', (error) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ success: false });
    }
    res.json({ success: true, message: "Report opened in browser" });
  });
    } catch (error) {
        throw new Error(error);
        
    }
   
}

exports.runReportById=(req,res,next)=>{
   
    
};
exports.runBatchReports=(req,res,next)=>{

   
};
