<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chicken page</title>
    <!-- <link rel="stylesheet" href="stylenav.css"> -->
<style>
   * {
          margin: 0px;
          padding: 0px;
          font-family: 'Lato', sans-serif;
    font-family: 'Rubik', sans-serif;
          font-size: 15px;
      
        }
        body{
          background-color: #F7F6F6;
          width: 1500px;
        }
    .card{
                display: grid;
                grid-template-columns: repeat(3,420px);
                width: 1300px;
                margin: auto;
    
                gap: 18px;
            }
            .mainbox{
                /* border: 1px solid red; */
                box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
           border-radius: 10px; 
           border-radius: 10px;
           background-color: white;
          
                
            }
            .topimg{
          width: 100%;
          padding: 0px;
          border-radius: 10px 10px 0px 0px ;
          
        }
        .carddetails{
          padding: 15px 15px 0px 15px;
          background-color: white;
         
        }
        .cardbottom{
          padding: 0px 15px 0px 15px;
          /* background-color: white; */
         
        }
        .cardtitle{
          line-height: 55px;
          font-weight: 600;
           
          white-space: nowrap  ;
          width: 90%;
          overflow-wrap: break-word;
    
        
        }
        .carddesc{
          line-height: 30px;
          color: rgb(98, 98, 98);
          
          
        }
        .cardweight{
          font-weight: 600;
          display: flex;
          line-height: 45px;
          
          
        }
        .cardweight>span{
          margin-right: 40px;
          font-size: 15px;
          /* margin-bottom: 15px; */
          
        }
        .cardaction{
          display: flex;
          align-items: center;
          justify-content: space-between;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .endbotton1{
          /* border: 1px solid red; */
          margin: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .cardbottomspan{
        margin-left: 12px;
        color: rgb(98, 98, 98);
      
      }
        .cardactionmain{
          
          display: flex;
          width: 55%;
          justify-content: space-between;
          align-items: baseline;
    
        }
        .rate{
          font-size: 20px;
          color: #d11243;
          font-weight: 600;
    
        }
        .ratelogo{
          color: rgb(98, 98, 98);
    
        }
        .rateprice{
    
      color: rgb(98, 98, 98);
      text-decoration: line-through;
        }
        .ratediscount{
          color: green;
        font-weight: 600;
        font-size: 17px;
    
          
        }
        .buttoncart{
          background-color: #d11243;
          border: none;
          color: white;
          padding: 10px 15px;
          border-radius: 8px;
          justify-content: center;
          align-items: center;
        }
      
    
    
     
    /* /////////////////////////////////////////////////////////// */
            .bottomstatic {
                display: flex;
                justify-content: left;
                align-items: center;
              
            }
    .static{
        width: 1300px; 
        margin: auto;
    }
            .bottomstatic>span {
                display: flex;
                justify-content: left;
                align-items: center;
    
            }
    
            .bottomstatic>span>span {
    
                margin-left: 15px;
                margin-right: 15px;
            }
    
            .bottomstatic>span>h1 {
    
                font-size: 25px;
                color: rgb(98, 98, 98);
                margin-right: 55px;
            }
    
            .topstatic {
                margin: 20px;
                margin-left: 0px;
                
            }
    
            .topstatic>span {
                margin: 10px 10px 10px 0px;
            }
    /* ///////////////////////////////////// */
            .filterpart {
                padding: 20px 20px 20px 50px;
                width: 1500px;

                margin: auto;
                padding-left: 100px;
                position: sticky;
                top: 80px;
                background-color: #F7F6F6;
            }
    
            .filterpart>span {
                margin-right: 20px;
    
    
            }
    
            .Delivery {
                margin-right: 20px;
                /* background-color: red; */
                padding: 10px;
                border-radius: 5px;
                border: 1px solid rgb(180, 180, 180);
    
    
            }
    
            .Menu {
                margin-right: 20px;
    
                padding: 10px;
                border-radius: 5px;
                border: 1px solid rgb(180, 180, 180);
            }
            .ChickenType{
                margin-right: 20px;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid rgb(180, 180, 180);
    
    
            }
            .BoneType{
                margin-right: 20px;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid rgb(180, 180, 180);
    
    
            }
            .CutType{
                margin-right: 20px;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid rgb(180, 180, 180);
    
    
            }
            .BestSuitedFor{
                margin-right: 20px;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid rgb(180, 180, 180);
    
    
            }
    
            .pack {
                margin-right: 20px;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid rgb(180, 180, 180);
    
    
            }
    
            .imgcato {
                display: flex;
                width: 1300px;
                /* border: 1px solid red; */
                margin: auto;
                justify-content: space-between;
    
            }
    
            .concato {
                display: flex;
                width: 1300px;
                /* border: 1px solid red; */
                margin: auto;
                justify-content: space-between;
            }
    
            .concato>span {
                text-align: center;
                border: 1px solid black;
            }
    
            /* for cata */
            #cata {
                display: flex;
                text-align: center;
                padding-left: 100px;
                background-color: white;
    
    
            }
    
            .cataimg {
                width: 80px;
                /* margin: 10px; */
            }
    
            .cataspan {
                margin: 10px;
    
    
            }
    
            .catatxt>p {
                margin: 10px;
            }
    
            .catatxt {
    
                color: gray;
                text-decoration: none;
            }
    
            br+span:hover {
                color: #d11243;
            }

            /* other */



/* ////////////////////////ajay end */
* {
    margin: 0px;
    padding: 0px;
    font-family: 'Lato', sans-serif;
font-family: 'Rubik', sans-serif;
    font-size: 15px;

  }




#footcontainer p{
    line-height: 25px;
    font-size: 15px;
}
#footContainer{
   
    padding-top: 20px;
    width: 85%;
    height: auto;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(109, 109, 109);
    margin: 0px auto 0px auto;
    padding-bottom: 20px;
}
#foottop{
    margin: 20px;
}
#foottop>img{
    height: 50px;
}

#footContainer hr{
   top: 40px;
   
   width: 85%;
   padding-right: 10px;
  border-color: transparent;
  background-color: rgb(225, 225, 225);
}
#seconddivision{
    display: flex;
    margin: 0px auto 20px auto;
  
    height: auto;
    
}
#footContainer #uselink{
    display: flex;
}
#uselink>div:nth-child(1){
    height: auto;
    width: 150px;
   
    padding: 10px;
}

#uselink>div:nth-child(2){
    height: 400px;
    width: 340px;
    
    padding: 10px;
}
#footContainer .hhhh{
    font-weight: 300;
    font-weight: bold;
    color: rgb(109, 109, 109);
   

}
#footContainer #uselink>p{
    font-size: 15px;
}
#socialcatch{
    bottom: 0px;
    display: flex;
    align-items: center;
}
#footContainer #connt{
    display: flex;
}
#connt>div:nth-child(1){
    height: auto;
    width: 239px;
    
    padding: 10px;
}

#connt>div:nth-child(2){
    height: 400px;
    width: 210px;
   
    padding: 5px;
}
/* #connt>div:nth-child(3){
    height: 400px;
    width: 350px;
    border: 1px solid red;
    padding: 10px;
} */
#connt>div>img{
    width: 130px;
}

