module.exports.getEvent=function (client,req,res){
    client.query(
        `Select * from event`,
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