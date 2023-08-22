---
title: Creating a personal website in Astro
tags:
  - Astro
  - Static
  - React
  - Cloudflare
  - Pages
---

This blog post will detail the creation of my new static personal webiste, which includes a simple blog. It's what you're seeing right now.

### Frameworks and meta-frameworks

My first consideration was what meta-framework I'd be using. I pretty quickly chose Astro. It's build for creating performant, static sites. It also has a great "collections" system available through the `astro:content` API. As for my frontend framework, I chose React. It's an industry standard that I've been using for a while now. Although it's not the most performant, or the most well suited for use with Astro, I chose it as I simply wanted another React project that I could put on my Github.

### Styling

For styling, I went with Tailwind CSS. I have experience with vanilla CSS, SCSS, CSS modules, and even a few CSS-in-JS libraries. By far the best I've used though, is Tailwind CSS. At first, I hated it. However, after giving it a chance, the ability to tie my styles to my components whilst making use of a system that stopped me making bad style choices grew on me. Now, I'll probably never choose to make a site without it. Tailwind also has a useful and official plugin called `@tailwind/typography`. It allows for easy formatting of markdown content. That's what you're seeing now, and all it took was two classes. If you're curious, take a look in the inspector and you'll see what I mean.

### The upsides of Astro

I'm currently writing this blog post in a markdown file with some frontmatter. This is one of Astro's biggest strengths. You can represent your content in markdown and type-validated frontmatter. You can then fetch these collections at build time and bake them into your static site. It's not a flawless system, especially when trying to render content into React or other framework's components. That said, overall it's amazing system.

Astro also allows you to specify which components from other frameworks should be hydrated, and when. `client:load` hydrates a component on page load, whereas `client:visible` hydrates when the component comes into view, and `client:idle` hydrates once the browser is in an "idle" state. This allows large portions of your site to ship zero JS, whilst other more interactive sections can have as much JS as is needed, either on load or after.

### The downsides of Astro

Astro is primarily a multipage static-site generator. So there's no client side routing. This is changing, however, with a client side router on the way, as well as support for the experimental page transitions API. If there was no client side routing planned, Astro would've been a much harder sell.

Another very slight downside (if you could even call it that) of Astro is that you're unable to use framework-specific shared-state solutions like React's context API. This is easily replaced with a framework-agnostic solution, such as the `nanostores` which the Astro docs recommend, and the search function of this blog uses. It's barely an issue, and some people even prefer atom-based state solutions over React's far from perfect context API.

### My small issue with going full static

One of the features that I wanted on my [homepage](/#github) was a list of my recent Github projects. Achieving this in a fully-static and server rendered way was a little awkward. The solution I went with was to have my repositiories rendered by React. This component would then hydrate once scrolled into view with `client:visible`. Once hydrated, it could then fetch an up-to-date list of my repositories from Github's public API. The new repositories could then be added to the list. It's not perfect, but it works, and the alternative was to pay for a real server.

### Conclusion

I'd say I'm more than happy with the website I've built. It's snappy, free to host, and pretty well styled if I do say so myself. If you're looking to create a new personal website, blog, or both, then definately consider the stack I've used here. Switching React for Solid, Svelte, or even HTMX if you're into that, might be wise if you aren't looking to build on your React experience. Other than that, it's a brilliant developer experience.
