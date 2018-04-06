$(function() {

    $.ajax({
        url: "http://mmb.ittun.com/api/getinlanddiscount",
        dataType: "json",
        success: function(info) {
            console.log(info);

        }
    })
});