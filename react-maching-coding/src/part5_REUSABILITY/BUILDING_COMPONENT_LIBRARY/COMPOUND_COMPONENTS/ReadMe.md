# Compound Components Quiz

--> Flattens the structure
--> Easily pass props to more deeply-nested components.

1. How would you explain the concept of compound components in React to someone who
   only knows the very basics of React?
   Compound components are like interconnected conponents that have parent and child relationship.
   For example: ordered list and list element or select and option element.
   Same way we are making compound components so that they have some components have parent and chilre relationship. It makes component more reusable and customisable becuause now we have
   full control in which order to render each children.

2. What are some examples of HTML elements that work together to add functionality
   or styling to each other?
   orderlist <ul><li></ul>
   select <select><option></option> </select>
   form <form> <input type="text" /><input type="submit"> </form>

3. How can compound components help you avoid having to drill props multiple levels
   down?
   Now we can lift the state to Stateful component where all the children can share state or we
   can use context to avoid prop drilling.
   OR
   Compound component "flatten" the heirarchy that I would otherwise need to pass
   props through. Since I need to provide the children to render, the parent-most
   component has direct access to those "grandchild" components, to which it can
   pass whatever props it needs to pass directly.

# React.children

--> Fragile/Deligate
--> Limited in depth
