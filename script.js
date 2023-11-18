let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const mainTitle = document.querySelector('#main-title')
mainTitle.textContent = 'My name is Dom'

  // Part 2
const bodyElement = document.querySelector('body')
bodyElement.style.backgroundColor =  '#3da4ab';

  // Part 3
  const favoriteThingsList = document.querySelector('#favorite-things')
  favoriteThingsList.removeChild(favoriteThingsList.lastElementChild)

  // Part 4
  const specialTitles = document.querySelectorAll('.special-title')
  specialTitles.forEach(function(title) {
    title.style.fontSize = '2rem'
  })

  // Part 5 ?
  const pastRaces = document.querySelector('#past-races')
  pastRaces.removeChild(pastRaces.children[3])

  // Part 6
const newLiRace = document.createElement('li')
newLiRace.textContent = 'Chengdu'
pastRaces.appendChild(newLiRace)

  // Part 7
  const newBlogPost = document.createElement('div')
  newBlogPost.classList.add('blog-post', 'purple')
  const newBlogPostTitle = document.createElement('h1')
  newBlogPostTitle.textContent = 'Chengdu'
  const newBlogPostText = document.createElement('p')
  newBlogPostText.textContent = 'COME EAT SOMETHING SPICY!'
  newBlogPost.appendChild(newBlogPostTitle)
  newBlogPost.appendChild(newBlogPostText)
  const main = document.querySelector('.main')
  main.appendChild(newBlogPost);
  // const lastBlog = document.querySelector('.blog-post' + ':last-child')
  // lastBlog.appendChild(newBlogPost)

  // Part 8
  const quoteTitle = document.querySelector('#quote-title')
  quoteTitle.addEventListener('click', randomQuote)

  // Part 9
  const blogPosts = document.querySelectorAll('.blog-post')
  blogPosts.forEach(function(post) {
    post.addEventListener('mouseout', function() {
      post.classList.toggle('purple')
    })
    post.addEventListener('mouseenter', function() {
      post.classList.toggle('red')
    })
  })



});
