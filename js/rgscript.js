// Algolia client. Mandatory to instantiate the Helper.
var algolia = algoliasearch('36LOU7P2KC', '4705232079a49f2115c4a0e1a5dd58fa');

// Algolia Helper
var helper = algoliasearchHelper(algolia, 'garden_index', {
  hitsPerPage: 5,
  getRankingInfo: true
});

// Bind the result event to a function that will update the results
helper.on("result", searchCallback);

// Configuration for the UI
var $inputfield = $("#search-box");
var $hits = $('#hits');

// When there is a new character input:
// - update the query
// - trigger the search
$inputfield.keyup(function(e) {
  helper.setQuery($inputfield.val()).search();
});

// Trigger a first search, so that there is a page with results
// from the start.
helper.search();

// Result event callback
function searchCallback(content) {
  if (content.hits.length === 0) {
    // If there is no result we display a friendly message
    // instead of an empty page.
    $hits.empty().html("No results :(");
    return;
  }

	// Hits/results rendering
  renderHits($hits, content);
}

function renderHits($hits, results) {
  // Scan all hits and display them
  var hits = results.hits.map(function renderHit(hit) {
    // We rely on the highlighted attributes to know which attribute to display
    // This way our end-user will know where the results come from
    // This is configured in our index settings
    var highlighted = hit._highlightResult;
    var attributes = $.map(highlighted, function renderAttributes(attribute, name) {
      return (
        '<div class="attribute">' +
        '<strong>' + name + ': </strong>' + attribute.value +
        '</div>');
    }).join('');
    return '<div class="hit panel">' + attributes + '</div>';
  });
  $hits.html(hits);
}