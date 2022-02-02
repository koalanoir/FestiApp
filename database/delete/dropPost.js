 module.exports.deletePost=function (client,req,res){
    const user = req.body;
    const id = parseInt(req.body.postid)
    let insertQuery = `delete from publication where utilisateur ='${user.utilisateur}' and postid = ${id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
 }