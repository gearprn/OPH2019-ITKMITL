<template>
    <div class="">
        <div class="mb-5 container">
            <img id="mainBanner" class="main-logo" src="@/assets/OPH2019_WEB_1600x900pix_Final.jpg">
        </div>

        <section id="infoSection" class="section">
            <div class="container">
                <div class="text">
                    <h1>ปลดล๊อคทางความคิด เเล้วดีไซน์ชีวิตอนาคตด้วยตัวคุณ</h1>
                    <h2>23 - 24 สิงหาคม 2562</h2>
                    <h2>ตั้งแต่เวลา 9.00 เป็นต้นไป</h2>
                    <p>เปิดบ้านไอทีลาดกระบัง "IT LADKRABANG OPEN HOUSE 2019" กลับมาอีกครั้งกับการเปิดบ้านสร้างมุมมองใหม่ ค้นหาคำตอบในสิ่งที่ชอบ พร้อมด้วยการสร้างโอกาสในการเตรียมตัวสู่ไอทีลาดกระบัง มาพบคำตอบได้ในงานนี้ทั้งสาระและความสนุกจากกิจกรรมมากมาย จัดโดยคณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
                    <router-link tag="a" to="/schedule" class="btn btn-primary btn-lg active" role="button" >กำหนดการ</router-link>
                    <a href="https://oph2019-kmitl-c2dac.web.app/" class="btn btn-primary btn-lg active" role="button">ลงทะเบียนสำหรับผู้เข้าชมงาน</a>
                </div>  
            </div>
        </section>

        <section id="bebrasSection" class="section">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-12">
                        <img src="@/assets/bebras-banner-new.png">
                        <h2>Bebras Thailand 2019: A Computational Thinking Skill Challenge</h2>
                        <h6>บีบลาสไทยแลนด์ 2019: การทดสอบทักษะการคิดเชิงคำนวณ</h6>
                        <hr>
                    </div>   
                </div>
                <div class="row align-middle">
                    <div class="col-lg-12 col-sm-12">
                        <img src="https://edu.bstudio.click/openhouse-2018/assets/img/bebras-logo-new.png">
                    </div>
                    
                    <div class="col-lg-12 col-sm-12 ">
                        <p class="align-middle">ทดสอบทักษะวัดอนาคต.. กิจกรรมที่เปิดโอกาสให้น้องๆ ได้ทดลองทำแบบทดสอบจริง! ที่ใช้ในการแข่งขันการทดสอบระดับนานาชาติด้านทักษะการคิดเชิงคำนวณ หรือ BEBRAS THAILAND: International Challenge on Computational Thinking ในปีที่แล้ว โดยเป็นแนวข้อสอบรับเข้าคณะเทคโนโลยีสารสนเทศ สจล. ในงานเปิดบ้านคณะไอทีลาดกระบัง : IT Ladkrabang Open House  2019 วันที่ 23-24 สิงหาคม 2562 (ผู้เข้าร่วมจะได้รับประกาศนียบัตรในการเข้าร่วมกิจกรรม)</p>
                    </div>
                </div>
                <a href="https://www.bebrasthailand.org/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">อ่านรายละเอียด</a>
            </div>
        </section>

        <section id="converseSection" class="section">
            <div class="">
                <h1 class="headings-mid">เสวนา</h1>
            </div>
            <div id="converseCard" class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>เรื่องราวดีๆ ที่ IT ลาดกระบัง</h2>
                        <h3>เรื่อง "ปลดล๊อคทางความคิดอย่ายึดติดกับ IT แบบเดิมๆ"</h3>
                        <!-- <p>การใช้ชีวิตในไอที ลาดกระบัง การเรียน อยู่หอ เรื่องราวดีๆ ที่พี่อยากมาแบ่งบันน้องๆ ทุกคน</p> -->
                        <hr>
                        <p>สถานที่ ห้องประชุมใหญ่ (Auditorium) | วันศุกร์ที่ 23 สิงหาคม 2562 | เวลา 10.00 – 11.30 น.</p>
                        <p>ไขทุกข้อสงสัย เปิดมุมมองใหม่ หมดยุคเรียนไอทีแบบเดิมๆ รู้ก่อนเลือกเรียนจะได้ไม่เสียเวลา พบกับเสวนาการศึกษาที่มาพร้อมกับความบันเทิง  พร้อมรับของที่ระลึกแสนเก๋ในงาน พบกันได้ที่งานเปิดบ้านคณะไอทีลาดกระบัง : IT Ladkrabang Open House  2019</p>
                    </div>
                    
                </div>
            </div>
        </section>

        <section id="activitySection" class="section">
            <div class="container">
                <div class="activityBorder">
                    <h3 class="headings">กิจกรรม</h3>
                    <hr>
                    <div class="row">
                        <div class="col-lg-3 col-6 gridCard">
                            <a @click="infoToBe()" style="cursor:pointer;">
                                <div class="activityCard">
                                    <img src="https://edu.bstudio.click/openhouse-2018/assets/img/event_tobeit.svg">
                                    <h3 class="mt-2">To Be IT@KMITL</h3>
                                    <p>เตรียมความพร้อมสู่ไอทีลาดกระบัง</p>
                                    <h4 class="more-info">ดูรายละเอียด</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-6 gridCard">
                            <a @click="infoTour()" style="cursor:pointer;">
                                <div class="activityCard">
                                    <img src="https://edu.bstudio.click/openhouse-2018/assets/img/event_tour.svg">
                                    <h3 class="mt-2">ทัวร์คณะ</h3>
                                    <p>เยี่ยมชมคณะไอทีลาดกระบัง</p>
                                    <h4 class="more-info">ดูรายละเอียด</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-6 gridCard">
                            <a @click="infoSyllabus()" style="cursor:pointer;">
                                <div class="activityCard">
                                    <img src="https://edu.bstudio.click/openhouse-2018/assets/img/event_cirr.svg">
                                    <h3 class="mt-2">แนะนำหลักสูตรไอทีลาดกระบัง</h3>
                                    <p>IT DSBA BIT ต่างกันยังไง แล้ว วิศวะกับวิทยาคอมละ?</p>
                                    <h4 class="more-info">ดูรายละเอียด</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-6 gridCard">
                            <a @click="infoExhibition()" style="cursor:pointer;">
                                <div class="activityCard">
                                    <img src="https://edu.bstudio.click/openhouse-2018/assets/img/event_show.svg">
                                    <h3 class="mt-2">การแสดงนิทรรศการทางวิชาการ</h3>
                                    <p>ผลงานนักศึกษาและคณาจารย์</p>
                                    <h4 class="more-info">ดูรายละเอียด</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="competitionSection" class="section">
            
            <div class="container">
                <div class="competitionBorder">
                    <div>
                        <h3 class="headings">การเเข่งขัน</h3>
                    </div>
                    <hr>
                    <div class="row">

                        <div class="col-lg-3 col-6 gridCard">
                            <router-link tag="a" to="/detailsNetsec">
                                <div class="competitionCard">
                                    <img src="https://edu.bstudio.click/openhouse-2018/assets/img/compet_security.svg">
                                    <h3 class="mt-2">การแข่งขันความปลอดภัยของระบบคอมพิวเตอร์</h3>
                                    <h4 class="more-info">สมัครการเเข่งขัน</h4>
                                </div>
                            </router-link>
                        </div>
                        
                        <div class="col-lg-3 col-6 gridCard">
                            <router-link tag="a" to="/detailsEsport">
                                <div class="competitionCard">
                                    <img src="https://edu.bstudio.click/openhouse-2018/assets/img/compet_game.svg">
                                    <h3 class="mt-2">การแข่งขันกีฬาอิเล็กทรอนิกส์ E-Sport</h3>
                                    <h4 class="more-info">สมัครการเเข่งขัน</h4>
                                </div>
                            </router-link>
                        </div>
                    
                        <div class="col-lg-3 col-6 gridCard">
                            <router-link tag="a" to="/detailsData">
                                <div class="competitionCard">
                                    <img src="https://edu.bstudio.click/openhouse-2018/assets/img/compet_math.svg">
                                    <h3 class="mt-2">การแข่งขันแก้ปัญหาด้านวิทยาการข้อมูล </h3>
                                    <h4 class="more-info">สมัครการเเข่งขัน</h4>
                                </div>
                            </router-link>
                        </div> 
                    
                        
                        <div class="col-lg-3 col-6 gridCard">
                            <router-link tag="a" to="/detailsPhp">
                                <div class="competitionCard">
                                    <img src="https://edu.bstudio.click/openhouse-2018/assets/img/compet_website.svg">
                                    <h3 class="mt-2">การแข่งขันพัฒนาเว็บไซต์ด้วย PHP และ JavaScript</h3>
                                    <h4 class="more-info">สมัครการเเข่งขัน</h4>
                                </div>
                            </router-link>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>

        <section id="workshopSection" class="section mb-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="headings-mid">เวิร์คชอป</h2>
                        <hr>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-sm-12 gridCard mt-4">
                        <div class="workshopCard">
                            <div class="row">
                                <div class="col-4 logo">
                                    <img src="https://edu.bstudio.click/openhouse-2018/assets/img/workshop_multi.svg">
                                </div>
                                <div class="col-8 info text-center">
                                    <h3>Joy Story จินตนาการทะลุมิติ กับ Animation และ AR</h3>
                                    <!-- <p><strong>Multimedia</strong> -->
                                    <p>สนุกกับการปลดปล่อยจินตนาการเสมือนจริง</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 gridCard mt-4">
                        <div class="workshopCard">
                            <div class="row">
                                <div class="col-4 logo ">
                                    <img src="https://edu.bstudio.click/openhouse-2018/assets/img/workshop_networks.svg">
                                </div>
                                <div class="col-8 info text-center">
                                    <h3>เชื่อมต่อทุกสิ่งด้วย IoT</h3>
                                    <!-- <p><strong>Networks: IoT Connecting Things</strong> -->
                                    <p>ถ้าทุกสิ่งเชื่อมต่อกับ Internet ได้จะเป็นเช่นไร?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-sm-12 gridCard mt-4">
                        <div class="workshopCard">
                            <div class="row">
                                <div class="col-4 logo ">
                                    <img src="https://edu.bstudio.click/openhouse-2018/assets/img/workshop_se.svg">
                                </div>
                                <div class="col-8 info text-center">
                                    <h3>What can a robot do?</h3>
                                    <!-- <p><strong>ควบคุมหุ่นยนต์จิ๋วด้วยบล็อคโค้ด</strong> -->
                                    <p>ของเล่นสุดล้ำ สั่งการหุ่นจิ๋วด้วยตัวเอง</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 gridCard mt-4">
                        <div class="workshopCard">
                            <div class="row">
                                <div class="col-4 logo ">
                                    <img src="https://edu.bstudio.click/openhouse-2018/assets/img/workshop_datascience.svg">
                                </div>
                                <div class="col-8 info text-center">
                                    <h3>Ez Data Science</h3>
                                    <!-- <p><strong>วิทยาการข้อมูลกำหนดอนาคต</strong> -->
                                    <p>วิทยาการข้อมูลกำหนดอนาคต</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-lg-3 col-sm-12 gridCard mt-4"></div>
                    <div class="col-lg-6 col-sm-12 gridCard mt-4">
                        <div class="workshopCard">
                            <div class="row">
                                <div class="col-4">
                                    <img class="logoWorkshop" src="@/assets/online-order (2).png">
                                </div>
                                <div class="col-8 info text-center">
                                    <h3>Build your iOS App</h3>
                                    <!-- <p><strong>คงดีถ้ามีแอพเป็นของตัวเอง </strong> -->
                                    <p>คงดีถ้ามีแอพเป็นของตัวเอง</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="rallysSection" class="section">
            <div>
                <h1 class="headings-mid">กิจกรรมชุมนุมของนักศึกษา</h1>
            </div>
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-lg-3 col-6 gridCard">
                        <div class="rallyCard">
                            <img src="https://edu.bstudio.click/openhouse-2018/assets/img/rally_anime.jpg">
                            <h2>ชุมนุมวิจัยอนิเมและหมากกระดาน</h2>
                            <p>ชุมนุมเกี่ยวกับอนิเมชั่นหรือการ์ตูน รวมไปถึงหมากกระดาน</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 gridCard">
                        <div class="rallyCard">
                            <img src="https://edu.bstudio.click/openhouse-2018/assets/img/rally_agape.jpg">
                            <h2>ชุมนุม AGAPE'</h2>
                            <p>สันทนาการไอทีลาดกระบัง</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 gridCard">
                        <div class="rallyCard">
                            <img src="https://edu.bstudio.click/openhouse-2018/assets/img/rally_foto.png">
                            <h2>ชุมนุม FOTO+ MAG</h2>
                            <p>ชุมนุมที่รวบรวมคนที่สนใจในด้านการถ่ายภาพ</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 gridCard">
                        <div class="rallyCard">
                            <img src="https://edu.bstudio.click/openhouse-2018/assets/img/rally_inphonic.jpg">
                            <h2>ชุมนุม Inphonic</h2>
                            <p>ชุมนุมของผู้ชื่นชอบในดนตรีของคณะไอที </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section id="gallerySection" class="section">
            <div class="w-100">
                <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >
                    <!-- Text slides with image -->
                    <b-carousel-slide :img-src="require('../assets/gallery/01.jpg')"></b-carousel-slide>
                    <b-carousel-slide :img-src="require('../assets/gallery/02.jpg')"></b-carousel-slide>
                    <b-carousel-slide :img-src="require('../assets/gallery/03.jpg')"></b-carousel-slide>
                    <b-carousel-slide :img-src="require('../assets/gallery/04.jpg')"></b-carousel-slide>
                    <b-carousel-slide :img-src="require('../assets/gallery/05.jpg')"></b-carousel-slide>
                    <b-carousel-slide :img-src="require('../assets/gallery/06.jpg')"></b-carousel-slide>
                    <b-carousel-slide :img-src="require('../assets/gallery/07.jpg')"></b-carousel-slide>
                    <b-carousel-slide :img-src="require('../assets/gallery/08.jpg')"></b-carousel-slide>
                    <b-carousel-slide :img-src="require('../assets/gallery/09.jpg')"></b-carousel-slide>

                </b-carousel>
            </div>
        </section>

        <section id="routeSection" class="section">
            <div>
                <h2 class="heading mt-4 mb-4">การเดินทาง</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-12">
                        <b-tabs content-class="mt-3" fill>
                            <b-tab title="AIRPORT RAIL LINK" active>
                                <template slot="title">
                                    <i class="fas fa-subway"></i>
                                </template>
                                
                                <div class="row text-left">
                                    <h4 class="routeHeading">AIRPORT RAIL LINK</h4>
                                    <p>จากสถานีพญาไท ผ่านสถานีราชปรารภ มักกะสัน รามคำแหง หัวหมาก บ้านทับช้าง ใช้เวลาประมาณ 30 นาทีลงที่สถานีลาดกระบังแล้วต่อรถไฟที่สถานีรถไฟลาดกระบัง หรือต่อรถสองแถวสาย 777 (เขียนว่าเข้าเทคโนฯ)</p>
                                </div>                       
                            </b-tab>

                            <b-tab title="รถไฟ">
                                <template slot="title">
                                    <i class="fas fa-train"></i>
                                </template>
                                <div class="row text-left">
                                    <h4 class="routeHeading">รถไฟ</h4>
                                    <p>สายตะวันออก : สถานีต้นทางกรุงเทพฯ(หัวลำโพง) ผ่าน ยมราช อุรุพงศ์ พญาไท มักกะสัน อโศก คลองตัน สุขุมวิท71 หัวหมาก บ้านทับช้าง ซอยวัดลานบุญ ลาดกระบัง พระจอมเกล้า ปลายทางสถานีหัวตะเข้</p>
                                    <ul>
                                        <li>ขบวนจากกรุงเทพ (หัวลำโพง)</li>
                                        <ul>
                                            <li>379 (กรุงเทพ - หัวตะเข้) ถึงหัวตะเข้ 05.10 *วันจันทร์-ศุกร์</li>
                                            <li>275 (กรุงเทพ - อรัญประเทศ) ถึงหัวตะเข้ 07.02</li>
                                            <li>283 (กรุงเทพ - บ้านพลูตาหลวง) ถึงหัวตะเข้ 08.13 *วันจันทร์-ศุกร์</li>
                                            <li>285 (กรุงเทพ - ชุมทางฉะเชิงเทรา) ถึงหัวตะเข้ 08.13 *วันเสาร์-อาทิตย์-วันหยุดพิเศษ</li>
                                            <li>281 (กรุงเทพ - กบินทร์บุรี) ถึงหัวตะเข้ 08.56</li>
                                        </ul>
                                    </ul>
                                    <ul>
                                        <li>ขบวนออกจากชุมทางฉะเชิงเทรา</li>
                                        <ul>
                                            <li>384 (ชุมทางฉะเชิงเทรา – กรุงเทพ) ถึงหัวตะเข้ 06.25 *วันจันทร์-ศุกร์</li>
                                            <li>372 (ปราจีนบุรี – กรุงเทพ) ถึงหัวตะเข้ 06.59</li>
                                            <li>388 (ชุมทางฉะเชิงเทรา – กรุงเทพ) ถึงหัวตะเข้ 07.34</li>
                                            <li>285 (กรุงเทพ - ชุมทางฉะเชิงเทรา) ถึงหัวตะเข้ 08.13 *วันเสาร์-อาทิตย์-วันหยุดพิเศษ</li>
                                            <li>278 (กบินทร์บุรี – กรุงเทพ) ถึงหัวตะเข้ 09.09</li>
                                        </ul>
                                    </ul>
                                    <ul>
                                        <li>ขบวนออกจากรังสิต</li>
                                        <ul>
                                            <li>376 (รังสิต - หัวตะเข้) ออกรังสิต 05.35 ถึงหัวตะเข้ 07.40 *รถขบวนนี้ไม่เข้าหัวลำโพง และไม่มีบริการวันเสาร์ อาทิตย์ วันหยุดพิเศษ</li>
                                        </ul>
                                    </ul>
                                </div>                       
                            </b-tab>

                            <b-tab title="รถสองแถว">
                                <template slot="title">
                                    <i class="fas fa-bus-alt"></i>
                                </template>
                                <div class="row text-left">
                                    <div class="col-lg-12 col-12">
                                        <h4 class="routeHeading">รถสองแถว</h4>
                                        <ul>
                                            <li>วงกลมวนซ้ายแอร์พอร์ตลิงค์ 7 บาท 5.00-22.00 15 นาที</li>
                                            <li>หัวตะเข้ – เทคโน – หนองจอก	7 บาท 5.00-22.00 10 นาที</li>
                                            <li>หัวตะเข้ – เทคโน – ฮอนด้า 7 บาท 5.00-22.00 10 นาที</li>
                                            <li>วัดราชโกษา – เทคโน – ร่มเกล้า 7 บาท 5.00-20.00 20 นาที</li>
                                            <li>หัวตะเข้ – เทคโน – วัดอุทัย 10 บาท 5.00-17.30 40 นาที</li>
                                            <li>หัวตะเข้ – เทคโน – บึงบัว 10 บาท 5.00-17.30 30 นาที</li>
                                        </ul>
                                    </div>
                                    
                                </div>                       
                            </b-tab>

                            <b-tab title="รถตู้">
                                <template slot="title">
                                    <i class="fas fa-shuttle-van"></i>
                                </template>
                                <div class="row text-left">
                                    <div class="col-lg-12 col-12">
                                        <h4 class="routeHeading">รถตู้ด่วนพิเศษ</h4>
                                        <ul>
                                            <li>หมอชิตใหม่ - พระจอมเกล้าลาดกระบัง (ทางด่วน)</li>
                                            <li>อนุสาวรีย์ชัย - พระจอมเกล้าลาดกระบัง (ทางด่วน)</li>
                                            <li>รังสิตฟิวเจอร์ - พระจอมเกล้าลาดกระบัง (ทางด่วน)</li>
                                            <li>แฮปปี้แลนด์ - พระจอมเกล้าลาดกระบัง (ทางด่วน)</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="col-lg-12 col-12">
                                        <h4 class="routeHeading">รถตู้ประจำทาง</h4>
                                        <ul>
                                            <li>หัวตะเข้ – หนองจอก</li>
                                            <li>มีนบุรี – บึงบัว – หัวตะเข้</li>
                                            <li>มีนบุรี – นิคม – หัวตะเข้</li>
                                            <li>หัวตะเข้ – ซีคอนสแควร์*</li>
                                            <li>หัวตะเข้ – บางพลี*</li>
                                        </ul>
                                        <h5>*ลงที่หน้าตลาดหัวตะเข้ รถไม่ได้เข้ามาภายในสถาบัน</h5>
                                    </div>
                                    
                                    <div class="col-lg-12 col-12">
                                        <h4 class="routeHeading">รถตู้ SUVARNABHUMI AIRPORT BUS TERMINAL</h4>
                                        <ul>
                                            <li>549 มีนบุรี – สุวรรณภูมิ</li>
                                            <li>552 อ่อนนุช - สุวรรณภูมิ</li>
                                            <li>552A ปากน้ำ – สุวรรณภูมิ (เฉพาะเช้า-เย็น)</li>
                                            <li>554 สะพานใหม่ – สุวรรณภูมิ (เฉพาะเช้า-เย็น)</li>
                                            <li>555 สุวรรณภูมิ - ดอนเมือง</li>
                                            <li>559 สุวรรณภูมิ – รังสิตฟิวเจอร์</li>
                                        </ul>
                                        <h5>*ลงที่หน้าตลาดหัวตะเข้ รถไม่ได้เข้ามาภายในสถาบัน</h5>
                                    </div>

                                </div>                       
                            </b-tab>

                            <b-tab title="รถยนต์ส่วนบุคคล">
                                <template slot="title">
                                    <i class="fas fa-car"></i>
                                </template>
                                <div class="row text-left">
                                    <div class="col-lg-12 col-12">
                                        <h4 class="routeHeading">รถยนต์ส่วนบุคคล</h4>
                                        <ul>
                                            <li><strong>เริ่มจากเส้นทางถนนศรีนครินทร์ที่แยกอ่อนนุช</strong> เข้าถนนอ่อนนุช (สุขุมวิท77) ระยะทางประมาณ 16 กม. แยกเข้าถนนฉลองกรุง</li>
                                            <li><strong>เริ่มจากกรุงเทพฯ</strong> ใช้เส้นทางด่วนพิเศษ กรุงเทพฯ–ชลบุรี (มอเตอร์เวย์)</li>
                                            <ul>
                                                <li>ออกจากมอเตอร์เวย์ที่จุดกลับรถใต้สะพานเล็กๆ ให้เลยทางออกสุวรรณภูมิมาก่อน</li>
                                                <li>ให้สังเกตอาคารเรียนคณะเทคโนโลยีสารสนเทศ จะเป็นอาคารเรียน 6 ชั้นติดกระจก หากเลยมาแล้วให้ชิดซ้าย ใต้สะพาน เลยไปประมาณ 800 เมตร จะมีทางออกเล็กๆ ให้กลับรถ จากนั้นเลี้ยวขวา เมื่อถึงใต้สะพานแล้วให้เลี้ยวซ้าย</li>
                                            </ul>
                                            <li><strong>เริ่มจากชลบุรี</strong>ใช้เส้นทางด่วนพิเศษ กรุงเทพฯ–ชลบุรี(มอเตอร์เวย์) ออกจากมอเตอร์เวย์ที่ทางเข้าสนามบินสุวรรณภูมิ ทางเบี่ยงถนนคู่ขนานมอเตอร์เวย์ ถนนฉลองกรุง</li>
                                        </ul>
                                    </div>

                                </div>                       
                            </b-tab>

                            <b-tab title="รถเมล์">
                                <template slot="title">
                                    <i class="fas fa-bus"></i>
                                </template>
                                <div class="row text-left">
                                    <div class="col-lg-12 col-12">
                                        <h4 class="routeHeading">รถเมล์</h4>
                                        <ul>
                                            <li>สาย 1013 พระโขนง - หัวตะเข้ (รถร่วมบริการ) ลงรถตรงข้ามสวนพระนคร จากนั้นต่อรถสองแถวจากหน้าสวนพระนครเข้ามายังสถาบัน</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-12 col-12">
                                        <h4 class="routeHeading">รถเมล์ SUVARNABHUMI AIRPORT BUS TERMINAL</h4>
                                        <ul>
                                            <li>554 รังสิต – สุวรรณภูมิ (ทางด่วนลงรามอินทรา)</li>
                                            <li>555 รังสิต – สุวรรณภูมิ (ทางด่วนลงดินแดง)</li>
                                            <li>558 พระราม 2 - สุวรรณภูมิ (ทางด่วนลงสุขสวัสดิ์)</li>
                                        </ul>
                                    </div>

                                </div>                       
                            </b-tab>

                        </b-tabs>
                    </div>
                </div>
            </div>
        </section>
    
        <div v-if="showModal">
            <transition name="fade">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3 class="modal-title req-field text-center">{{ modalTopic }}</h3>
                                    <h6 class="modal-title req-field text-center">{{ subTopic }}</h6>
                                    <button  class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" @click="showModal = false"><i class="fas fa-times-circle"></i></span>
                                    </button>
                                </div>

                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-lg-6 col-sm-12 text-center line-right">
                                            <small>สถานที่: </small>
                                            <p>หน้าห้องประชุมใหญ่ (Auditorium)</p>
                                            <small>วันที่ 23-24 สิงหาคม 2561</small>
                                            <p>เวลา 09.00 – 16.00 น.</p>
                                        </div>
                                        <div class="col-lg-6 col-sm-12 text-left">
                                            <p>{{ modalmsg }}</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div v-if="this.isSubmit == true" class="modal-footer">
                                    <a id="" @click="yes()" class="btn btn-primary mt-2">ใช่</a>
                                    <a id="" @click="no()" class="btn btn-primary mt-2">ไม่ใช่ฉัน</a>
                                </div>
                                <div v-if="this.isSubmitIsNo == true" class="modal-footer">
                                    <a id="" @click="register()" class="btn btn-primary mt-2">ลงทะเบียน</a>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

    </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

