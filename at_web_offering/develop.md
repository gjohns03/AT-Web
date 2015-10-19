#Web Support Develop

##With Client
Input and update content

##AT Web Support

1. Reguest demo site by submitting a ticket assigned to the Drupal Team with (Site Name, Department Code, Domain name request)
2. Enter Site Name and Web Contact
3. Enable AT required modules/AT Feature
4. Inject AT CSS
5. Configure CKEditor
6. Configure IMCE
7. Create login redirect to keep users out of administrative view
8. Add Users through Gateway
9. Update Permissions
10. Use AT Base Demo site or features for approved views

###Enter Site Name and Web Contact

1. Configuration > System > SF State Theme Settings
2. Update "Site name" with the name of the department/unit.
3. Update the "Web contact email" with the email address of the department/unit.
4. If the site is a subsite of a larger department, enter the "Parent site name" and "Parent site URL" in the Parent site information tab.
5. Remove the default "Banner Image" in the Banner image tab.
6. Select "Save configuration"

###Enable AT Modules

1. CSS Injector, Trigger, Redirect
2. Disable: Webform Reply-To, Form builder Webform UI, Webform (Use Qualtrics for forms/surveys); Advanced help, Dashboard, Help (Reduce unused menu options); Menu breadcrumb (not permitted by Communications); Printer-friendly pages (depricated web feature);

###Import Default AT CSS

1. Enable "CSS Injector" module 
2. Configuration > CSS injector > Add
    3. Friendly name = AT Default Styles
    4. Description = Fixes broken styles for Styles.css and Bootstrap and Adds AT Styles
    5. CSS code if using new fonts = ```@import url(//rawgit.com/gjohns03/AT-Web/master/at_web_offering/at_new.css);```
    5. For all sites, add CSS line = ```@import url(//rawgit.com/gjohns03/AT-Web/master/at_web_offering/at_default.css);```
    4. Save

###Configure CKEditor Editor profile

**Universal CKEditor**

After the Universal CKEditor is rolled out by the Drupal Team the Editor Appearance and the configuration of the text formats will not be necessary.

