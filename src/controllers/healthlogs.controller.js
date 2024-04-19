const {getAllHealthLogs,createHealthLog,updateHealthLog,deleteHealthLog,getuserHealthLogs,getHealthLogdates}=require("../services/healthlogs.service");

const getAllHealthLogsData = async (req, res) => {
    try {
        const healthlogs = await getAllHealthLogs();
        res.status(200).json(healthlogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createHealthLogData = async (req, res) => {
    try {
        const healthlog = req.body;
        const newHealthLog = await createHealthLog(healthlog);
        res.status(201).json(newHealthLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const updateHealthLogData = async (req, res) => {
    try {
        const { id } = req.params;
        const healthlog = req.body;
        // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No healthlog with id: ${id}`);
        const updatedHealthLog = await (id, healthlog);
        res.status(200).json(updatedHealthLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const deleteHealthLogData = async (req, res) => {
    try {
        const { id } = req.params;
        // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No healthlog with id: ${id}`);
        await deleteHealthLog(id);
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