#Web Support Develop

##With Client
Input and update content
* Drupal Content Management ITS (http://drupal.sfsu.edu/drupal-content-management

##AT Web Support

1. Reguest demo site by submitting a ticket assigned to the Drupal Team with (Site Name, Department Code, Domain name request)
2. enable AT supported modules (not explored yet)
3. inject AT CSS
4. inject AT JS if applicable (not needed yet)
5. configure CKEditor
6. create login redirect to keep users out of administrative view (no workable solution)
7. Use AT Base Demo site or features for approved views

###Import Default AT CSS
1. Enable "CSS Injector" module
2. Configuration > CSS injector > Add
    3. Friendly name = AT Default Styles or AT New Styles
    4. Description = Fixes broken styles for Styles.css and Bootstrap
    5. CSS code = @import url(//rawgit.com/gjohns03/AT-Web/master/at_web_offering/at_default.css); or @import url(//rawgit.com/gjohns03/AT-Web/master/at_web_offering/at_new.css);
    4. Save

###Configure CKEditor Editor profile

1. Configuration > Content authoring > CKEditor > edit SFSUEDitor
2. Modify the Editor Appearance
    3. Add buttons: Increase Indent, Decrease Indent, Unlink, Source, and Insert Horizontal Line.
    4. Remove buttons: Drupal Break, Add YouTube Video, Add Vimeo Video, Copy, Paste.
    5. Discuss removing buttons: Anchor, Insert Special Character
    6. ![Image of CKEditor menu](https://wcmdemo7.sfsu.edu/academic/sites/wcmdemo7.sfsu.edu.academic/files/CKEditor%20Menu.jpg)
7. Modify "CSS" 
    8. Set "Editor CSS" to Define CSS
    9. Enter "CSS file path" to [https://cdn.rawgit.com/gjohns03/AT-Web/master/at_web_offering/at_default_ckeditor.css]
    10. Set "Predefined styles" to Define path to ckeditor.style.js
    11. Enter "Predefined styles path" to [https://cdn.rawgit.com/gjohns03/AT-Web/master/at_web_offering/at_ckeditor.styles.js]
        12. Default is: https://github.com/gjohns03/AT-Web/blob/master/at_web_offering/ckeditor.styles.js

###Configure CKEditor HTML (Editor) Text format

1. Configuration > Content authoring > Text formats > CKEditor HTML (Editor)
2. In Filter settings section > WYSIWYG Filter > HTML elements and attributes
    3. Replace elements with: @[id|class|title],a[class|href|name|target|title],p,div,h1,h2,h3,h4,h5,h6,img[src|alt|height],hr,br,ul,ol,li,table[class|sortable|summary],tr,th[abbr|scope|sorted|colspan|headers|rowspan],td[colspan|headers|rowspan],em,b,u,i,strong,caption,thead,tbody
4. In Filter settings section > WYSIWYG Filter > Rules for Class Names
    5. Add classes: announcement,attention,btn,btn-basic,btn-info,btn-primary,well,
    
###Create Login Redirect

1. Content > Add content > Basic page
    2. Create a page with URL "login" and save the page.
3. Enable "Redirect" module
4. Configuration > Search and metadata > URL redirects> Add redirect
5. From "login" to "saml_login"

###Testing Client Experience

Site Managers default view is Full Admin.  Managers can be added as a member of other user groups (ie Editor).

1. Log in to SF State Gateway
2. Select "IT Services"
3. Edit the Site Group to add Site Manager to 
4. Enter SF State email address of Site Manager in the "Members" section
5. Select "Add Member(s)"
6. The reassignment may take up to 15 minutes to switch and require logging out of the site and relogging in.
Other Users can be assigned a new role within the Drupal Site to change the user experience.

###Building Blocks

Build Basic Block with Views to allow the block content to be editable by users.

**Basic Block**

1. Structure > Views > Add new view
    2. "View name" = Editable Content Block
    3. Check "Create a block"
        4. Enter "Block title" - will be displayed in the block section as Views - block title
        5. Change "Display format" to Unformatted list of fields
        6. Select "Continue & edit"
    7. Add style class to the block if applicable in Format > Format: Unformatted list Settings > Row class
    8. Edit "Content: Title" to uncheck the link to original content, and in Style settings check "Customize field HTML" to H2.
    9. Add "Content: Body" and "Content: Edit link" without labels in the Fields section
    10. Add "Content: Nid" in the Filter Criteria section
        11. Set Nid value "Is equal to" the desired node.
    12. Select "Save"
13. Add block in Structure > Blocks
    14. Enter <none> in "Block title"
    15. Add Bootstrap column class in "CSS class(es)" if applicable.

*To add another editable content block*

1. Structure > Views > Editable Content Blocks
2. Select "Clone Block" 
3. Edit the new block view to grab another node.

**Tiles Block**

Tiles Block are editable content tiles that use the bootstrap column classes to create rows of 1, 2, or 3 and then stack on smaller screen widths.

First Create a Tile Content type

1. Structure > Content types > Add content type
2. Name = "Tile"
2. Publishing options = "Published", "Create new revision"
3. Comment settings > "Closed"
4. Select "Save content type"
5. Select "manage fields" for the Tile content type
6. Add new field
    7. Label = "Image"
    8. Field Type = Select "Image"
    9. Widget = Select "Image"
    10. Select "Save"
11. Position "Image" field above the "Body"
12. Update permissions, People > Permissions

Second Create a Tile View

1. Structure > Views > Add new view
    2. "View name" = Editable Tiles Block
    3. Show Content of type "Tile"
    4. Check "Create a block"
        5. Enter "Block title" - will be displayed in the block section as Views - block title
        6. Change "Display format" to Semantic Views list of fields
        7. Select "Continue & edit"
    8. Semantic Views Settings > Row
        9. FIRST/LAST every nth = number of bootstrap columns
        10. Add "clearfix" class to LAST class attribute
    8. Edit "Content: Title" to uncheck the link to original content and check excluded from display.
    9. Add "Content: Image", "Content: Weight", and "Content: Edit link" without labels and excluded from display in the Fields section.
    10. Add "Content: Body".
        11. Uncheck "Create a label"
        12. Select "Trimmed" in the Formatter and enter a Trim length if applicable.
        13. Select "Rewrite the output of this field" in Rewrite Results.
            14. Enter the following in the Text box:
    ```<div class="col-md-6">
    <div class="well-clean">
    <div>
    [field_thumbnail_image]
    </div>
<h2>[title]</h2>
<div>[body]</div>
<div>[edit_node]</div>
</div>
</div>```
            15. The first class can be any Bootstrap column class.
            16. The second class can be any tile style class.
    17. Filter and Sort as needed.
    18. Select "Save"
19. Add block in Structure > Blocks
  