import bCarousel from 'bootstrap-vue/es/components/carousel/carousel'
import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

Vue.component('b-carousel', bCarousel)
Vue.component('b-carousel-slide', bCarouselSlide)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
export default {
  name: 'IndexPage',
  data () {
        return {
            slide: 0,
            sliding: null,
            modalmsg: "",
            showModal: false,
            modalTopic: "",
            subTopic: ""
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
        infoToBe() {
            this.modalTopic = "To Be IT@KMIT"
            this.subTopic = "เตรียมความพร้อมสู่ไอทีลาดกระบัง"
            this.modalmsg = "เตรียมความพร้อมสู่ไอทีลาดกระบังไปกับ “ToBeIT@KMITL” โดยเหล่าพี่ๆ ที่จะคอยแนะแนวน้องๆ พร้อมกับไขข้อข้องใจที่มีเพื่อการเตรียมสอบเข้าคณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"
            this.showModal = true
        },
        infoTour() {
            this.modalTopic = "ทัวร์คณะ"
            this.subTopic = "เยี่ยมชมคณะไอทีลาดกระบัง"
            this.modalmsg = "เปิดประสบการณ์ภายในคณะไอทีลาดกระบัง กับการเยี่ยมชมห้องแลปสุดทันสมัย, ห้องเซิร์ฟเวอร์ภายในคณะ, ชุมนุมของนักศึกษาที่น่าสนใจ และสิ่งอำนวยความสะดวกต่างๆสุดครบครัน สัมผัสบรรยากาศจริงของการเรียนสุดเป็นกันเองโดยพี่ๆและอาจารย์"
            this.showModal = true
        },
        infoSyllabus() {
            this.modalTopic = "แนะนำหลักสูตรไอทีลาดกระบัง"
            this.subTopic = "เรียนไอทีลาดกระบังเป็นยังไง"
            this.modalmsg = "มาพูดคุยกับพี่ๆ นักศึกษาของคณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ไขปัญหาข้อข้องใจไปด้วยกัน ความข้องใจในสาขาวิชาวิทยาการคอมพิวเตอร์, วิศวกรรมคอมพิวเตอร์, วิศวกรรมสารสนเทศ และ เทคโนโลยีสารสนเทศ ต่างกันยังไงและสาขาภายในคณะ เช่น IT, DSBA, BIT คืออะไร ต่างกันยังไง"
            this.showModal = true
        },
        infoExhibition() {
            this.modalTopic = "การแสดงนิทรรศการทางวิชาการ"
            this.subTopic = "ผลงานนักศึกษาและคณาจารย์"
            this.modalmsg = "การจัดแสดงผลงานให้แก่ผู้ที่สนใจได้ชมและศึกษา โดยนำเสนอผลงานต่างๆ ของนักศึกษาระดับปริญญาตรี, ปริญญาโท และ ปริญญาเอก รวมทั้งงานวิจัยของอาจารย์ในคณะฯ ทุกท่านจะได้รับทั้งความรู้ในเชิงวิชาการจากทั้งจากผลงานของนักศึกษา, งานวิจัยภายในคณะ"
            this.showModal = true
        },
        infoNetSec() {
            this.$router.push('/detailsNetsec')
        },
        infoEsport() {
            this.$router.push('/detailsEsport')
        },
        infoData() {
            this.$router.push('/detailsData')
        },
        infoPHP() {
            this.$router.push('/detailsPhp')
        },

        
    }
}
</script>

<style lang="scss" scoped>
#mainBanner {
    width: 100%;
}

.overflow {
    overflow-x: auto;
}

b-carousel {
    overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.line-right {
    border-right: solid white 2px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .5 ease;
}

.modal-dialog {
    max-width: 50%;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

button.close {
    padding: 0;
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 50%;
}

.modal-header {
    display: block;
    padding: 1rem 1rem;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
}

.modal-content {
    border: none;
    color: white;
    background: #2ea9dd;
    min-height: 35vh;
}

.modal-header {
    border: none;
}v

.fas {
    font-size: 20px;    
}

.fa-bus, .fa-car, .fa-shuttle-van, .fa-bus-alt, .fa-train, .fa-subway {
    color: #fdb127;
}

.routeHeading {
    color: #fdb127;
}

.nav-link.active {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
}


/*--------------------
reset
---------------------*/

p {font-weight: 300;}
// body {font-family: 'Mitr', sans-serif;}
// h1, h2{font-family: 'Kanit', sans-serif;}
h1 {font-size: 2.4em;}
a {color: #FFF;}
p {font-size: 1.25em;}
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

