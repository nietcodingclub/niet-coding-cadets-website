# NIET Coding Cadets Website — Developer Guide

Welcome to the **NIET Coding Cadets website**.

This guide is for future Cadets who will maintain, update and improve the website.

You don't need to understand the entire project before making a change.  
Just find the section you want to update and follow the instructions.

---

## Quick Guide

| I want to change... | Go to... |
|---|---|
| Club information | `src/data/site.ts` |
| Events | `src/data/events.ts` |
| Event posters | `src/assets/events/` |
| Achievements | `src/data/achievements.ts` |
| Team members | `src/data/team.ts` |
| Gallery | `src/data/gallery.ts` |
| Website design/UI | `src/components/` |
| Pages | `src/routes/` |
| Global styles | `src/styles.css` |
| Images | `src/assets/` |

**Simple rule:**

> **Content → `src/data/`**  
> **Images → `src/assets/`**  
> **UI → `src/components/`**  
> **Pages → `src/routes/`**  
> **Styles → `src/styles.css`**

---

# 1. Project

### Live Website

https://nietcodingclub-niet-coding-cadets-website.nietcodingcadets.workers.dev/

### GitHub Repository

https://github.com/nietcodingclub/niet-coding-cadets-website

### Tech Stack

- React
- TypeScript
- TanStack Start
- TanStack Router
- Vite
- Tailwind CSS
- Nitro
- Cloudflare Workers

---

# 2. How to Run the Website

First, install the dependencies:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

Usually it will look something like:

```text
http://localhost:3000
```

Keep the terminal running while working on the website.

---

# 3. Changing Club Information

### File

```text
src/data/site.ts
```

Use this file for information such as:

- Club name
- Department
- Description
- Statistics
- Social media links
- Contact information
- Join links

If you want to change something **about the club itself**, check this file first.

---

# 4. Adding or Updating Events

### File

```text
src/data/events.ts
```

This is the main file for events.

You may need to update:

- Event name
- Date
- Time
- Venue
- Category
- Status
- Description
- Poster
- Registration link
- Deadline
- Rules
- Eligibility
- Prizes
- Winners

### Before adding an event

Look at an existing event in the file and follow the same structure.

Don't randomly add new fields unless the website actually needs them.

---

# 5. Adding Event Posters

### Folder

```text
src/assets/events/
```

Put event posters/images in this folder.

Then import the image into:

```text
src/data/events.ts
```

Example:

```ts
import newEvent from "@/assets/events/new-event.png";
```

Then use it in the event:

```ts
poster: newEvent,
```

### Tip

Try to keep image sizes reasonable.

Don't upload a huge image if a smaller version will look exactly the same on the website.

---

# 6. Updating Achievements

### File

```text
src/data/achievements.ts
```

Use this for:

- Club achievements
- Competition results
- Awards
- Rankings
- Major milestones
- Verified student/team achievements

### Important

This is an official club website.

**Never add fake or unverified information.**

Before publishing an achievement, make sure the result, ranking, award or statistic is actually correct.

---

# 7. Updating the Team

### Main file

```text
src/data/team.ts
```

You may also need to check:

```text
src/components/site/Team.tsx
```

When the club leadership changes, update:

- Names
- Roles
- Photos
- Social links
- Other relevant information

Remove outdated information when necessary.

Keep the current team information accurate.

---

# 8. Updating the Gallery

### File

```text
src/data/gallery.ts
```

Images are generally stored inside:

```text
src/assets/
```

Gallery content can include:

- Events
- Workshops
- Competitions
- Team activities

Whenever possible, use real club photographs instead of placeholders.

---

# 9. Updating Social Links

Start with:

```text
src/data/site.ts
```

Check this file before changing:

- Instagram
- LinkedIn
- GitHub
- WhatsApp
- Other club/community links

Try not to hard-code the same link in multiple places.

If a link is already stored in the site's data, reuse it.

---

# 10. Changing the Website Design

If you want to change how something **looks or behaves**, check:

```text
src/components/
```

For example:

```text
src/components/site/Navbar.tsx
src/components/site/Hero.tsx
src/components/site/Team.tsx
```

If you're changing an entire page, check:

```text
src/routes/
```

### Before creating a new component

First check whether an existing component can be reused.

Keeping the code reusable makes the website easier for the next team to maintain.

---

# 11. Changing Global Styles

### File

```text
src/styles.css
```

This is where global styling is handled.

The current website uses a:

- Dark
- Technical
- Premium
- Black/Red
- Developer-focused

visual style.

When adding a new section, try to keep it visually consistent with the existing website.

---

# 12. Images

Images are generally stored in:

```text
src/assets/
```

For event images:

```text
src/assets/events/
```

For team images:

```text
src/assets/team/
```

Before adding an image:

- Check its size
- Use a sensible file format
- Give it a meaningful filename
- Avoid unnecessarily large files

For example:

```text
battle-of-bots.png
```

is better than:

```text
IMG_2026_08_23_123456_final_final2.png
```

