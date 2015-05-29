#Web Support Deploy

**With Client**

**AT Web Support**
1. Pass the SF State Website Assessment (ACCESS website at http://www.sfsu.edu/access/webaccess/index.html#requirements)
    2. Go through all content pages and strip away any html styling. Check to see that headers are being used and are fall in a heirearchical structure.
    3. Run the automated SSBBart tool and fix errors (https://sfsu.ssbbartgroup.com/index.php)
    4. Fill out manual assessment (5 pages) (DPRC guidelines http://www.sfsu.edu/access/webaccess/assessment.html)
    5. Submit manual assessment to DPRC, access@sfsu.edu, with file accessibility matrix (if necessary).
4. Meet branding requirements
    5. The new site must meet branding requirements and be approved by University Communications. Visit the University Communications website at http://www.sfsu.edu/~puboff/. Then, email pubcom@sfsu.edu for approval.
Email drupalsupport@sfsu.edu with the approvals from DPRC and University Communications and they will make your site live.
6. Subdomain request: If you would like a dedicated subdomain -for your site e.g. <yoursite>.sfsu.edu (instead of sites.sfsu.edu/<yoursite>), please send an e-mail with the subdomain name to drupalsupport@sfsu.edu. The subdomain can provide support for HTTP access but not HTTPS access.
7. Redirect from your old site: Please e-mail drupalsupport@sfsu.edu to setup a redirect for your old URL. We will also walk you through how to link important pages directly to the new location.
8. Search who is linking to your site: We strongly recommend contacting customers who are linking to the site. Notify them that the site is updated and that the links to the site have changed.
    9. In Google search, type link:<your-current-url> (e.g.:  link:http://sfsu.edu)
    10. Google will list all the indexed web pages that are linking in (both internal and external web pages).
11. Update sfsu.edu home page, A-Z Index, and other links: If your site is listed on the www.sfsu.edu home page, A-Z Index or other SF State pages, email (drupalsupport@sfsu.edu) the links need to be changed and we will forward the request to Web Team on your behalf.
12. Request a local Google site search: If you would like a local Google site search that searches only your site content, please send an e-mail to drupalsupport@sfsu.edu with the site name and site URL. We will forward the request to Web Team on your behalf. Please allow up to five business days for the request to be processes.
13. Schedule a search re-crawl: We will send a re-crawl request to the Web Team on your behalf. If you had a custom collection for your old site, please send an e-mail to drupalsupport@sfsu.edu with the new URL. We will forward it to the Web Team so that they can update the collection to point to your new site.
14. Submit a ticket to have the ITS Google Analytics track the site.

##Manual Assessment  Cheat Sheet
A. A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).
**NA, F, P**

B. Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation.
**NA, F, P**

C. Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup. 
**NA, F, P**

D. Documents shall be organized so they are readable without requiring an associated style sheet. 
**P**

E. Redundant text links shall be provided for each active region of a server-side image map. 
**BLANK**

F. Client-side image maps shall be provided instead of server-side image maps except where the regions cannot be defined with an available geometric shape. 
**BLANK**

G. Row and column headers shall be identified for data tables. 
**NA, F, P**

H. Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers. 
**BLANK**

I. Frames shall be titled with text that facilitates frame identification and navigation. 
**BLANK**

J. Pages shall be designed to avoid causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz. 
**BLANK**

K. A text-only page, with equivalent information or functionality, shall be provided to make a web site comply with the provisions of this part, when compliance cannot be accomplished in any other way. The content of the text-only page shall be updated whenever the primary page changes. 
**P**

L. When pages utilize scripting languages to display content, or to create interface elements, the information provided by the script shall be identified with functional text that can be read by assistive technology. 
**BLANK**

M. When a web page requires that an applet, plug-in or other application be present on the client system to interpret page content, the page must provide a link to a plug-in or applet that complies with §1194.21(a) through (l). 
**NA, F, P**

N. When electronic forms are designed to be completed online, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues. 
**NA, F, P**

O. A method shall be provided that permits users to skip repetitive navigation links. 
**P**

P When a timed response is required, the user shall be alerted and given sufficient time to indicate more time is required. 
**NA, F, P**

1 Validate your HTML **P - but check if possible**
2 Create meaningful page titles. Page titles should contain unique, short and meaningful descriptions of the content or purpose of the page. **P F**
3 Use meaningful and unique text for links. **P F**
4 Ensure there is adequate color contrast on the page **P F**
5 Inform the user about pop-ups or new windows **NA, F, P**
6 Create accessible PDF, Word and PowerPoint Files **NA, F, P**
7 Create structured content **P F**
8 Ensure logical reading order of layout tables **BLANK**
9 Explain Acronyms and Abbreviations **NA, F, P**
I Are you using the latest Template version? **P F**
II Have you changed the screen reader note for the image bar? **P F**
III Is the page passing the automated assessment? **P F**
IV Have you changed any color or fonts in the template? **P F**
V Are only 7-10 main navigation links showing? **P F**