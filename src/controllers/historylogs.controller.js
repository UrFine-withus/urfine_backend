const {getAllHistoryLogs,createHistoryLog,updateHistoryLog,deleteHistoryLog,getuserHistoryLogs,getHistoryLogdates}=require("../services/historylogs.service");

const getAllHistoryLogsData = async (req, res) => {
    try {
        const Historylogs = await getAllHistoryLogs();
        // console.log(Historylogs);
        res.send({Historylogs});
    } catch (error) {
        console.error('Error fetching Historyu logs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createHistoryLogData = async (req, res) => {
    try {
        // console.log(req.body);
        const _userID=req.query.userId
        const Historylogs = await createHistoryLog(_userID,req.body);
        // console.log(Historylogs);
        res.send(Historylogs);
    } catch (error) {
        console.error('Error fetching Historylogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}   

const updateHistoryLogData = async (req, res) => {
    try {
        const Historylogs = await updateHistoryLog(req.body);
        // consoleog(Historylogs);
        res.send(
       Historylogs);
    } catch (error) {
        console.error('Error fetcng Historylogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const deleteHistoryLogData = async (req, res) => {
    try {
        // console.log(req.query._Id);
        const Historylogs = await deleteHistoryLog(req.query._Id);
        // console.log(Historylogs);
        res.send(Historylogs);
    } catch (error) {
        console.error('Error fetching Historylogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getUserHistoryLogsData = async (req, res) => {
    try {
        // console.log(req.query.userId);
        // console.log(req.query.date);
        const _userID=req.query.userId;
        const date = new Date(req.query.date);
        const Historylogs = await getuserHistoryLogs(_userID,date);
        // console.log(Historylogs);
        if (Historylogs === null) {
            // If Historylogs is null, send a 400 Bad Request response
            res.status(400).json({message: "No History log found for the specified user and date" })
        }
         else {
            // Otherwise, send the Historylogs
            res.send(Historylogs);
        }
    } catch (error) {
        
        console.error('Error fetching Historylogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const getHistoryLogdateData = async (req, res) => {
    try {
        // console.log(req.query.userId);
        const Historylogs = await getHistoryLogdates(req.query.userId);
        // console.log(Historylogs);
        res.send(Historylogs);
    } catch (error) {
        console.error('Error fetching Historylogs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }


}
module.exports = {
    getAllHistoryLogsData,
    createHistoryLogData,
    updateHistoryLogData,
    deleteHistoryLogData,
    getUserHistoryLogsData,
    getHistoryLogdateData
}