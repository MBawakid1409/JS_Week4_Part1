// console.log('#####################################################');
// console.log('Week 4 - Day 1 - 4')
// console.log('Tuwaiq Academy   JS')
// console.log('#####################################################');

// 28 - 11 - 2021

// 0 - Select
// document.querySelectorAll('p')
// document.querySelector('p')

// const test = document.querySelector('#test')
// const c1 = document.querySelector('.black');
// const a1 = document.querySelector('#a1')

// // 1 - Read
// console.log(a1.innerText)

// // 2 - Edit
// a1.href='https://youtube.com'
// console.log(a1.innerText)

// console.log(c1.innerText);
// c1.innerText = 'change from child 1 to black'
// console.log(c1.innerText);

// console.clear()
// ###############################################
// ex 1
// const paragraphs = document.querySelectorAll('.example-1')

// for (let i = 0; i < paragraphs.length; i++) {
//   console.log(paragraphs[i].innerText);
// }

// paragraphs[1].innerText = 'I am learning DOM'
// paragraphs[4].innerText = 'Try to change text'
//document.querySelector("paragraoh[0]").innerText = "I am learning DOM" 
//document.querySelector("paragraoh[4]").innerText = "Try to change text"

// ###############################################
// const parTest = document.querySelector('#test')
// const parBlue = document.querySelector('.blue')
// 1 - Read CSS
// const styleParTest = getComputedStyle(parTest)
// 2 - Edit (CSS)
// nodeName.style.property = newValue
// parTest.style.color = 'silver';
// parBlue.style.backgroundColor = 'black';
// parBlue.style.color = 'white';
// parBlue.style.fontSize = '50px';
// ###############################################

// 29 - 11 - 2021

// The Homework of Day 1
// const elem2 = document.querySelector('#elem2')
// const elem3 = document.querySelector('#elem3')
// const parg4 = document.querySelectorAll('.bg-red')[0]
// const parg6 = document.querySelectorAll('.blue')[1]
// const span7 = document.querySelectorAll('.bg-red')[1]

// console.log(getComputedStyle(elem2).fontSize);
// console.log(getComputedStyle(elem3).fontFamily);
// console.log(getComputedStyle(parg4).backgroundColor);
// console.log(getComputedStyle(span7).color);
// console.log(getComputedStyle(parg6).color);
// console.log(elem3.style)


// elem3.style.color='red'
// parg4.style.fontFamily='cursiva'
// span7.style.fontSize='20px'
// parg6.style.backgroundColor='yellow'
// ###############################################

// 30 - 11 - 2021
// ###############################################
// The Homework of Day 2
// const users = [
//   {user: 'Mohammad', password: '1234'},
//   {user: 'Omar', password: '5678'},
// ];

// const user = document.querySelector('#user')
// const password = document.querySelector('#password')
// const login = document.querySelector('#login')
// const statusParg = document.querySelector('#status')

// function verify() {
//   console.log('verify called');
//   // نريد معرفة ما هي القيم التي بداخل كل مدخل
//   const currentUser = user.value
//   const currentPassword = password.value
//   // التأكد من اسم المستخدم وكلمة المرور
//   for (let i = 0; i < users.length; i++) {
//     if (currentUser === users[i].user && currentPassword === users[i].password) {
//       // تغيير نص الفقرة ولون خلفيتها
//       //return console.log('Success');
//       statusParg.style.backgroundColor = 'green'
//       statusParg.innerText = 'Login Success'
//       return 
//     } else {
//       statusParg.style.backgroundColor = 'red'
//       statusParg.innerText = 'Login Failed'
//       return 
//       //console.log('failed')
//     }
//   }
// }
// // when click login button 'verify function' called
// // and print 'verify called' statement in console
// login.addEventListener('click', verify)
// ###############################################

// $(document).ready(function () {
  // Code here
  // $(CSS selector).method()
  // const h2_jQuery = $('#h2')

  // console.log(h2_jQuery);
  // // h2_jQuery.method
  // console.log(h2_jQuery.text('JavaScript'))
  // console.log(h2_jQuery.css('color','#E7F81C'))
  // // $('#h2').css('background-color','black')   one way
  // h2_jQuery.css('background-color','black')  // or another

  // const imgTag = $('#imgTag')
  // const aTag = $('#aTag')

  // imgTag.attr('src','https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg')
  // imgTag.attr('alt', 'attribute')
  // imgTag.css('max-width', '50%' )

  // aTag.attr('href','https://youtube.com')
  // aTag.text('Youtube')

//   const p1 = $('#p1')
//   const btn1 = $('#btn1')
//   const btn2 = $('#btn2')
//   const btn3 = $('#btn3')
//   const btn4 = $('#btn4')

//   function btnOne() {
//     console.log('check if btn 1 work')
//     p1.text('This is JavaScript')
//   }

//   function btnTwo() {
//     console.log('btn 2 is working')
//     p1.css('font-size', '30px')
//   }

//   function btnThree() {
//     console.log('this is button 3')
//     p1.css('font-family', 'calibri')
//   }

//   function btnFour() {
//     console.log('this is button 4')
//     p1.css('color', 'green')
//   }

//   //p1.click(function(){
//     // يجيب الدوم حقها
//     //console.log('This:',this)
//     // يخفيلك ام العنصر
//     //$(this).hide();
//   //})

//   btn1.on('click', btnOne)
//   btn2.on('click', btnTwo)
//   btn3.on('click', btnThree)
//   btn4.on('click', btnFour)
// })

// ###############################################

// 01 - 12 - 2021

// The Homework of Day 3
// HTML Form Validation with jQuery
const users = [
  {user: 'Mohammad', password: '1234'},
  {user: 'Omar', password: '5678'},
];

$(document).ready(function(){
// jQuery code
const user = $('#user')
const password = $('#password')
const loginBtn = $('#login')
const statusParg = $('#status')

function verify() {
  console.log('verify called');
  // نريد معرفة ما هي القيم التي بداخل كل مدخل
  const currentUser = user.val()
  const currentPassword = password.val()
  // التأكد من اسم المستخدم وكلمة المرور
  for (let i = 0; i < users.length; i++) {
    if (currentUser === users[i].user && currentPassword === users[i].password) {
      // تغيير نص الفقرة ولون خلفيتها
      //return console.log('Success');
      statusParg.css('backgroundColor','green')
      statusParg.text('Login Success')
      return 
    } else {
      statusParg.css('backgroundColor','red')
      statusParg.text('Login Failed')
      return 
      //console.log('failed')
    }
  }
}
loginBtn.click(verify);
})