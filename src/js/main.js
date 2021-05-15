import $ from "./lib/lib";

$("button").on("click", function () {
	$("div").eq(2).toggleClass("active");
});

console.log($("button").html())

// console.log($(".active").index())

$("div").click(function () {
	// console.log($(this));
});

// console.log($("div").eq(2).find(".some"));
// console.log($(".some").closest(".findme").addClass("sfefew"));

// $(".active").setAttr("data-core", "Hello World");
// const attr = $(".active").getAttr("data-core");

// console.log(attr);

// console.log($("button").html("Hello"));
