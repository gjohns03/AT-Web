#Web Support Deploy

##With Client
1. Review the site on the production server and wait for approval to place the subdomain redirect.

##AT Web Support

1. Pass the SF State Website Assessment ([ACCESS](http://www.sfsu.edu/access/webaccess/index.html#requirements))
    2. Go through all content pages and strip away any html styling. Check to see that headers are being used in the heirearchical structure.
    3. Run the automated [SSBBart tool](https://sfsu.ssbbartgroup.com/index.php) and fix errors. 
    4. Fill out manual assessment (Cheat Sheet below or use[DPRC guidelines]( http://www.sfsu.edu/access/webaccess/assessment.html)).
    5. Submit manual assessment to DPRC, access@sfsu.edu, with file accessibility matrix (if necessary).
4. Meet branding requirements
    5. The new site must meet branding requirements and be approved by University Communications. If only AT supported styles are used which are preapproed by University Communications, the sites should pass without issues.
5. Email drupalsupport@sfsu.edu with the approvals from DPRC and University Communications and request that your site be moved to production (sites7.sfsu.edu/sitename).
6. Request a subdomain name for the site (sitename.sfsu.edu) to drupalsupport@sfsu.edu. The subdomain can provide support for HTTP access but not HTTPS access.
7. Request a URL redirect for the old site to drupalsupport@sfsu.edu.
8. Update login link on the /login page by replacing ```wcmdemo7``` with ```sites7```.
8. Search who is linking to your site and contact customers who are linking to the site to notify them that the site is updated and that the links to the site have changed.
    9. In Google search, type link:site-url (e.g.:  link:http://sfsu.edu)
    10. Google will list all the indexed web pages that are linking in (both internal and external web pages).
11. Request link updates on the [SFSU homepage](http://www.sfsu.edu/), [A-Z Index](http://www.sfsu.edu/atoz/), [Academic Departments](http://www.sfsu.edu/deptpage/acaddept.htm), and [Administrative Units](http://www.sfsu.edu/deptpage/admdept.htm) to drupalsupport@sfsu.edu.
12. Request a local Google site search and or re-crawl to drupalsupport@sfsu.edu with the site name and site URL.
14. Submit a ticket to add the AT Team to the Google analytics tracking the new site.

###Manual Assessment  Cheat Sheet

* A. Text equivalent **NA, F, P**
* B. Alternatives for multimedia **NA, F, P**
* C. Information conveyed with color also available without color **NA, F, P**
* D. Organized documents **P**
* E. Redundant text links **BLANK**
* F. Client-side image maps **BLANK**
* G. Row and column headers **NA, F, P**
* H. Associate data cells and header cells **BLANK**
* I. Frame titles **BLANK**
* J. Screen flicker **BLANK**
* K. A text-only page **P**
* L. Script identified with functional text **BLANK**
* M. Applet, plug-in link **NA, F, P**
* N. Forms **NA, F, P**
* O. Skip navigation **P**
* P Timed response **NA, F, P**

1. Validate your HTML **P - but check if possible**
2. Meaningful page titles **P F**
3. Meaningful and unique text for links. **P F**
4. Adequate color contrast **P F**
5. Pop-ups or new windows **NA, F, P**
6. Accessible files **NA, F, P**
7. Structured content **P F**
8. Logical reading order of layout tables **BLANK**
9. Explain Acronyms and Abbreviations **NA, F, P**

* I. Are you using the latest Template version? **P F**
* II. Change the screen reader note for the image bar? **P F**
* III. Is the page passing the automated assessment? **P F**
* IV. Have you changed any color or fonts in the template? **P F**
* V. Are only 7-10 main navigation links showing? **P F**