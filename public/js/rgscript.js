// Algolia client. Mandatory to instantiate the Helper.
var client = algoliasearch('36LOU7P2KC', '4705232079a49f2115c4a0e1a5dd58fa');
var index = client.initIndex('garden_index');


client.initIndex('YourIndexName').setSettings({
  "searchableAttributes": [
    "commonName",
    "type",
    "light",
    "water"
  ],
  "customRanking": [
    "desc(points)"
  ]
});

//initialize autocomplete on search input (ID selector must match)
autocomplete('#aa-search-input',
{ hint: false }, {
    source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
    //value to be displayed in input control after user's suggestion selection
    displayKey: 'name',
    //hash of templates used when rendering dataset
    templates: {
        //'suggestion' templating function used to render a single suggestion
        suggestion: function(suggestion) {
          return '<span>' +
            suggestion._highlightResult.commonName.value + '</span><span>' +
            suggestion._highlightResult.type.value + '</span>';
        }
    }
});

