#Web Support Design

##With Client
* Determine target Audience
* Develop 3 User Personas
    * name, title, 1-2 sentence story describing the persona) – behavior, attitudes, attributes of key users
* Compile a Content Matrix
    * Identify content contributors
    * Prioritize content
    * Assign due dates

##AT Web Support
* Scope
* Site crawl/content inventory/content audit (https://www.xml-sitemaps.com)
    * url, title, format, online readability, photos, meta data
* Gap analysis
    * Extend content audit with what you need in order to achieve your goals
* Card sorts
* Site map
* Content model
* Taxonomy plan
* Design metaphors
* Visual mockups – Wireframe https://wireframe.cc , omnigrafle, **https://cacoo.com**
    * https://wireframe.cc/MRANhk
    * Web Layout Guidelines

###File Matrix

Generate Website File Report

1. Navigate to SSB Bart tool (AMP)
2. Log in with username and password supplied by DPRC
3. Run an automated accessibility report on current client site
    4. Dashboard > Accessibility on Demand
    5. Enter current client site URL in "Start URL"
    6. Select "Advanced Configuration Options"
        7. Change "Max. Page Count" to a value at least 2 times the number of pages in the current site
        8. Select "Path Restriction"
        9. Select "Make it happen"
    10. Select report link when the test is completed
    11. Select Document Inventory > Document Inventory Excel Report
    12. Use the report as the start of the Accessibility File Report
    13. Run Full Accessibility report in Adobe Professional on each document
    14. Create a table with the following categories
        15. File: Direct link to file
        16. Linking Page: Page(s) the file links on
        17. Type: Type of file (PDF, DOC, XLS, etc)
        18. Accessible Y/N: Does this document pass accessibility review
        19. AT Recommendation: Reccomended remediation method (Turn into webapage, Qualtric Survey, Accessible PDF, Delete)
        20. Author: Content author repsponsible
        21. Keep Y/N: Will the file remain on the site?
        22. What its used for?: Description of the file purpose
        23. Method to make Accessible: Authors choice for remediation
        24. When will file be made accessible: Timeframe when the file will be accessible (0-1 month, 1-3months, 3-6months, 6-12months, 12-18months)

**Instructions**
Please review your sections and fill out the following file matrix spreadsheet by 4/24/15.

1. If the document falls on a page within your Unit enter the corresponding Unit Letter ("B" for Budget, "SO" for Scheduling Office, and "SM" for Space Management).
2. Identify whether the document can deleted by entering "Y" for Yes Delete and "N" for No Keep.
3. If the file is being kept describe what the file is being used for.

AT Web Support reviews the files that are not being removed and provide a suggested plan:
* Documents to become webpages or web forms – Many documents can be converted to accessible Drupal pages or to Qualtrics surveys
* Essential documents – Must be available in print to collect signatures or be part of a physical process. These must be redone as accessible PDF/DOCs.

Some other cases:
* Archived documents that will be phased out can provide a timeline for when they will be removed from the website.
* Large manuals that are regularly updated and designed to be printed (ex CS user guide) will be made accessible.  The department will need to maintain the manual accessibility through updates.

###Page Templates

####Header/Menu Layout

Template structure basics provided by University Communications.

**Banner Image**

Image repeats across browser.



1. System > SF State Theme Settings
2. Select "Banner Image Tab"
    3. Browse for desired image and select ""Upload"
    4. Enter appropriate "Alt text"
    5. Enter the desired "Banner image height"
    (Banner image height should not be larger than 3500px to ensure that the image does not extend beyond the screen fold of small desktop sceens 600X800)
7. Select "Save configuration"

**Header Block**

A block image or a view block of rotating images can span the header container.  Text can be used over the image but DPRC recommends a dark semi transparent text background to ensure sufficient color contrast.



1. Structure > Blocks > Add block
2. Enter "Block title" if desired or leave blank
3. Enter "Block description" to identify the block in the blocks list
4. Upload an image in the "Body block" using the image button in the menu bar
    5. Upload and browse for an image that is at least 1140px wide
    6. Enter the image "Alternative text"
    7. Select "Ok"
8. Select the image in the editor and assign "Image responsive" to it in the Styles menue
9. Enter "container" in the CSS class(es) box
10. Select "Header" in the SF State Template (default theme) pull-down in the Region Settings
11. Select "Save block"

**Content Area Blocks**

Build out the page using blocks solely in the Content area.  The Content area can be used as one column or two columns.



Landing page without using the navigation region.  This was approved if the main navigation links were provided in the content area.



###Content Area Layout
Content area layout recommendations provided by University Communications.

Standard 2 column content area with blocks.  The blocks can not extend outside of the designated column.  This is the most scalable template option. 



One column content area with stacked layers of blocks all col-12 width



One column content area with blocks layered as:

1. an image block of col-12 width
2. Main page content block of col-9 width
3. Two blocks of col-3 width
4. Footer block of col-12 width.
The Sidebar blocks will stack alongside the Main Content until the Main Content block ends then the sidebar blocks will move underneath.  The blocks using the Bootstrap column classes can not have styles that include left or right margins because it breaks the grid layout.  

Wireframes Powerpoint