.devider{
    display: flex;
    align-items: center;
  

}
#city{
    text-align: center;
}
.linefull{
    width: 99%;
}
#copyright{
    text-align: center;
}
   
   
   
   /* nav+login */       /* nav+login */       /* nav+login */        /* nav+login */
         /* *{
            margin: 0px;
            padding: 0px;
            font-family: Arial, Helvetica, sans-serif;
        } */
        .pointer{
            height:6px;
            width: 6px;
            border-radius: 100%;
            background-color: #b4b4b4;
        }
        #contactuso{
            background-color: #eaeaea;
            text-align: right;
            font-size:14px;
            color: #787878;
            border-color: transparent;
            text-align: center;
            cursor: pointer;
            width: 30%;
        }
        #topnav{
            width: 100%;
            height: 25px;
           display: flex;
            background-color: #eaeaea;
            font-size:14px;
            font-weight:7px;
            color: #787878;
           
            font-family: Arial, Helvetica, sans-serif;
        }
        #topnav>div{
            width: 1150px;
            display: flex;
            height: 100%;
            margin: auto;

        }
        #topnav>div>div:nth-child(1){
            width: 40%;
            margin: 0px;
           
            display: flex;
            align-items: center;
        }
        #topnav>div>div:nth-child(2){
            width: 60%;
            margin: 0px;
           
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
        }
        #topnav>div>div>p,img{
            padding-right:10px;
            padding-left: 10px;
        }
        #navbar{
            position:sticky;
            top: 0px;
            width: 100%;
            height: 80px;
            background-color: #ffffff;
        }
        #navbar>div{
            width: 1150px;
            height: 100px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        #location{
            display: flex;
            width: auto;
            height: 70%;
           cursor: pointer;
            align-items: center;
            font-size: 12px;
            font-family: Arial, Helvetica, sans-serif;
        }
        #searchBar{
            border: 1px solid rgb(213, 213, 213);
            width:480px;
            height: 40px;
            background-color: #f8f8f8;
            border-radius: 5px;
            display: flex;
            align-items: center;
            padding: 7px 16px;

        }
        #searchBar>input{
            width: 95%;
            height: 100%;
            background-color: #f8f8f8;
            font-size: 20px;
            border-color: transparent;
            /* border: none; */
        }
        #searchBar>input[type=text]:focus {
             border: 0px solid #555;
        }
           
        
        
       


        .signin{
            display: flex;
            height: 100%;
            width: 140px;
            align-items: center;
            cursor: pointer;
        }
        .signin>div{
            border: 1px solid rgb(166, 160, 160);
            width: 40px;
            height: 40px;
            margin:auto 10px;
            border-radius: 100%;
        }
        .signin>div>img{
           padding: 5px;
           width: 30px;
        }
        #cartdiv{
            border-color: transparent;
        }
        /* #demo{
            width: 100%;
            height: 5005px;
        } */

  /* pop pop window for sign up ams sign in */  /* pop pop window for sign up ams sign in */  /* pop pop window for sign up ams sign in */
        .signin-slide{
            position: fixed;
            /* add js */
            right: -500px;    
            /* right: 0px; */
             /* add js */
            top: 0px;
            height: 100%;
            width: 430px;
            background-image: url(https://i.postimg.cc/mr2myCMH/Capture.png);
            background-size: cover;  
            display: flex;
            flex-direction: column-reverse;
            /* box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; */
            box-shadow: 0 0 35px;
            justify-content: space-between;
            transition: all ease 0.5s;
        }
        .signin-slide #signindiv{
            background-color: white;
            margin: auto auto 0px auto;
            width:90%;
            height: 410px;
            border-radius: 5px 5px 0px 0px;
            padding: 10px;
            
        }
        .signin-slide #signindiv>form>input{
            width: 90%;
            height: 20px;
            margin: 15px auto 10px auto;
            font-size: 20px;
            padding: 17px;
           border-color:gray;
            border-width: 0px 0px 1px 0px;
        }
        .signin-slide a{
            color: rgb(255, 42, 78);
            text-decoration: none;
            cursor: pointer;
        }
        .signin-slide p{
            text-align: center;
        }
        .signin-slide #signindiv>form>button{
            width: 100%;
            height: 50px;
            margin-bottom: 15px;
            margin-top: 15px;
            font-size: 20px;
            font-weight: bold;
            color: white;
            background-color: rgb(255, 42, 78);
            border-color: transparent;
            border-radius: 5px;
            cursor: pointer;
            
        }
        .signin-slide .close-logpop{
            position: absolute;
            top: 6px;
            right: 19px;
            /* right: -200px; */
            font-size: 20px;
            color: white;
            cursor: pointer;
             transition: all ease 0.5s;
        }
        /* pop pop window for sign up ams sign in */  /* pop pop window for sign up ams sign in */  /* pop pop window for sign up ams sign in */
        .signup-slide{
            position: fixed;
            /* add js */
            right: -500px;    
            /* right: 0px; */
             /* add js */
            top: 0px;
            height: 100%;
            width: 430px;
            background-image: url(https://i.postimg.cc/mr2myCMH/Capture.png);
            background-size: cover;  
            display: flex;
            flex-direction: column-reverse;
            /* box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; */
            box-shadow: 0 0 35px;
            justify-content: space-between;
            transition: all ease 0.5s;
        }
        .signup-slide #signupdiv{
            background-color: white;
            margin: auto auto 0px auto;
            width:90%;
            height: 410px;
            border-radius: 5px 5px 0px 0px;
            padding: 10px;
            
        }
        .signup-slide #signupdiv>form>input{
            width: 90%;
            height: 20px;
            margin: 15px auto 10px auto;
            font-size: 20px;
            padding: 17px;
           border-color:gray;
            border-width: 0px 0px 1px 0px;


        }
        .signup-slide a{
            color: rgb(255, 42, 78);
            text-decoration: none;
            cursor: pointer;
        }
        .signup-slide p{
            text-align: center;
        }
        .signup-slide #signupdiv>form>button{
            width: 100%;
            height: 50px;
            margin-bottom: 15px;
            margin-top: 15px;
            font-size: 20px;
            font-weight: bold;
            color: white;
            background-color: rgb(255, 42, 78);
            border-color: transparent;
            border-radius: 5px;
            cursor: pointer;
            
        }
        .signup-slide .close-signpop{
            position: absolute;
            top: 6px;
            right: 19px;
            /* right: -200px; */
            font-size: 20px;
            color: white;
            cursor: pointer;
             transition: all ease 0.5s;
        }




        /* loginends */

        /* /////////////////////////////////////////////////////////////// */
/* cart start */
/* right: 0px; */
             /* add js */
/* .signin-slide{
            position: fixed;
            right: -500px;  
            top: 0px;
            height: 100%;
            width: 430px;
            background-image: url(https://i.postimg.cc/mr2myCMH/Capture.png);
            background-size: cover;  
            display: flex;
            flex-direction: column-reverse;
          
            box-shadow: 0 0 35px;
            justify-content: space-between;
            transition: all ease 0.5s;
        } */
          
        .close-cart{
            color: black;
            right: 450px;
            /* right: -500px; */
            top: 30px;
            padding-left: 370px;
            padding-top: 7px;
            font-size: 30px;
            cursor: pointer;
        }




