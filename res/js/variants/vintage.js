$(document).ready(function() {
        var items = ["Vintage Military Parka", "Poem", "Francois", "Je ne sais quoi"];
        var index = 0;

	$("#prevVintageItem").click(function(event) {
                if (index > 0){
                        index = index - 1;
                        $("#vintageItemTitle").html(items[index]);
                }else{
                        index = items.length - 1;
                        $("#vintageItemTitle").html(items[index]);
                }

	});

        $("#nextVintageItem").click(function(event) {
                if (index < items.length-1){
                        index = index + 1;
                        $("#vintageItemTitle").html(items[index]);
                }else{
                        index = 0;
                        $("#vintageItemTitle").html(items[index]);
                }

        });
});