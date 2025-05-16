// What are aria label?
// --> The aria-label attribute is an ARIA (Accessible Rich Internet Applications) attribute that is used to provide
//  a text alternative for an element that does not have a visible label. It is commonly used in web applications
//  to improve accessibility for users with disabilities, particularly those who rely on assistive technologies
//  like screen readers.
// --> The aria-label attribute can be applied to any HTML element, but it is most commonly used on elements that
//  do not have a visible label, such as buttons, icons, or images. When the aria-label attribute is used, the
//  screen reader will read the value of the aria-label attribute as the label for the element, instead of the
//  visible text content of the element.

// Most commonly used on elements that do not have a visible label, such as buttons, icons, or images. When the
//  aria-label attribute is used, the screen reader will read the value of the aria-label attribute as the label
//  for the element, instead of the visible text content of the element.

// When to use aria-label?

// --> The aria-label attribute should be used when an element does not have a visible label, or when the visible
//  label is not descriptive enough to convey the purpose of the element. It is important to ensure that the value
//  of the aria-label attribute is descriptive and meaningful, as it will be read by assistive technologies to
//  provide context to the user.

// Most companaly used aria attributes?

// --> The most commonly used ARIA attributes include:
// 1. aria-label: Provides a text alternative for an element that does not have a visible label.
// 2. aria-labelledby: Identifies the element that labels the current element.
// 3. aria-describedby: Identifies the element that describes the current element.
// 4. aria-hidden: Indicates whether an element is visible or hidden to assistive technologies.
// 5. aria-live: Indicates that an element's content may change dynamically and that the user should be notified
//    of these changes.
// 6. aria-checked: Indicates the current "checked" state of checkboxes and radio buttons.
// 7. aria-expanded: Indicates whether a collapsible element is expanded or collapsed.
// 8. aria-disabled: Indicates whether an element is disabled or not.
// 9. aria-required: Indicates whether an input field is required or not.
// 10. aria-invalid: Indicates whether the value of an input field is invalid or not.
// 11. aria-pressed: Indicates the current "pressed" state of toggle buttons.
// 12. aria-selected: Indicates the current "selected" state of items in a list or menu.
// 13. aria-valuenow: Indicates the current value of a range widget, such as a slider or progress bar.
// 14. aria-valuemin: Indicates the minimum value of a range widget.
// 15. aria-valuemax: Indicates the maximum value of a range widget.

// what developer should keep in mind while using aria-label?
// --> When using the aria-label attribute, developers should keep the following best practices in mind:
// 1. Use descriptive and meaningful labels: The value of the aria-label attribute should be clear and concise,
//    providing enough context for the user to understand the purpose of the element.
// 2. Avoid using aria-label for elements with visible labels: If an element already has a visible label, it is
//    not necessary to use the aria-label attribute. Instead, use the aria-labelledby attribute to reference the
//    visible label.

// How to research aria attributes?
// --> To research ARIA attributes, developers can refer to the following resources:
// 1. W3C ARIA Authoring Practices: This is a comprehensive guide that provides best practices for using ARIA
//    attributes in web applications. It includes examples and explanations of how to use ARIA attributes
//    effectively. (https://www.w3.org/TR/wai-aria-practices-1.1/)
// 2. MDN Web Docs: The Mozilla Developer Network (MDN) provides detailed documentation on ARIA attributes,
//    including usage examples and browser compatibility information. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
// 3. WebAIM: WebAIM (Web Accessibility In Mind) is a non-profit organization that provides resources and
//    training on web accessibility. They have a comprehensive guide on ARIA attributes and their usage.
//    (https://webaim.org/techniques/aria/)
// 4. Accessibility Developer Tools: These are browser extensions that can help developers test and debug
//    accessibility issues in their web applications. They can provide insights into how ARIA attributes are
//    being used and whether they are being implemented correctly. (e.g., Axe, Lighthouse)
// 5. Online forums and communities: There are many online forums and communities where developers can ask
//    questions and share knowledge about ARIA attributes and web accessibility. Some popular ones include
//    Stack Overflow, Reddit, and the WebAIM mailing list.
// 6. Accessibility blogs and articles: Many accessibility experts and organizations publish blogs and articles