.slideCart {
           box-shadow: 0 0 35px;


            border: 1px solid gray;
            width: 430px;
            position: fixed;
            height: 100%;
            top: 0px;
            /* right: 0px; */
            right: -500px;
            padding: 15px;
            font-family: Arial, Helvetica, sans-serif;
            overflow: scroll;
            margin-bottom: 200px;
            background-color: white;
            transition: all ease 0.5s;
            
        }

        #main>h2 {
            font-size: large;
        }

        #deliveryCharge>h4 {
            background-color: green;
            width: 100%;
            padding: 7px;
            font-size: small;
            text-align: center;
            color: white
        }

        #discountText>p {
            border: 1px solid green;

            color: green;
            text-align: center;
            padding: 5px;
            margin: 0px 5px;
        }

        .mainAttached {
            /* border: 1px solid gray; */

            margin: 0px 5px 0px 5px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        }

        .firstLine {
            /* border: 1px solid green; */
            /* height: 50px; */

            display: flex;
            /* column-gap: 20px; */
            align-items: center;
            /* margin-top: -15px; */

        }

        .sr_no {

            background-color: #e3e3e3;
            color: #6D6E71;
            font: 15px;
            margin: 0px 10px 0px 0px;
            padding: 4px 7px;
        }

        .nameBox {
           
            color: #000000;
            font: 15px;
            
           


        }

        .nameBox>h4{
            /* border: 1px solid gray; */
            width: 250px;
            
        }

        .deleteRow {
            /* border: 1px solid magenta; */
            margin-left: 60px;
            align-items: center;
            font-size: 18px;
            color: #6D6E71;
            font-family: Arial, Helvetica, sans-serif;
            cursor: pointer;
        }

        .secondLine {
            /* border: 1px solid green; */
            display: flex;
            align-items: center;

        }

        .item_weight {
            color: #6D6E71;
            border-radius: 5px;
            font: 8px;
            margin: 0px 0px 0px 32px;
            padding: 3px 5px;
            border: 1px solid #6D6E71;
        
            width: fit-content;
        }

        .item_price {
            color: #D11243;
            font: 16px;
            font-weight: bold;
            margin: 3px 0px 0px -20px;
        }

        .counter {
            /* border: 1px solid rebeccapurple; */
            /* margin-left: 180px; */
        }

        .minus_one {
            background-color: #f2f2f2;
            color: #D11243;
            font-size: 22px;
            padding: 0px 8px;
            cursor: pointer;

        }

        .item_qty {
            color: #000000DE;
            font: 13px;
            padding: 15px;
        }

        .plus_one {
            background-color: #f2f2f2;
            color: #D11243;
            font-size: 22px;
            padding: 0px 8px;
            cursor: pointer;
        }

        .secondLine {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1 auto;
        }

        .hr_line {
            margin-top: 12px;
        }

        #design {
            /* border: 1px solid green; */
            padding: 12px;
            display: flex;
            justify-content: space-between;
            background-color: #ffdc93;
            margin-bottom: 40px;
        }

        #design>img {
            width: auto;
            height: 30px;

        }

        #design>button {
            border: transparent;
            color: #D11243;
        }

        /* #BillDetail {
            border: 1px gray dotted;
        } */
        #bill {
            border: 1px dotted black;
            height: 210px;

        }

        #bill>ul {
            padding: 1%;
            color: gray;
        }

        #last {
            background-color: white;
            width: 430px;
            margin-right: 25px;
           

        }

        #last {
            /* position: fixed; */
            /* height: auto; */
            width: 420px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            /* border: 1px solid red; */
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            position: fixed;
            bottom: 0px;
            /* right: 0px; */
            right: -500px;
            /* margin-left: 15px; */
            margin-bottom: 2px;
            transition: all ease 0.5s;
            

        }

        #last>#secondHalf>button {
            padding: 18px 25px;
            font-size: 17px;
            color: white;
            background-color: #d11243;
            border-radius: 10px;
            cursor: pointer;
            border: 0px;

        }

        .popup {
            cursor: pointer;
        }

        #firstHalf>h2 {
            /* font-size: 12px; */
            border: 1px solid green;
            display: flex;
            font-size: large;
            margin: 10px 10px 0px 30px;
        }
        #bill>ul{
            /* border: 1px solid grey; */
            display: flex;
            justify-content:space-between;
            font-size: 12px;
        
        }
        #bill>ul>span{
             /* border: 1px solid silver; */
             font-size: medium;
             padding-right: 10px;
           
        }
        #padit{
            padding: 0px 10px 70px 10px;

        }
        #subtotal{
            padding-right: 8px;
        }
/* cartend */
</style>



</head>
<body>
     <!-- /* nav+login */       /* nav+login */       /* nav+login */        /* nav+login */ -->
     <div id="topnav">
        <div>
            <div class="topnavx">
                <p>Why Licious?</p>
                <div class="pointer"></div>
                <p>Download App</p>
                <img src="https://www.licious.in/img/rebranding/ios_app_icon.svg" alt="" >
                <img src="https://www.licious.in/img/rebranding/android_app_icon.svg" alt="">
            </div>
            <div>
                 <select name="" id="contactuso">
                    <option value="">Contact Us</option>
                    <option value="">1800-4190-786</option>
                    <option value="">talktous@licious.com</option>
                 </select>
                 <div class="pointer"></div>
                 <p>Careers @Licious</p>
                 <div class="pointer"></div>
                 <p>About Us</p>
                 <div class="pointer"></div>
                 <p>FSSC 22000 Certification</p>
            </div>
        </div>
    </div>
    
    <div id="navbar">
        <div>
            <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="">
            <div id="location">
                <img src="https://www.licious.in/img/rebranding/location_icon.svg" alt="">
                <div>
                    <p>BENGALURU</p>
                    <b>Bengaluru, Karnatak...  ﹀</b>
                </div>
                
            </div>
            <div id="searchBar">
                <input type="text" placeholder="Search for any delicious product" onclick="borderxxx" id="xxxin">
                <img src="https://www.licious.in/img/rebranding/search_icon.svg" alt="">
            </div>


            <div class="signin">
                <div>
                    <img src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="">
                    
                </div>
        
                    <p class="font" id="person">Login</p>
                
                
            </div>

            <div class="signin" id="cartbtnx">
                <div id="cartdiv">
                    <img src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="">
                    
                </div>
                <p class="font">Cart</p>
            </div>
        </div>
    </div>
    <!-- <div id="demo">
    </div> -->

<!-- ajay html -->
<div id="cata">
    <span class="cataspan">
        <a style="text-decoration:none" href="Today's Dealspage.html">
            <img class="cataimg"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/59724ce1-1f3d-f1f4-c688-c05a0005c8de/original/Circle@3x-16.png?format=webp"
                alt="">
            <br>
            <span class="catatxt">
                <p>Today's Deals</p>
            </span>

        </a>
    </span>
    <span class="cataspan">
        <a style="text-decoration:none" href="Chickenpage.html">
            <img class="cataimg"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c777a59e-f2f7-dd37-9ba0-7f385aed3eb3/original/Circle@3x.png?format=webp"
                alt="">
            <br>
            <span class="catatxt">
                <p>Chicken </p>
            </span>
        </a>
    </span>
    <span class="cataspan">
        <a style="text-decoration:none" href="Fish & Seafoodpage.html">
            <img class="cataimg"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e13f894d-d51e-beea-4ef5-aab1a193d373/original/Circle@3x-13.png?format=webp"
                alt="">
            <br><span class="catatxt">
                <p> Fish & Seafood </p>
            </span>

        </a>
    </span>
    <span class="cataspan">
        <a style="text-decoration:none" href="Muttonpage.html">
            <img class="cataimg"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4d9c0c72-c070-dd56-4a2e-9fbfe8230f42/original/Circle@3x-1.png?format=webp"
                alt="">
            <br><span class="catatxt">
                <p> Mutton </p>
            </span>
        </a>
    </span>

    <span class="cataspan">
        <a style="text-decoration:none" href="Ready to Cookpage.html">
            <img class="cataimg"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/450e3217-59ac-8145-3bee-296e729f03bf/original/Circle@3x-17.png?format=webp"
                alt="">
            <br><span class="catatxt">
                <p> Ready to Cook </p>
            </span>
        </a>
    </span>
    <span class="cataspan">
        <a style="text-decoration:none" href="Prawnspage.html">
            <img class="cataimg"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f7ef9035-9baa-b9b5-d56d-97059ffe6c39/original/Circle@3x-18.png?format=webp"
                alt="">
            <br><span class="catatxt">
                <p> Prawns</p>
            </span>
        </a>
    </span>
    <span class="cataspan">
        <a style="text-decoration:none" href="spreadpage.html">
            <img class="cataimg"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7b500ec8-8001-436b-74ca-430fd4e2ff0b/original/Circle@3x-14.png?format=webp"
                alt="">
            <br><span class="catatxt">
                <p> Spreads</p>
            </span>
        </a>
    </span>
    <span class="cataspan">
        <a style="text-decoration:none" href="Eggspage.html">
            <img class="cataimg"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/27cf80b9-2a8f-d70d-7695-8142c85e5bcb/original/Circle@3x-2.png?format=webp"
                alt="">
            <br><span class="catatxt">
                <p> Eggs </p>
            </span>
        </a>
    </span>
    <span class="cataspan">
        <a style="text-decoration:none" href="Kebabs & Tandoorpage.html">
            <img class="cataimg"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c7cde9d8-4e31-8ea5-79a4-cce48c7ed109/original/Circle@3x-15.png?format=webp"
                alt="">
            <br><span class="catatxt">
                <p> Kebabs & Tandoor</p>
            </span>
        </a>
    </span>
    <span class="cataspan">
        <a style="text-decoration:none" href="Combospage.html">
            <img class="cataimg"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3130cc9b-71e5-ff33-d413-9fcda531afac/original/Circle@3x-20.png?format=webp"
                alt="">
            <br><span class="catatxt">
                <p>Combos</p>
            </span>
        </a>
    </span>
    <span class="cataspan">
        <a style="text-decoration:none" href="BestSeller.html">
            <img class="cataimg"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/90882875-962a-8e96-6c45-f7d6492abd3b/original/Circle@3x-16.png?format=webp"
                alt="">
            <br><span class="catatxt">
                <p>Bestsellers </p>
            </span>
        </a>
    </span>


