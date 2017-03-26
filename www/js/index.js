$(function(){
    $("#chiese").on("pagecreate",function(){
        $.ajax("https://turismo-871ca.firebaseio.com/luoghi/chiese.json")
                  .done(function(data){
                       var contenuto = $(".church");
                       contenuto.empty();
                       $.map(data,function(riga,indice){
                           var preferito = localStorage.getItem(indice);
                           if(preferito == 1){var like = 'ui-alt-icon';}
                          $(contenuto).append('<div class="ui-corner-all custom-corners"><div class="ui-bar ui-bar-a top-list" data-id='+ indice +'><h3>'+ riga.nome +'</h3><a href="#" id="like1" data-id='+ indice +' class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-heart ui-corner-all heart-list '+like+'"></a><a id="desc1" data-id='+ indice +' href="#map-desc" class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r ui-corner-all arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><a data-id='+ indice +' id="desc2" href="#map-desc"><img class="image-list" src='+ riga.immagine +' alt=""></a><p class="font">'+ riga.descrizione +'</p></div></div>');
                       });
                       $("#desc1,#desc2").click(function(){
                           var contenuto2 = $(".map-content");
                            contenuto2.empty();
                          var id = $(this).attr('data-id');
                          $.ajax("https://turismo-871ca.firebaseio.com/luoghi/chiese.json")
                                .done(function(data){
                                      $.map(data,function(riga,indice){
                                          if(riga.telefono == null){var notel = 'ui-state-disabled';}
                                          if(indice===id){
                                            $(contenuto2).append('<iframe src="https://www.google.com/maps/embed?pb='+riga.coordinate+'" width="1000" height="450" frameborder="0" style="border:0; max-width: 100vw; max-height: 50vh;" allowfullscreen></iframe><h4 class="dett">'+riga.nome+'</h4><p class="font" style="margin-left:4px;"><b>Indirizzo</b></p><p class="font-list">'+riga.indirizzo+'</p><div style="margin-left:15px;"><a href="tel:'+riga.telefono+'" class="ui-btn ui-btn-inline ui-corner-all ui-shadow ui-btn-icon-left ui-icon-phone '+notel+'" style="background-color:#e2dfdf !important;">Chiama</a></div>');
                                         }
                                     });
                       });
                   });
                        $(".heart-list").click(function(){
                            if(localStorage.getItem($(this).parent('div').attr('data-id')) != 1){
                                $(this).addClass("ui-alt-icon");
                                localStorage.setItem($(this).parent('div').attr('data-id'),1);
                            }else{
                                $(this).removeClass("ui-alt-icon");
                                localStorage.setItem($(this).parent('div').attr('data-id'),0);
                            }
                        });
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
                           var preferito = localStorage.getItem(indice);
                           if(preferito == 1){var like = 'ui-alt-icon';}
                          $(contenuto).append('<div class="ui-corner-all custom-corners"><div class="ui-bar ui-bar-a top-list" data-id='+ indice +'><h3>'+ riga.nome +'</h3><a href="#" id="like1" data-id='+ indice +' class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-heart ui-corner-all heart-list '+like+'"></a><a id="desc3" data-id='+ indice +' href="#map-desc" class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r ui-corner-all arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><a id="desc4" data-id='+ indice +' href="#map-desc"><img class="image-list" src='+ riga.immagine +' alt=""></a><p class="font">'+ riga.descrizione +'</p></div></div>');
                       });
                       $("#desc3,#desc4").click(function(){
                           var contenuto2 = $(".map-content");
                            contenuto2.empty();
                          var id = $(this).attr('data-id');
                          $.ajax("https://turismo-871ca.firebaseio.com/luoghi/cultura.json")
                                .done(function(data){
                                      $.map(data,function(riga,indice){
                                          if(riga.telefono == null){var notel = 'ui-state-disabled';}
                                          if(indice===id){
                                            $(contenuto2).append('<iframe src="https://www.google.com/maps/embed?pb='+riga.coordinate+'" width="1000" height="450" frameborder="0" style="border:0; max-width: 100vw; max-height: 50vh;" allowfullscreen></iframe><h4 class="dett">'+riga.nome+'</h4><p class="font" style="margin-left:4px;"><b>Indirizzo</b></p><p class="font-list">'+riga.indirizzo+'</p><div style="margin-left:15px;"><a href="tel:'+riga.telefono+'" class="ui-btn ui-btn-inline ui-corner-all ui-shadow ui-btn-icon-left ui-icon-phone '+notel+'" style="background-color:#e2dfdf !important;">Chiama</a></div>');
                                         }
                                     });
                       });
                   });
                      $(".heart-list").click(function(){
                            if(localStorage.getItem($(this).parent('div').attr('data-id')) != 1){
                                $(this).addClass("ui-alt-icon");
                                localStorage.setItem($(this).parent('div').attr('data-id'),1);
                            }else{
                                $(this).removeClass("ui-alt-icon");
                                localStorage.setItem($(this).parent('div').attr('data-id'),0);
                            }
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
                           var preferito = localStorage.getItem(indice);
                           if(preferito == 1){var like = 'ui-alt-icon';}
                          $(contenuto).append('<div class="ui-corner-all custom-corners"><div class="ui-bar ui-bar-a top-list" data-id='+ indice +'><h3>'+ riga.nome +'</h3><a href="#" id="like1" data-id='+ indice +' class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-heart ui-corner-all heart-list '+like+'"></a><a id="desc5" data-id='+ indice +' href="#map-desc" class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r ui-corner-all arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><a data-id='+ indice +' id="desc6" href="#map-desc"><img class="image-list" src='+ riga.immagine +' alt=""></a><p class="font">'+ riga.descrizione +'</p></div></div>');
                       });
                       $("#desc5,#desc6").click(function(){
                           var contenuto2 = $(".map-content");
                            contenuto2.empty();
                          var id = $(this).attr('data-id');
                          $.ajax("https://turismo-871ca.firebaseio.com/luoghi/monumenti.json")
                                .done(function(data){
                                      $.map(data,function(riga,indice){
                                          if(riga.telefono == null){var notel = 'ui-state-disabled';}
                                          if(indice===id){
                                            $(contenuto2).append('<iframe src="https://www.google.com/maps/embed?pb='+riga.coordinate+'" width="1000" height="450" frameborder="0" style="border:0; max-width: 100vw; max-height: 50vh;" allowfullscreen></iframe><h4 class="dett">'+riga.nome+'</h4><p class="font" style="margin-left:4px;"><b>Indirizzo</b></p><p class="font-list">'+riga.indirizzo+'</p><div style="margin-left:15px;"><a href="tel:'+riga.telefono+'" class="ui-btn ui-btn-inline ui-corner-all ui-shadow ui-btn-icon-left ui-icon-phone '+notel+'" style="background-color:#e2dfdf !important;">Chiama</a></div>');
                                         }
                                     });
                       });
                   });
                        $(".heart-list").click(function(){
                            if(localStorage.getItem($(this).parent('div').attr('data-id')) != 1){
                                $(this).addClass("ui-alt-icon");
                                localStorage.setItem($(this).parent('div').attr('data-id'),1);
                            }else{
                                $(this).removeClass("ui-alt-icon");
                                localStorage.setItem($(this).parent('div').attr('data-id'),0);
                            }
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
                            var preferito = localStorage.getItem(indice);
                            if(preferito == 1){var like = 'ui-alt-icon';}
                          $(contenuto).append('<div class="ui-corner-all custom-corners"><div class="ui-bar ui-bar-a top-list" data-id='+ indice +'><h3>'+ riga.nome +'</h3><a href="#" id="like1" data-id='+ indice +' class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-heart ui-corner-all heart-list '+like+'"></a><a id="desc7" data-id='+ indice +' href="#map-desc" class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r ui-corner-all arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><a data-id='+ indice +' id="desc8" href="#map-desc"><img class="image-list" src='+ riga.immagine +' alt=""></a><p class="font">'+ riga.indirizzo +' - Tel '+ riga.telefono +'</p></div></div>');
                       });
                       $("#desc7,#desc8").click(function(){
                           var contenuto2 = $(".map-content");
                            contenuto2.empty();
                          var id = $(this).attr('data-id');
                          $.ajax("https://turismo-871ca.firebaseio.com/luoghi/enogastronomia.json")
                                .done(function(data){
                                      $.map(data,function(riga,indice){
                                          if(riga.telefono == null){var notel = 'ui-state-disabled';}
                                          if(indice===id){
                                            $(contenuto2).append('<iframe src="https://www.google.com/maps/embed?pb='+riga.coordinate+'" width="1000" height="450" frameborder="0" style="border:0; max-width: 100vw; max-height: 50vh;" allowfullscreen></iframe><h4 class="dett">'+riga.nome+'</h4><p class="font" style="margin-left:4px;"><b>Indirizzo</b></p><p class="font-list">'+riga.indirizzo+'</p><div style="margin-left:15px;"><a href="tel:'+riga.telefono+'" class="ui-btn ui-btn-inline ui-corner-all ui-shadow ui-btn-icon-left ui-icon-phone '+notel+'" style="background-color:#e2dfdf !important;">Chiama</a></div>');
                                         }
                                     });
                       });
                   });
                        $(".heart-list").click(function(){
                            if(localStorage.getItem($(this).parent('div').attr('data-id')) != 1){
                                $(this).addClass("ui-alt-icon");
                                localStorage.setItem($(this).parent('div').attr('data-id'),1);
                            }else{
                                $(this).removeClass("ui-alt-icon");
                                localStorage.setItem($(this).parent('div').attr('data-id'),0);
                            }
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
    $(".scrolldown").click(function(e){
        $("#contatti").on("pageshow", function() {
            $.mobile.silentScroll($("#register").offset().top);
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
    
    $('.made').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000
    });
    
    $("#preferiti").on("pageshow",function(){
        $.ajax("https://turismo-871ca.firebaseio.com/luoghi.json")
                .done(function(data){
                    var content1 = $(".prefer");
                    content1.empty();
                    
                    $.map(data,function(riga,indice){
                        $.map(riga,function(value,index){
                            var preferito = localStorage.getItem(index);
                            if(preferito == 1){
                                var like = 'ui-alt-icon';
                                if(indice != "enogastronomia"){
                                    $(content1).append('<div class="ui-corner-all custom-corners"><div class="ui-bar ui-bar-a top-list" data-id='+index+'><h3>'+ value.nome +'</h3><a href="#" id="like1" data-id='+ index +' class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-heart ui-corner-all heart-list '+like+'"></a><a id="desc1" data-id='+ index +' href="#map-desc" class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r ui-corner-all arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><a data-id='+ index +' id="desc2" href="#map-desc"><img class="image-list" src='+ value.immagine +' alt=""></a><p class="font">'+ value.descrizione +'</p></div></div>');
                                }else{
                                    $(content1).append('<div class="ui-corner-all custom-corners"><div class="ui-bar ui-bar-a top-list" data-id='+index+'><h3>'+ value.nome +'</h3><a href="#" id="like1" data-id='+ index +' class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-heart ui-corner-all heart-list '+like+'"></a><a id="desc7" data-id='+ index +' href="#map-desc" class="ui-btn ui-btn-right ui-btn-icon-notext ui-icon-carat-r ui-corner-all arrow-list"></a></div>\
                                              <div class="ui-body ui-body-a custom-body"><a data-id='+ index +' id="desc8" href="#map-desc"><img class="image-list" src='+ value.immagine +' alt=""></a><p class="font">'+ value.indirizzo +' - Tel '+ value.telefono +'</p></div></div>');
                                }
                            }
                        });
                    });
                    
                    $("#desc1,#desc2").click(function(){
                           var content2 = $(".map-content");
                            content2.empty();
                          var id = $(this).attr('data-id');
                          $.ajax("https://turismo-871ca.firebaseio.com/luoghi.json")
                                .done(function(data){
                                      $.map(data,function(riga,indice){
                                          $.map(riga,function(value,index){
                                              if(value.telefono == null){var notel = 'ui-state-disabled';}
                                          if(index===id){
                                            $(content2).append('<iframe src="https://www.google.com/maps/embed?pb='+value.coordinate+'" width="1000" height="450" frameborder="0" style="border:0; max-width: 100vw; max-height: 50vh;" allowfullscreen></iframe><h4 class="dett">'+value.nome+'</h4><p class="font" style="margin-left:4px;"><b>Indirizzo</b></p><p class="font-list">'+value.indirizzo+'</p><div style="margin-left:15px;"><a href="tel:'+value.telefono+'" class="ui-btn ui-btn-inline ui-corner-all ui-shadow ui-btn-icon-left ui-icon-phone '+notel+'" style="background-color:#e2dfdf !important;">Chiama</a></div>');
                                         }
                                        });
                                     });
                       });
                   });
                   $(".ui-alt-icon").click(function(){
                      $(this).removeClass("ui-alt-icon");
                      localStorage.setItem($(this).parent('div').attr('data-id'),0);
                      location.reload();
                   });
                   
                   if($(".prefer").children().length == 0){
                       $(".prefer").append("<div class='ui-body ui-body-a ui-corner-all'><a class='ui-corner-all ui-icon-alert ui-btn-icon-top'><h3 style='color:#ccc;text-shadow:1px 0 #ccc;padding-top:10px;margin-bottom:18px;'>Nessun Preferito</h3></a></div>");
                   }
            })
                .fail(function(){
                    alert("Errore!");
            });
    });
    
    $(".parent-container").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        },
        title:'Galleria',
        zoom:{
            enabled:true,
            duration:300,
            easing:'ease-in-out'
        }
    });
});