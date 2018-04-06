$(function() {
    var nextPage;
    var prevPage;
    var totalCount;
    var pagesize;
    var pages;

    //1.页面加载时,请求第一页数据.并动态生成选项options  注意!页码从0开始
    getPage(0, function() {
        //根据总条数来计算分页数量 总数/每页数量 向上取整
        pages = Math.ceil(totalCount / pagesize);
        // console.log(pages);
        for (var i = 1; i <= pages; i++) {
            $("#page_select").append('<option value="' + i + '">' + i + ' / ' + pages + '</option>')
        }
    });
    //2.按钮功能
    //下一页
    $(".next_btn").on("click", function() {
        // 判断nextPage是否存在
        if (nextPage < pages) {
            getPage(nextPage);
            // 让当前页的option被选中
            $("option").eq(nextPage).prop("selected", true);
        }
    });
    //上一页
    $(".prev_btn").on("click", function() {
        // 判断上一页是否存在
        if (prevPage >= 0) {
            getPage(prevPage);
            $("option").eq(prevPage).prop("selected", true);
        }
    });
    //option的功能
    $("#page_select").on("change", function() {
        // alert(1);
        // console.log($("option:selected").val());
        var page = $("option:selected").val() - 1;
        getPage(page);
    });




    //请求数据方法
    function getPage(page, callback) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getmoneyctrl",
            dataType: "json",
            data: { "pageid": page },
            success: function(info) {
                console.log(info);
                var data = info.result;
                totalCount = info.totalCount;
                pagesize = info.pagesize;
                $(".mmb_economy_list ul").html(template("eco_tmp", { list: data }));
                // 记录上一页和下一页
                nextPage = page + 1;
                prevPage = page - 1;
                callback && callback();
            }
        });
    };

});