jQuery.fn.exists = function () {
    return this.length > 0;
}

$(document).ready(function () {

    $(".services").hover(function () {
        $("#menu_services").css({display: "block"});
    });


    /*campaigns*/
    $(".cam_web_box1").hover(function () {
        $("#cam_web_box1_inner").fadeIn(500);
    });
    $(".cam_web_box2").hover(function () {
        $("#cam_web_box2_inner").fadeIn(500);
    });
    $("#cam_web_box_close1").click(function () {
        $("#cam_web_box1_inner").fadeOut(500);
    });
    $("#cam_web_box_close2").click(function () {
        $("#cam_web_box2_inner").fadeOut(500);
    });
    /*end campaigns*/

    if ($(".paketlist").length > 0) {
        $(".all_packet").click(function () {
            $("#content_right").animate({height: "1400px"}, 800);
            $("#content_right_d").animate({height: "1400px"}, 800);
            $(".all_packet").hide();
        });

    } else {
        $(".all_packet").click(function () {
            $("#content_right").animate({height: "940px"}, 800);
            $("#content_right_d").animate({height: "940px"}, 800);
        });

    }

    $(".dtop_all_select").mousedown(function () {
        if ($("#dtop_s2 input").attr("checked")) {
            $("#dtop_s2 input").removeAttr("checked");
        } else {
            $("#dtop_s2 input").attr({checked: "checked"});
        }
    });

    $("#bg").hover(function () {
        $("#menu_services").css({display: "none"});
    });
    $("#banner_content").hover(function () {
        $("#menu_services").css({display: "none"});
    });

    $("#content_s").hover(function () {
        $("#menu_services").css({display: "none"});
    });

    $(".slide").hover(function () {
        $("#menu_services").css({display: "none"});
    });

    $("#masterust").hover(function () {
        $("#menu_services").css({display: "none"});
    });

    /*Site permalinks*/
    $(".jsOnlineSales").attr({href: "https://secure.doruk.net.tr/hspcstore/"});
    $(".jsBlog").attr({href: "http://www.doruk.net.tr/blog/"});
    $(".jsContact").attr({href: "http://www.doruk.net.tr/hakkimizda/iletisim.html"});
    $(".jsAbout").attr({href: "http://www.doruk.net.tr/hakkimizda/genel-tanitim.html"});
    $(".jsServices").attr({href: "#"});
    $(".jsCampaigns").attr({href: "#"});
    $(".jsPartnership").attr({href: "http://www.doruk.net.tr/is-ortakligi/genelbakis.html"});
    $(".jsCustomerCenter").attr({href: "http://www.doruk.net.tr/musteri-bilgi-merkezi/musteri-hizmet-anlayisi.html"});
    $(".domainnamehelp").attr({href: "http://www.doruk.net.tr/web_hosting/data_center.html"});

    $(".jsDataCenter").attr({href: "http://www.doruk.net.tr/web_hosting/data_center.html"});
    $(".jsSoundServices").attr({href: "http://www.doruk.net.tr/ses-hizmetleri/index.html"});
    $(".jsVpn").attr({href: "http://www.doruk.net.tr/internet-erisim-hizmetleri/adsl.html"});

    $(".jsDataCenter1").attr({href: "http://www.doruk.net.tr/web_hosting/data_center.html"});
    $(".jsSoundServices1").attr({href: "http://www.doruk.net.tr/ses-hizmetleri/index.html"});
    $(".jsVpn1").attr({href: "http://www.doruk.net.tr/internet-erisim-hizmetleri/adsl.html"});

    $(".jsLinuxVps").attr({href: "http://www.doruk.net.tr/vps/l_vps.html"});
    $(".jsMicrosoftVps").attr({href: "http://www.doruk.net.tr/vps/m_vps.html"});

    $(".jsLinuxWeb").attr({href: "http://www.doruk.net.tr/hosting/l_web_hosting.html"});
    $(".jsMicrosoftWeb").attr({href: "http://www.doruk.net.tr/hosting/m_web_hosting.html"});

    $(".jsVps").attr({href: "http://www.doruk.net.tr/vps/m_vps.html"});
    $(".jsDorukCloud").attr({href: "http://www.dorukcloud.com"});
    $(".jsServerServices").attr({href: "http://www.doruk.net.tr/vps/server_services.html"});

    $(".jsMailSolutions").attr({href: "http://www.doruk.net.tr/mail/mail_solutions.html"});
    $(".jsExchangeMail").attr({href: "http://www.doruk.net.tr/mail/exchange_mail.html"});
    $(".jsAdslMail").attr({href: "http://www.doruk.net.tr/mail/m_adsl_mail.html"});

    $(".jsSiteMap").attr({href: "http://www.doruk.net.tr/web_hosting/site_map.html"});
    $(".jsEnglish").attr({href: "http://www.doruk.net.tr/hakkimizda/general_overview.html"});
    $(".jsTurkish").attr({href: "http://www.doruk.net.tr/hakkimizda/genel-tanitim.html"});

    $(".jsAdslMailWindows").attr({href: "http://www.doruk.net.tr/mail/m_adsl_mail.html"});
    $(".jsAdslMailWindowsDetail").attr({href: "http://www.doruk.net.tr/mail/m_adsl_mail_detail.html"});
    $(".jsAdslMailLinux").attr({href: "http://www.doruk.net.tr/mail/l_adsl_mail.html"});
    $(".jsAdslMailLinuxDetail").attr({href: "http://www.doruk.net.tr/mail/l_adsl_mail_detail.html"});
    $(".jsFacebook").attr({href: "http://facebook.com/doruknet"});
    $(".jsTwitter").attr({href: "http://twitter.com/DorukNet"});


    $(".jsCampaigns").attr({href: "#"});

    $(".logo").attr({href: "http://www.doruk.net.tr/index.html"});

    $(".all_packet_online_backup").attr({href: "http://www.doruk.net.tr/online_backup/online_backup.html"});

    /*end permalinks*/


    /*online sales permalinks*/
    $(".jsOsOnlineSales").attr({href: "http://213.155.107.157/sales/online_sales1.html"});
    $(".jsOsContact").attr({href: "http://213.155.107.157/hakkimizda/iletisim.html"});
    $(".jsOsAbout").attr({href: "http://213.155.107.157/hakkimizda/genel-tanitim.html"});
    $(".jsOsServices").attr({href: "#"});
    $(".jsOsCampaigns").attr({href: "#"});
    $(".jsOsPartnership").attr({href: "http://213.155.107.157/is-ortakligi/genelbakis.html"});
    $(".jsOsCustomerCenter").attr({href: "http://213.155.107.157/musteri-bilgi-merkezi/musteri-hizmet-anlayisi.html"});
    $(".jsOsdomainnamehelp").attr({href: "#"});
    $(".jsOsDataCenter").attr({href: "http://213.155.107.157/web_hosting/data_center.html"});
    $(".jsOsSoundServices").attr({href: "http://213.155.107.157/sound_services/sound_services.html"});
    $(".jsOsVpn").attr({href: "http://213.155.107.157/internet-erisim-hizmetleri/adsl.html"});
    $(".jsOsSiteMap").attr({href: "http://213.155.107.157/web_hosting/site_map.html"});
    $(".jsOsEnglish").attr({href: "http://213.155.107.157/hakkimizda/general_overview.html"});


    /*Internet Services Permalinks*/
    $(".jsIServicesBtn1").attr({href: "http://www.doruk.net.tr/internet-erisim-hizmetleri/adsl.html"});
    $(".jsIServicesBtn2").attr({href: "http://www.doruk.net.tr/internet-erisim-hizmetleri/wispotter.html"});
    $(".jsIServicesBtn3").attr({href: "http://www.doruk.net.tr/internet-erisim-hizmetleri/metro-internet.html"});
    $(".jsIServicesBtn4").attr({href: "http://www.doruk.net.tr/internet-erisim-hizmetleri/vpn.html"});
    /*End*/

    $(".jsTCBtn1").attr({href: "http://www.doruk.net.tr/alan-adi/tc-alan-adi.html"});
    $(".jsTCBtn2").attr({href: "http://www.doruk.net.tr/alan-adi/tc-alan-adi-kimler-icin.html"});


    /*colorbox*/

    if ($(".ISGPopup").exists()) {
        $(".ISGPopup").colorbox({ width: "auto", height: "auto", inline: true, href: "#ISGContent" })
    }

    if ($(".web_button_hos1").exists()) {
        $(".web_button_hos1").colorbox({ width: "950px", inline: true, href: "#table11" })
    }
    if ($(".web_button_hos2").exists()) {
        $(".web_button_hos2").colorbox({ width: "950px", inline: true, href: "#table2" })
    }

    if ($(".web_button_mail1").exists()) {
        $(".web_button_mail1").colorbox({ width: "950px", inline: true, href: "#table1" })
    }
    if ($(".web_button_mail2").exists()) {
        $(".web_button_mail2").colorbox({ width: "950px", inline: true, href: "#table2" })
    }

    if ($(".web_button3").exists()) {
        $(".web_button3").colorbox({ width: "950px", height: "auto", inline: true, href: "#table3" })
    }
    if ($(".web_button4").exists()) {
        $(".web_button4").colorbox({ width: "950px", height: "auto", inline: true, href: "#table3" })
    }
    if ($(".web_button1").exists()) {
        $(".web_button1").colorbox({ width: "950px", height: "auto", inline: true, href: "#table9" })
    }
    if ($(".web_button2").exists()) {
        $(".web_button2").colorbox({ width: "950px", height: "auto", inline: true, href: "#table3" })
    }

    if ($(".all_packet_service").exists()) {
        $(".all_packet_service").colorbox({ width: "950px", height: "auto", inline: true, href: "#table2" })
    }

    if ($(".dtop_btn3").exists()) {
        $(".dtop_btn3").colorbox({ width: "auto", height: "auto", inline: true, href: "#table4" })
    }

    if ($(".btn_reseller").exists()) {
        $(".btn_reseller").colorbox({ width: "auto", height: "auto", inline: true, href: "#table11" })
    }

    if ($(".pstn1").exists()) {
        $(".pstn1").colorbox({ width: "auto", height: "auto", inline: true, href: "#pstn1Id" })
    }
    if ($(".pstn2").exists()) {
        $(".pstn2").colorbox({ width: "auto", height: "auto", inline: true, href: "#pstn2Id" })
    }
    if ($(".pstn3").exists()) {
        $(".pstn3").colorbox({ width: "auto", height: "auto", inline: true, href: "#pstn3Id" })
    }
    if ($(".pstn4").exists()) {
        $(".pstn4").colorbox({ width: "auto", height: "auto", inline: true, href: "#pstn4Id" })
    }

    if ($(".video1").exists()) {
        $(".video1").colorbox({iframe: true, innerWidth: 750, innerHeight: 560})
    }
    if ($(".video2").exists()) {
        $(".video2").colorbox({iframe: true, innerWidth: 750, innerHeight: 560})
    }
    if ($(".video3").exists()) {
        $(".video3").colorbox({iframe: true, innerWidth: 750, innerHeight: 560})
    }

    if ($(".dtop_btn2").exists()) {
        $(".dtop_btn2").colorbox({iframe: true, innerWidth: 750, innerHeight: 560})
    }
    if ($(".dtop_btn5").exists()) {
        $(".dtop_btn5").colorbox({iframe: true, innerWidth: 750, innerHeight: 560})
    }
    if ($(".dtop_btn4").exists()) {
        $(".dtop_btn4").colorbox({iframe: true, innerWidth: 750, innerHeight: 560})
    }

    if ($(".open_pdf").exists()) {
        $(".open_pdf").colorbox({iframe: true, innerWidth: 950, innerHeight: 560})
    }

    if ($("a[rel='example1']").exists()) {
        $("a[rel='example1']").colorbox()
    }

    /*end*/
    if ($("a[rel='example1']").exists()) {
        $("a[rel='example1']").colorbox()
    }

    if ($("a.fancybox").exists()) {
        $("a.fancybox").fancybox()
    }
    if ($("a.colorbox").exists()) {
        $("a.colorbox").colorbox()
    }
    if ($('.tooltip').exists()) {
        $('.tooltip').qtip({
            content: {
                text: function (api) {
                    // Retrieve content from custom attribute of the $('.selector') elements.
                    return $(this).attr('tooltip');
                }
            }
        });
    }



    /*
     if ($("#CheckDataCenter").exists()) {
     if ($.cookie('adv') != 'facebook_page') {
     $.colorbox({html:"<a style='width: 631px;height: 437px;text-indent: -9999px;' target='_blank' href='http://www.facebook.com/doruknet'><img style='width: 631px;height: 407px;margin: 0;padding: 0;' src='http://doruk.net.tr/assets/adver/facebook-popup.jpg'/></a>"});
     $.cookie('adv', 'facebook_page', { expires:1,path:"/" });
     }
     }
     if ($(".DorukMainPage").exists()) {
     if ($.cookie('adv') != 'facebook_page') {
     $.colorbox({html:"<a style='width: 631px;height: 437px;text-indent: -9999px;' target='_blank' href='http://www.facebook.com/doruknet'><img style='width: 631px;height: 407px;margin: 0;padding: 0;' src='http://doruk.net.tr/assets/adver/facebook-popup.jpg'/></a>"});
     $.cookie('adv', 'facebook_page', { expires:1,path:"/" });
     }
     }
     */
});