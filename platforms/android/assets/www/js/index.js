$(function(){
    $("#chiese").on("pageshow",function(){
        $.ajax("https://turismo-871ca.firebaseio.com/luoghi/chiese.json")
                  .done(function(data){
                       var contenuto = $(".church");
                       contenuto.empty();
                       $.map(data,function(riga,indice){
                           console.log(indice);
                          $(contenuto).append('<div class="ui-corner-all custom-corners" data-id='+ indice +'><div class="ui-bar ui-bar-a"><h3>'+ riga.nome +'</h3><a class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><img class="image-list" src='+ riga.immagine +' alt=""><p class="font">'+ riga.descrizione +'</p></div></div>');
                       });
                  })
                  .fail(function(){
                      alert("Errore!");
                  });
    });
    $("#cultura").on("pageshow",function(){
        $.ajax("https://turismo-871ca.firebaseio.com/luoghi/cultura.json")
                  .done(function(data){
                       var contenuto = $(".cult");
                       contenuto.empty();
                       $.map(data,function(riga,indice){
                           console.log(indice);
                          $(contenuto).append('<div class="ui-corner-all custom-corners" data-id='+ indice +'><div class="ui-bar ui-bar-a"><h3>'+ riga.nome +'</h3><a class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><img class="image-list" src='+ riga.immagine +' alt=""><p class="font">'+ riga.descrizione +'</p></div></div>');
                       });
                  })
                  .fail(function(){
                      alert("Errore!");
                  });
    });
    $("#monumenti").on("pageshow",function(){
        $.ajax("https://turismo-871ca.firebaseio.com/luoghi/monumenti.json")
                  .done(function(data){
                       var contenuto = $(".mon");
                       contenuto.empty();
                       $.map(data,function(riga,indice){
                           console.log(indice);
                          $(contenuto).append('<div class="ui-corner-all custom-corners" data-id='+ indice +'><div class="ui-bar ui-bar-a"><h3>'+ riga.nome +'</h3><a class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><img class="image-list" src='+ riga.immagine +' alt=""><p class="font">'+ riga.descrizione +'</p></div></div>');
                       });
                  })
                  .fail(function(){
                      alert("Errore!");
                  });
    });
    $("#ristoranti").on("pageshow",function(){
        $.ajax("https://turismo-871ca.firebaseio.com/luoghi/enogastronomia.json")
                  .done(function(data){
                       var contenuto = $(".rist");
                       contenuto.empty();
                       $.map(data,function(riga,indice){
                           console.log(indice);
                          $(contenuto).append('<div class="ui-corner-all custom-corners" data-id='+ indice +'><div class="ui-bar ui-bar-a"><h3>'+ riga.nome +'</h3><a class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><a href="#"><img class="image-list" src='+ riga.immagine +' alt=""></a><p class="font">'+ riga.indirizzo +' - Tel '+ riga.telefono +'</p></div></div>');
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
});