document.addEventListener('DOMContentLoaded', function(){
  var statsCpt = CapeTownStatistics();
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
  //The gender table
  var sourceGender = document.querySelector('.genderTable').innerHTML;
  var templateGender = Handlebars.compile(sourceGender);
  function setGenderTable(town){
    if(town === selectTown.options[selectTown.selectedIndex].value){
      var myobj = statsCpt.filter(town, 'Gender');
      var dataGender = templateGender({Female: myobj[0].Gender, People: myobj[0].People, Percentage: myobj[0].Percentage, Male : myobj[1].Gender, People: myobj[1].People, Percentage : myobj[1].Percentage});
        document.getElementById('genderInfoPlace').innerHTML = dataGender;
    }
  }


  function showArea(){
    var x = document.getElementById('areaInfoPlace');
    if(document.querySelector('input[name = "AreaButton"]: checked')){
      if(x.style.display === 'none'){
        x.style.display = 'block';
        document.getElementById('genderInfoPlace').style.display = 'none';
        document.getElementById('languagesInfoPlace').style.display = 'none';
        document.getElementById('populationGroupInfoPlace').style.display = 'none';
      }
    }
  }
  (document.querySelector('.AreaButton')).addEventListener('click', showArea);
  //AreaInfor on first load
  var sourceArea = document.querySelector('.areaInfo').innerHTML;
  var templateArea = Handlebars.compile(sourceArea);
  window.addEventListener('load', function(){
    onArea('Cape Town');
    setGenderTable('Cape Town');
    myBarChart('Cape Town');
  });

  var selectTown = document.getElementById('forMap');
  function ChangeOnArea(){
    if(selectTown.options[selectTown.selectedIndex].value === 'Cape Town'){
      onArea('Cape Town');
      setGenderTable('Cape Town');
      myBarChart('Cape Town');
    }
    else if(selectTown.options[selectTown.selectedIndex].value ==='Khayelitsha'){
      onArea('Khayelitsha');
      setGenderTable('Khayelitsha');
      myBarChart('Khayelitsha');
    }
    else if(selectTown.options[selectTown.selectedIndex].value === 'Langa'){
      onArea('Langa');
      setGenderTable('Langa');
      myBarChart('Langa');
    }
    else if(selectTown.options[selectTown.selectedIndex].value === 'Parow'){
      onArea('Parow');
      setGenderTable('Parow');
      myBarChart('Parow');
    }
    else if(selectTown.options[selectTown.selectedIndex].value === 'Hout Bay'){
      onArea('Hout Bay');
      setGenderTable('Hout Bay');
      myBarChart('Hout Bay');
    }
  }
  function onArea(town){
    if(town === selectTown.options[selectTown.selectedIndex].value){
      var myobj = statsCpt.filter(town, 'Area');
      var dataArea = templateArea({
        areaDetails: [{Area : myobj.Area,
                      Population : myobj.Population,
                      Household : myobj.Household}
        ]});
        document.getElementById('areaInfoPlace').innerHTML = dataArea;
    }
  }
  selectTown.addEventListener('change', function(){
    ChangeOnArea();
  });

  function myBarChart(town){
    var theData = statsCpt.filter(town, 'Languages');
    var theX = [];
    var theY = [];
    for(var i = 0; i<theData.length; i++){
      theX.push(theData[i]['First language']);
      theY.push(parseFloat(theData[i]['Percentage']));
    }
    var trace1 = {
      x: theX,
      y: theY,
      type: 'bar',
      marker :{color:'rgb(142,124,195)'}
    };
    var data = [trace1];
    var layout = {
        title: 'Languages in '+ town,
        font: {
            family: 'Raleway, sans-serif'
        },
        showlegend: false,
        xaxis: {
            tickangle: -45
        },
        yaxis: {
            zeroline: false,
            gridwidth: 2
        },
        bargap: 0.05
    };
    return Plotly.newPlot('languagesInfoPlace', data, layout);
  }
});
