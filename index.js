$(".btn").click(function () {

    if ($(this).text() === "⭐ Favorite") {
        $(this).text("✅ Added");
    }

    else {
        $(this).text("⭐ Favorite");
    }

});
