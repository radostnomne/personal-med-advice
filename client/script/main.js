validate.init();

var form = '[data-form]';


$('[data-reg-btn]').click(function(){
  $.ajax({
      type : 'POST',
      url: '', 
      data : $(form).serialize(),
      success : function(data) {
          console.log(data);
      }})
});

$('[data-auth-btn]').click(function(){
  $.ajax({
      type : 'POST',
      url: '', 
      data : $(form).serialize(),
      success : function(data) {
          console.log(data);
      }})
});

$('[data-info-btn]').click(function(){
  $.ajax({
      type : 'POST',
      url: '', 
      data : $(form).serialize(),
      success : function(data) {
          console.log(data);
      }})
});
