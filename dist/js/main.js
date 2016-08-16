// First require the base components
require.context( 'atoms/global/base', true, /^\.\/.*\.(js|scss)/ );

// Then all atoms, molecules, etc
// (for this test we're just including all globals, which will require all except base which is required above)
require.context( 'atoms', true, /^\.\/.*\.(js|scss)/ );
require.context( 'molecules/navigation', true, /^\.\/.*\.(js|scss)/ );
//
// // Then just for this test we add hamburger as it has a JS script.
// require.context( 'atoms/hamburger', true, /^\.\/.*\.(js|scss)/ );

// require( 'molecules/navigation' );

// require( 'atoms/hamburger' )();
