// Algolia client. Mandatory to instantiate the Helper.
var client = algoliasearch('36LOU7P2KC', '4705232079a49f2115c4a0e1a5dd58fa');
var index = client.initIndex('garden_index');
autocomplete('#search-input', { hint: false }, [
  {
    source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
    displayKey: 'my_attribute',
    templates: {
      suggestion: function(suggestion) {
        return suggestion._highlightResult.my_attribute.value;
      }
    }
  }
]).on('autocomplete:selected', function(event, suggestion, dataset) {
  console.log(suggestion, dataset);
});

