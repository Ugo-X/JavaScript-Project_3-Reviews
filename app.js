
const reviews = [
  {
    id: 1,
    name: "Ugonna Dike",
    job: "web Developer",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "I am Ugonna Dike and i am a Front-End Developer with google subsidiary Schnapps",
  },

  {
    id: 2,
    name: "Shalom Dike",
    job: "Backend Developer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "I am Shalom Dike and i am a Back-End Developer with google subsidiary Schnapps",
  },
  {
    id: 3,
    name: "Nonso Dike",
    job: "medical Doctor",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "I am Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, dignissimos et ullam rerum tempora odio voluptatibus libero sint at tempore doloremque aliquid quod suscipit, totam veritatis accusantium magni molestiae distinctio?",
  },
  {
    id: 4,
    name: "Uju Dike",
    job: "Ceo Ujay's Treats",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I am Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, dignissimos et ullam rerum tempora odio voluptatibus libero sint at tempore doloremque aliquid quod suscipit, totam veritatis accusantium magni molestiae distinctio?",
  },
];


// select items/elements 
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

// selecting our buttons
const prevBtn =  document.querySelector('.prev-btn')
const nextBtn =  document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set initial value 
let currentItem = 0


// We want all this changes to take place immediately we load the Page, so we use the DOMContent.... event to make this possible
window.addEventListener('DOMContentLoaded', function(){
 // we created and referenced a function with all the logic we need to happen when we load the page and we created this showPerson function so we can use it for not just the loading but also for the next and prevbtn 
showPerson(currentItem)

})


function showPerson (){
 // assigned a variable to the reviews[currentItem] array
 const item = reviews[currentItem];
 img.src = item.img;
 author.textContent = item.name;
 job.textContent = item.job;
 info.textContent = item.text;
}




// show next person
nextBtn.addEventListener('click', function(){
 currentItem ++
 // if the current item is greater than the array length with the index of 3
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
 showPerson(currentItem)

 })

 // show previous person
 prevBtn.addEventListener('click', function(){
  currentItem --
if (currentItem < 0) {
 currentItem = reviews.length - 1
}
  showPerson(currentItem)
 })


 // Here each time we click on the random btn, we are going to have a random number/object from our reviews array displayed 
 // we create a random number variable, NB: we can also create a function that generates this number and then assign it to a variable. Either way when we are done with that we can now assign the already defined current item equals to the random number and then ivoke our show person function with the current item in it.
 randomBtn.addEventListener('click', function(){
  let randNumb = Math.floor((Math.random() * reviews.length))
  console.log(randNumb);
  currentItem = randNumb
showPerson(currentItem)
 })

