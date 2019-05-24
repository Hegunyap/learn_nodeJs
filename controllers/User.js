let User = (req, res) => {

   try{
    let param = req.params.id
    
    if (param){
        let response = {
            data: [],
            error: "not found" 
        }
    
        console.log(res.status("kosong"));
        res.send(response)
    } else {
        throw { message: 'params not found' }
    }
   } catch (error){
       res.send({
           data: null,
           error: error.message
       })
   }
}

module.exports = {
    User
}