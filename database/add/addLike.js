module.exports.addLike=function (client,req,res){
    const user = req.body;
    const id = parseInt(req.body.postid)
    let updateQuery = `update publication
                       set likes = likes + 1
                       where utilisateur ='${user.utilisateur}' and postid = ${id}
                       `

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}