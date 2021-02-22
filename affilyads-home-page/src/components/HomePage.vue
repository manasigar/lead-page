<template>
<div class="vld-parent">
<loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>

  <div class="container-fluid m-0 p-0">
    <div id="home-page">
      <div id="main">
        <div class="row mr-0 pb5">

          <div class="col-lg-6  col-12 text-center pt-4 grocery-cont" >
            <h2 class="title">Maak kans op een<br> &euro;1000 Waardebon!</h2>
            <img id="grocery-img" src="../assets/Group 812.png">
			<div class="batch-img-cont"><img id="batch-img" src="../assets/Group 813.png"></div>
          </div>
		  
          <div class="col-lg-6 col-12 text-left mb-3 form-cont" >
			<div class="detail-cont" >
			  <div class="row">
                <div class="col-lg-4 col text-center  pt-4">
                  <div class="num-circle-high">1</div>
                  <div class="text-high">Beantwoord <br> de vragen</div>

                </div>
                <div class="col-lg-4 col text-center  pt-4">
                  <div class="num-circle">2</div>
                  <div class="text-non-high">Vul je <br>gegevens in</div>

                </div>
                <div class="col-lg-4 col text-center pt-4">
                  <div class="num-circle">3</div>
                  <div>Heb je <br>gewonnen?</div>
                </div>
              </div>
			  
			</div>
			<div class="batch-mob-cont">				
				<div class="row">
					<span class="col-6 " ><h2 class="title">Maak kans op een<br> &euro;1000 Waardebon!</h2></span>
					<span class="col-6 text-right" ><img src="../assets/Group 813.png"></span>
				
				</div>
			</div>
            <div class="form-container pt-3" >             
				
              <h3 class="text-center">Please enter your details below</h3>
              <form @submit.prevent="submit" class="vld-parent" ref="formContainer">
              <div class="row">
                <div class="col-lg-6 col text-right">
                  <input type="text" />
                </div>
                <div class="col-lg-6 col text-left">
                  <input type="text" />
                </div>

              </div>
              <div class="row pt-5 " id="form-detail">
                <div class="col-lg-12 pl-5 pr-5">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="manasi" id="name" v-model="userData.name" required/>
                    <label for="name" class="form-label">First Name</label>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="ga" id="lname" v-model="userData.lname" required/>
                    <label for="lname" class="form-label">Last Name</label>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="email@gmail.com" id="email" v-model="userData.email"  required/>
                    <label for="email" class="form-label"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
</svg>Email</label>
                  </div>
                  <div class="form-group ">
					  <label class="form-label-norm">Date of Birth</label>
                    <div class="row">                      
                      <div class="col-lg-4 col">
						  
                        <select class="form-control form-control-sm " >
                          <option>Day</option>
                        </select>
                      </div>
                      <div class="col-lg-4 col">
                        <select class="form-control form-control-sm">
                          <option>Month</option>
                        </select>
                      </div>
                      <div class="col-lg-4 col">
                        <select class="form-control form-control-sm">
                          <option>Year</option>
                        </select>
                      </div>
                    </div>
                    
                    
                  	</div>
					<div class="pt-5"><button type="submit" class="btn btn-primary btn-block" @click.prevent="doAjax">ACCEPT T&C’S AND ENTER NOW</button></div>
					<div class="pt-3 pb-5 text-center">Wij respecteren je privacy</div>
                </div>
              </div>
              </form>


            </div>

          </div>

        </div>
        
      </div>
      <div id="footer" class="p-4">
		  <div>Deze promotie wordt onafhankelijk georganiseerd door Green Flamingo, en heeft op geen enkele manier een relatie met de fabrikanten van de getoonde producten. De handelsmerken zijn het eigendom van hun respectievelijke eigenaren. Alle afbeeldingen worden alleen getoond voor illustratieve doeleinden. Deelname mogelijk tot 31-12-2020.</div>
		  <div class="pt-5"><span>Voorwaarden</span><span>Privacy</span><span>DPR Transparency</span><span>Cookies</span></div>
	  </div>
    </div>
    
  </div>
  </div>
</template>

<script>


