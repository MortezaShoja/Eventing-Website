$(document).ready(function () {

    $SiteLink = "http://www.doruk.net.tr/"

    function code() {
    }


    jQuery.fn.exists = function () {
        return this.length > 0;
    }


    function checkResponse(a) {
        return a == true;
    }

    function CreateCaptcha() {
        var str = "";
        for (var i = 0; i < 6; i++) {
            var value = Math.random();
            if (Math.round(value) == 0) {
                str = str + String.fromCharCode(48 + 9 * Math.random());
            }
            else {
                str = str + String.fromCharCode(65 + 25 * Math.random());
            }
        }

        if (document.getElementById("captchaId")) {

            document.getElementById("captchaId").innerHTML = str;
            document.getElementById("ControlCaptcha").value = str;
        }


    }

    if ($("#contact-form").exists()) {
        $("#contact-form").ajaxForm({iframe:true, dataType:"json", beforeSubmit:function () {
            var captchaControl = $("#ControlCaptcha").val();
            var captchaValue = $("#captcha").val().toUpperCase();

            if ($("#contact-form").valid() == false) {
                return false
            } else {
                if (captchaControl != captchaValue) {

                    $.msgbox('Hatalı Güvenlik Kodu Girdiniz...', {
                        type:'error',
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });

                    return false
                } else
                    return true
            }
        }, success:function (a) {
            if (checkResponse(a)) {
                $.msgbox('Bilgileriniz başarıyla gönderilmiştir.  ' +
                    'İletmiş olduğunuz konu hakkında ilgili birimlerimiz ' +
                    'en geç 24 saat içinde sizinle irtibata geçecektir.  ' +
                    'Daha hızlı yardım için lütfen <a target="_blank" ' +
                    'href="http://destek.doruk.net.tr">http://destek.doruk.net.tr</a> ' +
                    'adresimizi ziyaret ediniz.', {
                    type:'info',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });

                $('#contact-form').resetForm();
                CreateCaptcha();

            } else {
                $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                    type:'error',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
            }
        }, error:function () {
            $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                type:'error',
                buttons:[
                    {type:'submit', value:'Tamam'}
                ]
            });
        }})
    }
    if ($("#bayi-form").exists()) {

        $("#bayi-form").ajaxForm({iframe:true, dataType:"json", beforeSubmit:function () {
            var captchaControl = $("#ControlCaptcha").val();
            var captchaValue = $("#captcha").val().toUpperCase();

            if ($("#bayi-form").valid() == false) {
                return false
            } else {
                if (captchaControl != captchaValue) {
                    $.msgbox('Hatalı Güvenlik Kodu Girdiniz...', {
                        type:'error',
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });
                    return false
                } else
                    return true
            }
        }, success:function (a) {
            if (checkResponse(a)) {
                $.msgbox('Bilgileriniz başarıyla gönderilmiştir.  ' +
                    'İletmiş olduğunuz konu hakkında ilgili birimlerimiz ' +
                    'en geç 24 saat içinde sizinle irtibata geçecektir.  ' +
                    'Daha hızlı yardım için lütfen <a target="_blank" ' +
                    'href="http://destek.doruk.net.tr">http://destek.doruk.net.tr</a> ' +
                    'adresimizi ziyaret ediniz.', {
                    type:'info',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
                $('#bayi-form').resetForm();
                CreateCaptcha();

            } else {
                $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                    type:'error',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
            }
        }, error:function () {
            $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                type:'error',
                buttons:[
                    {type:'submit', value:'Tamam'}
                ]
            });
        }})
    }

    if ($("#online-bayi-form").exists()) {

        $("#online-bayi-form").ajaxForm({iframe:true, dataType:"json", beforeSubmit:function () {
            var captchaControl = $("#ControlCaptcha").val();
            var captchaValue = $("#captcha").val().toUpperCase();

            if ($("#online-bayi-form").valid() == false) {
                return false
            } else {
                if (captchaControl != captchaValue) {
                    $.msgbox('Hatalı Güvenlik Kodu Girdiniz...', {
                        type:'error',
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });
                    return false
                } else
                    return true
            }
        }, success:function (a) {
            if (checkResponse(a)) {
                $.msgbox('Bilgileriniz başarıyla gönderilmiştir.  ' +
                    'İletmiş olduğunuz konu hakkında ilgili birimlerimiz ' +
                    'en geç 24 saat içinde sizinle irtibata geçecektir.  ' +
                    'Daha hızlı yardım için lütfen <a target="_blank" ' +
                    'href="http://destek.doruk.net.tr">http://destek.doruk.net.tr</a> ' +
                    'adresimizi ziyaret ediniz.', {
                    type:'info',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });

                $('#online-bayi-form').resetForm();
                CreateCaptcha();

            } else {
                $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                    type:'error',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
            }
        }, error:function () {
            $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                type:'error',
                buttons:[
                    {type:'submit', value:'Tamam'}
                ]
            });
        }})
    }


    if ($("#customer-form").exists()) {
        $("#customer-form").ajaxForm({iframe:true, dataType:"json", beforeSubmit:function () {
            var captchaControl = $("#ControlCaptcha").val();
            var captchaValue = $("#captcha").val().toUpperCase();

            if ($("#customer-form").valid() == false) {
                return false
            } else {
                if (captchaControl != captchaValue) {
                    $.msgbox('Hatalı Güvenlik Kodu Girdiniz...', {
                        type:'error',
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });
                    return false
                } else
                    return true
            }
        }, success:function (a) {
            if (checkResponse(a)) {
                $.msgbox('Bilgileriniz başarıyla gönderilmiştir.  ' +
                    'İletmiş olduğunuz konu hakkında ilgili birimlerimiz ' +
                    'en geç 24 saat içinde sizinle irtibata geçecektir.  ' +
                    'Daha hızlı yardım için lütfen <a target="_blank" ' +
                    'href="http://destek.doruk.net.tr">http://destek.doruk.net.tr</a> ' +
                    'adresimizi ziyaret ediniz.', {
                    type:'info',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });

                $('#customer-form').resetForm();
                CreateCaptcha();

            } else {
                $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                    type:'error',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
            }
        }, error:function () {
            $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                type:'error',
                buttons:[
                    {type:'submit', value:'Tamam'}
                ]
            });
        }})
    }

    if ($("#vps-form").exists()) {

        $("#vps-form").ajaxForm({iframe:true, dataType:"json", beforeSubmit:function () {
            var captchaControl = $("#ControlCaptcha").val();
            var captchaValue = $("#captcha").val().toUpperCase();

            if ($("#vps-form").valid() == false) {
                return false
            } else {
                if (captchaControl != captchaValue) {
                    $.msgbox('Hatalı Güvenlik Kodu Girdiniz...', {
                        type:'error',
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });
                    return false
                } else
                    return true
            }
        }, success:function (a) {
            if (checkResponse(a)) {
                $.msgbox('Bilgileriniz başarıyla gönderilmiştir.  ' +
                    'İletmiş olduğunuz konu hakkında ilgili birimlerimiz ' +
                    'en geç 24 saat içinde sizinle irtibata geçecektir.  ' +
                    'Daha hızlı yardım için lütfen <a target="_blank" ' +
                    'href="http://destek.doruk.net.tr">http://destek.doruk.net.tr</a> ' +
                    'adresimizi ziyaret ediniz.', {
                    type:'info',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });

                $('#vps-form').resetForm();
                CreateCaptcha();

            } else {
                $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                    type:'error',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
            }
        }, error:function () {
            $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                type:'error',
                buttons:[
                    {type:'submit', value:'Tamam'}
                ]
            });
        }})
    }

    if ($("#soundservices-form").exists()) {

        $("#soundservices-form").ajaxForm({iframe:true, dataType:"json", beforeSubmit:function () {
            var captchaControl = $("#ControlCaptcha").val();
            var captchaValue = $("#captcha").val().toUpperCase();

            if ($("#soundservices-form").valid() == false) {
                return false
            } else {
                if (captchaControl != captchaValue) {
                    $.msgbox('Hatalı Güvenlik Kodu Girdiniz...', {
                        type:'error',
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });
                    return false
                } else
                    return true
            }
        }, success:function (a) {
            if (checkResponse(a)) {
                $.msgbox('Bilgileriniz başarıyla gönderilmiştir.  ' +
                    'İletmiş olduğunuz konu hakkında ilgili birimlerimiz ' +
                    'en geç 24 saat içinde sizinle irtibata geçecektir.  ' +
                    'Daha hızlı yardım için lütfen <a target="_blank" ' +
                    'href="http://destek.doruk.net.tr">http://destek.doruk.net.tr</a> ' +
                    'adresimizi ziyaret ediniz.', {
                    type:'info',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });

                $('#soundservices-form').resetForm();
                CreateCaptcha();

            } else {
                $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                    type:'error',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
            }
        }, error:function () {
            $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                type:'error',
                buttons:[
                    {type:'submit', value:'Tamam'}
                ]
            });
        }})
    }



    if ($("#adslservices-form").exists()) {

        $("#adslservices-form").ajaxForm({iframe:true, dataType:"json", beforeSubmit:function () {
            var captchaControl = $("#ControlCaptcha").val();
            var captchaValue = $("#captcha").val().toUpperCase();

            if ($("#adslservices-form").valid() == false) {
                return false
            } else {
                if (captchaControl != captchaValue) {
                    $.msgbox('Hatalı Güvenlik Kodu Girdiniz...', {
                        type:'error',
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });
                    return false
                } else
                    return true
            }
        }, success:function (a) {
            if (checkResponse(a)) {
                $.msgbox('Bilgileriniz başarıyla gönderilmiştir.  ' +
                    'İletmiş olduğunuz konu hakkında ilgili birimlerimiz ' +
                    'en geç 24 saat içinde sizinle irtibata geçecektir.  ' +
                    'Daha hızlı yardım için lütfen <a target="_blank" ' +
                    'href="http://destek.doruk.net.tr">http://destek.doruk.net.tr</a> ' +
                    'adresimizi ziyaret ediniz.', {
                    type:'info',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });

                $('#adslservices-form').resetForm();
                CreateCaptcha();

            } else {
                $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                    type:'error',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
            }
        }, error:function () {
            $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                type:'error',
                buttons:[
                    {type:'submit', value:'Tamam'}
                ]
            });
        }})
    }

    if ($("#vpn-form").exists()) {

        $("#vpn-form").ajaxForm({iframe:true, dataType:"json", beforeSubmit:function () {
            var captchaControl = $("#ControlCaptcha").val();
            var captchaValue = $("#captcha").val().toUpperCase();

            if ($("#vpn-form").valid() == false) {
                return false
            } else {
                if (captchaControl != captchaValue) {
                    $.msgbox('Hatalı Güvenlik Kodu Girdiniz...', {
                        type:'error',
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });
                    return false
                } else
                    return true
            }
        }, success:function (a) {
            if (checkResponse(a)) {
                $.msgbox('Bilgileriniz başarıyla gönderilmiştir.  ' +
                    'İletmiş olduğunuz konu hakkında ilgili birimlerimiz ' +
                    'en geç 24 saat içinde sizinle irtibata geçecektir.  ' +
                    'Daha hızlı yardım için lütfen <a target="_blank" ' +
                    'href="http://destek.doruk.net.tr">http://destek.doruk.net.tr</a> ' +
                    'adresimizi ziyaret ediniz.', {
                    type:'info',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });

                $('#vpn-form').resetForm();
                CreateCaptcha();

            } else {
                $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                    type:'error',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
            }
        }, error:function () {
            $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                type:'error',
                buttons:[
                    {type:'submit', value:'Tamam'}
                ]
            });
        }})
    }

    if ($("#newsletter").exists()) {

        $("#newsletter").ajaxForm({iframe:true, dataType:"json", beforeSubmit:function () {
            filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (filter.test($('#NewsLetterEmail').val())) {
                return true;
            }
            else {
                $.msgbox('Lütfen Geçerli E-Posta Adresi Yazınız...', {
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
                return false;
            }
        },
            success:function (a) {
                if (checkResponse(a)) {
                    $.msgbox('E-Bülten Kaydınız Alınmıştır...', {
                        type:'info',
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });
                    $('#newsletter').resetForm();
                    CreateCaptcha();

                } else {
                    $.msgbox('E-Bülten Kaydınız Yapılamadı.Lütfen Daha Sonra Tekrar Deneyiniz...', {
                        type:'error',
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });
                }
            },
            error:function () {
                $.msgbox('E-Bülten Kaydınız Yapılamadı.Lütfen Daha Sonra Tekrar Deneyiniz...', {
                    type:'error',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
            }
        })
    }

    if ($("#CampaignInfoForm").exists()) {

        $("#CampaignInfoForm").ajaxForm({iframe:true, dataType:"json", beforeSubmit:function () {
            var captchaControl = $("#ControlCaptcha").val();
            var captchaValue = $("#captcha").val().toUpperCase();

            if ($("#CampaignInfoForm").valid() == false) {
                return false
            } else {
                if (captchaControl != captchaValue) {
                    $.msgbox('Hatalı Güvenlik Kodu Girdiniz...', {
                        type:'error',
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });
                    return false
                } else
                    return true;
            }
        }, success:function (a) {
            if (checkResponse(a)) {

                $('#CampaignInfoForm').resetForm();
                CreateCaptcha();
                $.msgbox('Bilgileriniz başarıyla gönderilmiştir.  ' +
                    'İletmiş olduğunuz konu hakkında ilgili birimlerimiz ' +
                    'en geç 24 saat içinde sizinle irtibata geçecektir.  ' +
                    'Daha hızlı yardım için lütfen <a target="_blank" ' +
                    'href="http://destek.doruk.net.tr">http://destek.doruk.net.tr</a> ' +
                    'adresimizi ziyaret ediniz.', {
                    type:'info',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });


            } else {
                $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                    type:'error',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
            }
        }, error:function () {
            $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                type:'error',
                buttons:[
                    {type:'submit', value:'Tamam'}
                ]
            });
        }})
    }

    if ($("#campaign02").exists()) {

        $("#campaign02").ajaxForm({iframe:true, dataType:"json", beforeSubmit:function () {
            var captchaControl = $("#ControlCaptcha").val();
            var captchaValue = $("#captcha").val().toUpperCase();
            var bizeulasinValue = $("#campaignSelected").val();

            if ($("#campaign02").valid() == false) {
                return false
            } else {
                if (bizeulasinValue == 0) {
                    $.msgbox('Lütfen Bize Nereden Ulaştığınızı Seçiniz...', {
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });
                    return false
                } else {
                    if (captchaControl != captchaValue) {
                        $.msgbox('Hatalı Güvenlik Kodu Girdiniz...', {
                            type:'error',
                            buttons:[
                                {type:'submit', value:'Tamam'}
                            ]
                        });
                        return false
                    } else
                        return true;
                }

            }
        }, success:function (a) {
            if (checkResponse(a)) {

                $('#campaign02').resetForm();
                CreateCaptcha();
                $.colorbox({iframe:true, href:$SiteLink + "kampanyalar/code.php?code=2", width:'450', height:'380'});

            } else {
                $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                    type:'error',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
            }
        }, error:function () {
            $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                type:'error',
                buttons:[
                    {type:'submit', value:'Tamam'}
                ]
            });
        }})
    }



    if ($("#CampaignWebStart").exists()) {

        $("#CampaignWebStart").ajaxForm({iframe:true, dataType:"json", beforeSubmit:function () {
            var captchaControl = $("#ControlCaptcha").val();
            var captchaValue = $("#captcha").val().toUpperCase();
            var bizeulasinValue = $("#campaignSelected").val();

            if ($("#CampaignWebStart").valid() == false) {
                return false
            } else {
                if (bizeulasinValue == 0) {
                    $.msgbox('Lütfen Bize Nereden Ulaştığınızı Seçiniz...', {
                        buttons:[
                            {type:'submit', value:'Tamam'}
                        ]
                    });
                    return false
                } else {
                    if (captchaControl != captchaValue) {
                        $.msgbox('Hatalı Güvenlik Kodu Girdiniz...', {
                            type:'error',
                            buttons:[
                                {type:'submit', value:'Tamam'}
                            ]
                        });
                        return false
                    } else
                        return true;
                }

            }
        }, success:function (a) {
            if (checkResponse(a)) {

                $('#CampaignWebStart').resetForm();
                CreateCaptcha();
                $.msgbox('Bilgileriniz başarıyla gönderilmiştir.  ' +
                    'İlgili birimlerimiz en geç 24 saat içinde ' +
                    'sizinle irtibata geçecektir.  ' +
                    'Daha hızlı yardım için lütfen <a target="_blank" ' +
                    'href="http://destek.doruk.net.tr">http://destek.doruk.net.tr</a> ' +
                    'adresimizi ziyaret ediniz.', {
                    type:'info',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });




            } else {
                $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                    type:'error',
                    buttons:[
                        {type:'submit', value:'Tamam'}
                    ]
                });
            }
        }, error:function () {
            $.msgbox('Bilgileriniz Gönderilemedi. Lütfen Daha Sonra Tekrar Deneyiniz...', {
                type:'error',
                buttons:[
                    {type:'submit', value:'Tamam'}
                ]
            });
        }})
    }



    CreateCaptcha();


})