</div>

<div class="cointainer">

<div class="static">
  <div class="topstatic">
    <span> <a href="">Home</a></span> <span> > </span><span>Chicken</span>
</div>
<div class="bottomstatic">
  <span> <h1>Chicken</h1></span>
    <span>
      <img src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_60828eb6451d0" alt="">
      <span>Ready To Eat</span>
      <span>|</span>
    </span>

    <span>
      <img src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_60828f0a9667d" alt="">
      <span>Real Meat Chunks</span>
      <span>|</span>
    </span>

    <span>
      <img src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_6082903259d91" alt="">
      <span>No Artificial Preservatives</span>
      <span>|</span>
    </span>

    <span>
      <img src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_6082906db5f90" alt="">
      <span>Delicious Flavours</span>
    </span>

    
  </div>
  
  
 </div>


     <div class="filterpart" >
       <!-- append filterpart here -->
       <span><button class="Delivery">Express Delivery</button>
        <!-- <select id="Delivery">  
                <option value="Express Delivery">Express Delivery</option>
            </select> --></span>
       <span> <select class="ChickenType">
        <option >Chicken Type </option>
        <option value="Broiler">Broiler</option>
        <option value="Country">Country</option>
        <option value="Kadaknath">Kadaknath</option>
      </select></span>

      <span> <select class="BoneType">
        <option >Bone Type</option>
        <option value="Bone-in">Bone-in</option>
        <option value="Boneless">Boneless</option>
      
      </select></span>

      <span> <select class="CutType ">
        <option >Cut Type </option>
        <option value="Whole & Curry Cut">Whole & Curry Cut</option>
        <option value="Wings & Offals">Wings & Offals</option>
        <option value="Thigh & Drumstick">Thigh & Drumstick</option>
        <option value="Mince">Mince</option>
        <option value="Cubes & Strips">Cubes & Strips</option>
        <option value="Whole Leg & Lollipop">Whole Leg & Lollipop</option>
      </select></span>

      <span> <select class="BestSuitedFor">
        <option >Best Suited For</option>
        <option value="Bake">Bake</option>
        <option value="Grill">Grill</option>
        <option value="Deep Fry">Deep Fry</option>
        <option value="Roast">Roast</option>
        <option value="Stuffing">Stuffing</option>
        <option value="Curry">Curry</option>
        <option value="Biryani">Biryani</option>
        <option value="Pan Fry">Pan Fry</option>
      </select></span>

       <span> <select class="pack">
        <option >Pack Size </option>
        <option value="Mini">Mini</option>
        <option value="Combo">Combo</option>
        <option value="Regular">Regular</option>
        <option value="Large Pack">Large Pack</option>
        
      </select></span>

       
      
      
   
     </div>



 <div class="card">
    <!-- <a id="card-a"> -->

    <!-- </a> -->

    <!-- append all products here -->
  </div>

</div>






<!--other start  -->
    <!-- signup-slide in-->
    <div class="signin-slide">


        <div id="signindiv">
            <form action="" id="signinin">
                <h2>Sign In</h2>

                <input type="email" placeholder="Enter user id" id="inmail" >
                <br>
                <input type="password" placeholder="Enter password" id="inpassword">
            
                <br>
                <button >Sign in</button>
                <p>Don't have an account.<a id="signupage">Sign Up</a>.</p>
                <p>By signing in you agree to our <a href="tandc.html">Term and conditions</a>.</p>

            </form>
        </div>
        <div class="close-logpop">
            ╳
        </div>
    </div>
    <!-- signup-slide up-->
    <div class="signup-slide">


        <div id="signupdiv">
            <form action="" id="signuppp">
                <h2>Sign up</h2>
                <input type="text" placeholder="Enter first name" id="sname">
                <br>
                <input type="text" placeholder="Enter last name" id="galtisemistake">
                <br>

                <input type="text" placeholder="Enter email" id="semail">
                <br>
                <input type="password" placeholder="Enter password" id="spassword">
            
                <br>
                <button>Sign up</button>
                <p>Already have an account.<a id="signuptosignin">Sign in</a>.</p>
            </form>
        </div>
        <div class="close-signpop">
            ╳
        </div>
    </div>


    <!-- login ends -->
    <!-- ///////////////////////////cart /////////////////////////////////-->
   
    <div class="slideCart"  id="surajcart">
        <div id="main">
            <div class="close-cart" id="cartclose">
                ╳
            </div>


            <br>
            <h2>Order Summary</h2>
            <div id="deliveryCharge">
                <h4> Your cart value is less than ₹399 & delivery charge applies </h4>
            </div>
            <br>
            <div id="discountText">
                <p>Congratulations!, You've saved ₹<span id="gotDiscounted">0</span></p>
            </div>
            <!-- **********appended from here********** -->
            <!-- <div class="mainAttached">
                       <div class="firstLine" >
                              <span>1</span>
                               <div class="nameBox">
                                   <h4>item_name</h4>
                               </div>
                               <span>X</span>
                        </div>

                        <div class="secondLine">
                            <span class="item_weight"> weight </span>
                            <span class="item_price"> price </span>
                            <div class="counter">
                                  <span class="minus_one">-</span>
                                  <span class="item_qty">1</span>
                                  <span class="plus_one">+</span>  
                                  <hr/>
                            </div>

                        </div>
            </div> -->

        </div>
        <br>
        <p>Stop paying delivery charges. Join Meatopia today!</p>
        <br>
        <div id="design">
            <img src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg" alt="Meatopia">
            <button class="popup" onclick="myFunction()">
                <span class="popuptext" id="myPopup"></span>JOIN NOW ></button>
        </div>
        <h4>Don't miss out on these Meaty Treats!</h4>
        <div id="treats">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div id="cartBill">
            <div id="bill">
                <div style="font-size:14px;">BILL DETAILS</div>
                
                <ul>Subtotal <span id="subtotal">0</span></ul>
                <ul>Delivery Charge <span id="extraCharge">0</span></ul>
                <ul>Discount <span>0</span></ul>
                <hr>
                <h3 id="padit">Total <span style="margin-left: 280px; color: #d11243;">₹<span>0</span></span></h3>
                <!-- <h4 >Total <span style="margin-left: 280px;">₹<span  id="toPay">0</span></span></h4> -->
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                
            </div>

        </div>
        <div id="last">
            <div id="firstHalf">
                <h2>Total:₹ <span></span><span style="margin-left:8px;"><img src="https://www.licious.in/img/rebranding/info-icon.svg"
                            alt="logo"></span></h2>
            </div>
            <div id="secondHalf">
                <button>Proceed to checkout</button>
            </div>

        </div>

    </div>



















    <div id="footContainer">
        <!-- <hr> -->
        <div id="foottop">
            <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="">
        </div>
    
        <div id="seconddivision">
            <div id="uselink">
                <div>
                    <p class="hhhh">USEFUL LINKS
                    </p>
                    <p>Why Licious?</p>
                    <p>Refer & Earn</p>
                    <p>Licious Cash & Cash+</p>
                    <p>Careers</p>
                    <p>BLOG</p>
                    <p>Campaign</p>
                    <p>Bug Bounty Guidelines</p>
                    <p>About Us</p>
                    <p>FSSC 22000 Certification</p>
                    <p>FSSAI Licenses</p>
                    <p>Sitemap</p>
                  
                </div>
                <div>
                    <p class="hhhh">EXPERIENCE LICIOUS APP ON MOBILE</p>
                    <br>
                    <img src="https://www.licious.in/img/rebranding/app-store-new.svg" alt="">
                    <img src="https://www.licious.in/img/rebranding/play-store-new.png" alt="">
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    
                    <span id="socialcatch">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <p class="hhhh">KEEP IN TOUCH  </p>
                        &nbsp;
                        &nbsp;
                            
                            
                            <img src="https://www.licious.in/img/rebranding/insta_color.png" alt="">
                            &nbsp;
                            &nbsp;
                            <img src="https://www.licious.in/img/rebranding/fb_color.png" alt="">
                            &nbsp;
                            &nbsp;
                            <img src="https://www.licious.in/img/rebranding/twitter_color.png" alt="">
                        
                    </span>
    
                </div>
            </div>
            <div id="connt">
                <div>
                    <p class="hhhh">CONTACT US</p>
                    <p>Call: 1800-4190-786</p>
                    <p>Talktous@licious.com</p>
                    <br><br>
    
                    <p class="hhhh">REGISTERED OFFICE ADDRESS:</p>
                    <p>House of Licious, Zed Pearl, No 12,</p>
                    <p>Domlur Layout</p>
                    <p>Bangalore, Karnataka - 560071</p>
                
                </div>
    
                <div>
                    <p>T&C</p>
                    <p>FAQ</p>
                    <p>Privacy Policy</p>
                    <p class="hhhh">HAVE SECURITY CONCERN?</p>
                    <p>Mail us to:</p>
                    <p>security@licious.com</p>
                </div>
    
                <div>
                    <img src="https://www.licious.in/img/rebranding/3-dsecure.png" alt="">
                </div>
            </div>
    
        </div>
       <div class="devider">
        <p class="hhhh">CITIES WE SERVE</p>
        <hr>
       </div>
       <p id="city">Bengaluru &nbsp; | &nbsp;NCR &nbsp; | &nbsp; Hyderabad  &nbsp; | &nbsp;Chandigarh &nbsp; | &nbsp; Panchkula &nbsp; | &nbsp; Mohali &nbsp; | &nbsp; Mumbai &nbsp; | &nbsp; Pune  &nbsp; | &nbsp;Chennai  &nbsp; | &nbsp;Coimbatore  &nbsp; | &nbsp;Jaipur &nbsp; | &nbsp; Cochin  &nbsp; | &nbsp;Vijayawada &nbsp; | &nbsp; Visakhapatnam  &nbsp; | &nbsp;Pondicherry  &nbsp; | &nbsp;Kolkata  &nbsp; | &nbsp;Trichy &nbsp; | &nbsp; Lucknow &nbsp; | &nbsp; Kanpur  &nbsp; | &nbsp;Agra &nbsp; | &nbsp; Thrissur &nbsp; | &nbsp; Nagpur &nbsp; | &nbsp; Bhilai &nbsp; | &nbsp; Nashik &nbsp; | &nbsp; Palakkad</p>
          <br>
          <hr class="linefull">
          <br>
    
    
          <p class="hhhh">We will sell only the meat that we would eat ourselves.</p>
          <p>At Licious, we’re big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience.</p>
    
    
          <p class="hhhh">If it’s not fresh, we won’t sell it</p>
          <p>For meat to stay fresh and retain its natural juices, it needs to be stored at a temperature between 0° and 5°C. We maintain this temperature from the time we procure the product to cleaning, cutting and storing it, until it leaves for delivery. And even when it’s out for delivery, we keep it chilled right up to your doorstep.Did we mention that we’re obsessed?</p>
    
          <p class="hhhh">We will charge only for what you buy</p>
          <p>Doesn’t everyone do this? Not really. Most other places first weigh the meat, then cut up the pieces, and throw out the parts which aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you still pay based on the original weight even though what you finally get is 10% to 30% less</p>
    <br><br>
          <hr class="linefull">
          <div id="copyright">x
            <img src="" alt="">
            <div>
    
                <p class="hhhh">© &nbsp; 2022 &nbsp; Delightful Gourmet Pvt Ltd. All Rights Reserved.</p>
                <br>
                <p>Licious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep. Now you can buy meat online anytime at your convenience. Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish, Prawns, Crabs), Marinades & Cold Cuts. All our products are completely natural and healthy. Once you've experienced Licious, you'll never go back to the old way of buying meat and seafood.</p>
               
            
            
            </div>
    
          </div>
    
    </div>

    
