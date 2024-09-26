const date = (req, res, next) => {
    const date = new Date();
     
    const hour = date.getHours();

    // Check if it's a weekday and the time is between 9 AM and 5 PM
    if ( hour >= 9 && hour < 17) {
        next();
    } else {
        res.send("Sorry, the website is only available during working hours (Monday to Friday, from 9 AM to 5 PM).");
    }
};
module.exports= date 