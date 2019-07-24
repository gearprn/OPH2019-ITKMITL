<template>
    <footer class="footer pb-3">
        <div class="container">
            <div class="row pt-5">
                <div class="col-lg-8 col-12">
                    <div class="row">
                        <div class="col-lg-3 col-sm-12">
                            <img src="https://edu.bstudio.click/openhouse-2018/assets/img/logo-sym.svg">
                        </div>
                        <div class="col-lg-9 col-sm-12 text-left">
                            <h2>คณะเทคโนโลยีสารสนเทศ</h2>
                            <h5>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h5>
                            <p>เลขที่ 1 ซอยฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520 </p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-12">
                    <div class="contact-bar">
                        <div class="phone">
                            <div class="row">
                                <div class="col-lg-2 col-2">
                                    <div class="ico-tab"><i class="fas fa-phone"></i></div>
                                </div>
                                <div class="col-lg-10 col-10">
                                    <div class="text-tab text-left">
                                        <h5>โทรศัพท์</h5>
                                        <p>0-2723-4936 - 45</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="email">
                            <div class="row">
                                <div class="col-lg-2 col-2">
                                    <div class="ico-tab"><i class="fas fa-envelope"></i></div>
                                </div>
                                <div class="col-lg-10 col-10">
                                    <div class="text-tab text-left">
                                        <h5>อีเมล</h5>
                                        <p><a href="mailto:openhouse@it.kmitl.ac.th">openhouse@it.kmitl.ac.th</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="social mt-2 mb-3">
                            <div class="text-tab">
                                <div class="row">
                                    <div class="col-lg-12 col-12">
                                        <a href="https://www.facebook.com/ITLadkrabangOpenhouse" target="_blank" class="mr-3"><i class="fab fa-facebook-f"></i></a>
                                        <a href="https://twitter.com/ITKMITL" target="_blank"><i class="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
            <div class="row mb-2">
                <div class="col-lg-6"><span class="text-muted">©2019 Faculty of Information Technology, KMITL</span></div>
            </div>
        </div>
    </footer>

</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

Vue.use(BootstrapVue)
export default {
    name: 'Footer',
    data () {
        return {
        }
    }
}

</script>

<style lang="scss" scoped>
.footer img {
    width: 70%;
    float: left;
    margin-left: 2em;
    background: #FFF;
    border-radius: 16px;
    padding: 12px 8px 12px 10px;
}
footer {
    background: #323643;
    color: white;
}

.ico-tab i {
    border: 1px solid #AAA;
    border-radius: 50%;
    padding: 0.5em;
}

.social .fa-facebook-f {
    background: #3b5998;
}

.social .fa-twitter {
    background: #1dcaff;
}

.social i {
    height: 34px;
    width: 34px;
    border-radius: 50%;
    padding: 0.5em;
    color: #FFF;
    text-align: center;
}

@media screen and (max-width: 1200px) {
    a.nav-link, li {
    	font-size: 1.25em;
    }

}
@media screen and (max-width: 991px) {
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

    .footer img {
        width: 100px;
        margin-bottom: 16px;
        margin-left: 0;
    }
    .ico-tab {
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 568px) {
	a.nav-link, li {
		font-size: 1em;
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
