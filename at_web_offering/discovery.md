#Web Support Discovery

**With Client**
* Schedule a time to train all Content Authors on how to use Drupal.

**AT Web Support**
* Send website goals questionnaire.
* Determine website design path (Simple migration or site redesign).
* Train Content Authors to use Drupal and to create content that is well structured and accessible.

##Website Goals Questionaire
1. What are your goals for the site?
2. What are the most common complaints?
3. What are the most common questions?
4. What is your site best known for?
5. What content should be on your site?  Missing or Present?
6. Who visits your site?
7. What would make a successful website for you?
    
##Drupal Training

**Goal: Provide standardized training program for all Drupal content authors**

* Training would be required before you were given access to edit the site.
* Training would have accessibility and web best practices built into it's core.

###How to Use Drupal
Tutorials covering the basics of Drupal.  Accessibility will be noted as a goal for content development.

* Edit a page
    1. Log in to your Drupal site
    2. Select "Content" > Select "Edit" in the row of the page you want to edit.
    * OR 
    1. Select Home button in the upper left corner > Navigate to your page > Select "Edit" just under the page title.
    2. Fill in the Edit page fields
        * Title - Title displayed at the top of the page
        * Body - Main content section.  Use the available menu bar to add formatting and links to your text.
    3. Select "Save"
* [Adding Links](http://drupal.sfsu.edu/links-and-anchors)
* [Adding Images](http://drupal.sfsu.edu/images-instructions)
* [Adding Documents](http://drupal.sfsu.edu/attach-document)
* [Adding Tables](http://drupal.sfsu.edu/tables)
* [Adding a Page to the Menu](http://drupal.sfsu.edu/menus)
* [Web Style Guide](https://wcmdemo7.sfsu.edu/academic/web)
* Content Revisions and Reverting
* Log in Exercises

**To log in to the ```<sitename>``` Drupal site:**

1. Navigate to https://wcmdemo7.sfsu.edu/```<sitename>```/login
2. Enter your SF State ID and password
3. You will be redirected to your site homepage.

**To log in to the SF State Qualtrics Survey Software:**

1. Navigate to sfsu.qualtrics.com
2. Enter your SF State ID and password
3. "Add a new discussion topic" to let me know that you have logged in.
4. Make a note if you would like to be added as a Collaborator to the Academic Scheduling Room Request Form.

####Adding YouTube Video

Not currently working with Editors because it strips iframe

1. Edit the page content
2. Select "Add YouTube Video" button.
3. Paste the YouTube video id in the field and select "OK", (only letters and numbers following the "v=" in the url)
4. Save your content

Explore Video Wrapper CSS to make responsive
```
.videoWrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}
.videoWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
```

####Adding Icons to Content

Bootstrap Glyphicons vs 3.2.0

1. Navigate to http://bootstrapdocs.com/v3.2.0/docs/components/#glyphicons
2. Copy glyphicon name text below the glyphicon (ex. glyphicon-asterisk)
3. Select the "Source" button in your content editor
4. Paste ```<span class="glyphicon <name>" aria-hidden="true">&nbsp;</span>``` in your code, replacing <name> with the text from step 2
5. Select "Save"

FontAwesome Icons vs 4.4.0

1. Navigate to http://fontawesome.io/icons/
2. Select the desired icon and copy the icon name after the icon (ex. fa-adjust)
3. Select the "Source" button in your content editor
4. Paste ```<i class="fa <name>" aria-hidden="true">&nbsp;</i> in your code, replacing <name>``` with the text from step 2
5. Select "Save"


###Client Website Responsibilities
**Copyright, content ownership**
* All content belongs to the site owner not AT/ITS
* It is your responsibility to know what can be posted on your website
* It is your responsibility to know what can be posted on your website, review the Web Pages Policy

**Privacy/Security**
* No sensitive data should be stored in Drupal!
* Do NOT share passwords, manage access careful

**Accessibility**

AT provides assistance with accessibility testing but it is the owner’s responsibility to understand requirements and verify the site content meets DPRC requirements.

**Branding**

For all public facing sites, you must understand and follow any guidelines from University Communications.
