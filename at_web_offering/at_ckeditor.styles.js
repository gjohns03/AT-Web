/* AT CKEditor Edited Styles from the default: ckeditor.styles.js */
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
/* Paragraph Styles */
            {name:'Intro / Lead',element:'p',attributes:{'class':'lead'}},
            {name:'Caption',element:'p',attributes:{'class':'caption'}},

/* Block Styles */
            {name:'Well',element:'div',attributes:{'class':'well'}},
            {name:'Attention',element:'div',attributes:{'class':'attention'}},
            {name:'Announcement',element:'div',attributes:{'class':'announcement'}},
            {name:'LocalNav',element:'ul',attributes:{'class':'localnav'}},
        
 /* Button Styles Added */
            {name:'Basic Button',element:'a',attributes:{'class':'btn btn-basic'}},
            {name:'Info Button',element:'a',attributes:{'class':'btn btn-info'}},
            {name:'Primary Button',element:'a',attributes:{'class':'btn btn-primary'}},

/* Styles */
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
/* Table Style */
            {
                name : 'Table',
                element : 'table',
                attributes :
                {
                    'class' : 'table table-striped'
                }
            },
/* Image Styles */
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