# Portfolio Website

This portfolio website was built from the ground up using React, Vite, and Tailwind CSS to showcase my projects, technical skills, and professional experience. Rather than relying on a static website or website builder, I designed the application to be highly modular, data-driven, and easily maintainable, allowing new projects and blog posts to be added with minimal code changes.

## Application Architecture

The website follows a component-based architecture using React, emphasizing reusable UI components and maintainable code. Shared components such as the navigation bar, navigation links, project cards, and content viewers are designed to eliminate duplication while ensuring a consistent user experience throughout the site.

The project is organized so that content, presentation, and application logic remain separated, making the application easier to extend as additional projects and features are added.

## Theme Management

React Context is used to manage the application's global theme state, allowing visitors to seamlessly switch between light and dark modes from anywhere within the website.

The selected theme is applied consistently across all pages and components, providing a cohesive user experience while demonstrating the use of React's Context API for global state management.

## Client-Side Routing

Navigation throughout the portfolio is handled using React Router, enabling fast client-side routing without requiring full page reloads.

Reusable `NavigationBar` and `NavigationLink` components were created to follow DRY (Don't Repeat Yourself) principles, making navigation easier to maintain while ensuring consistency across desktop and mobile layouts.

## Markdown Content Management

Rather than hardcoding project descriptions and blog posts into React components, I implemented a markdown-based content system.

A reusable `MarkdownViewer` component dynamically loads and renders Markdown files as JSX, allowing both project documentation and blog articles to share the same rendering pipeline. This approach keeps content separate from the application's codebase, making it easy to update written content without modifying React components.

Routes are automatically generated based on metadata defined in JSON configuration files, allowing each project or blog post to have its own URL while requiring minimal configuration when adding new content.

## Data-Driven Design

Project and blog metadata is stored in JSON files, including information such as titles, descriptions, categories, images, and corresponding Markdown file locations.

The application dynamically reads this data to generate project cards, navigation links, page routes, image galleries, and content pages. This data-driven approach minimizes duplicated code while making the website highly scalable as additional content is added over time.

## Performance & Styling

The application is built using Vite, providing a fast development environment, optimized production builds, and efficient module bundling for improved performance.

Tailwind CSS is used for styling, enabling a utility-first workflow that promotes consistent design, responsive layouts, and rapid UI development. The website was built with a mobile-first approach, ensuring an optimized experience across desktops, tablets, and mobile devices while maintaining clean, maintainable styling throughout the application.

## Technical Highlights

This project demonstrates modern frontend development practices, including reusable component architecture, client-side routing, global state management, dynamic content rendering, and responsive design. By combining React, Vite, Tailwind CSS, Markdown, and JSON-driven content management, the portfolio serves not only as a showcase of my work but also as an example of how I structure scalable and maintainable web applications.
