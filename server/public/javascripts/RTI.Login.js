RTI.Login = new function () {
    this.Init = function () {
        //password can be shown as needed, for POST flow here
          $("#pwd-div").hide();
        //$("#save").hide();
    }
//This is OAuth, NOT including password
    this.ValidateUser = function () {
        $(".errorMessage").empty();
        $.ajax({
            type: 'POST',
            url: "/login/validateuser",
            data: $("#LoginForm").serialize(),
            success: function (result) {
                window.location.href = result.redirecturl;
                if (result) {
                    if (result.showpassword) {
                        $("#pwd-div").show();
                        $("#save").show();
                        $("#validate").hide();
                    }
                    else {
                        window.location.href = result.redirecturl;
                    }
                }
            },
            error: function (xhr, status, error) {
                if (error != undefined && error.length > 0) {
                    var errors = JSON.parse(error);
                    if (errors != undefined && errors.length > 0) {
                        var html = "<ul>";
                        for (var i = 0; i < errors.length; i++) {
                            html += "<li>" + errors[i].msg + "</li>";
                        }
                        html += "</ul>";
                        $(".errorMessage").html(html);
                    }
                }
            }
        });
        return false;
    }

    //This is POST,  including password 
    this.LoginUser = function () {
        $(".successMessage").empty();
        $(".errorMessage").empty();
        $.ajax({
            type: 'POST',
            url: "/Login/UserValidate",
            data: $("#LoginForm").serialize(),
            success: function (result) {
                window.location.href = "/Building";
            },
            error: function (xhr, status, error) {
                if (error != undefined && error.length > 0) {
                    var errors = JSON.parse(error);
                    if (errors != undefined && errors.length > 0) {
                        var html = "<ul>";
                        for (var i = 0; i < errors.length; i++) {
                            html += "<li>" + errors[i].msg + "</li>";
                        }
                        html += "</ul>";
                        $(".errorMessage").html(html);
                    }
                }
            }
        });
        return false;
    }
}
