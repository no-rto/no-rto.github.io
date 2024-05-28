// show a hidden div or hide a visible div

function showhide(disp_obj) {

  /*var title = document.getElementById(title_obj);
  title.style.color = '#DA2020';

  const ids = ['ei', 'hi', 'ct'];
  let index = ids.indexOf(disp_obj);  

  for(let i = 0; i < ids.length; i++){
    if(i==index){*/
      var x = document.getElementById(disp_obj);
      /*var xt = document.getElementById(disp_obj.concat("_title"));*/
    if (x.style.display === "none") {
      x.style.display = "block";
      /*xt.style.color  = '#DA2020';*/
    } else {
      x.style.display = "none";
      /*xt.style.color  = '#1A2B53';*/
    }
  /*} else {
      var y = document.getElementById(ids[i]);
      y.style.display= "none";
      var yt = document.getElementById(ids[i].concat('_title'));
      yt.style.color = '#1A2B53';
  }
     
  }
  */
}

function letitshow(disp_obj){
  var x = document.getElementById(disp_obj);
  x.style.display = 'block';
}