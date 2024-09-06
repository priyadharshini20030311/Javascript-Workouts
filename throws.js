
// const b = 0



try{

    if(b==0)
    {
        throw("can't divide by zero")
    }
    else
    {
        var c=20/b;
    }
 }
 catch(e)
 {
    console.log( e);
 }
 finally
 {
    console.log("finally" +" "+ c);
    
 }