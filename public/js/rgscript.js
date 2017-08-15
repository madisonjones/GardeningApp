// var algoliasearch = require('algoliasearch');
// var algoliasearch = require('algoliasearch/reactnative');
// var algoliasearch = require('algoliasearch/lite');
// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

var client = algoliasearch("36LOU7P2KC", "8d07c0f7efaa2dc98582aba511f6b4b7");
var index = client.initIndex('garden_index');
var client = algoliasearch("36LOU7P2KC", "8d07c0f7efaa2dc98582aba511f6b4b7");
var helper = algoliasearchHelper(client, 'garden_index');

helper.on('result', function(content) {
  renderHits(content);
  console.log(content);
});

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
