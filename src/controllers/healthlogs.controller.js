const {getAllHealthLogs,createHealthLog,updateHealthLog,deleteHealthLog,getuserHealthLogs,getHealthLogdates}=require("../services/healthlogs.service");

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
        const _userID=req.query.userId
        const healthlogs = await createHealthLog(_userID,req.body);
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
        console.log(req.query._Id);
        const healthlogs = await deleteHealthLog(req.query._Id);
        console.log(healthlogs);
        res.send(healthlogs);
    } catch (error) {
        console.error('Error fetching healthlogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getUserHealthLogsData = async (req, res) => {
    try {
        console.log(req.query.userId);
        const healthlogs = await getuserHealthLogs(req.query.userId);
        console.log(healthlogs);
        res.send(healthlogs);
    } catch (error) {
        console.error('Error fetching healthlogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const getHealthLogdateData = async (req, res) => {
    try {
        console.log(req.query.userId);
        console.log(req.query.date);
        const _userID=req.query.userId;
        const date=req.query.Date;
        const healthlogs = await getHealthLogdates(_userID,date);
        console.log(healthlogs);
        res.send(healthlogs);
    } catch (error) {
        console.error('Error fetching healthlogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }


}
module.exports = {
    getAllHealthLogsData,
    createHealthLogData,
    updateHealthLogData,
    deleteHealthLogData,
    getUserHealthLogsData,
    getHealthLogdateData
}