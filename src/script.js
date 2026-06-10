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

function gen_message(bool_arg){
  
  var text_div = document.getElementById("template_text");
  var t_string = "";

  if(bool_arg){

      var selected  = document.getElementById("env_cost").value ;
      var line1  = "Hello Senator "+ document.getElementById("senator_select").value ;
      var name   = document.getElementById("my_name").value

      if(document.getElementById("my_name").value){
        var name_spacer = ", " + name + ". " ;
      } else {
        var name_spacer = " and " ;
      }

      console.log(document.getElementById("my_name").value) ;

      // Default to email template unless phone is checked
      if(document.getElementById("phone").checked){
        var line2 = ", I'm one of your constituents" + name_spacer + " I'm calling today to encourage you to support AB 1729. " ;
        var signoff = '' ;
      } else {
        var line2 = ",\n\nI'm writing to encourage you to support AB 1729. " ;
        if(document.getElementById("my_name").value){
          var signed_name = name ;
        } else {
          var signed_name = "Your constituent";
        }

        var signoff = '\n\nSincerely,\n' + signed_name ;
      }

      var line3_start = "The evidence shows that telework " ;
      var line3_end   = "is an effective tool for California state government. " ;
      var check_count = 0 ;
      if(document.getElementById("env_cost").checked){
          line3_start = line3_start.concat("decreases carbon emissions, improves air quality, ") ;
          check_count = check_count + 1 ;
      }
      if(document.getElementById("health_cost").checked){
          line3_start = line3_start.concat("reduces motor vehicle injury risk, ") ;
          check_count = check_count + 1 ;
      }
      if(document.getElementById("tax_cost").checked){
          line3_start = line3_start.concat("saves nearly a quarter of a billion in taxpayer dollars per year, ") ;
          check_count = check_count + 1 ;
      }
      if(check_count > 0){
        line3_mid = "reduces traffic, and " ;
      } else {
        line3_mid = '' ;
      }

      var line3 = line3_start + line3_mid + line3_end ;

      var line4 = "I'm asking you as my representative to vote yes on AB 1729. Thank you." ;

      t_string = t_string.concat(line1, line2, line3, line4, signoff) ;

      text_div.innerText = t_string;
      text_div.style.backgroundColor = "#E2FFD7" ;
      text_div.style.marginTop = "20px" ;
      text_div.style.textAlign = "left" ;
      text_div.style.padding = "20px" ;
      text_div.style.paddingTop = "20px" ;
      text_div.style.paddingBottom = "20px" ;
      text_div.style.borderRadius = "20px" ;

  } else {
    document.getElementById("msg_form").reset() ; 
    text_div.style.backgroundColor = "#ffffff" ;
    text_div.style.marginTop = "0px" ;
  }

  text_div.innerText = t_string ;

}