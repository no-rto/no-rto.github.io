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
  
  var text_div = document.getElementById("template_text") ;
  var text_div_sen = document.getElementById("sen_text") ;
  var text_div_am = document.getElementById("am_text") ;
  var header_sen = document.getElementById("sen_header") ;
  var header_am = document.getElementById("am_header");
  var t_string = "" ;

  if(bool_arg){

      var selected  = document.getElementById("env_cost").value ;
      var line1_sen  = "Hello Senator "+ document.getElementById("senator_select").value ;
      var line1_am   = "Hello Assemblymember "+ document.getElementById("assembly_select").value ; 
      var name   = document.getElementById("my_name").value

      if(document.getElementById("my_name").value){
        var name_spacer = ", " + name + ". " ;
      } else {
        var name_spacer = " and " ;
      }

      console.log(document.getElementById("my_name").value) ;

      // Default to email template unless phone is checked
      if(document.getElementById("phone").checked){
        var line2 = ", I'm one of your constituents" + name_spacer + " I'm calling today to encourage you to exercise your power to override a veto. For decades now, the legislature has refused to exercise its constitutional authority to override a veto, resulting in an executive that is more powerful than what is outlined in the constitution. Californians deserve a legislature that is willing to keep the executive in check. You can start by overriding the governor's veto of AB 1729. " ;
        var signoff = '' ;
      } else {
        var line2 = ",\n\nI'm writing to encourage you to exercise your power to override a veto. For decades now, the legislature has refused to exercise its constitutional authority to override a veto, resulting in an executive that is more powerful than what is outlined in the constitution. Californians deserve a legislature that is willing to keep the executive in check. You can start by overriding the governor's veto of AB 1729. " ;
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

      var line4 = "I'm asking you as my representative to override the governor's veto of AB 1729. Thank you." ;

      sen_string = t_string.concat(line1_sen, line2, line3, line4, signoff) ;
      am_string = t_string.concat(line1_am, line2, line3, line4, signoff, '\n\n') ;

      text_div.style.backgroundColor = "#E2FFD7" ;
      text_div.style.marginTop = "20px" ;
      text_div.style.textAlign = "left" ;
      text_div.style.padding = "20px" ;
      text_div.style.paddingTop = "20px" ;
      text_div.style.paddingBottom = "20px" ;
      text_div.style.borderRadius = "20px" ;

      header_sen.style.display = "inline" ;
      header_am.style.display = "inline" ;
      text_div_am.innerText = am_string ;
      text_div_am.style.textAlign = "left" ;
      text_div_sen.innerText = sen_string ;
      text_div_sen.style.textAlign = "left" ;
      text_div_am.style.display = "block" ;
      text_div_sen.style.display = "block" ;


  } else {
    document.getElementById("msg_form").reset() ; 
    header_sen.style.display = "none" ;
    header_am.style.display = "none" ;
    text_div_am.style.display = "none" ;
    text_div_sen.style.display = "none" ;
    text_div.style.backgroundColor = "#ffffff" ;
    text_div.style.marginTop = "0px" ;
  }



}