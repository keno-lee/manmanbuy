$(function() {

    //ajax
    $.ajax({
        url: "http://127.0.0.1:9090/api/getcategorytitle",
        dataType: "json",
        success: function(info) {
            // console.log(info);
            var data = info.result;
            $(".cate_pandect").html(template("cate_tmp", { list: data }));
            //必须要使用事件委托
            $(".cate_pandect").delegate(".title", "click", function() {
                var id = $(this).parents("li").data("titleId");
                // console.log(id);

                // console.log($(".cate_details").children());
                if ($(this).siblings(".content").children(".cate_details").children().length == 0) {
                    // 点击获取当页数据
                    $.ajax({
                        url: "http://127.0.0.1:9090/api/getcategory",
                        data: { titleid: id },
                        dataType: "json",
                        success: function(info) {
                            // console.log(info);
                            var data = info.result;
                            $(".cate_pandect li[data-title-id=" + id + "] .cate_details").append(template("list_tmp", { list: data }));

                        },
                        complete: function() {
                            var $title = $(".cate_pandect li[data-title-id=" + id + "] .title");
                            // console.log($title);

                            if ($title.data("toggle") == "close") {
                                $title.siblings(".content").slideDown();
                                $title.data("toggle", "open");
                            } else {
                                $title.siblings(".content").slideUp();
                                $title.data("toggle", "close");
                            }
                        }
                    });
                } else {
                    var $title = $(".cate_pandect li[data-title-id=" + id + "] .title");
                    if ($title.data("toggle") == "close") {
                        $title.siblings(".content").slideDown();
                        $title.data("toggle", "open");
                    } else {
                        $title.siblings(".content").slideUp();
                        $title.data("toggle", "close");
                    }
                }




            });
        }
    });


    //给li注册点击事件,跳转页面
    $(".cate_pandect").on("click", ".cate_details li", function() {
        // console.log(1);
        var cateId = $(this).data("category-id");
        // $.cookie("categoryid", cateId, { expires: 7 });
        // console.log(cateId);
        window.location.href = "list.html?categoryid=" + cateId;

    })


});