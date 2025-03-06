

var tpj = jQuery;
          var revapi1;
          if(window.RS_MODULES === undefined) window.RS_MODULES = {};
          if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
          RS_MODULES.modules["revslider11"] = {init:function() {
            revapi1 = jQuery("#rev_slider_1_1");
            if(revapi1==undefined || revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
            revapi1.revolutionInit({
                DPR:"dpr",
                sliderLayout:"fullwidth",
                visibilityLevels:"1240,1240,778,480",
                gridwidth:"1240,1240,778,480",
                gridheight:"974,974,450,350",
                perspective:600,
                perspectiveType:"global",
                editorheight:"974,768,450,350",
                responsiveLevels:"1240,1240,778,480",
                progressBar:{disableProgressBar:true},
                navigation: {
                  wheelCallDelay:1000,
                  onHoverStop:false,
                  touch: {
                    touchenabled:true
                  },
                  arrows: {
                    enable:true,
                    style:"uranus",
                    hide_onmobile:true,
                    hide_under:778,
                    hide_onleave:true,
                    left: {
                      h_offset:30
                    },
                    right: {
                      h_offset:30
                    }
                  }
                },
                viewPort: {
                  global:false,
                  globalDist:"-200px",
                  enable:false
                },
                fallbacks: {
                  allowHTML5AutoPlayOnAndroid:true
                },
            });
            
          }}