var dataSet = [
    [ "Piedmont Azalea", "Flower", "Partial Sun", "Moderate", "8a", "Rhododend canescens" ],
    [ "American Sweetgum", "Tree", "Full Sun", "Moderate", "7b", "Liquidamber stryaciflua" ],

];
 
$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Type" },
            { title: "Light" },
            { title: "Water" },
            { title: "Hardiness Zone" },
            { title: "Botannical Name" }
        ]
    } );
} );