module.exports.getArtist=function (client,req,res){
    const artist=req.params
    console.log(artist.artistName)
    client.query(
        `Select * from artist where name='${artist.artistName}'`,
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