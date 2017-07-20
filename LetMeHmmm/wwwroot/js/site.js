// Write your Javascript code.
function reply_click(clicked_id)
{   

    //get a random number between first record and last record
    //for exampe, 5

    //then set image1 and image2 ref var values to 5a, and 5b; 

    //console.log(Math.floor(Math.random()*4));

    var i1 = Math.floor(Math.random()*4)+1;
    var i2 = Math.floor(Math.random()*4)+1;

    switch(clicked_id){
    case "image1":
        document.getElementById("image1").src="/images/banner"+i1+".svg";
        console.log("First Image");
        break;
    case "image2":
        document.getElementById("image2").src="/images/banner"+i2+".svg";
        console.log("Second Image");
        break;


    alert(clicked_id);
    }
}