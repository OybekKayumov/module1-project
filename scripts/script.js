// Hamburger Btn start //
const cover = document.querySelector('.prefer-menu');
const btnCloseMenu = document.querySelector('.exit-btn');
const btnOpenMenu = document.querySelector('.hamburger')
const BtnOpenMenuAbout = document.querySelector('.hamburger-about');
const options = document.querySelectorAll('.link');
const hamburger = document.querySelectorAll('.open');
const openAbout = document.querySelector('.about-link');
const menuOpenAbout = document.querySelector('.menu-open-about');
const menuOpenHome = document.querySelector('.menu-open-home');
const openProgram = document.querySelector('.program-link');
const openMain = document.querySelector('.home-link')
const openSponsor = document.querySelector('.partner-link')
const home = document.getElementById('home');
const about = document.querySelector('.about');
let number = 2;

function openMenu() {
  cover.classList.remove('hidden');
  btnOpenMenu.classList.add('hidden');
  BtnOpenMenuAbout.classList.add('hidden');
}

function closeMenu() {
  cover.classList.add('hidden');
  btnOpenMenu.classList.remove('hidden');
  BtnOpenMenuAbout.classList.remove('hidden');
}

function openAboutSection() {
  about.classList.remove('hidden');
  home.classList.add('hidden');
}

function openHome() {
  about.classList.add('hidden');
  home.classList.remove('hidden');
}

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);
openAbout.addEventListener('click', openAboutSection);
menuOpenAbout.addEventListener('click', openAboutSection);
menuOpenHome.addEventListener('click', openHome);
openProgram.addEventListener('click', openHome);
openMain.addEventListener('click', openHome);
openSponsor.addEventListener('click', openHome);

for (let i = 0; i < hamburger.length; i++) {
  hamburger[i].addEventListener('click', openMenu);
}

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener('click', closeMenu);
}

// Hamburger Btn end //

const data = [
  {
    img: 'images/speakers/speaker1.png',
    name: 'Mr. Yannis Sivvakos',
    rule: 'EVAS WALK P.C. (Greece)',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'images/speakers/speaker2.png',
    name: 'Mr. Ildar Salyakhov',
    rule: 'Collective stand of TATARSTAN REPUBLIC',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'images/speakers/speaker-woman1.png',
    name: 'Ms. Olga Psareva',
    rule: 'MIRATORG (Russia)',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'images/speakers/speaker3.png',
    name: 'Mr. Orkhan Rakhimov',
    rule: 'WEST PRODUCT MARKETING (Azerbaijan)',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'images/speakers/speaker-woman2.png',
    name: 'Ms. Feruza Djuraeva',
    rule: 'MULTIVAC (Uzbekistan/Germany)',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'images/speakers/speaker4.png',
    name: 'Mr. Muzzafar Khoshimov',
    rule: 'ERMAK (Uzbekistan)',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
];

function changeCard(num) {
  const img = document.querySelectorAll('#img')[num];
  const nameID = document.querySelectorAll('#name')[num];
  const rule = document.querySelectorAll('#rule')[num];
  const info = document.querySelectorAll('#info')[num];
  img.src = data[num].img;

  nameID.innerHTML = data[num].name;
  img.src = data[num].img;
  rule.innerHTML = data[num].rule;
  info.innerHTML = data[num].info;
}

function mob() {
  if (window.innerWidth < 768) {
    for (let i = 0; i < number; i += 1) {
      const speaker = `
            <div class="speaker">
            <img id="img" src="images/speakers/speaker1.png" alt="speaker" class="speaker-img" />
            <div class="speaker-text">
            <h2 id="name" class="speaker-name"></h2>
              <p id="rule" class="speaker-job"></p>
              <div class="line"></div>
              <p id="info" class="speaker-info"></p>
            </div>
          </div>`;
      document.getElementById('speaker-card').innerHTML += speaker;
      changeCard(i);
    }
  } else if (window.innerWidth > 768) {
    for (let i = 0; i < data.length; i += 1) {
      const speaker = `
            <div class="speaker">
            <img id="img" src="images/speakers/speaker1.png" alt="speaker" class="speaker-img" />
            <div class="speaker-text">
            <h2 id="name" class="speaker-name"></h2>
              <p id="rule" class="speaker-job"></p>
              <div class="line"></div>
              <p id="info" class="speaker-info"></p>
            </div>
          </div>`;
      document.getElementById('speaker-card').innerHTML += speaker;
      changeCard(i);
    }
  }
}

mob();

const btnMore = document.querySelector('.button-more');
const btnLess = document.querySelector('.button-less');
btnLess.classList.add('hidden');

btnMore.addEventListener('click', () => {
  document.getElementById('speaker-card').innerHTML = '';
  btnMore.classList.add('hidden');
  btnLess.classList.remove('hidden');
  number = 6;
  mob();
});

btnLess.addEventListener('click', () => {
  document.getElementById('speaker-card').innerHTML = '';
  btnLess.classList.add('hidden');
  btnMore.classList.remove('hidden');
  number = 2;
  mob();
});