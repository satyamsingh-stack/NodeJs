const dbConnect = require('./mongodb');
const updateData = async() => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {"Phone":"one+"},{
            $set: {"Phone":"iphone 14 pro"}
        }
    )
    console.log(result);
}

updateData();