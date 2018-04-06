$(function() {


    $.ajax({
        url: "http://127.0.0.1:9090/api/getcoupon",
        dataType: "json",
        success: function(info) {
            console.log(info);

            $(".mmb_list ul").html(template("tmp", info));

            $(".mmb_list li").each(function(i, e) {
                $(e).on("click", function() {
                    sessionStorage.setItem("title", $(this).data("title"));
                });
            })
        }

    })
});