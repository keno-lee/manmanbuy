$(function() {　　　　

    var str = location.search;
    //渲染

    // var currentPage = 1;
    var nextPage;
    var prevPage;
    var totalCount;
    var pagesize;
    var pages;


    //存储categoty和brandName
    // var categoty;
    // var brandName;
    //请求第一页数据
    $.ajax({
        url: "http://127.0.0.1:9090/api/getcategorybyid" + str,
        dataType: "json",
        success: function(info) {
            // console.log(info.result[0]);
            $(".crumb .three").text(info.result[0].category + ">");
            var category = info.result[0].category;
            var categoryId = info.result[0].categoryId;
            // console.log(category);
            sessionStorage.setItem("category", category);
            sessionStorage.setItem("href", "list.html?categoryid=" + categoryId);

            //第一页的数据
            getPage(1, function() {
                //根据总条数来计算分页数量 总数/每页数量 向上取整
                pages = Math.ceil(totalCount / pagesize);
                // console.log(pages);
                //动态生成select
                //1.清空之前的元素
                for (var i = 1; i <= pages; i++) {
                    $("#page_select").append('<option value="' + i + '">' + i + ' / ' + pages + '</option>')
                }
            });

        }
    });
    //下一页
    $(".next_btn").on("click", function() {
        // 判断nextPage是否存在
        if (nextPage <= pages) {
            getPage(nextPage);
            // 让当前页的option被选中
            $("option").eq(nextPage - 1).prop("selected", true);
        }
    });
    //上一页
    $(".prev_btn").on("click", function() {
        // 判断上一页是否存在
        if (prevPage > 0) {
            getPage(prevPage);
            $("option").eq(prevPage - 1).prop("selected", true);
        }
    });
    //option的功能
    $("#page_select").on("change", function() {
        // alert(1);
        // console.log($("option:selected").val());
        var page = $("option:selected").val();
        getPage(page);
    });





    function getPage(page, callback) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getproductlist" + str + "&pageid=" + page,
            dataType: "json",
            success: function(info) {
                // console.log(info);
                var data = info.result;

                totalCount = info.totalCount; //总条数
                pagesize = info.pagesize; //每页数量
                // console.log(totalCount);

                $(".product_list ul").html(template("list_tmp", { list: data }));
                nextPage = page + 1;
                prevPage = page - 1;

                callback && callback();
            }
        });
    }



});