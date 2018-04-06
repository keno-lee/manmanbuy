$(function() {
    //获取标签页
    $.ajax({
        url: "http://127.0.0.1:9090/api/getbaicaijiatitle",
        dataType: "json",
        success: function(info) {
            // console.log(info);
            $(".mmb_title ul").html(template("title_tmp", info));
            var length = 0;

            $(".mmb_title li").each(function(i, e) {
                length += e.offsetWidth;
            });
            // console.log(length);
            $(".mmb_title ul").width(length);

            //注册点击事件  获取详细列表
            $(".mmb_title li").each(function(i, e) {

                $(e).on("click", function() {
                    var id = $(this).data("titleId");
                    getContent(id);

                })
            });


        }
    });

    // 页面加载默认加载第一页的数据
    getContent(0);

    function getContent(id) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getbaicaijiaproduct?titleid=" + id,
            dataType: "json",
            success: function(info) {
                // console.log(info);
                $(".mmb_content ul").html(template("content_tmp", info));
            }
        });
    }


    window.onload = function() {
        //初始化滚动容器
        //注意：
        // 1. 子容器的高度必须大于父容器
        // 2. 父容器里面只有一个子容器，如果有多个，只会找第一个
        new IScroll(".mmb_title", {
            scrollX: true,
            scrollY: false
        });


    }
});