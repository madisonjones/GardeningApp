// var algoliasearch = require('algoliasearch');
// var algoliasearch = require('algoliasearch/reactnative');
// var algoliasearch = require('algoliasearch/lite');
// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

var client = algoliasearch("36LOU7P2KC", "8d07c0f7efaa2dc98582aba511f6b4b7");
var index = client.initIndex('garden_index');
var client = algoliasearch("36LOU7P2KC", "8d07c0f7efaa2dc98582aba511f6b4b7");
var helper = algoliasearchHelper(client, 'garden_index', {
  facets: ['type']
});

helper.on('result', function(content) {
  //renderFacetList(content);
  renderHits(content);
  console.log(content);
});

//$('#facet-list').on('click', 'input[type=checkbox]', function(e) {
  var facetValue = $(this).data('facet');
  helper.toggleFacetRefinement('type', facetValue)
        .search();
});

//function renderFacetList(content) {
  $('#facet-list').html(function() {
    return $.map(content.getFacetValues('type'), function(facet) {
      var checkbox = $('<input type=checkbox>')
        .data('facet', facet.name)
        .attr('id', 'fl-' + facet.name);
      if(facet.isRefined) checkbox.attr('checked', 'checked');
      var label = $('<label>').html(facet.name + ' (' + facet.count + ')')
                              .attr('for', 'fl-' + facet.name);
      return $('<li>').append(checkbox).append(label);
    });
  });
}
function renderHits(content) {
  $('#container').html(function(hit) {
    return $.map(content.hits, function(hit) {
      return '<li>' + hit._highlightResult.commonName.value + '</li>';
    });
  });

}
$('#search-box').on('keyup', function() {
  helper.setQuery($(this).val())
        .search();
});
helper.search();
