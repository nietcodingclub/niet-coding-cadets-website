````md
# NIET Coding Cadets Website — Developer Handover

Welcome to the NIET Coding Cadets website.

This document is for future Cadets who will maintain, update and improve the website.

## Quick Rule

**CONTENT → `src/data/`**  
**IMAGES → `src/assets/`**  
**UI → `src/components/`**  
**PAGES → `src/routes/`**  
**STYLES → `src/styles.css`**  
**BUILD / DEPLOYMENT → configuration files**

---

## Project

**Live Website:**  
https://nietcodingclub-niet-coding-cadets-website.nietcodingcadets.workers.dev/

**GitHub:**  
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

# 1. Club Information

### File

```text
src/data/site.ts
````

Use this for general club information such as:

* Club name
* Department
* Description
* Location
* Statistics
* Social links
* Contact information
* Join links

If you are changing information **about the club itself**, check this file first.

---

# 2. Events

### File

```text
src/data/events.ts
```

This is the main file for adding/updating events.

You may need to update:

* Event name
* Date
* Time
* Venue
* Category
* Status
* Description
* Poster
* Registration link
* Deadline
* Rules
* Eligibility
* Prizes
* Winners

Before adding an event, look at existing events and follow the same structure.

Do not randomly create new fields unless the application requires them.

---

# 3. Event Images

### Folder

```text
src/assets/events/
```

Put event posters/images here.

Then import them into:

```text
src/data/events.ts
```

Example:

```ts
import newEvent from "@/assets/events/new-event.png";
```

Then:

```ts
poster: newEvent,
```

Keep image sizes reasonable. Avoid unnecessarily huge files.

---

# 4. Achievements

### File

```text
src/data/achievements.ts
```

Use this for:

* Club achievements
* Competition results
* Awards
* Rankings
* Major milestones
* Verified student/team achievements

### IMPORTANT

This is an official club website.

**Never add fake or unverified achievements, statistics, awards, rankings or results.**

Verify information before publishing it.

---

# 5. Team

Team information should be maintained in the relevant team data/component files under:

```text
src/data/
src/components/
```

When leadership changes:

* Update names
* Update roles
* Update photos
* Update social links
* Remove outdated information

Keep the current team accurate.

---

# 6. Gallery

### File

```text
src/data/gallery.ts
```

Gallery images should be stored under:

```text
src/assets/
```

Current categories:

* Events
* Workshops
* Competitions
* Team

Replace placeholder images with real club photographs whenever possible.

---

# 7. Social Links

Check:

```text
src/data/site.ts
```

before changing Instagram, LinkedIn, GitHub, WhatsApp or other community links.

Avoid hard-coding the same link in multiple components.

---

# 8. UI Changes

For changes to how the website looks or behaves, check:

```text
src/components/
```

For page-level changes, check:

```text
src/routes/
```

Before creating a new component, check whether an existing component can be reused.

---

# 9. Styling

Global styles:

```text
src/styles.css
```

The existing design is intentionally:

* Dark
* Technical
* Premium
* Black/Red
* Developer focused

Keep the design consistent when adding new sections.

---

# 10. Local Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Before pushing changes, always test the website locally.

---

# 11. Production Build

Run:

```bash
npm run build
```

If the build fails, **do not deploy/push the broken version.**

Fix the error first.

---

# 12. Git Workflow

Before starting work:

```bash
git pull origin main
```

After making changes:

```bash
git status
```

Then:

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

For larger features, preferably create a branch:

```bash
git checkout -b feature/your-feature-name
```

### DO NOT casually use:

```bash
git push --force
```

---

# 13. Files You Should Not Modify Casually

Be careful with:

```text
vite.config.ts
package.json
tsconfig.json
src/server.ts
```

These affect the application's build, framework or deployment.

If the website is already working, **don't change the infrastructure just for the sake of changing it.**

Understand what a configuration change does before making it.

---

# 14. Before Pushing

Use this checklist:

```text
[ ] Website works locally
[ ] New information is verified
[ ] Images load correctly
[ ] Buttons work
[ ] Links work
[ ] Mobile layout checked
[ ] No obvious console errors
[ ] npm run build succeeds
[ ] git status checked
```

Then push.

---

# 15. Future Improvements

Possible improvements:

* Replace remaining placeholder images
* Improve mobile responsiveness
* Improve accessibility
* Improve SEO
* Optimize images
* Add student project showcase
* Add technical blog
* Add coding challenges
* Add leaderboard
* Add certificate verification
* Add better event management
* Add alumni/Cadets section
* Add admin panel

Don't try to build everything at once.

Keep the existing website stable first.

---

# 16. Most Important Rule

If you remember only one thing:

> **If you are changing CONTENT, start with `src/data/`.**
>
> **If you are changing the UI, check `src/components/`.**
>
> **If you are changing a PAGE, check `src/routes/`.**
>
> **If you are changing IMAGES, check `src/assets/`.**

And always test before pushing.

---

## Final Note

This website belongs to the NIET Coding Cadets community.

Don't just maintain it.

**Improve it for the Cadets who come after you.**

Build things.
Try things.
Make mistakes.
Learn from them.

And most importantly:

**Keep the Cadets spirit alive.**

— Tanmay
Former President, NIET Coding Cadets

```
```
