$(function(){

    $("#mainSubmit").click(function(){
        var data = {
            userName : $("#returnUser").val().trim(),
            userPass : $("#returnPass").val().trim()
        }
        console.log(data);
        $.post("/login", data, function(err,data){
            console.log(data);
            console.log(err);

        });
        $("#returnUser").val('');
        $("#returnPass").val('');
    });

    $("#newUsersBtn").click(function(){
        var data2 ={
            newUserName : $("#newUser").val().trim(),
            newUserPass : $("#newPass").val().trim()
        }
        $.post("/newlogin", data2,function(err){
            console.log(err);
        });
        $("#newUser").val('');
        $("#newPass").val('');
    });

});