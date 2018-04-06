$(function() {

    $.ajax({
        url: "http://mmb.ittun.com/api/getsitenav",
        dataType: "json",
        success: function(info) {
            // console.log(info);
            $(".mmb_list ul").html(template("tmp", info));
        }
    })
});