$(function() {

    var str = location.search;
    var title = sessionStorage.getItem("title");
    $(".mmb_header p").text(title + "优惠券");

    var data = [];
    var current = 0;
    $.ajax({
        url: "http://127.0.0.1:9090/api/getcouponproduct" + str,
        dataType: "json",
        success: function(info) {
            // console.log(info);
            $(".mmb_list ul").html(template("tmp", info));

            $(".mmb_list li").each(function(i, e) {
                data.push($(e).data("src"));
            });
            // console.log(data);


            $(".mmb_list li").each(function(i, e) {
                $(e).on("click", function() {
                    var src = $(this).data("src");
                    // console.log(src);
                    $(".mask").show();
                    $(".img_box").html(src);
                    current = i;
                    // console.log(current);
                });
            });

        }
    });

    // 按钮功能
    $(".mask_right").on("click", function() {
        current++;
        $(".img_box").html(data[current]);
    });
    $(".mask_left").on("click", function() {
        current--;
        $(".img_box").html(data[current]);
    });
});