$(function(){
    $("#chiese").on("pagecreate",function(){
        $.ajax("https://turismo-871ca.firebaseio.com/luoghi/chiese.json")
                  .done(function(data){
                       var contenuto = $(".church");
                       contenuto.empty();
                       $.map(data,function(riga,indice){
                          $(contenuto).append('<div class="ui-corner-all custom-corners"><div class="ui-bar ui-bar-a"><h3>'+ riga.nome +'</h3><a id="desc1" data-id='+ indice +' href="#map-desc" class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><a data-id='+ indice +' id="desc2" href="#map-desc"><img class="image-list" src='+ riga.immagine +' alt=""></a><p class="font">'+ riga.descrizione +'</p></div></div>');
                       });
                       /*$("#desc1,#desc2").click(function(){
                           var contenuto2 = $(".map-content");
                            contenuto2.empty();
                          var id = $(this).attr('data-id');
                          $.ajax("https://turismo-871ca.firebaseio.com/luoghi/chiese.json")
                                .done(function(data){
                                      $.map(data,function(riga,indice){
                                          if(indice===id){
                                            $(contenuto2).append('<iframe src="https://www.google.com/maps/embed?pb='+riga.coordinate+'" width="1000" height="450" frameborder="0" style="border:0; max-width: 92vw; max-height: 100vh; margin-right: 16px;" allowfullscreen></iframe>');
                                         }
                                     });
                       });
                   });*/
                  })
                  .fail(function(){
                      alert("Errore!");
                  });
    });
    $("#cultura").on("pagecreate",function(){
        $.ajax("https://turismo-871ca.firebaseio.com/luoghi/cultura.json")
                  .done(function(data){
                       var contenuto = $(".cult");
                       contenuto.empty();
                       $.map(data,function(riga,indice){
                          $(contenuto).append('<div class="ui-corner-all custom-corners"><div class="ui-bar ui-bar-a"><h3>'+ riga.nome +'</h3><a id="desc3" data-id='+ indice +' href="#map-desc" class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><a id="desc4" data-id='+ indice +' href="#map-desc"><img class="image-list" src='+ riga.immagine +' alt=""></a><p class="font">'+ riga.descrizione +'</p></div></div>');
                       });
                       $("#desc3,#desc4").click(function(){
                           var contenuto2 = $(".map-content");
                            contenuto2.empty();
                          var id = $(this).attr('data-id');
                          $.ajax("https://turismo-871ca.firebaseio.com/luoghi/cultura.json")
                                .done(function(data){
                                      $.map(data,function(riga,indice){
                                          if(indice===id){
                                            $(contenuto2).append('<iframe src="https://www.google.com/maps/embed?pb='+riga.coordinate+'" width="1000" height="450" frameborder="0" style="border:0; max-width: 92vw; max-height: 100vh; margin-right: 16px;" allowfullscreen></iframe>');
                                         }
                                     });
                       });
                   });
                       
                  })
                  .fail(function(){
                      alert("Errore!");
                  });
    });
    $("#monumenti").on("pagecreate",function(){
        $.ajax("https://turismo-871ca.firebaseio.com/luoghi/monumenti.json")
                  .done(function(data){
                       var contenuto = $(".mon");
                       contenuto.empty();
                       $.map(data,function(riga,indice){
                          $(contenuto).append('<div class="ui-corner-all custom-corners"><div class="ui-bar ui-bar-a"><h3>'+ riga.nome +'</h3><a id="desc5" data-id='+ indice +' href="#map-desc" class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><a data-id='+ indice +' id="desc6" href="#map-desc"><img class="image-list" src='+ riga.immagine +' alt=""></a><p class="font">'+ riga.descrizione +'</p></div></div>');
                       });
                       $("#desc5,#desc6").click(function(){
                           var contenuto2 = $(".map-content");
                            contenuto2.empty();
                          var id = $(this).attr('data-id');
                          $.ajax("https://turismo-871ca.firebaseio.com/luoghi/monumenti.json")
                                .done(function(data){
                                      $.map(data,function(riga,indice){
                                          if(indice===id){
                                            $(contenuto2).append('<iframe src="https://www.google.com/maps/embed?pb='+riga.coordinate+'" width="1000" height="450" frameborder="0" style="border:0; max-width: 92vw; max-height: 100vh; margin-right: 16px;" allowfullscreen></iframe>');
                                         }
                                     });
                       });
                   });
                  })
                  .fail(function(){
                      alert("Errore!");
                  });
    });
    $("#ristoranti").on("pagecreate",function(){
        $.ajax("https://turismo-871ca.firebaseio.com/luoghi/enogastronomia.json")
                  .done(function(data){
                       var contenuto = $(".rist");
                       contenuto.empty();
                       $.map(data,function(riga,indice){
                          $(contenuto).append('<div class="ui-corner-all custom-corners"><div class="ui-bar ui-bar-a"><h3>'+ riga.nome +'</h3><a id="desc7" data-id='+ indice +' href="#map-desc" class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><a data-id='+ indice +' id="desc8" href="#map-desc"><img class="image-list" src='+ riga.immagine +' alt=""></a><p class="font">'+ riga.indirizzo +' - Tel '+ riga.telefono +'</p></div></div>');
                       });
                       $("#desc7,#desc8").click(function(){
                           var contenuto2 = $(".map-content");
                            contenuto2.empty();
                          var id = $(this).attr('data-id');
                          $.ajax("https://turismo-871ca.firebaseio.com/luoghi/enogastronomia.json")
                                .done(function(data){
                                      $.map(data,function(riga,indice){
                                          if(indice===id){
                                            $(contenuto2).append('<iframe src="https://www.google.com/maps/embed?pb='+riga.coordinate+'" width="1000" height="450" frameborder="0" style="border:0; max-width: 92vw; max-height: 100vh; margin-right: 16px;" allowfullscreen></iframe>');
                                         }
                                     });
                       });
                   });
                  })
                  .fail(function(){
                      alert("Errore!");
                  });
    });
    
    $("div[data-role='page']").on("swiperight", function(event) {
        $(this).find("div[data-role='panel']").panel("open");
        });
    $("div[data-role='page']").on("swipeleft", function(event) {
        $(this).find("div[data-role='panel']").panel("close");
    });
    $("#scrolldown").click(function(e){
        e.preventDefault();
        $('div[data-role=page]').bind("pageshow", function() {
            setTimeout(function(){$.mobile.silentScroll($("#register").offset().top);},200);
        });
        $.mobile.silentScroll($("#register").offset().top);
    });
   $("#register").submit(function(){
      var Object = {
        nome : $("#nome").val(),
        email : $("#email").val(),
        obj : $("#obj").val(),
        messaggio : $("#messaggio").val()
      };

      var mex = JSON.stringify(Object);
      $.ajax({
          url:'https://turismo-871ca.firebaseio.com/contatti/.json',
          type:'POST',
          dataType:'JSON',
          data: mex,
          success: function(data){
              alert("Messaggio inviato!");
          },
          fail:function(){
              alert("Errore!");
          }
      });
      $("#nome,#email,#obj,#messaggio").val('');
   });
});