<template>

  <div id="app">

     
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

#app {
  font-family: 'Gruppo', cursive;
  color: #757575;
  max-width: 1200px;
  margin: 0 auto;
} 

#footer {
  clear: both;
  /* position: fixed; */
  bottom: 0;
  text-align: center;
  font-size: 15px;
  padding: 10px;
}

#foot, #foot2 {
  float: left;
}

#foot2 {
  margin-left: 10px;
  text-align: center;
}

h1 {
  font-size: 60px;
  text-align: center;
  margin: 0;
  padding: 20px 0;
  color: #303030;
  text-shadow: 3px 3px 1px grey;
}

h2 {
  font-size: 30 px;
  margin-bottom: 5%;
  text-align: center;
}

h3 {
  margin-top: 20px;
  text-align:center;
}


#logo img {
  display: inline;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

* {margin: 0; padding: 0;}

a {text-decoration: none;}

/* This class is added on scroll */
.fixed {
  text-align: center;
	position: fixed;
  top: 0;
  width: 100%;
	height: 70px;
  z-index: 1;
  max-width: 1200px;
}


/* Navigation Settings */
#navbar {
	bottom: 0;
	width: 100%;
	height: 70px;
  background: #fff;
  text-align: center;
  font-size: 120%;
}

#navbar li {
	display: inline-block;
	padding: 24px 10px;
}

#navbar li a {
  color: #757575;
	text-transform: uppercase;
}

#navbar li a:hover {
  background-color: #f7f5f5;
}


@media only screen and (max-width: 520px) {

	nav li {
		padding: 24px 4px;
	}

	nav li a {
		font-size: 14px;
	}

}

#welcome {
    font-size: 80px;
    letter-spacing: 4px;
    /* background-color: #f7f4f4a8; */
    margin-bottom: 50px;
  }

#welcome h2{
  font-size: 30px;
}
  
#screen2 {
  /* background:#f7f4f4a8; */
}

/* #sidebar + #content {
  width: 100%;
} */
  
  #sidebar, #content {
    /* overflow: auto; */
    float: left;
    display: block;

    /* padding-left: 10px;
    padding-right: 10px; */
    /* transition: width .35s; */
  }
  
  #sidebar {
    list-style-position: inside;
    width: 28%;
    /* max-width: 100px; */
    /* This pattern is downloaded from www.toptal.com/designers/subtlepatterns/  */
    background-image: url("../images/tlo.png");
    box-shadow: 2px 0 4px rgba(160, 160, 160, 0.5); 
    line-height: 2;
    letter-spacing: 0,5px;
    color: #afafaf;
    padding-left: 1%;
  }

  
  #content {
    width: 67%;
    font-size: 20px;
    line-height: 2;
    letter-spacing: 1px;
    padding-left: 3%;
  }
  
  #content p{
    text-align: right;
    justify-content: flex-start;
    flex-flow: wrap;
  }
</style>
