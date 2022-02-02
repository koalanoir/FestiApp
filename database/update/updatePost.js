module.exports.updatePost=function (client,req,res){
    const user = req.body;
    const id = parseInt(req.body.postid)
    let updateQuery = `update publication
                       set contenu = '${user.contenu}'
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