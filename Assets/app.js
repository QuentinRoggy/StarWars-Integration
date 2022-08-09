
const app = {
  position: 0,

  descriptionsElts: [
    document.querySelectorAll('[data-slide="1"]'),
    document.querySelectorAll('[data-slide="2"]'),
    document.querySelectorAll('[data-slide="3"]'),
  ],

  yearsElts: [
    document.querySelector('[data-years="1"]'),
    document.querySelector('[data-years="2"]'),
    document.querySelector('[data-years="3"]'),
  ],

  postersElts: [
    document.querySelector('[data-poster="1"]'),
    document.querySelector('[data-poster="2"]'),
    document.querySelector('[data-poster="3"]'),
  ],
  arrowElt: [
    document.querySelector('.left-arrow'),
    document.querySelector('.right-arrow'),
  ],
  dataNav: [
    document.querySelector('[data-nav="1"]'),
    document.querySelector('[data-nav="2"]'),
    document.querySelector('[data-nav="3"]'),
    document.querySelector('[data-nav="4"]'),
    document.querySelector('[data-nav="5"]'),
  ],
  dataLine: [
    document.querySelector('[data-line="2"]'),
    document.querySelector('[data-line="3"]'),
    document.querySelector('[data-line="4"]'),
    document.querySelector('[data-line="5"]'),
  ],
  
  init() {

    app.arrowElt[0].addEventListener('click', app.handleLeftArrowClick);
    app.arrowElt[1].addEventListener('click', app.handleRightArrowClick);
  },

  handleLeftArrowClick(event) {
    console.log("POSITION:", app.position);
    console.log(app.descriptionsElts.length);
    if (app.position <= 0 ) {
      return;
    } else if (app.position === app.descriptionsElts.length) {
      return;
    } else {
      app.dataNav[app.position].classList.remove("active");
      app.position -= 1;
      app.dataLine[app.position].classList.remove("active");
    }

    if (app.position !== 0) {
      app.arrowElt[0].classList.add('active');
    } else {
      app.arrowElt[0].classList.remove('active');
    }
    if (app.position < app.dataNav.length) {
      app.arrowElt[1].classList.add('active');
    }

    app.changePoster("left");
    app.changeDescription('left');
    app.changeYears('left');
  },

  handleRightArrowClick(event) {
    if (app.position >= app.descriptionsElts.length -1) {
      return;
    } 
    app.dataLine[app.position].classList.add("active");
    app.position += 1;
    app.dataNav[app.position].classList.add("active");

    if (app.position !== 0) {
      app.arrowElt[0].classList.add('active');
    }

    if (app.position >= app.dataNav.length -1) {
      app.arrowElt[1].classList.remove('active');
    }

    app.changePoster("right");
    app.changeDescription('right');
    app.changeYears('right');
  },

  changePoster(direction) {
    if (app.position >= app.postersElts.length) {
      return;
    }

    if(direction === 'right') {
      app.postersElts[app.position].classList.add('active');
      app.postersElts[app.position - 1].classList.remove('active');
      app.postersElts[app.position - 1].classList.add('leave');

    } else if (direction === 'left') {
      app.postersElts[app.position].classList.remove('leave');
      app.postersElts[app.position].classList.add('active');
      app.postersElts[app.position + 1].classList.remove('active');
    }
  },

  changeDescription(direction) {
    if (direction === 'right') {
      app.descriptionsElts[app.position -1].forEach(element => {
        element.classList.add('leave');
        element.classList.remove('active');
      });
      app.descriptionsElts[app.position].forEach(element => { 
        element.classList.add('active');
      });
    } else if (direction === 'left') {

      app.descriptionsElts[app.position].forEach(element => {
        element.classList.remove('leave');
        element.classList.add('active');
      });
      app.descriptionsElts[app.position + 1].forEach(element => { 
        element.classList.remove('active');
      });
    }
  },

  changeYears(direction) {
    if (direction === 'right') {
      app.yearsElts[app.position].classList.add('active');
      app.yearsElts[app.position - 1].classList.remove('active');
      app.yearsElts[app.position - 1].classList.add('leave');
     }else if (direction === 'left') {
      app.yearsElts[app.position].classList.add('active');
      app.yearsElts[app.position].classList.remove('leave');
      app.yearsElts[app.position + 1].classList.remove('active');
     }
  }
};

document.addEventListener('DOMContentLoaded', app.init());