# Welcome to Meteor comment bug reproduction!
## Only happening in template inclusion
A HTML comment containing an opening tag of a HTML element that is not allowed in the HTML structure will trigger sanitizing.

### Expected
HTML code to be rendered as intended, not taking into account comments.

### Result
HTML code is stripped of invalid characters based on HTML code in HTML comments.
Only happens when HTML comment precedes wanted HTML content AND it contains an opening HTML tag which would break HTML validation when rendered.

### Conclusion
HTML comments containing opening elements will be attempted to be rendered. After rendering it will trigger sanitizing filters after which certain elements get removed.
