$(function () {
    $("#Form").on("submit", function (e) {
        e.preventDefault();

        var fname = $("#fname").val();
        var email = $("#email").val();
        var Password = $("#Password").val();
        console.log(fname, email, Password );


        if (fname == "") {
            $("#span1").text("This field is required")
        }
        else {
            $("#span1").text("")
        } if (email == "") {
            $("#span2").text("This field is required")
        }
        else {
            $("#span2").text("")
        } if (Password == "") {
            $("#span3").text("This field is required")
        }
        else {
            $("#span3").text("")
        }

        if (fname !== "" && email !== "" && Password !== "") {
            window.location.href = "Singup.thankyou.html"
        }

    })
});