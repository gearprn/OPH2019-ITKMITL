<template>
  <div class="container">
    <section id="routeSection" class="section">
        <div>
            <h2 class="heading mt-4 mb-4">กำหนดการ</h2>
            <h2 class="header second-title"><i class="fas fa-map-marker-alt"></i>&nbsp; อาคารเรียนรวมและปฏิบัติการคณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <b-tabs 
                     
                    content-class="mt-3" 
                    fill
                    nav-link-class="text-warning"
                    active-nav-item-class="text-dark"
                    >
                        <b-tab title="23 สิงหาคม 2562" active>
                            <template slot="title" class="test">
                                <span>23 สิงหาคม 2562</span>
                            </template>
                            <div class="div-header">
                                <span><i class="far fa-calendar-alt"></i>&nbsp;กำหนดการวันศุกร์ที่ 23 สิงหาคม 2562</span>
                            </div>
                            <div class="row mt-0">
                                <div class="col-lg-3 col-12 time">
                                    <p class="mt-4">08.00 - 09.00 น.</p>
                                </div>
                                <div id="col" class="col-lg-9 col-12 text-left mb-0 even">
                                    <h4 class="mt-3">ลงทะเบียนเข้าร่วมงานและการแข่งขันวิชาการ</h4>
                                    <hr>
                                    <p>ลงทะเบียนเข้าร่วมงานและการแข่งขันวิชาการ</p>
                                    <p><strong>สถานที่ :</strong> จุดลงทะเบียน</p>
                                </div>
                            </div>

                            <div class="row mt-0">
                                <div class="col-lg-3 col-12 time">
                                    <p class="mt-4">08.00 - 09.00 น.</p>
                                </div>
                                <div id="col" class="col-lg-9 col-12 text-left mb-0 odd">
                                    <h4 class="mt-3">ลงทะเบียนเข้าร่วมงานและการแข่งขันวิชาการ</h4>
                                    <hr>
                                    <p>ลงทะเบียนเข้าร่วมงานและการแข่งขันวิชาการ</p>
                                    <p><strong>สถานที่ :</strong> จุดลงทะเบียน</p>
                                </div>
                            </div>                        
                        </b-tab>

                        <b-tab title="24 สิงหาคม 2562">
                            <div class="row text-left">
                                
                            </div>                       
                        </b-tab>

                    </b-tabs>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>

export default {
    name: "schedulePage",
}
</script>

<style lang="scss" scoped>
.nav-link {
    color: #050e17;
}

.even {
    background-color: #FFF;
}

.odd {
    background-color: #c4dcf3;
}

.time {
    color: white;
    background: #0f2d48;
}

.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    background-color: #fdb127;
}


/***-------------------------

    Style sheet of Open House
    Register page

-------------------------***/
/*--------------------
font
---------------------*/
@import url('https://fonts.googleapis.com/css?family=Kanit|Mitr:200,300,400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Baloo&display=swap');

html, body {
    background-color: #3288d5 !important;
    padding: 0;
    position: relative;
    font-family: 'Baloo', cursive;
    font-family: 'Mitr', sans-serif;
}

