module.exports.getPost=function (client,res){
    client.query(`Select * from publication`, (err, result)=>{
        if(!err){
            res.status(201)
            res.send(result.rows);
        }else{
            
            console.log(err.message)
        }
    });
    client.end;
}

module.exports.getPostof=function (client,req,res){
    const user=req.params
    console.log(user.utilisateur)
    client.query(
        `Select * from publication where utilisateur='${user.utilisateur}'`,
        (err, result)=>
        {
        if(!err){
            res.send(result.rows);
            }
        else{
            
            console.log(err.message)
            }
        }
    );
    client.end;
}