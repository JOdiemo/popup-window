const allContent = [
  {

    name: 'Multi-Post Stories',
    work: ['CANOPY', 'Back End Dev', '2015'],
    content: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley
     of type and scrambled it to make a type specimen book. 
     `,
    languages: ['HTML', 'css', 'javaScript'],
    sourceImage: "https://github.com/JOdiemo",
    liveImage: "https://github.com/JOdiemo",
    photoid: "100",
    ref: "0"
  },
  {
    name: 'Tonic',
    work: ['CANOPY', 'Back End Dev', '2015'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['HTML', 'css', 'javaScript'],
    sourceImage: "https://github.com/JOdiemo",
    liveImage: "https://github.com/JOdiemo",
    photoid: "50",
    ref: "1"
  },
  {
    name: 'Tonic',
    work: ['CANOPY', 'Back End Dev', '2015'],
    content: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley
     of type and scrambled it to make a type specimen book. 
    `,
    languages: ['HTML', 'css', 'javaScript'],
    sourceImage: "https://github.com/JOdiemo",
    liveImage: "https://github.com/JOdiemo",
    photoid: "50",
    ref: "2"
  },
  {
    name: 'Multi-Post Stories',
    work: ['CANOPY', 'Back End Dev', '2015'],
    content: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley
     of type and scrambled it to make a type specimen book. 
     `,
    languages: ['HTML', 'css', 'javaScript'],
    sourceImage: "https://github.com/JOdiemo",
    liveImage: "https://github.com/JOdiemo",
    photoid: "100",
    ref: "3"
  },
];

const modal = document.querySelector('.modal-container')

for (let i =0 ; i <= allContent.length; i++){

    if (allContent[i].photoid === 1){
        let src = "image/Portfolio1.png"

    }else{
            let src = "image/Portfolio4.png"
        
    }
    modal.insertAdjacentHTML(    
        'afterbegin',
        `  
        <div class = "modal${allContent[i].ref}" id="modal${allContent[i].ref}"> 
        <div class='modal-header'>
              <h2 class='title'>${allContent[i].name}</h2>
              <button data-close-button type='button' class='close-button'>&times;</button>
          </div>
          <ul class='sub-title'>
              <li>${allContent[i].work[0]}</li>
              <li>${allContent[i].work[1]}</li>
              <li>${allContent[i].work[2]}</li>
          </ul>
                 
          <div class='modal-photo' id='photo11'><img class="photo${allContent[i].photoid}" alt="Card1"></div>
            
           <section class='modal-body'>
              <p class='modal-body1'>${allContent[0].content}</p>
              <div class='modal-body2'>
                  <ul class='category'>
                      <li><a href='index.html'>${allContent[i].languages[0]}</a></li>
                      <li><a href='index.html'>${allContent[i].languages[1]}</a></li>
                      <li><a href='index.html'>${allContent[i].languages[2]}</a></li>
                  </ul>
                  <div class='extra-buttons'>  
                  <a class=modBtns" href='${allContent[i].sourceImage}' target="_blank"><button class='modal'><p>See Live</p><img src='image/sm1.png'></button></a>
                  <a class=modBtns" href='${allContent[i].liveImage}' target="_blank"><button class='modal'><p>See Source</p><img src='image/sm2.png'></button></a>
                  </div>
              </div>
          </section> 
        </div>
      `,
      );

}