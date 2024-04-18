const {getAllHealthLogs,createHealthLog,updateHealthLog,deleteHealthLog,getuserHealthLogs,getHealthLogdates}=require("../services/healthlogs.service");

const getAllHealthLogsData = async (req, res) => {
    try {
        const healthlogs = await getAllHealthLogs();
        res.status(200).json(healthlogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