</body>
<!-- <script src="navbar.js"> -->
    <script>


let data = [
{
  ProductID:"chicken-101",
  image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/58b7f670-6e56-a198-73a6-039b07182868/original/ChickenLC.jpg?format=webp",
  Title:"Chicken Curry Cut (Small Pcs)",
  Details:"Small pieces of bone-in & boneless chicken for curries",
  Netwt:"500gms",
  Gross:"526gms",
  MRP:"170",

  Delivery:"Normal Delivery",
  ChickenType:"Kadaknath",
  BoneType:"Bone-in",
  CutType:"Breast",
  BestSuitedFor:"Grill",
  PackSize:"Mini",

  productPageDetails:"With our Chicken Curry Cut on hand, making a delicious chicken curry has never been easier! Licious Chicken Curry Cut is a mix of bone-in, small pieces of breast, wing (without the tip), leg and thigh meat, enough to feed a small to medium-sized family. This Small pack consists of 13-16 pieces of smaller cuts of chicken, for when you are making a smaller portion of curry or looking to reduce cooking time. Smaller pieces of chicken cook faster because of the higher surface-to-volume ratio.These pieces remain juicy and turn tender once cooked. Make Andhra Style Chicken Curry, Dhaba Style Chicken Curry, Mughlai Chicken Curry and more with Licious Chicken Curry Cut (Small).  Licious chickens are raised on bio-secure farms and are antibiotic-residue free.",
  Serves:"4",
  image1:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_5785b9065d7e1/3/prod_display_image/1584770437.9208--2020-03-2111:30:37--738?format=webp"
},

{
    ProductID:"chicken-102",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/58b7f670-6e56-a198-73a6-039b07182868/original/ChickenLC.jpg?format=webp",
    Title:"Chicken Curry Cut(Large Pcs)",
    Details:"Half a chicken cut to chunky pieces including one leg,a..",
    Netwt:"500gms",
    Gross:"526gms",
    MRP:"189",
  
    Delivery:"Normal Delivery",
    ChickenType:"Broiler",
    BoneType:"Bone-in",
    CutType:"Mince",
    BestSuitedFor:"Grill",
    PackSize:"Regular",
  
    productPageDetails:"With our Chicken Curry Cut on hand, making a delicious chicken curry has never been easier! Licious Chicken Curry Cut is a mix of bone-in, small pieces of breast, wing (without the tip), leg and thigh meat, enough to feed a small to medium-sized family. This Small pack consists of 13-16 pieces of smaller cuts of chicken, for when you are making a smaller portion of curry or looking to reduce cooking time. Smaller pieces of chicken cook faster because of the higher surface-to-volume ratio.These pieces remain juicy and turn tender once cooked. Make Andhra Style Chicken Curry, Dhaba Style Chicken Curry, Mughlai Chicken Curry and more with Licious Chicken Curry Cut (Small).  Licious chickens are raised on bio-secure farms and are antibiotic-residue free.",
    Serves:"8",
    image1:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/58b7f670-6e56-a198-73a6-039b07182868/original/ChickenLC.jpg?format=webp"
},

{
    ProductID:"chicken-103",
    image:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_5785b9065d7e1/3/prod_display_image/1584770437.9208--2020-03-2111:30:37--738?format=webp",
    Title:"Chicken Breast-Boneless",
    Details:"Tender,boneless fillets of chicken meat cut from the bre...",
    Netwt:"400gms",
    Gross:"500gms",
    MRP:"239",
  
    Delivery:"Express Delivery",
    ChickenType:"Country",
    BoneType:"Boneless",
    CutType:"Mince",
    BestSuitedFor:"Roast",
    PackSize:"Mini",
  
    productPageDetails:"Chicken Breast is one of the meatier cuts of a Chicken, which comes from the breast-bone of the bird. This cut is skinless and has a supple texture.A good source of vitamins and minerals, Chicken Breast, is also a great choice for a lean protein diet.",
    Serves:"4",
    image1:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_5785b9065d7e1/3/prod_display_image/1584770437.9208--2020-03-2111:30:37--738?format=webp"
},

{
    ProductID:"chicken-104",
    image:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_c61k6uqaf5h/3/prod_display_image/1636891873.7065--2021-11-1417:41:13--1818?format=webp",
    Title:"Afghani Murgh Seekh Kebab",
    Details:"The classic chicken seekh kebab,marinated in tradition...",
    Netwt:"400gms",
    Gross:"400gms",
    MRP:"249",
  
    Delivery:"Express Delivery",
    ChickenType:"Country",
    BoneType:"Boneless",
    CutType:"Breast",
    BestSuitedFor:"Grill",
    PackSize:"Regular",
  
    productPageDetails:"Marinated in hot chilli seasoning, the wings are then coated in batter & covered in panko bread crumbs. This means that all you have to do is to deep-fry these wings & it's ready within 8 minutes! Have the crispy, juicy wings with a squeeze of lime or paired with your favourite condiment.",
    Serves:"2-3",
    image1:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_c61k6uqaf5h/3/prod_display_image/1636891873.7065--2021-11-1417:41:13--1818?format=webp"
},

{
    ProductID:"chicken-105",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ca584fac-43d3-95d4-9aad-77e9b8912bcd/original/Crispy-Chicken-Wings-Tag_(1).jpg?format=webp",
    Title:"Crispy Chicken Wings | Ready To Cook",
    Details:"Chicken wings marinated in spices & coated in panko cru...",
    Netwt:"225gms",
    Gross:"270gms",
    MRP:"99",
  
    Delivery:"Express Delivery",
    ChickenType:"Country",
    BoneType:"Boneless",
    CutType:"Mince",
    BestSuitedFor:"Grill",
    PackSize:"Regular",
  
    productPageDetails:"Craving crispy, juicy wings but don't have the time to make them from scratch? Licious Crispy Chicken Wings are what you need!",
    Serves:"2-3",
    image1:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/50427a48-1e20-5fed-fc1e-050349afcb52/original/Crispy-Chicken-Wings-Tag_(1).jpg?format=webp"
},

{
    ProductID:"chicken-106",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8b89c688-d56c-f9ce-e3a0-d01a4dc01869/original/Chicken_MiniBites_Boneless_Hero_Shot.jpg?format=webp",
    Title:"Chicken Mini Bites-Breast Cut",
    Details:"",
    Netwt:"250gms",
    Gross:"350gms",
    MRP:"165",
  
    Delivery:"Normal Delivery",
    ChickenType:"Broiler",
    BoneType:"Boneless",
    CutType:"Wings",
    BestSuitedFor:"Grill",
    PackSize:"Combo",
  
    productPageDetails:"The Chicken Mini Bites from Licious are finely cut, boneless, bite-sized pieces of chicken. These tender, juicy mini bites of chicken are obtained from the breast portion. Rich in proteins, vitamin B6, and minerals, these mini bites are a great way to up your nutrient intake.",
    Serves:"4",
    image1:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8b89c688-d56c-f9ce-e3a0-d01a4dc01869/original/Chicken_MiniBites_Boneless_Hero_Shot.jpg?format=webp"
},

{
    ProductID:"chicken-107",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/041fd1e0-80fa-2cf1-387e-5c13b7310def/original/HeroShot.jpg?format=webp",
    Title:"Chicken Drumstick",
    Details:"Bone-in,juicy meat from the lower leg with a unique flav...",
    Netwt:"450gms",
    Gross:"600gms",
    MRP:"269",
  
    Delivery:"Normal Delivery",
    ChickenType:"Broiler",
    BoneType:"Bone-in",
    CutType:"Mince",
    BestSuitedFor:"Roast",
    PackSize:"Mini",
  
    productPageDetails:"A mix of dark and white meat, our large Chicken Curry Cut pieces include one leg, one wing without tip, and one breast quarter with backbone. Obtained from pasture-raised healthy chickens, the meat has a rich, juicy flavour with a tender, smooth and moderate-firm texture. ",
    Serves:"4",
    image1:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/041fd1e0-80fa-2cf1-387e-5c13b7310def/original/HeroShot.jpg?format=webp"
},
  
{
    ProductID:"chicken-108",
    image:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ffojtznsds8/3/prod_display_image/1636891440.6105--2021-11-1417:34:00--1818?format=webp",
    Title:"Chicken Boneless-Cubes",
    Details:"Skinless & boneless Cut & cleaned",
    Netwt:"450gms",
    Gross:"690gms",
    MRP:"220",
  
    Delivery:"Normal Delivery",
    ChickenType:"Broiler",
    BoneType:"Boneless",
    CutType:"Cubes & Strips",
    BestSuitedFor:"Grill",
    PackSize:"Combo",
  
    productPageDetails:"Licious Chicken Tikka Cut is a mix of skinless & boneless leg & breast pieces. These pieces turn juicy & tender when cooked which makes them ideal for grilling or pan-roasting/frying. Marinate them in a mix of aromatic spices and grill them to make a perfect, finger-licking chicken tikka.",
    Serves:"4",
    image1:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ffojtznsds8/3/prod_display_image/1636891440.6105--2021-11-1417:34:00--1818?format=webp"
},

{
    ProductID:"chicken-109",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/5f58bbca-0809-022c-9f87-9cef97627a5e/original/1618587644.jpg?format=webp",
    Title:"Chicken Breast Fillet- Thinly Sliced",
    Details:"Moist tender chicken best for steaks, and BBQ chicken.",
    Netwt:"450gms",
    Gross:"1303gms",
    MRP:"231",
  
    Delivery:"Express Delivery",
    ChickenType:"Broiler",
    BoneType:"Boneless",
    CutType:"Breast",
    BestSuitedFor:"Roast",
    PackSize:"Large Pack",
  
    productPageDetails:"Chicken Breast is one of the meatier cuts of a chicken, which comes from the breast-bone of the bird. This fillet cut is skinless and thinly sliced for more even cooking. A good source of vitamins and minerals, Chicken Breast, is also a great choice for a lean protein diet. ",
    Serves:"2-3",
    image1:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/5f58bbca-0809-022c-9f87-9cef97627a5e/original/1618587644.jpg?format=webp"
},

{
    ProductID:"chicken-110",
    image:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_5jxjsbhief7/3/prod_display_image/1622911758.7296--2021-06-0522:19:18--738?format=webp",
    Title:"Chicken Leg-Whole with Thigh",
    Details:"Skinless and bone-in chicken thigh and drumstick with a...",
    Netwt:"400gms",
    Gross:"533gms",
    MRP:"265",
  
    Delivery:"Normal Delivery",
    ChickenType:"Country",
    BoneType:"Bone-in",
    CutType:"Thigh & Drumstick",
    BestSuitedFor:"Curry",
    PackSize:"Large Pack",
  
    productPageDetails:"Skinless and bone-in, Chicken Leg Whole from Licious consists of both, the thigh and drumstick. This cut of the chicken includes dark meat that is rich in flavour and has a moist texture. Packed with proteins, vitamins, and minerals, Chicken Leg can be an ideal cut for a wholesome meal.",
    Serves:"2",
    image1:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_5jxjsbhief7/3/prod_display_image/1622911758.7296--2021-06-0522:19:18--738?format=webp"
}

];
  
