module.exports.addEvent=function (client,req,res){
    const e = req.body;
    let insertQuery = `insert into event 
                       values('${e.name}','${e.location}','${e.date}','${e.artists}','${e.description}','${e.placeNb},${e.avPlace},'${e.image}');`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}