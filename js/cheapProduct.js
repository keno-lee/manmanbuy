$(function() {

    $.ajax({
        url: "http://127.0.0.1:9090/api/getmoneyctrlproduct?productid=20",
        dataType: "json",
        success: function(info) {
            console.log(info);

            $(".mmb_discount_content").html(template("disc_tmp", info));
            $(".mmb_com").html(template("com_tmp", info));
        }
    })

});