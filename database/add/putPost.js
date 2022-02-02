module.exports.putPost=function (client,req,res){
    const user = req.body;
    let insertQuery = `insert into publication(utilisateur, contenu, likes,commentaires) 
                       values('${user.utilisateur}', '${user.contenu}', 0,0);`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}