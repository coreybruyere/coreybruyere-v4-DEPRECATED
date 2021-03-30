---
slug: '/post/what-is-a-ux-engineer'
date: '2020-07-30'
title: 'What is a UX Engineer?'
layout: 'post'
type: 'post'
tags: ['development', 'musings']
---

# What is a UX Engineer?

A couple years ago, while I was pushing out my resume to potential employers, I was struggling with my job title as a _Front-End Developer_. I remember feeling that their wasn't a specific title for the type of front-end development that _I_ was interested in. It wasn't until prominent voices in the web community started discussing the importance of style-guides, accessibility, performance, CSS maintenance, and eventually design systems, theme specs, and component library API design that I knew there were other people like me. People who, at the end of the day, are still Front-End Developers/Engineers but enjoy working on the "front of the front-end". It was a breath of fresh air to see other people discussing the "front of the front-end" and you can read some of those insights [here](https://css-tricks.com/the-great-divide/), [here](https://medium.com/webtraining/what-is-a-front-end-architect-12a955f96363), or [here](https://bradfrost.com/blog/post/frontend-design-react-and-a-bridge-over-the-great-divide/). The first article, [_The Great Divide_](https://css-tricks.com/the-great-divide/) does a great job at dissecting the current state of front-end development. The tl;dr is that, as an industry, we should be writing more descriptive job postings and maybe even coming up with better job titles that are more descriptive of the job at hand instead of using the umbrella "Front-End Developer" title. That article also stressed the importance of recognizing the "divide" in front-end development and respecting and valuing both sides of it since both sides have much to offer. It was after reading these articles and others similar to it that I realized I wanted to focus on this end of the front-end, but it wasn't until a couple years later that I started to notice people had a name for this type of front-end position and it's called a _UX Engineer_.

## What does a UX Engineer do

A UX Engineer falls somewhere in between a Front-End Engineer and a UX Designer. They're still Front-End Developers, but they might be a bit more design savvy and/or they understand the importance of continuous collaboration with Designers. I'd imagine a small and productive product team looking something like this:

<dl>
  <dt><strong>UX Designer</strong></dt>
  <dd>This role is focused on product design and research using tools like Figma, Adobe Creative Suite, Sketch, or Framer X to display and organize different views and components.</dd>
  <dt><strong>UX Engineer</strong></dt>
  <dd>This role is responsible for working with designers to create and prototype accessible and performant UI components. This role bridges the gap between Designers and Engineers while ensuring a delightful user and developer experience.</dd>
  <dt><strong>Front-End Engineer</strong></dt>
  <dd>Front-End Engineers are focused on what I call the "back of the front-end", meaning they're responsible for API calls, application architecture, state management, and other business logic-y demands on the client-side.</dd>
  <dt><strong>Back-End Engineer</strong></dt>
  <dd>This role can have multiple sub roles to fill demands, but to make things simple a Back-End Engineer is responsible for DevOps, managing and securing databases, handling continuous integration and more. </dd>
</dl>

As noted above, the crucial responsibility for a UX Engineer is to build the bridge between Engineers and Designers. The tool they primarily use to bridge that gap is the _design system_, which should be composed of a library of tested and documented components, design principles, design tokens, and public (visible to your organization) documentation.

### Tools of the trade

This isn't an exhaustive list but below are _some_ of the tools and technologies a UX Engineer might use on a day-to-day basis in 2020.

- React / Vue (component-based JS framework)
- styled-components / emotion
- theme-ui / styled-system
- Tailwind CSS
- Figma / Sketch
- Storybook (playground / documentation generator)

### Daily responsibilities

- Write accessible and semantic HTML.
- Write maintainable and browser-friendly CSS.
- Create and maintain a library of accessible and performant components in an all-encompassing design system utilizing popular Javascript frameworks.
- Create and maintain a theme spec that ensures consistent UI across all components.
- Create a consistent API across all components to ensure ease-of-use for consumers of design system.
- Manage component state to effectively build UX across all states of an interactive UI.
- Publish and release new versions of design system that don't cause breaking changes.
- Write visible documentation for design system for other engineers to reference and contribute to.
- Implement visual, unit, and automated accessibility tests.
- Work with designers to make sure theme spec covers all brand guidelines, including animations, colors, and typography.
- Work with designers to ensure feasibility of new UX/UI
- Work with engineers and consumers of design system to remove any pain points of design system while ensuring a quality developer experience.
- Be a vocal proponent of accessibility, performance, and inclusiveness.
- Encourage others to contribute to the design system in the form of conversations, feedback, documentation, or code.

At the end of the day, a UX Engineer is responsible for crafting a user-friendly experience for both:

1. _Developers_ - in the form of clean API design, tested and working components, and visible, well-maintained documentation to ensure rapid development from engineers using the system.
2. _Users_ - in the form of usable, accessible, and performant interfaces that can easily be used from a variety of users with various devices and internet connections. These experiences shouldn't be burdensome to the user, they should empower the user to use the webapp or website how they prefer while also allowing unique branding to be in place to allow the organization or company to set themselves apart from competition.

This post might not cover all the skills and expertise that a UX Engineer might have, but I believe it to be a solid example of what a UX Engineer might look like in 2020. Let me know what you think via email, I'm curious what other self-identified UX Engineers are working on because one day when I grow up I'm gonna be a UX Engineer! 😂
