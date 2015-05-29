/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [
            /* Block Styles */

            {name:'Attention',element:'div',attributes:{'id':'attention'}},

            {name:'Intro / Lead',element:'p',attributes:{'class':'lead'}},
            
            {name:'Brief',element:'div',attributes:{'class':'brief'}},

            {name:'Caption',element:'p',attributes:{'class':'caption'}},

            {name:'LocalNav',element:'ul',attributes:{'class':'localnav'}},
 
            {name:'Small',element:'p',attributes:{'class':'small'}},

            {
                name : 'Unstyled List',
                element : 'ul',
                attributes :
                {
                    'class' : 'list-unstyled'
                }
            },
            {
                name : 'List inline',
                element : 'ul',
                attributes :
                {
                    'class' : 'list-inline'
                }
            },


            {
                name : 'Table',
                element : 'table',
                attributes :
                {
                    'class' : 'table'
                }
            },

            {
                name : 'Table Striped rows',
                element : 'table',
                attributes :
                {
                    'class' : 'table table-striped'
                }
            },
            {
                name : 'Table Bordered',
                element : 'table',
                attributes :
                {
                    'class' : 'table table-bordered'
                }
            },
            {
                name : 'Table Hover rows',
                element : 'table',
                attributes :
                {
                    'class' : 'table table-hover'
                }
            },
            {
                name : 'Table Condensed',
                element : 'table',
                attributes :
                {
                    'class' : 'table table-condensed'
                }
            },

            {
                name : 'Image responsive',
                element : 'img',
                attributes :
                {
                    'class' : 'img-responsive'
                }
            },

            {
                name : 'Image rounded',
                element : 'img',
                attributes :
                {
                    'class' : 'img-rounded'
                }
            },
            {
                name : 'Image circle',
                element : 'img',
                attributes :
                {
                    'class' : 'img-circle'
                }
            },
            {
                name : 'Image thumbnail',
                element : 'img',
                attributes :
                {
                    'class' : 'img-thumbnail'
                }
            },
            {
                name : 'Image float left',
                element : 'img',
                attributes :
                {
                    'class' : 'pull-left'
                }
            },
            {
                name : 'Image float right',
                element : 'img',
                attributes :
                {
                    'class' : 'pull-right'
                }
            },

    ]);
}
