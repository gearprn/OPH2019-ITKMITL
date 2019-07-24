<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="content">
                    <h2>สมัครเข้าแข่งขัน</h2>
                    <h4>การแข่งขันแก้ปัญหาด้านวิทยาการข้อมูล (Data Science Challenge)</h4>
                    
                    <form v-on:submit.prevent="onSubmit" v-if="success">
                        
                        <div class="form-group">
                            <div class="row text-left">
                                <div class="col-lg-12 col-sm-12 mt-3">
                                    <label class="control-label">ชื่อทีม *</label>
                                    <input type="text" class="form-control form-control-lg" required v-model="teamName">
                                </div>
                                <div class="col-lg-12 col-sm-12 mt-3">
                                    <label class="control-label">ชื่อสถานศึกษา *</label>
                                    <input type="text" class="form-control form-control-lg" required v-model="school">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row text-left">
                                <div class="col-lg-12 col-sm-12 mt-3">
                                    <h3>ข้อมูลสมาชิกคนที่ 1</h3>
                                </div>
                                <div class="col-lg-12 col-sm-12 pad">
                                    <div class="spacing row">
                                        <div class="col-lg-12 col-sm-12 mt-3">
                                            <label class="control-label">ชื่อ-นามสกุล สมาชิกคนที่ 1 *</label>
                                            <input type="text" class="form-control form-control-lg" required v-model="mem1name">
                                        </div>
                                        <div class="col-lg-12 col-sm-12 mt-3">
                                            <label class="control-label">หมายเลขประจำตัวประชาชน *</label>
                                            <input type="number" class="form-control form-control-lg" required v-model="mem1id">
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">อายุ *</label>
                                            <input type="number" class="form-control form-control-lg" required v-model="mem1age">
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">ระดับชั้น *</label>
                                            <select class="custom-select" required v-model="mem1grade">
                                                <option value="4">มัธยมศึกษาปีที่ 4</option>
                                                <option value="5">มัธยมศึกษาปีที่ 5</option>
                                                <option value="6">มัธยมศึกษาปีที่ 6</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">เบอร์โทรศัพท์ *</label>
                                            <input type="tel" class="form-control form-control-lg" required v-model="mem1tel">
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">อีเมล *</label>
                                            <input type="email" class="form-control form-control-lg" required v-model="mem1email">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row text-left">
                                <div class="col-lg-12 col-sm-12 mt-3">
                                    <h3>ข้อมูลสมาชิกคนที่ 2</h3>
                                </div>
                                <div class="col-lg-12 col-sm-12 pad">
                                    <div class="row spacing">
                                        <div class="col-lg-12 col-sm-12 mt-3">
                                            <label class="control-label">ชื่อ-นามสกุล สมาชิกคนที่ 2 *</label>
                                            <input type="text" class="form-control form-control-lg" required v-model="mem2name">
                                        </div>
                                        <div class="col-lg-12 col-sm-12 mt-3">
                                            <label class="control-label">หมายเลขประจำตัวประชาชน *</label>
                                            <input type="number" class="form-control form-control-lg" required v-model="mem2id">
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">อายุ *</label>
                                            <input type="number" class="form-control form-control-lg" required v-model="mem2age">
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">ระดับชั้น *</label>
                                            <select class="custom-select" required v-model="mem2grade">
                                                <option value="4">มัธยมศึกษาปีที่ 4</option>
                                                <option value="5">มัธยมศึกษาปีที่ 5</option>
                                                <option value="6">มัธยมศึกษาปีที่ 6</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">เบอร์โทรศัพท์ *</label>
                                            <input type="tel" class="form-control form-control-lg" required v-model="mem2tel">
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">อีเมล *</label>
                                            <input type="email" class="form-control form-control-lg" required v-model="mem2email">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row text-left">
                                <div class="col-lg-12 col-sm-12 mt-3">
                                    <h3>ข้อมูลสมาชิกคนที่ 3</h3>
                                </div>
                                <div class="col-lg-12 col-sm-12 pad">
                                    <div class="row spacing">
                                        <div class="col-lg-12 col-sm-12 mt-3">
                                            <label class="control-label">ชื่อ-นามสกุล สมาชิกคนที่ 3 *</label>
                                            <input type="text" class="form-control form-control-lg" required v-model="mem3name">
                                        </div>
                                        <div class="col-lg-12 col-sm-12 mt-3">
                                            <label class="control-label">หมายเลขประจำตัวประชาชน *</label>
                                            <input type="number" class="form-control form-control-lg" required v-model="mem3id">
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">อายุ *</label>
                                            <input type="number" class="form-control form-control-lg" required v-model="mem3age">
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">ระดับชั้น *</label>
                                            <select class="custom-select" required v-model="mem3grade">
                                                <option value="4">มัธยมศึกษาปีที่ 4</option>
                                                <option value="5">มัธยมศึกษาปีที่ 5</option>
                                                <option value="6">มัธยมศึกษาปีที่ 6</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">เบอร์โทรศัพท์ *</label>
                                            <input type="tel" class="form-control form-control-lg" required v-model="mem3tel">
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">อีเมล *</label>
                                            <input type="email" class="form-control form-control-lg" required v-model="mem3email">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row text-left">
                                <div class="col-lg-12 col-sm-12 mt-3">
                                    <h3>ข้อมูลอาจารย์ที่ปรึกษา</h3>
                                </div>
                                <div class="col-lg-12 col-sm-12  pad">
                                    <div class="row spacing-ad">
                                        <div class="col-lg-12 col-sm-12 mt-3">
                                            <label class="control-label">ชื่อ-นามสกุล อาจารย์ที่ปรึกษา*</label>
                                            <input type="text" class="form-control form-control-lg" required v-model="advisorName">
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">เบอร์โทรศัพท์*</label>
                                            <input type="num" class="form-control form-control-lg" required v-model="advisorTel">
                                        </div>
                                        <div class="col-lg-6 col-sm-12 mt-3">
                                            <label class="control-label">อีเมล*</label>
                                            <input type="email" class="form-control form-control-lg" required v-model="advisorEmail">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <button type="submit" class="btn btn-primary mb-3">Submit</button>
                    </form>

                    <div v-if="this.success == false" class="mt-5">
                        <h4>คุณลงทะเบียนการแข่งขันความปลอดภัยของระบบคอมพิวเตอร์เสร็จสิ้น</h4>
                        <h4>Print ใบสมัครแข่งขัน ลงลายมือชื่อรับรองจากอาจารย์ผู้ควบคุม<strong> (รับเฉพาะใบสมัครที่กรอกข้อมูลผ่านทางเว็บและเอกสารที่ Print จากระบบเท่านั้น หากนอกเหนือจากนี้ถือว่าการสมัครการแข่งขันนั้นไม่สมบูรณ์) </strong>สามารถส่งใบสมัครทางอีเมลที่ openhouse@it.kmitl.ac.th</li></h4>
                    </div>

                </div>
            </div>
        </div>
        
        <div v-if="showModal">
            <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">

                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title req-field">เเจ้งเตือน</h5>
                            <a  class="close" data-dismiss="modal" aria-label="Close" @click="showModal = false" style="cursor:pointer;">
                                <span aria-hidden="true">&times;</span>
                            </a>
                        </div>
                        <div class="modal-body">
                            <p>{{ modalmsg }}</p>
                        </div>
                    </div>
                </div>

                </div>
            </div>
            </transition>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var image2base64 = require('image-to-base64');

