!function(e,t,a){var i,r,n=e(".jw-player-wrapper"),s=(t("jw-player"),e(".players #ustream")),o=e("iframe",s),u=e("#youtube-player"),c=(e("iframe",u),e(".players #twitch")),d=e("iframe",c),h=e(".players #tunein"),y=e("iframe",h),p={bitgravity:{width:"100%",aspectratio:"16:9",primary:"html5",autostart:!0,skin:"five",ga:{},sharing:{},hlslabels:{1000:"High",512:"Medium"}},audio:{width:"100%",height:"40",type:"mp3",image:"",autostart:!0,skin:"five",ga:{},sharing:{}}},w=function(e){return JSON.parse(JSON.stringify(e))},m={bitgravity:function(){var e=w(p.bitgravity);n.show(),t("jw-player").setup(e)},twitch:function(){c.show(),d.attr("src",p.twitch.src)},youtube:function(){function e(){r=new YT.Player("yt-player",{height:"571",width:"100%",modestbranding:1,videoId:p.youtube.videoId})}u.show();setTimeout(e,500)},tunein:function(){h.show(),y.attr("src",p.tunein.src)},audio:function(){var e=w(p.audio);e.image="",n.show(),t("jw-player").setup(e).resize(e.width,e.height)},ustream:function(){s.show(),o.attr("src",p.ustream.src)}},b=function(){switch(i){case"bitgravity":break;case"twitch":break;case"tunein":break;case"audio":t("jw-player").stop();break;case"ustream":if(UstreamEmbed){var e=UstreamEmbed(o.get(0));e.callMethod("stop")}break;case"youtube":var a=document.getElementById("yt-player");a.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}},g=function(){switch(i){case"bitgravity":t("jw-player").remove(),n.hide();break;case"twitch":d.attr("src","about:blank"),c.hide();break;case"tunein":y.attr("src","about:blank"),h.hide();break;case"youtube":u.hide();var e=document.getElementById("yt-player");e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");break;case"audio":t("jw-player").remove(),n.hide();break;case"ustream":o.attr("src","about:blank"),s.hide()}};a.provider={get:function(){return i},set:function(t){var r=i;g(),e.isFunction(a.ga)&&"undefined"!=typeof r&&ga("send","event","live","provider switch",r+" -> "+t),m[t](),i=t},config:function(t){e.extend(!0,p,t)},pause:b}}(jQuery,jwplayer,window);