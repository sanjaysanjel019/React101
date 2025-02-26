## What is Context API ?
--> Context API is a feature that allows you to manage and share state acorss your component tree without having to pass props down manually
at every level. It is useful for scenarios where you need to share data or functions across many components, especially when these components are deeply nested.

Why is it needed ?

For ex: we have a chain of components on a component tree

Component A ----props---> Component B ------props-----> Component C

Code will be like :::: 
const name = "Sanjay";
<ComponentA props={vame}>
<CompomnentB props={name}>


