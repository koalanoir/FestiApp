module.exports.putUser=function (client,req){
    const user = req.body;
    let insertQuery = `insert into utilisateurs(idUser) 
                       values(${user.idUser})`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}