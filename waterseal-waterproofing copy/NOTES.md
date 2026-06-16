# Waterseal Waterproofing — site notes (for Alex)

A polished one-page pitch/demo site for **Waterseal Waterproofing Canberra**.
Built to win the client (they currently have a Google listing but **no website**).

## Files
```
waterseal-waterproofing/
├── index.html        ← all the content/markup
├── styles.css        ← design system (navy + blue + "water" cyan, Sora/Inter)
├── script.js         ← sticky header, mobile menu, scroll reveals, stat counters, form
├── assets/
│   └── hero.jpg       ← hero photo (AI-generated, see below)
└── NOTES.md           ← this file
```
No build step — it's plain HTML/CSS/JS. Just open `index.html`, or run the
preview server **"waterseal"** (already added to `.claude/launch.json`, port 8130).

## What's REAL (pulled straight from the Google listing)
- Business name: Waterseal Waterproofing Canberra
- Phone: **0418 629 185** (all call buttons + `tel:` links use this)
- Address: **John Bull St, Queanbeyan NSW 2620**
- Hours: **Open 24 hours**
- "Operating for over 20 years… latest membrane technology and workplace
  practices… cost-effective… meet Australian Standards" — their own blurb,
  woven into the hero + "Why Waterseal" section.

## The hero image
Generated with **Higgsfield** (`nano_banana_pro`) — a tradesman rolling blue
waterproofing membrane on a rooftop at golden hour. It's saved **locally** at
`assets/hero.jpg`, so the site is self-contained (no external image hotlinking).
> Heads up: my Higgsfield free plan only had 2 credits, so this is the **one**
> AI photo. Everything else is hand-built SVG/CSS (icons, map card, stat cards,
> wave dividers) so it always renders perfectly and costs nothing. If you want
> real job photos from the client, drop them into `assets/` and we can swap a
> few in (services, an "about" shot, before/afters).

## ⚠️ PLACEHOLDERS — confirm/replace before go-live
1. **Reviews** (`#reviews`) — the 3 testimonials are **made-up placeholders**.
   Replace with the client's real Google reviews (or remove the section).
2. **Contact form** — currently a **demo**: it validates and shows a thank-you
   message but does **not** send anything yet. Wire it to the client's email
   (e.g. Formspree/Web3Forms) or swap for a `mailto:`. No client email was
   provided — get one.
3. **Trust claims** — "Fully insured", "Workmanship guarantee", and the
   **AS 3740** reference (the wet-area waterproofing standard) are reasonable
   for the trade but **confirm with the owner** before publishing.
4. **Service list** — bathrooms, balconies, roofs, basements, planters,
   remedial, commercial/strata. Confirm they actually do all of these.
5. **Service areas** — suburb list is plausible for the ACT region; confirm.
6. **Logo** — currently a custom water-drop SVG mark I made. Swap if they have
   real branding.
7. **ABN / licence #** — none shown; add to the footer if available.
8. **Map** — the "service area" card is a stylised graphic, not a live map.
   Can embed a real Google Map of the John Bull St location if you want.
9. **Domain + hosting + SEO** — add the live URL into the `<script type="ld+json">`
   block and the social/OG tags when you know the domain.

## Nice touches already in there
- Sticky header that condenses on scroll; transparent over the hero.
- Animated stat counters (20+, 100%, 24/7).
- Scroll-reveal animations (respects `prefers-reduced-motion`).
- Marquee trust strip, floating "call" button on mobile, full responsive layout.
- LocalBusiness structured data (good for Google) — just needs the domain/email.
- Accessible: skip link, ARIA on nav/form, keyboard focus styles.

— Generated with help from Claude Code.
