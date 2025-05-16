/* 
what is aria-live?
--> aria-live is an ARIA (Accessible Rich Internet Applications) attribute that is used to indicate to assistive
 technologies (like screen readers) that the content of a particular element may change dynamically and that 
 the user should be notified of these changes.
--> It is commonly used in web applications to provide real-time updates to users, such as in chat applications,
 notifications, or any other dynamic content that may change without a full page reload.


 type of aria-live
--> There are three values for the aria-live attribute:
1. polite: This value indicates that updates to the content should be announced at the next available opportunity,
   without interrupting the user. It is used for non-urgent updates that do not require immediate attention.
2. assertive: This value indicates that updates to the content should be announced immediately, interrupting the
    user if necessary. It is used for urgent updates that require immediate attention.
3. off: This value indicates that updates to the content should not be announced at all. It is used when you do
    not want to notify the user of changes to the content.  
--> The aria-live attribute can be applied to any HTML element, but it is most commonly used on elements that
   contain dynamic content, such as <div>, <span>, or <p> elements. When the content of the element changes,   
   
   example:
   1) <div aria-live="polite">New message received</div>
   2) <div aria-live="assertive">Error: Unable to save changes</div>
    3) <div aria-live="off">This content will not be announced</div>
*/

/*  */