h1, h2{font-family: 'Kanit', sans-serif;}
h1 {font-size: 2.4em;}
a {color: #FFF;font-family: 'Kanit', sans-serif;}
a {font-size: 1.25em;}

h2.second-title {
    font-family: Kanit !important;
    font-size: 1rem !important;
}

/*--------------------
button
---------------------*/
.btn {
    width: fit-content;
    padding: 0.5em 1em;
    margin: 0.25em;
    background: #fdb127;
    color: #FFF;
    border-radius: 1em;
}
a.btn:hover {
    transform: scale(1.1);
    transition: all 0.2s ease;
}

button.navbar-toggler {
    background: #236aa9 !important;
}

span.navbar-toggler-icon {
    color: #f5f9fd !important;
}

button.btn-info {
    -webkit-border-radius:4px !important;
    margin-top: 1.7rem !important;
    background-color: #0b2337 !important;
}

/*------------------
Nav Bar
------------------*/

.nav-tabs--left .nav-link.active {
    border-bottom-color: #ddd;
    border-right-color: #fff;
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
    margin-right: -1px;
}
.nav-tabs--vertical {
    border-bottom: none;
    border-right: 1px solid #ddd;
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
}

.navbar {
    background: #1c5589;
}

a.nav-link {
    font-size: 1.25em;
    color: #f5f9fd !important;
}

span.navbar-text {
    font-size: 0.75em !important;
    padding:12px 0 12px;
    margin: 0 auto !important;
}

.mbg {
        background-color: #0088d3 !important;
}

a.nav-link.active {
    background-color: #f19022 !important;
}

a.nav-link {
    border-radius: 1.5em 11em !important;
}

li:nth-child(2) a.nav-link  {
    border-radius: 11em 1.5em !important;
}

/*----------------- 
Body
------------------*/

.main-panel {
    border: none;
    background: transparent;
    width: 100%;
    height: 100vh;
    margin: 0 0;
    padding-top: 15px;
    display: flex;
}

.border-h1 {
    padding-top: 40px;
    font-size: 1.7em;
    text-align: center;
    color: #f5f9fd;
    border-bottom: #4291d8 solid 1px;
    margin-bottom: 25px;
    padding-bottom: 25px;
}

h2.header {
    font-size: 2.7em;
    // color: #b4d4f0;
    padding-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Baloo', cursive;
    margin-bottom: 25px;
    padding-right: 20px;
}

.simple-module {
    width: 100%;
    height: auto;
    margin: 15px auto 120px;
}

.custom-tabs {
    padding: 0;
    height: auto;
    background: #f5f9fd;
    border-radius: 1em;
    margin-top: 20px;
}

.div-header {
    background-color: #0b2337;
    width: 100%;
    height: auto;
    border-top-right-radius: .8em;
    border-top-left-radius: .8em;
    border-bottom: #b4d4f0 3px solid;
}

.div-header span {
    vertical-align: middle;
    text-align: left;
    padding: 0 17px;
    color: #f5f9fd;
    font-family: Kanit;
    font-size: .9rem;
    line-height: 50px;
}

.row .inner-row {
    margin:0;
    padding: 0;
    font-family: Kanit, Baloo;
}

.col .custom-col {
    padding: 15px;
}

.col .custom-col:nth-child(1) {
    background-color: #0f2d48;
    color: #fafafa;
    border-left: none;
    text-align: center;
    line-height: 265%;
}

.custom-row {
    background-color: #c4dcf3;
}

.custom-row hr {
    border-color: #b4d2f0;
}

.col .custom-col h4 {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 165%;
    color: #050e17;
}

.col .custom-col p {
    font-size: 1rem;
    color: #0b2337;
    font-weight: 400;
    padding: 0 15px 0 0;
}

/***-----------
   FORM PART
-----------***/

form {
    font-family: Kanit;
}

h3.row-title {
    color: #e5f0fa;
    font-size: 1.2em;
    font-family: Kanit;
}

h3.row-title i {
    padding-right: 10px;
}

input[type=text], input[type=email], textarea.form-control, .md-form, .md-outline{
    border-color:#a4caec !important;
    color: #e5f0fa !important;
}

.md-form, .md-outline{
    margin-top: .8rem !important;
    margin-bottom: .8rem !important;
}

.md-form.md-outline label {
    color: #e5f0fa !important;
}

.md-form.md-outline label.active {
    background-color: #d57f32 !important;
    color: #f5f9fd !important;
}

select.custom-select {
    color: #e5f0fa !important;
    border:none;
    background-color: #2674ba !important;
    cursor: pointer;
    margin-top: .8rem;
    margin-bottom: .7rem;
    box-shadow: none;
    display: block;

}

.end-border {
    border-bottom: 1px solid #4291d8;
    padding-bottom: 15px;
    margin-bottom: 25px;
}

.btn-opt {
    background-color: #fafafa !important;
}

/*---------------
Responsive Part
---------------*/
@media screen and (max-width: 1200px) {
    a.nav-link, li {
        font-size: 1.25em;
    }
}
@media screen and (max-width: 991px) {
    .col .custom-col h4 {
        text-align: center;
    }
    .custom-row {
        background: #f5f9fd;
        border-bottom-right-radius: .8em;
        border-bottom-left-radius: .8em;
    }
    .custom-row hr {
        border-color: #e9ecf0;
    }
    a.nav-link, li {
        font-size: 1.25em;
    }
    h2.header {
        font-size: 2.4em;
        padding-right: 0;
        border-bottom: #4291d8 solid 1px;
    }
    h2.second-title {
        padding-top: 15px;
    }
    .main-panel {
        display: block;
    }
    .border-h1 {
    border:none;
    margin-bottom: 0;
    padding-bottom: 0;
    }
}

@media screen and (max-width: 768px) {
    a.nav-link, li {
        font-size: 1em;
    }
    h1 {
        font-size: 1.8em;
    }
    h2 {
        font-size: 1.3em;
    }
    h3 {
        font-size: 1.2em;
    }
    p {
        font-size: 0.95em;
    }

    .div-header span {
        font-size: .85rem;
    }

    h2.header {
        font-size: 2.4em;
        padding-right: 0;
    }

    .main-panel {
        display: block;
    }

    .border-h1 {
    border:none;
    margin-bottom: 0;
    padding-bottom: 0;
    }

}


@media screen and (max-width: 568px) {
    a.nav-link, li {
        font-size: 1em;
    }
    h2.header {
        font-size: 2.2em;
    }
    .div-header span {
        font-size: .8rem;
    }
}


@media screen and (max-width: 503px) {
    a.nav-link, li {
        font-size: 1em;
    }

}


@media only screen and (max-width: 419px) {
    .col .custom-col p {
        padding-right: 6px;
    }
    .col-sm {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
    ul.nav-pills {
        margin: 0 6px;
    }
    a.nav-link, li{font-size: 1em;}
    h1.border-h1 {text-align: center;}
}
/*--------------------
reset
---------------------*/

p {font-weight: 300;}
// body {font-family: 'Mitr', sans-serif;}
// h1, h2{font-family: 'Kanit', sans-serif;}
h1 {font-size: 2.4em;}
a {color: #FFF;}
//  {font-size: 1.25em;}
a {text-decoration: none;}
a:hover {color: inherit; text-decoration: none;}

/*--------------------
button
---------------------*/
.btn-primary {
	background-color: #22409a;
	border-color: #22409a;
}

.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    width: fit-content;
    padding: 0.75em 2em;
    margin: 0.5em 0.75em;
    background-color: #22409a;
    color: #FFF;
    border-radius: 1em;
    border-color: #22409a;
}
a.btn:hover {
    transform: scale(1.1);
    transition: all 0.2s ease;
}

a.nav-link {
	color: #22409a;
	font-size: 1.25em;
}

/*--------------------
general
---------------------*/

.fa-bus, .fa-car, .fa-shuttle-van, .fa-bus-alt, .fa-train, .fa-subway {
    color: #fdb127;
}

.nav-link.active {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
}

#mainContent {
	text-align: center;
}

#biglogo img {
	width: 100%;
}

