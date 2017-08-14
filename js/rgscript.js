
var applicationID = "36LOU7P2KC";
var apiKey = "4705232079a49f2115c4a0e1a5dd58fa";
var indexName = "garden_index";
var client = algoliasearch(applicationID, apiKey);
var helper = algoliasearchHelper(client, indexName);
helper.on('result', function(content) {
  renderHits(content);
});

function renderHits(content) {
  $('#container').html(function() {
    return $.map(content.hits, function(hit) {
      return "<li>" + hit._highlightResult.name.value + "</li>";
    });
  });
}
$('#search-box').on('keyup', function() {
  helper.setQuery($(this).val())
        .search();
});
helper.search();