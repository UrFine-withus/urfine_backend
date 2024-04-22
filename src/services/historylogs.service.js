const {HistoryLogModel} = require('../models');

const getAllHistoryLogs = async () => {
    try {
        const historyLogs = await HistoryLogModel.find();
        if (historyLogs) {
            return  historyLogs ;
        }
    } catch (error) {
        console.error('Error fetching Historylogs:', error);
        throw new Error('Error fetching user');
    }
}

const createHistoryLog = async (_userID, req) => {
    try {
        const isEmptyReq = Object.values(req).every(value => value === '');

        if (isEmptyReq) {
            return {
                message: "History log details cannot be empty"
            };
        }
        
        // Get the current date
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

        // Define the start and end of the current day
        const startOfDay = new Date(currentDate);
        const endOfDay = new Date(currentDate);
        endOfDay.setHours(23, 59, 59, 999); // Set to end of the day
        
        // Check if there is an existing History log for the user on the current day
        const existingHistoryLog = await HistoryLogModel.findOne({
            _userID,
            createdAt: { $gte: startOfDay, $lte: endOfDay }
        });
        
        if (existingHistoryLog) {
            return {
                message: "A History log already exists for this user on the current day"
            };
        } else {
            const newHistoryLog = new HistoryLogModel({ _userID, ...req });
            await newHistoryLog.save();
            return {
                message: "History log created"
            };
        }
        }
     catch (error) {
        console.error('Error creating History log:', error);
        throw error;
    }
};


const updateHistoryLog = async (req) => {
    try {
        const data= await HistoryLogModel.findByIdAndUpdate(req, req, { upsert: true, new: true });
        if(data){
            return {
                message: "History log updated successfully"
            };
        }
    } catch (error) {
        console.error('Error updating History log:', error);
        throw error;
    }
};

const deleteHistoryLog = async (req) => {
    try {
        const data= await HistoryLogModel.findByIdAndDelete(req);
        if(data){
            return {
                message: "History log deleted successfully"
            };
        }
    } catch (error) {
        console.error('Error deleting History log:', error);
        throw error;
    }
};

const getuserHistoryLogs = async (_userID,date) => {
    
    try {
        
        // Parse the date string to a JavaScript Date object
        const startDate = new Date(date);
        // Set the time to the start of the day
        startDate.setUTCHours(0, 0, 0, 0);
        
        // Get the end date by adding one day and setting the time to the start of the day
        const endDate = new Date(startDate);
        endDate.setUTCDate(startDate.getUTCDate() + 1);
        endDate.setUTCHours(0, 0, 0, 0);

        // Find History logs for the specified user and date range
        const userLog=await HistoryLogModel.find({
            _userID,
            createdAt: { $gte: startDate, $lt: endDate }
        });
        if (userLog.length > 0) {
            return userLog[0];
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching History log:', error);
        throw error;
    }
};


const getHistoryLogdates = async (req) => {
    const _userID = req;
    try {
        // Aggregate to get unique dates
        const uniqueDates = await HistoryLogModel.aggregate([
            { $match: { _userID } }, // Match logs for the specified user
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" },
                        day: { $dayOfMonth: "$createdAt" }
                    }
                }
            },
            {
                $project: {
                    _id: 0, // Exclude the default _id field
                    date: {
                        $dateFromParts: {
                            year: "$_id.year",
                            month: "$_id.month",
                            day: "$_id.day"
                        }
                    }
                }
            },
            { $sort: { "date": -1 } } // Optionally sort the dates
        ]);

        // Format the dates to "YYYY-MM-DD" string format
        const UserLogDates = uniqueDates.map(dateObj => dateObj.date.toISOString().slice(0, 10));

        return {UserLogDates};
    } catch (error) {
        console.error('Error fetching History log dates:', error);
        throw error;
    }
};


module.exports = {
    getAllHistoryLogs,
    createHistoryLog,
    updateHistoryLog,
    deleteHistoryLog,
    getuserHistoryLogs,
    getHistoryLogdates

}