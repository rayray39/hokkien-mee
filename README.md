# Hokkien Mee
Craft engaging LinkedIn posts effortlessly using AI. Simply provide a short summary, choose your preferred writing style (e.g. professional, storytelling, inspirational, or marketing), specify your target audience, and add a call to action — the app then generates a polished LinkedIn post tailored to your inputs.  

Built with NextJS and Typescript, HokkienMee features a clean and simple interface for seamless post creation.

## Dependencies
- **OpenRouter**, the web application utilizes ``mistralai/mistral-7b-instruct:free``, via OpenRouter's API, on the back to generate the curated LinkedIn post.
- **Mantine UI**, the web application utilizes the CSS components (eg. Loader) from Mantine UI due its ease of use and modern design.
- **Vercel's Serverless Functions**, the web application does not have an actual "backend", it however utilizes Vercel's cloud environment to process a RESTful API call, thus the name serverless.

## Main Components
- **Home**, this is the home page of the web application.
- **Main Content**, the main page where you will need to provide summary of your post, in less than 300 characters.
- **Select Style**, this is the page where you will select how your post should sound and feel, options include professional, inspirational, storytelling, marketing, and humorous.
- **Audience**, this is the page where you will define your target audience, options include recruiters, industry peers, potential clients, and general network.
- **Call to Action**, this is the page where you define your call to action, because every viral post needs to end with a strong and memorable message!
- **Finish**, this is the page where all your previous options will be shown and you can either generate the post of click back to update your options.
- **Gen Content**, this page shows the LLM generated LinkedIn post, click on the copy button to copy it to your clipboard, or click on back to home to return to the home page.

## Learning Points
- **NextJS's project structure**, I can see why many people are speaking so highly of NextJS. NextJS's project structure which ensures that each unique page/component has its own page.tsx, taking seperation of concerns to the next level.
- **Vercel's Serverless Functions**, serverless functions are simple and cool. I used to write a seperate React frontend and use ExpressJS on my backend. As my projects start to become more ambitious, I realised that I will need a server to host my backend. This makes it more complicated, not too mention that most sites that provide hosting services are not free.  
Using serverless functions, the cloud provider spins up a runtime environment for you to execute whatever you need in the API call. After the execution is completed, this runtime environment "shuts down". Effectively, you will only need to pay for the duration that this runtime environment is online. Since NextJS is built by Vercel, using their serverless functions is a breeze and it is as simple as defining an API endpoint, and it is free.
- **Tailwind CSS**, writing CSS code is painful, writing Tailwind CSS code is even more painful. However, as I forced myself to use Tailwind CSS in this project, I start to see some of the advantages it has.  
    1. Developer experience, there isn't a need to constantly switch between my .tsx files and .css files, everything is defined inside the .tsx files.
    2. Bundle optimisations, using Tailwind CSS keeps the CSS bundle size small in production builds. This makes websites feel faster.
    3. Component first design, Tailwind CSS provides reusable CSS classes to quickly style components, this goes well with NextJS's component-based architecture.

# NextJS
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