.logoWorkshop {
    border-radius: 8px;
}

h4.more-info {
    // position: absolute;
    bottom: 0;
    // margin: auto 0;
}

.more-info:hover {
    color: #fdb127;
}

.section {
	margin-top: 1em;
	padding-bottom: 1em;
}

.headings {
    margin: 1em;
    text-align: left;
}

.headings-mid {
    margin: 1em;
    // text-align: left;
}

.gridCard {
	// margin: 1em 0;
}

.gridCard h2 {
	padding-top: 1em;
	font-size: 1.5em;
}

.row {
	margin-left: 0;
	margin-right: 0;
}
/*--------------------
info section
---------------------*/

/*--------------------
bebras section
---------------------*/

#bebrasSection {
	background-color: #fdb127;
	color: white;
}

#bebrasSection img {
	margin-top: 4em;
	margin-bottom: 2em;
}

hr {
	background: white;
}

/*--------------------
converse section
---------------------*/

#converseCard {
	background: #fdb127;
	color: white;
	border-radius: 15px;
	padding: 2em;
}

/*--------------------
activity section
---------------------*/

.activityBorder{
    border: solid #CCC 1px;
    border-radius: 25px;
}

.activityCard {
	// background: #93deff;
	color: #777;
	border-radius: 15px;
	padding: 1em;
}