1. Configuration > Content authoring > CKEditor > edit All profiles
2. Modify the Editor Appearance
    3. Universal CKEditor buttons: Bold, Italics, Remove Formatting; bullet, numbered bullet, decrease indent, increase indent; link, unlink, anchor; undo, redo; maximize, select all; source; Format; Styles; image, table, add YouTube, add Vimeo, insert horizontal line, special character; TBD layouts; TBD Icons.
    4. ![Image of Universal CKEditor menu](https://wcmdemo7.sfsu.edu/academic/sites/wcmdemo7.sfsu.edu.academic/files/Universal-CKEditor.jpg)
7. Modify "CSS" 
    8. Set "Editor CSS" to Define CSS
    9. Enter "CSS file path" to ```https://rawgit.com/gjohns03/AT-Web/master/at_web_offering/at_default_ckeditor.css```.  For new fonts add ```https://rawgit.com/gjohns03/AT-Web/master/at_web_offering/at_new_ckeditor.css```
    10. Set "Predefined styles" to Define path to ckeditor.style.js
    11. Enter "Predefined styles path" to ```https://rawgit.com/gjohns03/AT-Web/master/at_web_offering/at_ckeditor.styles.js```
        12. Default is: ```https://github.com/gjohns03/AT-Web/blob/master/at_web_offering/ckeditor.styles.js```
13. Save
5. Configuration > Text formats > configure All profile roles
    6. Select "authenticated user"
    7. Select "Save configuration"


###Configure CKEditor HTML (Editor) Text format

This configuration will no longer be necessary after the universal CKEditor roles out.

1. Configuration > Content authoring > Text formats > CKEditor HTML (Editor)
2. In Filter settings section > WYSIWYG Filter > HTML elements and attributes
    3. Replace elements with ```@[id|class|title|aria-hidden],a[class|href|name|target|title],p,div,h1,h2,h3,h4,h5,h6,img[src|alt|height],hr,br,ul,ol,li,span,table[class|sortable|summary],tr,th[abbr|scope|sorted|colspan|headers|rowspan],td[colspan|headers|rowspan],em,b,u,i,strong,blockquote,caption,thead,tbody,iframe[*],abbr[title]```
4. In Filter settings section > WYSIWYG Filter > Rules for Class Names
    5. Add classes ```announcement,attention,btn,btn-basic,btn-info,btn-primary,fa*,glyphicon*,well,```

###Configure IMCE

Configuration > Media > IMCE 
Set User Role: editor to "Administrator" in the Public Files column
Select "Save configuration"    

###Create Login Redirect

A method for users to log in and be redirected to the homepage.  This will bypass any administrative views for the user.  For users with many content types redirect them to the content filter page.

1. Configuration > System > Actions
2. Create the adcanced action "Redirect to URL"
3. Input the Label: Redirect to Homepage
4. Set the URL to the site homepage found in the Default frontpage in Configuration > System > Site information
5. Go to Structure > Triggers
6. Under the User tab assign "Redirect to Homepage" in TRIGGER: AFTER A USER HAS LOGGED IN

To redirect users to a more advanced content filter than the default.

1. Go to Structure > Views
2. Enable the Content view
3. Configuration > System > Actions
2. Create the adcanced action "Redirect to URL"
3. Input the Label: Redirect to Content Filter
4. Set the URL: admin/content2
5. Go to Structure > Triggers
6. Under the User tab assign "Redirect to Content Filter" in TRIGGER: AFTER A USER HAS LOGGED IN

###Create Login Page

This login step is no longer being used.  If a login page was setup create a redirect to /admin, and use the login redirect to push users to a desired landing page after login.

To Setup the Redirect to Admin

1. In the modules page Enable the "Redirect" module
2. Navigate to Configuration > Search and metadata > URL redirects > Add redirect
3. Enter "login" in the From field
4. Enter "admin" in the To field
5. Select "Save"

Old Instructions

1. Content > Add content > Basic page
    2. Create a page called "Login to your site" with URL "login" and save the page.
3. Go to source code and paste ```<div class="attention"><ol><li>Select the &quot;Login&quot; button below.</li><li>You will be directed to the SF State Global login page.</li><li>Enter your SF State ID and Password.</li><li>You will be redirected to your site homepage following successful login.</li></ol><p></div><a class="btn btn-basic" href="https://wcmdemo7.sfsu.edu/[sitename]/saml_login?ReturnTo=https://wcmdemo7.sfsu.edu/[sitename]">Login</a></p>```
4. Replace ```[sitename]``` with your site name of your site.


###Adding Users through Gateway

Add Users only after they have completed the basic Drupal training.  Site Managers default view is Full Admin.  Managers can be added as a member of other user groups (ie Editor).  

1. Log in to SF State Gateway
2. Select "IT Services"
3. "Edit" each of the Site Groups (admin, editor, fulladmin, publisher) to add  Jonathan C Foerster as a manager for each group. 
    4. Enter SF State email address, foerster@sfsu.edu, in the text box of the Managers section.
    5. Select "Add Manager"
6. "Edit" the Site Group-editor to add the new site editor(s)
    7. Enter SF State email address for the site editor(s)(include at_desk@sfsu.edu for testing purposes) in the text box in the Members section.
    8. Select "Add Member(s) button
    9. Select "Save"
6. The reassignment may take up to 15 minutes to switch and require logging out of the site and relogging in.
Other Users can be assigned a new role within the Drupal Site to change the user experience.

###Update Permissions

Modify the permissions for the editor to optimize the user experience and provide access to create content.

1. People > Permissions
2. Check the following permissions for the Editor role: Administer content; (For Basic page and additional content types used) Create new content, Edit own content, Edit any content, Delete own content, Delete any content;

###Building Blocks

Build Basic Block with Views to allow the block content to be editable by users.

####Basic Block

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

####Tiles Block

Tiles Block are editable content tiles that use the bootstrap column classes to create rows of 1, 2, or 3 and then stack on smaller screen widths.

*First Create a Tile Content type*

1. Structure > Content types > Add content type
2. Name = "Tile"
2. Deselect "Display author and date information" in Display settings
2. Publishing options = "Published", "Create new revision"
3. Comment settings > "Closed"
4. Select "Save content type"
5. Select "manage fields" for the Tile content type
6. Add new field
    7. Label = "Image"
    8. Field Type = Select "Image"
    9. Widget = Select "Image"
    10. Select "Save"
    11. Check the "Enable Alt field" checkbox
    12. Select "Save settings"
11. Position "Image" field above the "Body"
12. Update permissions, People > Permissions

*Second Create a Tile View*

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
  
