# Verification

Verified on 14 October 2026.

- `npm run check`: passed JavaScript syntax, local files, unique IDs, section anchors and disclosure markers.
- `npm run build`: passed; dependency-free static output in `dist/`.
- Git diff whitespace check: passed. Credential-pattern scan found no matches in project source.
- Ordinary in-app browser rendered the local production build with no captured warning/error console entries during interaction tests.
- Tested day/night toggle in both directions; café, kitchen and bar filters and restoration of all categories.
- Blank date: rejected. Past date: rejected. Valid 20 December 2026 date with 4 guests at 20:00: correct Bangkok-date summary and explicit no-reservation notice. Real booking link subsequently added and locally verified.
- Responsive viewport checks at 360, 390, 768 and default desktop width: document width did not exceed viewport. Mobile menu opens, closes on section selection, and exposes expanded state. Visual checks show readable hero, illustrations and planner. Explicit viewport controls apply to the active tab; widths were confirmed from the tested document, not inferred from the requested override.
- Google Maps short link resolved in browser to Buddha & Pals; verified address, phone, published hours and Nightify link. Nightify destination names the business and displays reservation conditions. No real reservation submitted.
- Initial GitHub Actions deployment completed successfully: https://github.com/pshkai/buddha-and-pals-demo/actions/runs/38529797362
- Live home, CSS, JavaScript, WebP hero, SVG favicon and source-notes document all returned HTTP 200 after initial deployment. Final live browser inspection is recorded below after the booking-link update deploys.

The booking-link update deployed successfully in run 38530119619. The public site was opened in the in-app browser and its Nightify CTA, experience switch, date planner, demo summary and console were checked. No console warnings/errors were captured. The browser retained an older cached JavaScript asset after refresh; the script URL is now versioned to ensure returning visitors receive the updated booking-result link.

Limits: no manual screen-reader session or exhaustive accessibility audit; no call placed; Facebook and Instagram destinations are corroborated identities, but their full content could not be fetched with the research tool. No LINE link was added because its current identity could not be established. External business data and booking terms can change.
