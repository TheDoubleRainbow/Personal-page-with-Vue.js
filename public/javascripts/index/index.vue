new Vue({
  el: '#root',
  data: {
  	info: {
  		name: 'Andrew Khokhlov',
  		pic: '/images/pic2.jpg',
  		links: {
  			git: 'https://github.com/TheDoubleRainbow',
  			facebook: "https://www.facebook.com/profile.php?id=100001883050092&ref=bookmarks",
  			twitter: 'https://twitter.com/aaaasdd1?lang=ru',
  			linkin: 'https://www.linkedin.com/in/andrew-khokhlov-717924127/',
  			mail: '16mb.com@gmail.com'
  		}
  	},
  	skills: {
  		list: [{name: 'JavaScript', level: 5}, {name: 'Vue.js', level: 4}, {name: 'React', level: 3}, {name: 'Angular', level: 3}, {name: 'SASS', level: 4}, {name: 'Bootstrap', level: 4}, {name: 'Webpack', level: 3}, {name: 'Express', level: 4}, {name: 'Node', level: 3}, {name: 'PHP', level: 2},{name: 'MySQL', level: 3},{name: 'MongoDB', level: 2}, {name: 'Python', level: 1}, {name: 'CLI', level: 4}, {name: 'GIT', level: 4}]
  	},
    projects:{
      list: [{name: 'This page', github: 'https://github.com/TheDoubleRainbow/Personal-page-with-Vue.js', link: false, img: '/images/projects/page.png'}, {name: 'Cities game', github: 'https://github.com/TheDoubleRainbow/Cities', link: 'http://citiesapp.azurewebsites.net/', img: '/images/projects/cities.png'}, {name: 'Notes (Chrome app)', github: 'https://github.com/TheDoubleRainbow/notes', link: false, img: '/images/projects/notes.png'}, {name: 'This page', github: 'https://github.com/TheDoubleRainbow/Personal-page-with-Vue.js', link: false, img: '/images/projects/page.png'}]
    }
  }
})