// First require the base components
require.context( 'atoms/global/base', true, /^\.\/.*\.(js|scss)/ );

// Then all atoms, molecules, etc
require.context( 'atoms', true, /^\.\/.*\.(js|scss)/ );
require.context( 'molecules', true, /^\.\/.*\.(js|scss)/ );
require.context( 'organisms', true, /^\.\/.*\.(js|scss)/ );
require.context( 'templates', true, /^\.\/.*\.(js|scss)/ );

require( 'templates/layouts/site' ).init();
