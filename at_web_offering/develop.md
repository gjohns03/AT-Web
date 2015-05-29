#Web Support Develop

**With Client**
Input and update content
* Drupal Content Management ITS (http://drupal.sfsu.edu/drupal-content-management

**AT Web Support**

**Request demo site from Drupal Team**
1. Submit a ticket in Footprints with (Site Name, Department Code, Domain name request)
2. enable AT supported modules
3. inject AT CSS
4. inject AT JS if applicable

**Create Login Redirect**

1. Content > Add content > Basic page
    2. Create a page with URL "login" and save the page.
3. Enable "Redirect" module
4. Configuration > Search and metadata > URL redirects> Add redirect
5. From "login" to "saml_login"

**Configure CKEditor Editor profile**

1. Configuration > Content authoring > CKEditor > edit SFSUEDitor
2. Modify the Editor Appearance
    3. Add buttons: Source, Increase Indent, Decrease Indent, Unlink, and Insert Horizontal Line.
    4. Remove buttons: Insert Teaser Break, Add YouTube Video, Add Vimeo Video
    5. Discuss removing buttons: Anchor, Insert Special Character
    6. CKEditor Menu Screenshot
7. Modify CSS
    8. Set "Editor CSS" to Define CSS
    9. Enter "CSS file path" to [designated AT CSS File]
    10. Set "Predefined styles" to Define path to ckeditor.style.js
    11. Enter "Predefined styles path" to [designated AT Styles JS File]
        12. Default is: https://wcmdemo7.sfsu.edu/academic/sites/all/themes/sfstate_template/ckeditor.styles.js

**Configure CKEditor HTML (Editor) Text format**

1. Configuration > Content authoring > Text formats > CKEditor HTML (Editor)
2. In Filter settings section > WYSIWYG Filter > Rules for Class Names
    3. Add classes: attention, well, etc.

**Testing Client Experience**

Site Managers default view is Full Admin.  Managers can be added as a member of other user groups (ie Editor).

1. Log in to SF State Gateway
2. Select "IT Services"
3. Edit the Site Group to add Site Manager to 
4. Enter SF State email address of Site Manager in the "Members" section
5. Select "Add Member(s)"
6. The reassignment may take up to 15 minutes to switch and require logging out of the site and relogging in.
Other Users can be assigned a new role within the Drupal Site to change the user experience.

**Building Blocks**

Build blocks with Views to allow the content to be editable by the clients.

Basic Block

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

To add another editable content block

1. Structure > Views > Editable Content Blocks
2. Select "Clone Block" 
3. Edit the new block view to grab another node.

Tiles Block

1. Structure > Views > Add new view
    2. "View name" = Editable Tiles Block
    3. Show Content of type "Tiles"
    4. Check "Create a block"
        5. Enter "Block title" - will be displayed in the block section as Views - block title
        6. Change "Display format" to Unformatted list of fields
        7. Select "Continue & edit"
    8. Edit "Content: Title" to uncheck the link to original content and check excluded from display.
    9. Add "Content: Thumbnail Image", "Content: Weight", and "Content: Edit link" without labels and excluded from display in the Fields section.
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