---

# 13. Testing Your Changes

After making changes, first check the website locally.

Run:

```bash
npm run dev
```

Then check:

- Homepage
- Pages you changed
- Buttons
- Links
- Images
- Mobile layout
- New content

If something looks broken, fix it before pushing.

---

# 14. Check the Production Build

Before pushing a significant change, run:

```bash
npm run build
```

You want to see a successful build.

If the build fails:

**Stop and fix the problem before pushing.**

Don't knowingly push a broken build.

---

# 15. Git Workflow

Before starting work, get the latest changes:

```bash
git pull origin main
```

Then make your changes.

Check what changed:

```bash
git status
```

Add your changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Describe your change"
```

Push your changes:

```bash
git push origin main
```

---

# 16. Automatic Deployment

The website is connected to **Cloudflare Workers Builds**.

That means you normally **do not need to manually deploy the website**.

After:

```bash
git push origin main
```

Cloudflare automatically:

1. Detects the GitHub push
2. Installs dependencies
3. Builds the project
4. Deploys the new version

So the normal workflow is simply:

```text
Make changes
     ↓
Test locally
     ↓
npm run build
     ↓
git add .
     ↓
git commit
     ↓
git push origin main
     ↓
Cloudflare automatically deploys
     ↓
Live website updated
```

**Do not manually run Cloudflare deployment commands unless you know why you need them.**

---

# 17. Working With Other Members

Before you start working:

```bash
git pull origin main
```

This is important because someone else may have pushed changes before you.

If Git reports a conflict, **don't randomly delete files or use force commands**.

Ask someone who understands Git to help resolve the conflict.

---

# 18. Using Branches

For small content changes, working directly on `main` may be acceptable for this project.

For larger features, use a separate branch:

```bash
git checkout -b feature/your-feature-name
```

Example:

```bash
git checkout -b feature/events-filter
```

Then work on your changes and test them.

---

# 19. IMPORTANT — Don't Do This

Avoid using:

```bash
git push --force
```

especially on `main`.

Force pushing can overwrite other people's work.

Also don't delete or modify configuration files just because you don't understand them.

---

# 20. Files to Be Careful With

Be careful when changing:

```text
vite.config.ts
package.json
tsconfig.json
src/server.ts
```

These files affect the project's:

- Build
- Framework configuration
- TypeScript configuration
- Server
- Deployment

If the website is already working, **don't change the infrastructure without a reason.**

Understand the change first.

---

# 21. Before You Push

Use this checklist:

```text
[ ] I tested my changes locally
[ ] New information is correct
[ ] Images load correctly
[ ] Buttons work
[ ] Links work
[ ] Mobile layout looks okay
[ ] No obvious console errors
[ ] npm run build succeeds
[ ] git status looks correct
[ ] I pulled the latest changes before starting
```

Then:

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

---

# 22. Common Tasks

### "I want to add a new event."

Go to:

```text
src/data/events.ts
```

Add the event.

If it has a poster:

```text
src/assets/events/
```

Add the image and import it into `events.ts`.

---

### "I want to change the President/VP."

Start here:

```text
src/data/team.ts
```

Update the person's:

- Name
- Role
- Photo
- Social links

Then check the Team page to make sure everything looks correct.

---

### "I want to change the homepage."

Start by checking:

```text
src/routes/
src/components/site/
```

Find the component used by the homepage and make the change there.

---

### "I want to change colors/fonts/layout."

Check:

```text
src/styles.css
```

and the relevant component inside:

```text
src/components/
```

---

### "I pushed my changes. When will the website update?"

Cloudflare automatically starts a deployment after the GitHub push.

Check the Cloudflare **Deployments/Builds** section if you want to see whether the deployment succeeded.

---

# 23. Future Ideas

The website can continue to grow.

Some possible improvements:

- Replace remaining placeholder images
- Improve mobile responsiveness
- Improve accessibility
- Improve SEO
- Optimize images
- Add student project showcase
- Add technical blog
- Add coding challenges
- Add leaderboard
- Add certificate verification
- Improve event management
- Add alumni/Cadets section
- Add an admin panel

Don't try to build everything at once.

**Keep the existing website stable first.**

---

# 24. The Most Important Thing

You don't need to understand the entire project before contributing.

Remember:

```text
CONTENT
   ↓
src/data/

IMAGES
   ↓
src/assets/

UI / COMPONENTS
   ↓
src/components/

PAGES
   ↓
src/routes/

GLOBAL STYLES
   ↓
src/styles.css
```

When in doubt:

**Look at an existing example and follow its structure.**

And always test your changes before pushing.

---

# Final Note

This website belongs to the **NIET Coding Cadets community**.

You're not just maintaining a website.

You're continuing something built by the Cadets before you.

Improve it.  
Experiment with it.  
Learn from it.  
And leave it better than you found it.

**Keep the Cadets spirit alive.**

---

**— Tanmay**  
Former President, NIET Coding Cadets