module.exports = {

  hamburger: document.querySelector( '.m__primary-nav .a__hamburger' ),

  menu: document.querySelector( '.m__primary-nav .main-nav' ),

  init: function() {
    this.hamburger.onclick = this.toggle.bind( this );
  },

  toggle: function() {
    this.hamburger.classList.toggle( 'is-active' );
    this.menu.classList.toggle( 'is-active' );
  }

};
