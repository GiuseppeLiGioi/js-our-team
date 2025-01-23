const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

let container = document.getElementById('container');
  for( let i = 0; i < teamMembers.length; i++){
    let element = teamMembers[i];


    container.innerHTML += `
       <div class="flex">
                <figure>
                    <img class="figure_style" src=${element.img} alt=${element.name}
                </figure>
                <div class="flex flex-column">
                    <h3>${element.name}</h3>
                    <span>${element.role}</span>
                    <span class="blue_span">${element.email}</span>
                </div>
            </div>

    `

    let nome = document.getElementById('name').value;
    let role = document.getElementById('role').value;
    let email = document.getElementById('email').value;
    let immagine = document.getElementById('img').value;
    let bottone = document.getElementById('btn');

    bottone.addEventListener("click" , function(event){
      event.preventDefault();
      
      teamMembers.push(
        {
          nome,
          role,
          email,
          immagine
        }
      )


      console.log(teamMembers)
    })
  }