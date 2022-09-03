$(function() {
  console.log('Hello Bootstrap5');
});


  $(function() {
    $(".reply").click(function (e) { 
      event.preventDefault();
      $(".card-editor").toggleClass("text-hide");      
      $(".andy-card").toggleClass("text-hide");
    });

  });

  