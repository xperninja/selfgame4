class Acchandle{
    constructor(){
    
    }

   static newAcc(name){
    var plrname1 = "players/"+name
    var checkbool = false
    database.ref(plrname1).on("value",(data)=>{
    if (data == true){
    checkbool = false
    checkName(false)
    }else{
    checkbool = true
    something()
    checkName(true)
    }
    })

    function something(nameofplr){
    database.ref(nameofplr).update({
        nameofplr:true
    })
    }

    }

    static deleteAcc(name){
        
    }
}