# Framer

https://www.framer.com/motion/

## backgroundImage

https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/

# Flexbox

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

# Tailwind config

Had to add configuration for inner html styling
https://tailwindcss.com/docs/content-configuration
https://stackoverflow.com/questions/74518155/in-tailwind-css-how-to-style-elements-while-using-dangerouslysetinnerhtml-in-re

# Markdown

https://dev.to/anobjectisa/how-to-dynamically-load-markdown-files-in-react-markdown-to-jsx-53fl
https://www.markdownguide.org/extended-syntax/

# Context for dark and light mode

https://www.freecodecamp.org/news/context-api-in-react/

# TODO

    // "build": "tsc && vite build",

add this back to package.json

# Fix for blog not fetching markdown dynamically

- Had to change the fetch method

https://stackoverflow.com/questions/67495471/cannot-load-markdown-md-inside-index-js

# Switched to hash router

- Had to switch since couldnt directly access pages
- Will switch back if decide to host on different place

https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages

# Blogs

- Add blog info to data/blogs.json
- Add main image to 'imgs/blogs/{blogName}' folder
  - Name main image the same name as folder
  - Add any subsequent images as well in the blog here
- Markdown file is added to 'public/blogs'

# Components in markdown file

- Need to ensure you add the component to the overrides first:

```
        <Markdown
          className="w-full p-5"
          options={{
            wrapper: "article",
            overrides: {
              h1: { component: Header },
              h2: { component: SubHeader },
              h3: { component: SubSubHeader },
              p: { component: Paragraph },
              blockquote: { component: Blockquote },
              code: { component: Code },
              WrappedImageText: {
                component: WrappedImageText,
              },
              // ul: { component: UnorderedList, props: { blogId: params.blogId } },
            },
          }}
        >
          {postText}
        </Markdown>
```
