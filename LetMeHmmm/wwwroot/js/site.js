// Write your Javascript code.
function reply_click(clicked_id)
{   
    var i1 = 3;
    var i2 = 3;

    switch(clicked_id){
    case "image1":
        document.getElementById("image1").src="/images/banner"+i1+".svg";
        console.log("First Image");
        break;
    case "image2":
        document.getElementById("image2").src="/images/banner"+i2+".svg";
        console.log("Second Image");
        break;
    case 6:
        day = "Saturday";

    alert(clicked_id);
    }
}