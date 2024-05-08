const connectToDb =require('../config/Connection') 


const getHealthData = async (req, res) => {
    const template = `<div style={{ textAlign: 'center' }}>
        <h1>Welcome to Urfine</h1>
        <h4>The server is Live.</h4>
    </div>`;
    res.send(template);
};


module.exports = {
    getHealthData,
};

