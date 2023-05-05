const getconnect = require('./mongodb');

async function main(){
    let data = await getconnect();
    data = await data.find({}).toArray();
    console.log(data);
}

main();