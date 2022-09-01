 $(document).ready(function () {
    $("#projects").tabs();
    $("ul").sortable({ axis: "x", containment: "#main" });
    $("ol").sortable({ axis: "y", containment: "#projects" })
    $(".addProject").click(function () {
        $("#dialog").dialog({
            modal: true,
            buttons: {
                //     "add new project": function () {
                //         var projectname = $("newProject").val();
                //         $(<a href= + projectname + > </a>)
                //             .appendTo("#main")
                // },
                "Cancel": function () {
                    $("newProject").val("");
                    $(this).dialog("close")
                }
            }
        });
    });
});




