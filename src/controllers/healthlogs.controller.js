const {getAllHealthLogs,createHealthLog,updateHealthLog,deleteHealthLog}=require("../services/healthlogs.service");

const getAllHealthLogsData = async (req, res) => {
    try {
        const healthlogs = await getAllHealthLogs();
        console.log(healthlogs);
        res.send(healthlogs);
    } catch (error) {
        console.error('Error fetching healthlogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


const createHealthLogData = async (req, res) => {
    try {
        console.log(req.body);
        const healthlogs = await createHealthLog(req.body);
        console.log(healthlogs);
        res.send(healthlogs);
    } catch (error) {
        console.error('Error fetching healthlogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}   

const updateHealthLogData = async (req, res) => {
    try {
        const healthlogs = await updateHealthLog(req.body);
        console.log(healthlogs);
        res.send(
            healthlogs);
    } catch (error) {
        console.error('Error fetching healthlogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const deleteHealthLogData = async (req, res) => {
    try {
        const healthlogs = await deleteHealthLog(req.body);
        console.log(healthlogs);
        res.send(healthlogs);
    } catch (error) {
        console.error('Error fetching healthlogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}