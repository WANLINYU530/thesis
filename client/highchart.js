$(document).ready(function() {  
   var chart = {
      type: 'column'
   };
   var title = {
      text: 'Meeting Calender'   
   };
   var subtitle = {
      text: ' '  
   };
   var xAxis = {
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      crosshair: true
   };
   var yAxis = {
      min: 0,
      title: {
      text: 'Number of meetings (Times)'         
      }      
   };
   var tooltip = {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
         '<td style="padding:0"><b>{point.y:.1f} times</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
   };
   var plotOptions = {
      column: {
         pointPadding: 0.2,
         borderWidth: 0
      }
   };  
   var credits = {
      enabled: false
   };
   
   var series= [{
            name: 'Design Department',
            data: [10, 12, 14,12, 16, 15, 12, 14, 16, 19, 9, 4]
        }, {
            name: 'IT Department',
            data: [8, 10, 18, 19, 16, 8, 10, 14, 19, 13, 6, 3]
        }, {
            name: 'Marketing Department ',
            data: [18, 18, 19, 24, 17, 18, 19, 16, 15, 16, 19, 5]
        }, {
            name: 'Product Department',
            data: [20, 33, 34, 29, 22, 25, 27,20, 27, 29,26, 11]
   }];     
      
   var json = {};   
   json.chart = chart; 
   json.title = title;   
   json.subtitle = subtitle; 
   json.tooltip = tooltip;
   json.xAxis = xAxis;
   json.yAxis = yAxis;  
   json.series = series;
   json.plotOptions = plotOptions;  
   json.credits = credits;
   $('#container').highcharts(json);
  
});