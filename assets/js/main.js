const cards = document.getElementById('cards')
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

//console.log(team)

for (let i = 0; i < team.length; i++) {
    console.log(team[i])
    let currentElement = team[i]
    cards.innerHTML += `
    <div class="m-3" style="width: 20rem;">
    <img class="card-img-top" src="assets/img/${currentElement.image}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${currentElement.name}</h5>
    <p class="card-text">${currentElement.role}</p>
    </div>
    </div>`
}

