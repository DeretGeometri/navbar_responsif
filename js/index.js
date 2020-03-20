const navList = document.querySelector(`.navlist`);
let lebarWindows = window.innerWidth;
console.log(lebarWindows);

document
  .querySelector(`.responsif__menu`)
  .addEventListener(`click`, responsifNavbar);

function responsifNavbar(e) {
  e.preventDefault();
  //   if (navList.style.transition === ``) {
  //     navList.style.transition === `all 1s`;
  //   }
  //   navList.classList.toggle(`muncul-menu`);
  if (!navList.classList.contains(`muncul-menu`)) {
    navList.classList.add(`muncul-menu`);
    navList.style.height = `auto`;
    let height = navList.clientHeight + `px`;
    navList.style.height = `0px`;
    setTimeout(() => {
      navList.style.height = height;
    }, 0);
  } else {
    navList.style.height = `0px`;
    navList.addEventListener(
      `transitioned`,
      () => {
        navList.classList.remove(`muncul-menu`);
        navList.removeAttribute(`style`);
      },
      {
        once: true
      }
    );
    setTimeout(() => {
      navList.classList.remove(`muncul-menu`);
      navList.removeAttribute(`style`);
    }, 0);
  }
}