let productcontainer = document.querySelector(".card");
 
  
  
  let cartls = JSON.parse(localStorage.getItem("cartpage")) || [];
// console.log(cartls)

display(data);
  function display(data) {
        productcontainer.innerHTML = "";
 
        
        
        data.forEach(function (elem, index) {
            let main1 = document.createElement("div");
            main1.classList.add("mainbox");
            // create a tag
                                          let ipage = document.createElement("a");//
                                          
                                          ipage.addEventListener("click", function () {
                                            
                                          console.log("inside ipage");
                                           let insidepageobj = elem;
                                          
                                           
                                           localStorage.setItem("in-page-obj", JSON.stringify(insidepageobj));
                                           ipage.href = "productDetails.html";
                                        })
                                           

                                            //div-1.1
                                            let cardtop = document.createElement("div");
                                            cardtop.classList.add("otherclass");

                                              //img            
                                            let img = document.createElement("img");
                                            img.classList.add("topimg");
                                            img.src = elem.image;
                   
                                                //div
                                            let itemdetails = document.createElement("div");
                                            itemdetails.classList.add("carddetails");

                                            //div
                                            let detailstitle = document.createElement("div");

                                              //span            
                                            let detailstitlespan = document.createElement("span");
                                            detailstitlespan.classList.add("cardtitle");
                                            detailstitlespan.innerText = elem.Title;
                                            detailstitle.append(detailstitlespan);              

                                            //div  
                                            let detailsdesc = document.createElement("div");
                                            detailsdesc.classList.add("carddesc");
                                            detailsdesc.innerText = elem.Details;
                      
                                            //p            
                                            let itemweight = document.createElement("p");

                                             itemweight.classList.add("cardweight");

                                             //span           
                                             let itemnetweight = document.createElement("span");
                                             itemnetweight.innerText = "Net wt: " + elem.Netwt;

                                             //span           
                                             let itemgrossweight = document.createElement("span");
                                             itemgrossweight.innerText = "Gross: " + elem.Gross;
                                             itemweight.append(itemnetweight, itemgrossweight);           
                                             
                                             
                                             itemdetails.append(detailstitle, detailsdesc, itemweight);
                                             cardtop.append(img, itemdetails);
                                           

                                             ipage.append(cardtop)

                                            
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        
                                                let cartend = document.createElement("div");//
                                                cartend.classList.add("cardbottom");


                                                            //div           
                                                           let rateaction = document.createElement("div");//
                                                           rateaction.classList.add("cardaction");
                                                            //div           
                                                           let rateline = document.createElement("div");
                                                           rateline.classList.add("cardactionmain");
                                                           //span           
                                                           let rate = document.createElement("span");
                                                           rate.classList.add("rate");
                                                           let percent = elem.MRP * .8;
                                                           rate.innerText = "₹" + percent.toFixed(0);;
                                                           //span           
                                                           let ratelogo = document.createElement("span");
                                                           ratelogo.classList.add("ratelogo");
                                                           ratelogo.innerText = "MRP:" + " ";
                                                           //span           
                                                           let rateprice = document.createElement("span");
                                                           rateprice.classList.add("rateprice");
                                                           rateprice.innerText = " " + "  ₹" + elem.MRP;
                                                           //span           
                                                           let ratediscount = document.createElement("span");
                                                           ratediscount.classList.add("ratediscount");
                                                           ratediscount.innerText = "20% OFF";
                                                           rateline.append(rate, ratelogo, rateprice, ratediscount);
                                                        //    div            
                                                           let ratelinened = document.createElement("div");
                                                           ratelinened.classList.add("cardactionend");
                                               
                                               
                                               
                                               
                                                           let minus = document.createElement("div");
                                                           // minus.innerText="1";
                                               
                                                           let addtocart = document.createElement("button");
                                                           addtocart.classList.add("button");
                                                           addtocart.classList.add("buttoncart");
                                               
                                                           let plus = document.createElement("div");
                                                           // plus.innerText="1";
                                               
                                               
                                                           addtocart.innerText = "Add To Cart";
                                               
                                                           addtocart.addEventListener("click", function () {
                                                               // console.log("101-",elem.ProductID);
                                               
                                                               if (addtocartfunction(elem.ProductID) === true) {
                                                                   // console.log("4");
                                                                   alert("Product Added Successfully");
                                                                   elem["Quantity"] = 1;
                                                                   
                                               
                                                                   // addtocart.innerText=elem.Quantity
                                               
                                               
                                                                   cartls.push(elem);
                                                                   // console.log(elem);
                                                                   localStorage.setItem("cartpage", JSON.stringify(cartls));
                                                                   window.location.reload();
                                                               } else {
                                                                   // console.log("5");
                                                                   alert("Product Already In Cart");
                                                               }
                                               
                                                           })
                                               
                                               
                                               
                                                           ratelinened.append(minus, addtocart, plus);
                                                           rateaction.append(rateline, ratelinened);

                                                           let line1 = document.createElement("hr");
                                                           let endbotton=document.createElement("div");
                                                           endbotton.classList.add("endbotton1");
                                                           let imgdel = document.createElement("img");
                                                           imgdel.src = "https://www.licious.in/img/rebranding/express_delivery.svg";
                                                           let ipageendspan = document.createElement("span");
                                                           ipageendspan.classList.add("cardbottomspan");
                                                           ipageendspan.innerText = "   Today 6 PM - 9 PM";
                                                           endbotton.append(imgdel,ipageendspan)
                                                           cartend.append(rateaction,line1,endbotton);
                 
            
            
      main1.append(ipage,cartend);
            document.querySelector(".card").append(main1);



        })
    }

    let filterChickenType = document.querySelector(".ChickenType");
  let filterBoneType = document.querySelector(".BoneType");
  let filterCutType = document.querySelector(".CutType");
  let filterBestSuitedFor = document.querySelector(".BestSuitedFor");
  let filterdelivery = document.querySelector(".Delivery");
  let filterpack = document.querySelector(".pack");


  filterBestSuitedFor.addEventListener("change", function () {
    console.log("inside menu");

    let filtered = data.filter(function (element) {
      return element.BestSuitedFor === filterBestSuitedFor.value;
    })
    display(filtered);
  })

  
  filterCutType.addEventListener("change", function () {
    console.log("inside menu");

    let filtered = data.filter(function (element) {
      return element.CutType === filterCutType.value;
    })
    display(filtered);
  })


  filterBoneType.addEventListener("change", function () {
    console.log("inside menu");

    let filtered = data.filter(function (element) {
      return element.BoneType === filterBoneType.value;
    })
    display(filtered);
  })
  

  filterChickenType.addEventListener("change", function () {
    console.log("inside menu");

    let filtered = data.filter(function (element) {
      return element.ChickenType === filterChickenType.value;
    })
    display(filtered);
  })


  filterdelivery.addEventListener("click", function () {
    console.log("inside delivery");

    let filtereddev = data.filter(function (element) {
      return element.Delivery === filterdelivery.innerText;
    })
    display(filtereddev);
  })


  filterpack.addEventListener("change", function () {
    console.log("inside pack");

    let filtered = data.filter(function (element) {
      return element.PackSize === filterpack.value;
    })
    display(filtered);
  })

