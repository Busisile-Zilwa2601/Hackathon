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
    document.getElementById('genderInfoPlace').innerHTML = '';
    document.getElementById('populationGroupInfoPlace').innerHTML = '';
    document.getElementById('languages').innerHTML = '';
    var y = document.getElementById('allData').innerHTML;
  }
  (document.querySelector('.AreaButton')).addEventListener('click', showArea);
  function showGender(){
    document.getElementById('areaInfoPlace').innerHTML = '';
    document.getElementById('populationGroupInfoPlace').innerHTML = '';
    document.getElementById('languages').innerHTML = '';
    var y = document.getElementById('allData').innerHTML;
  }
  (document.querySelector('.GenderButton')).addEventListener('click', showGender);
  function showlanguages(){
    document.getElementById('areaInfoPlace').innerHTML = '';
    document.getElementById('populationGroupInfoPlace').innerHTML = '';
    document.getElementById('genderInfoPlace').innerHTML = '';
    var y = document.getElementById('allData').innerHTML;
  }
  (document.querySelector('.LanguagesButton')).addEventListener('click', showlanguages);
  //AreaInfor on first load
  var sourceArea = document.querySelector('.areaInfo').innerHTML;
  var templateArea = Handlebars.compile(sourceArea);
  window.addEventListener('load', function(){
    onArea('Cape Town');
    setGenderTable('Cape Town');
    myBarChart('Cape Town');
    populationBarChart('Cape Town');
  });

  var selectTown = document.getElementById('forMap');
  function ChangeOnArea(){
    if(selectTown.options[selectTown.selectedIndex].value === 'Cape Town'){
      onArea('Cape Town');
      setGenderTable('Cape Town');
      myBarChart('Cape Town');
      populationBarChart('Cape Town');
    }
    else if(selectTown.options[selectTown.selectedIndex].value ==='Khayelitsha'){
      onArea('Khayelitsha');
      setGenderTable('Khayelitsha');
      myBarChart('Khayelitsha');
      populationBarChart('Khayelitsha');
    }
    else if(selectTown.options[selectTown.selectedIndex].value === 'Langa'){
      onArea('Langa');
      setGenderTable('Langa');
      myBarChart('Langa');
      populationBarChart('Langa');
    }
    else if(selectTown.options[selectTown.selectedIndex].value === 'Parow'){
      onArea('Parow');
      setGenderTable('Parow');
      myBarChart('Parow');
      populationBarChart('Parow');
    }
    else if(selectTown.options[selectTown.selectedIndex].value === 'Hout Bay'){
      onArea('Hout Bay');
      setGenderTable('Hout Bay');
      myBarChart('Hout Bay');
      populationBarChart('Hout Bay');
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
  function populationBarChart(town){
    var theData = statsCpt.filter(town, 'Population_Group');
    var theX = [];
    var theY = [];
    for(var i = 0; i<theData.length; i++){
      theX.push(theData[i]['Population group']);
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
        title: 'Population Group in '+ town,
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
    return Plotly.newPlot('populationGroupInfoPlace', data, layout);
  }

});
