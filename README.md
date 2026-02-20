# Campus Life Planner

**Author:** Kendra Mamashenge  
**GitHub:** [https://github.com/kendra-shenge](https://github.com/kendra-shenge)  
**Email:** k.mamasheng@alustudent.com  

**Theme:** Campus Life Planner  
**Submission:** Summative Assignment – Building Responsive UI  

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Regex Catalog](#regex-catalog)  
4. [Keyboard & Accessibility](#keyboard--accessibility)  
5. [Data & Persistence](#data--persistence)  
6. [Setup & Usage](#setup--usage)  
7. [Tests](#tests)  
8. [Demo Video](#demo-video)  
9. [Repository Structure](#repository-structure)  
10. [Deployment](#deployment)  

---

## Project Overview

Campus Life Planner is a responsive, accessible web application designed to help students organize their academic tasks. Users can:

- Add tasks with title, due date, duration, and tag  
- Search tasks using live regex filtering  
- Track statistics such as total tasks, total duration, and last 7 days trends  
- Set a weekly duration cap  
- Navigate via keyboard and screen readers  

Built with **vanilla HTML, CSS, and modular JavaScript** using ES modules.

---

## Features

- **Pages/Sections:** Home, Planner, Dashboard, Settings, About  
- **Forms & Validation:** Add task form with 4+ regex rules  
- **Live Regex Search:** Safe compiler with highlight  
- **Stats Dashboard:** Total tasks, total duration, last-7-days trend  
- **Persistence:** Data saved to localStorage; seed.json for initial data  
- **Accessibility:** Skip link, ARIA live regions, keyboard navigation  
- **Responsive Design:** Mobile-first with breakpoints at 360px, 768px, 1024px  
- **Theme Toggle:** Light/Dark mode persisted in localStorage  

---

## Regex Catalog

| Field | Pattern | Example | Notes |
|-------|---------|---------|-------|
| Title | `/^\S(?:.*\S)?$/` | `"Study Math"` | No leading/trailing spaces |
| Duration | `/^(0|[1-9]\d*)(\.\d{1,2})?$/` | `"120"` | Numbers with up to 2 decimals |
| Due Date | `/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/` | `"2026-02-20"` | YYYY-MM-DD format |
| Tag | `/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/` | `"Academic"` | Letters, spaces, hyphens only |
| Advanced | `/\b(\w+)\s+\1\b/` | `"hello hello"` | Detect duplicate words |
| Search | `RegExp(input, 'i')` | `"study"` matches `"Study Math"` | Safe compiler; highlights matches |

---

## Keyboard & Accessibility

- Skip link: `<a href="#main" class="skip-link">Skip to content</a>`  
- ARIA live region: Updates task totals dynamically with `role="status"`  
- Focus styles: Visible on all inputs and buttons  
- Keyboard navigation: Full form and table navigation via Tab/Enter  
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`  
- High contrast theme for readability  

---

## Data & Persistence

- Data stored in `localStorage` under key `"campus:data"`  
- On first load, `seed.json` populates tasks if localStorage is empty  
- Each task object contains `id`, `title`, `dueDate`, `duration`, `tag`, `createdAt`, `updatedAt`  
- Adding, editing, deleting tasks updates localStorage automatically  

Example task:

```json
{
  "id": "rec_1",
  "title": "Study Math",
  "dueDate": "2026-02-20",
  "duration": "120",
  "tag": "Academic",
  "createdAt": "2026-02-01",
  "updatedAt": "2026-02-01"
}
 **Demo Video:** [Campus Life Planner Demo](https://docs.google.com/videos/d/1DzPR_CKLCku6vOvZ_nEme0q1FuF7Y-hLk-2O8hMqEgw/edit?usp=sharingk)

[view live app](https://kendra-shenge.github.io/summative_responsive_UI/)



