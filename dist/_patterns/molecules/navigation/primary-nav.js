module.exports = function() {

  const hamburger = document.querySelector( '.m__primary-nav .a__hamburger' );

  const menu = document.querySelector( '.m__primary-nav .main-nav' );

  hamburger.onclick = toggle;

  function toggle() {
    const activeClass = 'is-active';
    hamburger.classList.toggle( activeClass );
    menu.classList.toggle( activeClass );
  }
};