.activityCard h3 {
    color: #3b6f8d;
}

.activityCard img{
	width: 50%;
	transition: all 0.3s;

}

.activityCard img:hover{
	width: 55%;
	border: 4px solid #2da9dd;
	border-radius: 15px;
}

/*--------------------
competition section
---------------------*/

.competitionBorder {
    border: #ccc solid 1px;
    border-radius: 25px;
}

.competitionCard {
	// background: #93deff;
	color: #777;
	border-radius: 15px;
	padding: 1em;
}

.competitionCard h3 {
	color: #3b6f8d;
}

.competitionCard img{
	width: 50%;
	transition: all 0.3s;

}

.competitionCard img:hover{
	width: 55%;
	border: 4px solid #2da9dd;
	border-radius: 15px;
}

/*--------------------
workshop section
---------------------*/

#workshopSection {
	background-color: #fdb127;
	color: white;
}

.workshopCard img {
    width: 100%;
    transition: all 0.3s;
}

.workshopCard img:hover {
	width: 110%;
}

.workshopCard .row {
    text-align: left;
}

.workshopCard h2 {
	padding-top: 0;
}



/*--------------------
workshop section
---------------------*/

.rallyCard {
	color: #777;
	border-radius: 15px;
	height: 365px;
	padding: 1em;
}

.rallyCard h2 {
	color: #3b6f8d;
}

.rallyCard img {
	height: 128px;
	transition: all 0.3s;
	border: 1px solid #CCC;
	border-radius: 15px;
}

/*--------------------
route section
---------------------*/

.nav-tabs--left .nav-link.active {
    border-bottom-color: #ddd;
    border-right-color: #fff;
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
    margin-right: -1px;
}
.nav-tabs--vertical {
    border-bottom: none;
    border-right: 1px solid #ddd;
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
}

/*--------------------
responsive
---------------------*/



@media screen and (max-width: 1200px) {
    a.nav-link, li {
    	font-size: 1.25em;
    }
    .modal-dialog {
        max-width: 60%; 
        margin: 1.75rem auto;
    }

}
@media screen and (max-width: 991px) {
    .modal-dialog {
        max-width: 60%; 
        margin: 1.75rem auto;
    }
    a.nav-link, li {
    	font-size: 1.25em;
    }
    .activityCard img, .competitionCard img {
		width: 80%;
    }
    
    .activityCard img:hover, .competitionCard img:hover {
		width: 85%;
    }
    
	.workshopCard img {
		width: 120%;
    }
    
    .workshopCard img:hover {
		width: 125%;
	}
	.rallyCard {
        color: #777;
        border-radius: 15px;
        height: 365px;
        padding: 1em;
    }
}

@media screen and (max-width: 768px) {
    .modal-dialog {
        max-width: 60%; 
        margin: 1.75rem auto;
    }
	a.btn {
		height: 50px;
		font-size: 1em;
		padding: 0.75em 3em;
	}
    a.nav-link, li {
    	font-size: 1em;
    }
    h1 {
    	font-size: 1.8em;
    }
    h2 {
    	font-size: 1.3em;
    }
    h3 {
    	font-size: 1.2em;
    }
    h4 {
    	font-size: 1em;
    }
    p {
    	font-size: 0.95em;
    }

    .workshopCard h2 {
		font-size:  1.3em;
		line-height: 1.2;
	}
	.workshopCard strong {
		font-size:  0.8em;
		line-height: 1.2;
		padding: 0;
	}
	.workshopCard p {
		line-height: 1.2;
		padding: 0;
		margin: 12px 0;
    }

    .fas {
        font-size: 16px;
    }
}

@media screen and (max-width: 568px) {
	a.nav-link, li {
		font-size: 1em;
	}
    .modal-dialog {
        max-width: 80%; 
        margin: 1.75rem auto;
    }
    button.close {
        padding: 0;
        position: absolute;
        top: 15px;
        right: 20px;
        border-radius: 50%;
    }
}


@media screen and (max-width: 503px) {
    a.nav-link, li {
    	font-size: 1em;
    }
}


@media only screen and (max-width: 419px) {
    a.nav-link, li {
        font-size: 1em;
    }
}
</style>
