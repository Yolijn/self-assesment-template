# Self assessment template

## What

A template for creating a page with your self-assessment of all skills in `src/data/skills.json`.

It has some basic styling and logic to enable `npm run deploy` of a github page if so desired.

To fill the progress indicators add the skill to your `/src/data/self-assessment.json` self assessment file.

As the full-stack of web developement is a major field, feel free to add subjects, topics and skills via pull-requests. This gives anybody using this template the ability to also assess their skill level on that topic.

If some of the skills should be split up, please let us know.

## How to use this template

Use this template to create your self-assessment page in a new public/private repo of your choice.

In this repo you're free to also remove skills, rename topics, change the styling or layout. If you feel these changes might benefit the community as a whole, please also create a PR with the relevant changes for the template repo.

The template also includes `gh-pages` to quickly deploy your assessment publicly as a github page. To make this happen, run `npm run deploy` after enabling github pages in your newly created repo.

## Asking other people for their assessment of your skills

As your self-assessment is a git repo, ask your collegues, friends and family for an assessment. They can just create a branch and add their assessment in the `/data` folder.

At some point someone might just build a switcher to quickly switch between assessments in the future 😇
