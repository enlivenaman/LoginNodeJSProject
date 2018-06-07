(function () {
    if (window['RTI'] == null) {
        var _sm = {};
        window['RTI'] = _sm;
    }
})();
$(function () {
    TrimValue();
})
function TrimValue() {
    $("input[type='text']").blur(function () {
        if ($(this).val() != '') {
            $(this).val($.trim($(this).val()));
        }
    });
    //$.trim(str)
}
//setup ajax error handling
$(document).ajaxError(function (jqxhr, x, error) {
    if (x.status == 401) {
        alert("Sorry, your session has expired. Please login again to continue.");
        window.location.href = "/Login";
    }
});
$(document).ajaxSuccess(function (jqxhr, x, error) {
    TrimValue();
});