// function add to cart declare
function addtocartfunction(ProductID){
  // console.log(ProductID);
  let newcart=cartls.filter(function(elem){
    return elem.ProductID===ProductID;
  })
  // console.log("newcart.length",newcart.length);
  if(newcart.length>0){
    // console.log("2");
                return false;
             }else{
              // console.log("3");
                return true;
             }


}


 /////////////////////////////////////////////////////////////////////////////////////////////


// ////////////////////ajay end



let signinbtn =document.querySelector(".signin");
    signinbtn.addEventListener("click",loginSlide)
    function loginSlide(){
        document.querySelector("#person").textContent="Login"

        

    let slideup=document.querySelector(".signin-slide")
    slideup.style.right="0px"
    let slidein=document.querySelector(".signup-slide")
    slidein.style.right="-500px"
    let closelogin =document.querySelector(".close-logpop")
    closelogin.style.right="19px"
    closelogin.addEventListener("click",closelogpop)
    function closelogpop(){
        slideup.style.right="-500px"
    }
    }


    let  sighup =document.querySelector("#signupage");
    sighup.addEventListener("click",moveTosignup)

    let  signupin =document.querySelector("#signuptosignin");
    signupin.addEventListener("click",loginSlide)

    function moveTosignup(){
    let slideup=document.querySelector(".signup-slide")
    slideup.style.right="0px"
    let slidein=document.querySelector(".signin-slide")
    slidein.style.right="-500px"
    let closelogin =document.querySelector(".close-signpop")
    closelogin.style.right="19px"
    closelogin.addEventListener("click",closelogpop)
    function closelogpop(){
        slideup.style.right="-500px"
    }
    }
    let userdetails=JSON.parse(localStorage.getItem("user-detail"))||[];
    

    let formup=document.querySelector("#signuppp");

    formup.addEventListener("submit",signupuser)

    function signupuser(event){
        event.preventDefault()
        let inputdata={
            name:formup.sname.value,
            email:formup.semail.value,
            password:formup.spassword.value
        }
        if(checkdata(inputdata.email)==true){
            userdetails.push(inputdata);
            alert("Account created sucessfuly")
            localStorage.setItem("user-detail",JSON.stringify(userdetails))
            formup.sname.value=""
            formup.semail.value=""
            formup.spassword.value=""
            loginSlide()
        }else{
            alert("Already have an account")
        }   
    }
    function checkdata(id){
        let count=0;
        for(let i=0; i<userdetails.length; i++){
            if(userdetails[i].email===id){
                count++;
            }
        }
        if(count==0){
            return true;
        }else{
            return false;
        }
       
    }
    //login use

    let loginArrr=JSON.parse(localStorage.getItem("logindone"))||[];

