// ACCESSIBILITY GUIDELINES
/* 
Web Content Accessibility Guidelines (WCAG) 2.0

WCAG stands for Web Content Accessibility Guidelines. It’s a set of technical standards developed by the W3C
 (World Wide Web Consortium) to make web content more accessible to people with disabilities.
 
Conformance Levels
There are three levels of conformance:

A (Minimum)

AA (Mid-range, widely adopted standard)

AAA (Highest)

Most organizations aim for Level AA compliance. 

WCAG 2.0 Level AA – Developer Checklist
🟦 Perceivable
 Images have meaningful alt text.

 Decorative images have empty alt="".

 Video content has captions (for prerecorded).

 Audio-only has a transcript.

 Text has at least 4.5:1 contrast ratio.

 Content can be resized to 200% without loss.

 Avoid using text in images (except logos).

 Use semantic HTML for headings, lists, tables.

🟦 Operable
 All functionality is accessible via keyboard (tab, enter, space).

 Pages don’t trap keyboard focus.

 Navigation order is logical and intuitive.

 Flashing content does not exceed 3 flashes per second.

 Each page has a clear title.

 Provide multiple ways to navigate (e.g., nav bar + search).

 Use ARIA landmarks (role="navigation", main, etc.).

 Focus indicators are clearly visible (outline, border, etc.).

🟦 Understandable
 Page language is declared (e.g., <html lang="en">).

 Labels match the purpose of controls.

 Navigation is consistent across pages.

 Error messages are specific (e.g., “Email is required”).

 Form fields have associated <label>s.

 Suggestions provided for fixing errors.

🟦 Robust
 HTML and ARIA is valid and semantic.

 Content is compatible with screen readers and assistive tech.

 Dynamic content updates are announced (e.g., via aria-live).

🧪 Accessibility Testing Tools
// Chrome Devtools 
 i) Accessibilty tab to check accessibility tree
 ii) Chrome Dev Tools (Inspect Element Shortcut: ctrl + shift + c)
        --> color contrast checking with element selector tool
 iii) Lighthouse
        --> Accessibility checking

🔍 Browser Extensions
WAVE (Chrome/Firefox) – Visual accessibility checker
https://wave.webaim.org/extension

axe DevTools by Deque – Developer-focused audits
https://www.deque.com/axe/devtools/

Lighthouse in Chrome DevTools → Accessibility tab


🛠️ Online Validators
WebAIM Contrast Checker 

Accessibility Insights

W3C Validator

👨‍🦯 Manual Testing
Tab through your site: Can you reach everything? Is focus visible?

Use a screen reader (e.g., NVDA on Windows, VoiceOver on macOS).

Turn off styles to test semantic structure.


WCAG 2.0 Level AA – Developer Checklist
---------------------------------------

🟦 Perceivable
 Images have meaningful alt text.

 Decorative images have empty alt="".

 Video content has captions (for prerecorded).

 Audio-only has a transcript.

 Text has at least 4.5:1 contrast ratio.

 Content can be resized to 200% without loss.

 Avoid using text in images (except logos).

 Use semantic HTML for headings, lists, tables.

🟦 Operable
 All functionality is accessible via keyboard (tab, enter, space).

 Pages don’t trap keyboard focus.

 Navigation order is logical and intuitive.

 Flashing content does not exceed 3 flashes per second.

 Each page has a clear title.

 Provide multiple ways to navigate (e.g., nav bar + search).

 Use ARIA landmarks (role="navigation", main, etc.).

 Focus indicators are clearly visible (outline, border, etc.).

🟦 Understandable
 Page language is declared (e.g., <html lang="en">).

 Labels match the purpose of controls.

 Navigation is consistent across pages.

 Error messages are specific (e.g., “Email is required”).

 Form fields have associated <label>s.

 Suggestions provided for fixing errors.

🟦 Robust
 HTML and ARIA is valid and semantic.

 Content is compatible with screen readers and assistive tech.

 Dynamic content updates are announced (e.g., via aria-live).

🧪 Accessibility Testing Tools
🔍 Browser Extensions
WAVE (Chrome/Firefox) – Visual accessibility checker
https://wave.webaim.org/extension

axe DevTools by Deque – Developer-focused audits
https://www.deque.com/axe/devtools/

Lighthouse in Chrome DevTools → Accessibility tab

🛠️ Online Validators
WebAIM Contrast Checker

Accessibility Insights

W3C Validator

👨‍🦯 Manual Testing
Tab through your site: Can you reach everything? Is focus visible?

Use a screen reader (e.g., NVDA on Windows, VoiceOver on macOS).

Turn off styles to test semantic structure.
 */