import Vue from 'vue';
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
export default {
	
  name: 'HelloPage',
  data () {
    return {
      	userData: {
					name: '',
					lname: '',
					email: '',
				},
				isLoading: false,
                fullPage: true
    }
  },
   components: {
            Loading
        },

  methods: {
	  		
             doAjax() {
				this.isLoading = true;
				
				// simulate AJAX
				
                setTimeout(() => {
                  this.isLoading = false
				},5000)
				// this.$router.push('shooping-list'); 
            },
            onCancel() {
              console.log('User cancelled the loader.')
            }    
        
        },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{font-size:12px;}
#main{padding-top:30px;}
#home-page{
  background-color: #2b8ef9;
  background: url('../assets/bg-image.png') no-repeat center center ;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-size: cover;
}
.grocery-cont{position:realtive;}
#grocery-img{
  height:500px;
 
}
.batch-img-cont{
	position:absolute;
	top:50vh;
	right:60px;
}
#batch-img{height:220px;}
h2{
  font-family: 'Poppins', sans-serif;
  font-size: 2vw;
  color:#ffffff;
  font-size-adjust: 0.5;
 
}
.detail-cont{
	background:rgba(82,134,224,0.6);
	width:80%;
	font-size: 10px;
  	color:#fff;
	border-bottom:solid 1px #FFF;
	padding-bottom:10px;
}
.form-container{
  background:rgba(82,134,224,0.6);
  min-height:80vh;
  height:auto;
  width:80%;
  font-size: 10px;
  color:#fff;
}
.num-circle-high{
  height: 25px;
  width: 25px;
  background-color: #4268d4;
  border-radius: 50%;
  border: solid 2px #FFF;
  display: inline-block;
  color:#FFF;
  line-height: 22px;
}
.num-circle{
  height: 25px;
  width: 25px;
  background-color: #fff;
  border-radius: 50%;
  border: solid 2px #FFF;
  display: inline-block;
  color:#5286e0;
  line-height: 22px;
}
input{
  background-color: #4990ef;
  border: solid 1px #4990ef;
  height:30px;
  }

input.form-control{
  background-color:transparent;
  border-radius: 0;
  border-color: #FFF;
  border-style:none none solid none; 
  width:100%;
  transition: all .5s;
  color:white;
  font-size:12px;
  line-height: 14px;
  height:20px;
  padding-left:5px;
}
.form-group{margin-bottom:0 !important;}
.form-label-norm{
	font-size:12px;
}
.form-label{
  display:block;
  opacity: 1;
  transform: translateY(-2.0em);
  transform-origin: 0 0;
  transition:all .5s;
  padding-left:5px;
  font-size:12px;
}
.form-control::placeholder{
  color:transparent;
}
input.form-control:focus{
  box-shadow: none;
  outline: none;
  border-color: orange;
  color:white;

}
.form-control:focus + .form-label,
.form-control:not(:placeholder-shown) + .form-label
{
  transform: translateY(-3.5em) scale(.9);
  font-size:10px;
}

.form-group:focus-within{
  transform: scale(1.0,1.0);

}
select.form-control{
  background: transparent;
  border-radius: 0;
  border-color: #FFF;
  border-style: none none solid none; 
  font-size:12px;
  color:#FFF;
  padding-left:1px;
}
.btn-primary{
	background-color: #0046a7;
	border-radius: 25px;
	padding: .200em;
}
#footer{
	font-size:12px;
	color:white;
	text-align:center;
	width:80%;
	margin:auto;
}
#footer span{padding:0 10px;}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
	.batch-mob-cont{display:none;}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
	.batch-mob-cont{display:none;}
}


@media only screen and (max-width: 600px) {
	
	#main{
		display: flex;
        flex-wrap: wrap;
        justify-content: center;
		padding-top:0px;
	}
	.grocery-cont{
		order: 2;
	}
	.form-cont{
		order:1;
	}
	.form-container{
		width:80%;
		margin: 0 auto;
		display:block;
	}
	.btn-primary{
		font-size: 12px;
	}
	#footer{
		font-size:10px;
		
	}
	#footer span{padding:0 6px;}
	#grocery-img{
		height:250px;
	
	}
	
	
	.detail-cont{
		background-color:#e9f4fe;
		width:100%;
		padding-right:0;
	}
	.num-circle-high{
		
		color:#FFF;
		
	}
	.num-circle{
		
		color:#688de1;
		
	}
	.text-high{
		color:#688de1;
	}
	.text-non-high{
		color:#434343;
	}
	/*.row{
		padding-right:0px !important;
	}
	.col-sm-12{
		padding-right:0px !important;
	}
	.col-6{
		padding-right:0px !important;
	}*/
	.grocery-cont .title{display:none;}
	.batch-img-cont img{display:none;}
	.batch-img-cont{position:static;}
	.batch-mob-cont img{height:100px;}
	.batch-mob-cont{padding-top:20px;}
	.batch-mob-cont h2{text-align:left;padding-left:40px;font-size:25px;}
	.batch-mob-cont img{padding-right:50px;}
}
</style>
