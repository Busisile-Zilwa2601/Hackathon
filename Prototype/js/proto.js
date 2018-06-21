document.addEventListener('DOMContentLoaded', function(){

  var filterStore = document.getElementById('filterPart');

  var sourceFilter = document.querySelector('.theFilter').innerHTML;
  var templateFilter = Handlebars.compile(sourceFilter);
  Handlebars.registerHelper('makeDropdown', function(name, options){
    var filterList = options.fn();
    filterList = filterList.trim().split('\n');
    var output = '';
    for(var val in filterList){
      var item = filterList[val].trim();
      output += '<option value="'+item+'">'+item +'</option>';
    }
    return output;
  });
  filterStore.innerHTML = templateFilter();
});
