const User = require('../../../model/User')
module.exports = {
    getUser:async(args) => {
        console.log(args,"TEST")
        //Storing Data
        // const storedata = new User({
        //     username:args.username,
        //     age:args.dob
        // })
        // const savedata = await storedata.save()
        // console.log(savedata,"savedata")
        // Fetch Data
        const getdata = await User.findOne({username:args.username})
        // console.log(getdata,"getdata")
        return {
            // ...getdata._doc
            username:getdata.username,
            age:getdata.age
        }
    }
}