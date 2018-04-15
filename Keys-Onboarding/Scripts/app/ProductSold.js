$("#btnCreate").click(function (event) {
    $(".mod-content").load("/ProductSolds/Create");
})

$(".btnEdit").click(function (event) {
    console.log("button clicked");
    $(".mod-content").load("/ProductSolds/Edit/" + $(this).data("id"));
    console.log($(this).data("id"));
});


$(".btnDetail").click(function (event) {
    console.log("button clicked");
    var Id = $(this).data("data-id")
    $(".mod-content").load("/ProductSolds/Details/" + $(this).data("id"));
    console.log($(this).data("id"));
});

$(".btnDelete").click(function (event) {
    console.log("button clicked");
    var Id = $(this).data("data-id")
    $(".mod-content").load("/ProductSolds/Delete/" + $(this).data("id"));
    console.log($(this).data("id"));
});