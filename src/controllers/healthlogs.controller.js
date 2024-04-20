const {getAllHealthLogs,createHealthLogs ,updateHealthLogs,deleteHealthLogs}=require("../services/healthlogs.service");

const getAllHealthLogsData = async (req, res) => {
    try {
        console.log('Get all healthlogs function is working')
        const healthlogs = await getAllHealthLogs();
        res.send({healthlogs}) ;
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createHealthLogData = async (req, res) => {
    try {
        const healthlog = req.body;
        const newHealthLog = await createHealthLogs(healthlog);
    //    return res.status(201).json(newHealthLog);
    res.send(newHealthLog) ;
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const updateHealthLogData = async (req, res) => {
    try {
        const { id } = req.query;
        console.log(id);
        const healthlog = req.body;
        // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No healthlog with id: ${id}`);
        const updatedHealthLog = await updateHealthLogs(id, healthlog);
        res.send(updatedHealthLog)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const deleteHealthLogData = async (req, res) => {
    try {
        const { id } = req.query.id;
        // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No healthlog with id: ${id}`);
        await deleteHealthLogs(id);
        res.status(200).json({ message: "healthlog deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }


}

module.exports = {
    getAllHealthLogsData,
    createHealthLogData,
    updateHealthLogData,
    deleteHealthLogData
}