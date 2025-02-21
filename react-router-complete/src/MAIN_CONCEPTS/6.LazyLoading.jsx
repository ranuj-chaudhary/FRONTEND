// Lazy Loading in React is used to initially load and render limited data on the webpage.
// It helps to optimize the performance of React applications. The data is only rendered when
//  visited or scrolled it can be images, scripts, etc. Lazy loading helps to load the web
//   page quickly and presents the limited content to the user that is needed for the
//    interaction lazy loading can be more helpful in applications that have high-resolution
//     images or data that alters the loading time of the application.

Syntax:
// Implement Lazy Loding with React.Lazy method
const MyComponent = React.lazy(() => import('./MyComponent'));

// Note: instead of loading component directly load component when required:
//     1) on navigation transition