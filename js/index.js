let hamburger=document.querySelector(".hamburger");
hamburger.onclick = function () {
let navBar=document.querySelector(".nav-bar1");
navBar.classList.toggle("active");
}

// swiper js for products 

let swiperCard = new Swiper('.card--content', {

    loop: true,
    spaceBetween:32,
    grabCursor:true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  breakPoints:{
600:{
    slidesPerView:2,
},
968:{
    slidesPerView:3,

},
  },
  });
  // function sendEmail(){
  //   Email.send({
      

  //     Host:"smtp.elasticemail.com",
  //     Username:"hossinkubba969@gmail.com",
  //     Password:"B5B6BC3BFE3955CA54B34E1E5CEFB74BECDF",
  //     // Password:"700c70ea-9293-4f17-9783-81019c498237",
  //     To : "hossinkubba969@gmail.com",
  //     From : "hossinkubba969@gmail.com",
  //     Subject : "new contact from website",
  //     Body :"this is message"

  // }).then(
  //   message => alert(" تم الارسال , شكرا لك ")
  // );
  // }

//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "hossinkubba969@gmail.com",
//     Password : "B5B6BC3BFE3955CA54B34E1E5CEFB74BECDF",
//     To : 'hossinkubba969@gmail.com',
//     From : "hossinkubba969@gmail.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// )

// function sendEmail(){
//   (function(){
// emailJs.init("qlxDH66KRJbrzTYjB");  //ACOUNT PUBLIC KEY FROM EMAIL JS

//   })();

// var params={
// sendername:document.querySelector("#name").value,
// to:"hossinkubba969@gmail.com",
// replayto:document.querySelector("#email").value,
// message:document.querySelector("#message").value,



// };
// var serviceID="service_uauhg1g";
// var templateID="template_0y229hi";
// emailJs.send(serviceID, templateID,params)
// .then(res =>{
//   alert("thanks :)");
// })

// }

function sendMail(){
  var params={
    from_name: document.getElementById("fullName").value,
    email_id:document.getElementById("email_id").value,
    message:document.getElementById("message").value

  }
  emailjs.send("service_uauhg1g","template_pbwxk3i",params).then(
    function (res){
      alert("تم الارسال , شكرا لك"+ res.status);
    }
  )
}