pdfMake.fonts = {
  THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew Bold.ttf',
    italics: 'THSarabunNew Italic.ttf',
    bolditalics: 'THSarabunNew BoldItalic.ttf'
  },
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  }
}

export default {
    name: "regisdataPage",
    data () {
        return {
            teamName: "",
            school: "",
            mem1name: "",
            mem1id: "",
            mem1age: "",
            mem1grade: "",
            mem1tel: "",
            mem1email: "",
            mem2name: "",
            mem2id: "",
            mem2age: "",
            mem2grade: "",
            mem2tel: "",
            mem2email: "",
            mem3name: "",
            mem3id: "",
            mem3age: "",
            mem3grade: "",
            mem3tel: "",
            mem3email: "",
            advisorName: "",
            advisorTel: "",
            advisorEmail: "",
            statusCode: "",
            statusMsg: "",
            showModal: false,
            modalmsg: "",
            success: true,
            base64img: ""
        }
    },
    methods: {
        onSubmit() {
            axios({
                method: "POST",
                url: "https://us-central1-itkmitl-oph-2019.cloudfunctions.net/event/register",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    "event": 'DataScience',
                    "teamType": null,
                    "teamName": this.teamName,
                    "school": this.school,
                    "member1": {
                        "name": this.mem1name,
                        "id": this.mem1id,
                        "age": this.mem1age,
                        "grade": this.mem1grade,
                        "tel": this.mem1tel,
                        "email": this.mem1email
                    },
                    "member2": {
                        "name": this.mem2name,
                        "id": this.mem2id,
                        "age": this.mem2age,
                        "grade": this.mem2grade,
                        "tel": this.mem2tel,
                        "email": this.mem2email
                    },
                    "member3": {
                        "name": this.mem3name,
                        "id": this.mem3id,
                        "age": this.mem3age,
                        "grade": this.mem3grade,
                        "tel": this.mem3tel,
                        "email": this.mem3email
                    },
                    "advisorName": this.advisorName,
                    "advisorEmail": this.advisorEmail,
                    "advisorTel": this.advisorTel
                }
            })
            .then((res) => {
                // console.log(res.data)
                // console.log('pass')
                this.statusCode = res.data.statusCode
                this.statusMsg = res.data.statusMessage
                if (this.statusCode == "201" && this.statusMsg == "Created") {
                    this.success = false
                    this.pdf()
                }
                if (this.statusCode == "400") {
                    this.showModal = true
                    this.modalmsg = "ชื่อทีมซ้ำกรุณาใช้ชื่อทีมอื่น"
                }
            })
            .catch((err) => {
                // console.log(err)
                // console.log('not pass')
                this.statusCode = err.data.statusCode
                this.statusMsg = err.data.statusMessage
                if (this.statusCode == "201" && this.statusMsg == "Created") {
                    this.success = false
                    this.pdf()
                }
                if (err.data.statusCode == 400) {
                    this.showModal = true
                    this.modalmsg = "ชื่อทีมซ้ำกรุณาใช้ชื่อทีมอื่น"
                }
            })
        },
        pdf() {
            var advisorName = this.advisorName;
            var dd = {
                info: {
                    title: 'ใบสมัครเข้าร่วมการแข่งขันแก้ปัญหาด้านวิทยาการข้อมูล (Data Science Challenge)'
                },
                content: [
                    {
                        text: [
                            'IT LADKRABANG OPEN HOUSE 2019\n',
                            'เปิดบ้านไอทีลาดกระบัง 2019\n',
                            'ใบสมัครเข้าร่วมการแข่งขันแก้ปัญหาด้านวิทยาการข้อมูล (Data Science Challenge)'
                        ],
                        style: 'header',
                        alignment: 'center'
                    },
                    '\n',
                    {
                        text: 'ข้อมูลทีม',
                        style: 'header',
                    },
                    {
                        columns: [
                            {
                                text: 'ชื่อทีม: ' +this.teamName
                            },
                            {
                                text: 'สถานศึกษา: '+this.school
                            }
                        ],
                        fontSize: 16
                    },
                    '\n',
                    {
                        text: 'ข้อมูลอาจารย์ที่ปรึกษา',
                        style: 'header',
                    },
                    {
                        columns: [
                            {
                                text: 'ชื่อ - นามสกุล: ' +this.advisorName
                            },
                            {
                                text: 'อีเมล: '+this.advisorEmail
                            },
                            {
                                text: 'เบอร์โทรศัพท์: '+this.advisorTel
                            },
                        ],
                        fontSize: 16
                    },
                    '\n',
                    {
                        text: 'สมาชิกคนที่ 1',
                        style: 'header',
                    },
                    {
                        columns: [
                            {
                                text: 'ชื่อ - นามสกุล: ' +this.mem1name
                            },
                            {
                                text: 'อีเมล: '+this.mem1email
                            },
                            {
                                text: 'เบอร์โทรศัพท์: '+this.mem1tel
                            },
                            {
                                text: 'ระดับชั้น: มัธยมศึกษาปีที่ '+this.mem1grade
                            },
                        ],
                        fontSize: 16
                    },
                    '\n',
                    {
                        text: 'สมาชิกคนที่ 2',
                        style: 'header',
                    },
                    {
                        columns: [
                            {
                                text: 'ชื่อ - นามสกุล: ' +this.mem2name
                            },
                            {
                                text: 'อีเมล: '+this.mem2email
                            },
                            {
                                text: 'เบอร์โทรศัพท์: '+this.mem2tel
                            },
                            {
                                text: 'ระดับชั้น: มัธยมศึกษาปีที่ '+this.mem2grade
                            },
                        ],
                        fontSize: 16
                    },
                    '\n',
                    {
                        text: 'สมาชิกคนที่ 3',
                        style: 'header',
                    },
                    {
                        columns: [
                            {
                                text: 'ชื่อ - นามสกุล: ' +this.mem3name
                            },
                            {
                                text: 'อีเมล: '+this.mem3email
                            },
                            {
                                text: 'เบอร์โทรศัพท์: '+this.mem3tel
                            },
                            {
                                text: 'ระดับชั้น: มัธยมศึกษาปีที่ '+this.mem3grade
                            },
                        ],
                        fontSize: 16
                    },
                    '\n',
                    {
                        text: '     โรงเรียน อาจารย์ที่ปรึกษา เเละ นักเรียนที่เข้าร่วมกิจกรรม ได้ทราบถึงหลักเกณฑ์ในการเเข่งขันครั้งนี้เเล้ว ยินดีปฎิบัติ\n',
                        fontSize: 16,
                        margin: [20, 0, 0, 0]
                    },
                    {
                        text: 'ตามหลักเกณฑ์ดังกล่าวทุกประการ เเละยอมรับผลการตัดสินของคณะกรรมการโดยไม่มีเงื่อนไขใดๆ',
                        fontSize: 16,
                    },
                    '\n',
                    {
                        columns: [
                            {
                                text: ''
                            },
                            {
                                text: [
                                    'ลงชื่ออาจารย์ที่ปรึกษา\n',
                                    '..............................................................\n',
                                    '( ................................................... ) ตัวบรรจง\n',
                                    'วันที่ ........... เดือน ............................. พ.ศ. ...............',
                                ],
                                alignment: 'center'
                            },
                        ],
                        fontSize: 16
                    },
                ],
                defaultStyle:{
                    font: 'THSarabunNew'
                },
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        alignment: 'justify'
                    }
                } 
            };
            pdfMake.createPdf(dd).download('ใบสมัครเข้าร่วมการแข่งขันแก้ปัญหาด้านวิทยาการข้อมูล (Data Science Challenge).pdf');
        }
    },
    // mounted () {
    //     this.pdf()
    // }
}
</script>

<style lang="scss" scoped>
.content {
    min-height: calc(100vh - 422px);
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
  transition: opacity .9s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.pad {
    padding-left: 30px;
}

button {
    width: 100%;
    color: white;
    border: none;
    border: none;
    background: #fdb127;
    cursor: pointer;
}
.btn-primary {
  color: #fff;
  background-color: #fdb127;
  border-color: #fdb127;
  cursor: pointer;
}

.btn-primary:hover {
  color: #fff;
  background-color: #fdb127;
  border-color: #fdb127;
  cursor: pointer;
}

.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
  color: #fff;
  border: none;
  background-color: #fdb127;
  border-color: #fdb127;
  cursor: pointer;
}

select.custom-select {
    display: block;
    width: 100%;
    height: 48px;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: unset;
    padding: 0.2em 0.5em;
    font-weight: 200;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
}
.spacing {
    border-left: 5px solid #2da9dd;
}

.spacing-ad {
    border-left: 5px solid #fdb127;
}


.form-control {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: unset;
    padding: 0.2em 0.5em;
    font-weight: 200;
}

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
