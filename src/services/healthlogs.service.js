const {HealthLogModel} = require('../models');

const getAllHealthLogs = async () => {
    try {
        return await HealthLogModel.find();
    } catch (error) {
        console.error('Error fetching healthlogs:', error);
        throw new Error('Error fetching user');
    }
}

const createHealthLog = async (_userID, req) => {
    try {
        const isEmptyReq = Object.values(req).every(value => value === '');

        if (isEmptyReq) {
            return {
                message: "Health log details cannot be empty"
            };
        }
        
        // Get the current date
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

        // Define the start and end of the current day
        const startOfDay = new Date(currentDate);
        const endOfDay = new Date(currentDate);
        endOfDay.setHours(23, 59, 59, 999); // Set to end of the day
        
        // Check if there is an existing health log for the user on the current day
        const existingHealthLog = await HealthLogModel.findOne({
            _userID,
            createdAt: { $gte: startOfDay, $lte: endOfDay }
        });
        
        if (existingHealthLog) {
            return {
                message: "A health log already exists for this user on the current day"
            };
        } else {
            const newHealthLog = new HealthLogModel({ _userID, ...req });
            return await newHealthLog.save();
        }
    } catch (error) {
        console.error('Error creating health log:', error);
        throw error;
    }
};


const updateHealthLog = async (req) => {
    try {
        const data= await HealthLogModel.findByIdAndUpdate(req, req, { upsert: true, new: true });
        if(data){
            return {
                message: "Health log updated successfully"
            };
        }
    } catch (error) {
        console.error('Error updating health log:', error);
        throw error;
    }
};

const deleteHealthLog = async (req) => {
    try {
        const data= await HealthLogModel.findByIdAndDelete(req);
        if(data){
            return {
                message: "Health log deleted successfully"
            };
        }
    } catch (error) {
        console.error('Error deleting health log:', error);
        throw error;
    }
};

const getuserHealthLogs = async (req) => {
    const { _userID, date } = req;
    try {
        // Parse the date string to a JavaScript Date object
        const startDate = new Date(date);
        // Set the time to the start of the day
        startDate.setUTCHours(0, 0, 0, 0);
        
        // Get the end date by adding one day and setting the time to the start of the day
        const endDate = new Date(startDate);
        endDate.setUTCDate(startDate.getUTCDate() + 1);
        endDate.setUTCHours(0, 0, 0, 0);

        // Find health logs for the specified user and date range
        return await HealthLogModel.find({
            _userID,
            createdAt: { $gte: startDate, $lt: endDate }
        });
    } catch (error) {
        console.error('Error fetching health log:', error);
        throw error;
    }
};


const getHealthLogdates = async (req) => {
    const _userID = req;
    try {
        // Aggregate to get unique dates
        const uniqueDates = await HealthLogModel.aggregate([
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
        const formattedDates = uniqueDates.map(dateObj => dateObj.date.toISOString().slice(0, 10));

        return formattedDates;
    } catch (error) {
        console.error('Error fetching health log dates:', error);
        throw error;
    }
};


module.exports = {
    getAllHealthLogs,
    createHealthLog,
    updateHealthLog,
    deleteHealthLog,
    getuserHealthLogs,
    getHealthLogdates

}