if(loginArrr.length==0){
    document.querySelector("#person").textContent="Login";
}else{
    document.querySelector("#person").textContent=loginArrr[0].name+"\n"+"(logout)"
}

let formin=document.querySelector("#signinin");

formin.addEventListener("submit",makeLoginin)


function makeLoginin(event){
    event.preventDefault();
    
    let loginArrr= [];
    localStorage.setItem("logindone",JSON.stringify(loginArrr))
    
    count=0;
    for(let i=0; i<userdetails.length; i++){
        if(userdetails[i].email===formin.inmail.value && userdetails[i].password==formin.inpassword.value){
            loginArrr.push(userdetails[i]);
            count++;
            
            localStorage.setItem("logindone",JSON.stringify(loginArrr))
        }
    }  
    if(count==1){
        alert("Successfully Signin")
        formin.inmail.value=""
        formin.inpassword.value=""
        itscool(loginArrr);
        
    }else{
        alert("Wrong input data") 
    }
    let slidein=document.querySelector(".signin-slide")
    slidein.style.right="-500px"

}
function itscool(loginArrr){
    if(loginArrr.length==1){
        console.log(loginArrr[0].name)
        document.querySelector("#person").textContent=loginArrr[0].name+"\n"+"(logout)"
}
// window.location.reload();       
}
/////////////////////////////////////////////////////////////////////////cart//////////////////////

     let cartbtn =document.querySelector("#cartbtnx");

     cartbtn.addEventListener("click",openCart)

     function openCart(){
        let sjcart= document.querySelector("#surajcart");
        sjcart.style.right="0px"
        // window.location.reload();
        // last
        let totalp= document.querySelector("#last");
        totalp.style.right="0px"
     }

     let cartcut =document.querySelector("#cartclose");
    

     cartcut.addEventListener("click",cartcutt)

function cartcutt(){
   let sjcart= document.querySelector("#surajcart");
   sjcart.style.right="-500px"
   // window.location.reload();
   last
   let totalp= document.querySelector("#last");
   totalp.style.right="-500px"
}


////////////////////////////////////cart start js///////////////////////////

let cartLS = JSON.parse(localStorage.getItem("cartpage")) || []

    //let count = 0;
    
    let sum=0;
    text1="Congratulations, Your delivery charge is waived off!!!";
    text2="Your cart value is less than ₹399 & delivery charge applies";
    cartdisplay()


function cartdisplay(){
    // mainAttached.innerHTML = "";

    cartLS.forEach(function (elem, index) {
        // window.location.reload()
        sum=sum+(+elem.MRP)
        //console.log(sum)
             document.querySelector("#padit>span>span").innerText=sum;
            document.querySelector("#firstHalf>h2>span").innerText=sum;
        if(sum>399){
            document.querySelector("#extraCharge").innerText=0
            document.querySelector("#deliveryCharge>h4").innerText=text1;
            // document.querySelector("#padit>span>span").innerText=sum;
            // document.querySelector("#firstHalf>h2>span").innerText=sum;
        }else{
            document.querySelector("#extraCharge").innerText=39
            document.querySelector("#padit>span>span").innerText=sum+39;
            document.querySelector("#firstHalf>h2>span").innerText=sum+39;
            
        }
      
       
      


     

        document.querySelector("#subtotal").innerText=sum
        
        
       
        
        let firstDiv = document.createElement("div")
        firstDiv.setAttribute("class", "mainAttached")
        document.getElementById("main").append(firstDiv)

        let rowFirstDiv = document.createElement("div")
        rowFirstDiv.setAttribute("class", "firstLine")
        document.querySelector(".mainAttached").append(rowFirstDiv)

        let serial = document.createElement("span")
        let index1=index
        serial.innerText = ++index1;
        serial.setAttribute("class", "sr_no")
        rowFirstDiv.append(serial)

        let name = document.createElement("div")
        name.setAttribute("class", "nameBox")
        rowFirstDiv.append(name)

        let h4 = document.createElement("h4")
        h4.innerText = elem.Title;
        name.append(h4)

        let cancle = document.createElement("span")
        cancle.innerText = "X"
        cancle.setAttribute("class", "deleteRow")
        rowFirstDiv.append(cancle)


        //for deleting row
        cancle.addEventListener("click", function () {
       
        deleteOne(index,elem);

        })

        // 2nd line


        let rowSecondDiv = document.createElement("div")
        rowSecondDiv.setAttribute("class", "secondLine")
        document.querySelector(".mainAttached").append(rowSecondDiv)

        let wt = document.createElement("span")
        wt.setAttribute("class", "item_weight");
        wt.innerText = elem.Netwt || elem.Pieces
        rowSecondDiv.append(wt)

        let price = document.createElement("span")
        price.setAttribute("class", "item_price")
        price.innerText = "₹" + elem.MRP;
        rowSecondDiv.append(price)

        //for counter in 2nd line
        let counterDiv = document.createElement("div")
        counterDiv.setAttribute("class", "counter")
        rowSecondDiv.append(counterDiv)


        let quantity = document.createElement("span")
        quantity.innerText = 1;
        quantity.setAttribute("class", "item_qty")

        let minus = document.createElement("span")
        minus.innerText = "-"
        minus.setAttribute("class", "minus_one")
        
        minus.addEventListener("click", function () {
           quantity.innerText--;
           if(quantity.innerText==0){
            deleteOne(index,elem)
           }
           minusOne(elem,index)
        })

       
        

        let plus = document.createElement("span")
        plus.innerText = "+";
        plus.setAttribute("class", "plus_one")
        counterDiv.append(minus,quantity,plus)

        plus.addEventListener("click", function () {
            quantity.innerText++;
            addOne(elem,index)
        })

        let hor_line = document.createElement("hr")
        hor_line.setAttribute("class", "hr_line")
        document.querySelector(".mainAttached").append(hor_line)
        
    })


    
}

  

    //////////////




 function addOne(elem,index){
    sum=sum+ (+elem.MRP)
    let disc=sum*0.1;
    document.querySelector("#gotDiscounted").innerText=disc
    document.querySelector("#subtotal").innerText=sum;
    document.querySelector("#padit>span>span").innerText=sum;
    document.querySelector("#firstHalf>h2>span").innerText=sum;
    
    if(sum>399){
        document.querySelector("#extraCharge").innerText=0
        document.querySelector("#deliveryCharge>h4").innerText=text1;
    }
}



function minusOne(elem,index){
    sum=sum- (+elem.MRP)
    document.querySelector("#subtotal").innerText=sum;
    

    if(sum<399){
        document.querySelector("#extraCharge").innerText=39
        document.querySelector("#padit>span>span").innerText=sum+39;
    document.querySelector("#firstHalf>h2>span").innerText=sum+39;
    document.querySelector("#deliveryCharge>h4").innerText=text2;
    }else{
        document.querySelector("#padit>span>span").innerText=sum;
    document.querySelector("#firstHalf>h2>span").innerText=sum;
    document.querySelector("#deliveryCharge>h4").innerText=text1;
    }
   
}

function deleteOne(index,elem){
       cartLS.splice(index, 1);
       console.log(cartLS)
      localStorage.setItem("cartpage", JSON.stringify(cartLS))
      window.location.reload()
    cartdisplay()
      


      
 }
</script>
</html>