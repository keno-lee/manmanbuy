$(function() {
    //导航nav功能
    $.ajax({
        url: "http://127.0.0.1:9090/api/getindexmenu",
        dataType: "json",
        success: function(info) {
            // console.log(info.result);
            var data = info.result;
            // var dataFirst = data.splice(0, 8);
            $(".mmb_nav ul").html(template("nav_tmp", { list: data }));

            //默认隐藏第三行
            $(".mmb_nav ul li:gt(7)").hide();

            //点击more 加载下一行
            $(".mmb_nav ul li[data-id='7']").on("click", function() {
                if ($(".mmb_nav ul li[data-id='7']").children("p").text() == "更多") {
                    $(".mmb_nav ul li:gt(7)").show();
                    $(".mmb_nav ul li[data-id='7']").children("p").text("点击隐藏");
                } else {
                    $(".mmb_nav ul li:gt(7)").hide();
                    $(".mmb_nav ul li[data-id='7']").children("p").text("更多");
                }
            });
        }
    });
    //商品推荐功能
    $.ajax({
        url: "http://127.0.0.1:9090/api/getmoneyctrl",
        dataType: "json",
        success: function(info) {
            // console.log(info);
            var data = info.result;
            $(".rec_content ul").html(template("rec_tmp", { list: data }));
        }
    });



});