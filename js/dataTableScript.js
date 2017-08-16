var dataSet = [
    [ "Piedmont Azalea", "Flower", "High", "2-3 times a week", "8a", "$320,800" ],
    [ "American Sweetgum", "Tree", "low", "Once a week", "7b", "$170,750" ],

];
 
$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Type" },
            { title: "Sunlight" },
            { title: "Water" },
            { title: "Hardiness Zone" },
            { title: "Scientific Name" }
        ]
    } );
} );