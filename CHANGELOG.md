# CHANGELOG — niloforest.com

## 2026-09-12 — Umbau zur Studierendenakquise (Branch `student-recruitment`)

### Entscheidungen (Nutzer, 12.09.2026)
- Astro-Umbau mit Einzelseiten statt Ein-Datei-SPA.
- **Site nur auf Englisch.** Die deutsche Ausschreibung bleibt als PDF-Download.
- Arten auf Fauna/Flora bleiben als „Species of the East Usambaras", mit Kennzeichnung
  „Recorded at Nilo" bzw. „Presence at Nilo unconfirmed".
- Gründer: Ralf Degenhardt, Benjamin Wagner. Entstehung: als Betreiber der Nilo Forest Lodge
  fielen die Probleme des Waldes auf, daraus FONF.
- Telefon +41 79 681 21 06, Adresse Chilegässli 12A, 8904 Aesch ZH.

### Struktur
- Astro 7, `@astrojs/sitemap`, `sharp`. Build `npm run build`, Vorschau `npm run preview`.
- Seiten: `/`, `/field-placement/`, `/fauna/`, `/flora/`, `/geology/`, `/threats/`,
  `/approach/`, `/institutes/`, `/about/`, `404`. Druckvorlagen `/print/…` (noindex, nicht in
  der Sitemap) für die PDF-Downloads.
- GitHub-Actions-Workflow `.github/workflows/deploy.yml` (wie niloforestlodge). **Vor dem
  Merge:** GitHub Pages von „legacy" auf „workflow" umstellen.
- Alte Hash-URLs (`#/fauna`, `#/zoos`, `#/mitwirken` …) werden per Inline-Script auf die neuen
  Pfade umgeleitet (Startseite und 404).
- `robots.txt`, `sitemap-index.xml`, `favicon.svg`, `og:image` (Hero 1200×630), Canonical,
  hreflang `en`/`x-default`.
- Structured Data: `NGO` (sitewide, mit Gründern und Adresse), `Place` (Startseite),
  `EducationalOccupationalProgram` + `FAQPage` (Feldaufenthalt). `JobPosting` bewusst nicht
  verwendet (beitragspflichtiger, unbezahlter Aufenthalt).
- Bilder: Astro `<Image>` → WebP, `width`/`height`, `loading="lazy"`; Hero `fetchpriority="high"`.
  Gesamtgewicht Startseite von 9'102 KiB auf 144 KiB.
- Fonts von 3 Familien / 12 Schnitten auf 2 Familien / 6 Schnitte (Cormorant Garamond, Karla).

### Inhalt
- **Neu `/field-placement/`:** Hero mit Bewerben-Button (mailto mit Betreff), Gebiet, Aufenthalt
  (4 Bausteine, Datenrechte, Behörden), Was geboten wird, Bedingungen, Unterkunft & Beitrag
  (Tabelle Forest Base 1'200 / mit Begleitperson 1'800; Tabelle Hauptgebäude 1'800 / 2'400 /
  3'000; Tagessatz USD 40 nur unter einem Monat; inbegriffen / nicht inbegriffen), Bewerbung
  (Inhalt der Projektskizze), FAQ mit 14 Fragen inkl. Kostenvergleich Zürich, Glaubwürdigkeitsblock
  (Gründer, Rechtsform, Adresse, Telefon, Sicherheit, Foto-Platzhalter, verstecktes
  Referenzen-Template), Abschnitt „For institutes" mit Downloads.
- **Startseite:** primärer CTA „Field placement", sekundärer „The forest"; Modul „Currently
  sought: students for field placements from [month/year]"; Faktenblock mit den freigegebenen Zahlen.
- **Mitwirken:** Seite entfällt; Nav-Punkt durch „Field placement" ersetzt. Frühere Volunteer-Rollen
  (Bau, Patrouille, Organisation) auf `/approach/` in den Feldaufenthalt integriert.
- **Zoos → `/institutes/` „For institutes and research":** Forschungslücke gegenüber Amani,
  Themen, Infrastruktur, Datenpolitik, Genehmigungen, Kontakt, Downloads. Kein Zoo-Bezug.
- **`/about/`:** „association in formation", Gründer, Kontakt, Impressum, Datenschutz
  ausformuliert, kein Formular, keine Bank.
- **Fauna / Flora / Geologie / Bedrohungen / Ansatz:** je ein Kasten „Research questions and
  open topics" mit 4–5 Fragen und Link auf den Feldaufenthalt; CTA-Band am Seitenende.
  Angola-Stummelaffe ergänzt (Foto fehlt). Höhenstufen ohne Meterangaben. Koordinaten im Hero
  entfernt (die alten 5°05′ S lagen bei Amani, nicht bei Nilo).
- **Regelverstösse behoben:** „We cooperate directly with TFS" → „in coordination with the
  Tanzania Forest Service"; „gemeinnützig" gestrichen; Ranger-Finanzierungsversprechen durch
  Monitoring-Ansatz ersetzt; interne Hinweise (IUCN-Prüfvermerk, „Platzhalter vor Launch") entfernt.
- **IUCN-Stati geprüft (12.09.2026):** Langschnabel-Schneidervogel EN → **CR**; Buschviper NT →
  **VU**; Tornier-Kröte NT → **LC**; Usambara-Uhu VU → **NE** (IUCN führt ihn heute als
  Unterart von *Ketupa poensis*, LC; Hinweis auf der Kachel); Hyliota EN, Amani-Nektarvogel EN,
  Chamäleon LC bestätigt.
- Lodge ausschliesslich als Unterkunft genannt, Link auf niloforestlodge.com (neues Tab),
  keine Buchungs- oder Werbetexte. Nebengebäude heisst „Forest Base".
- Kontakt ausschliesslich ralf@niloforest.com.

### Zurückgestellt (`/_deferred/`)
- `DonateBlock.astro` (Bankverbindung), `MembershipCard.astro` (Mitgliedschaft),
  `InstitutionsPartnership.astro` (alte Zoo-/Partnerschaftsseite),
  `index-2026-09-original.html` (komplette alte Site). Reaktivierung siehe `_deferred/README.md`.

### Lighthouse (mobil)
| Seite | Perf | A11y | Best Practices | SEO | LCP | Bytes |
|---|---|---|---|---|---|---|
| Startseite vorher (Live-Site) | 61 | 94 | 100 | 100 | 13,1 s | 9'102 KiB |
| Startseite nachher (lokale Vorschau) | 98 | 100 | 100 | 100 | 1,9 s | 144 KiB |
| Feldaufenthalt nachher | 98 | 100 | 100 | 100 | 1,8 s | 78 KiB |
| Fauna nachher | 99 | 100 | 100 | 100 | 1,6 s | 170 KiB |

Reports: `lighthouse/vorher-mobil.html`, `lighthouse/nachher-mobil-start.html`,
`lighthouse/nachher-mobil-field-placement.html`. Die Nachher-Werte stammen von der lokalen
Vorschau; nach dem Deploy auf GitHub Pages sind ähnliche Werte zu erwarten, die Fonts von
Google bleiben der einzige externe Request.

### Platzhalter, die noch zu füllen sind
| Nr. | Was | Wo |
|---|---|---|
| 1 | **Starttermin** „from [month/year]" | `src/site.ts` → `placementStart`; erscheint auf Startseite, Feldaufenthalt, Institute, beiden PDFs |
| 2 | **Fotos Gründer** Ralf Degenhardt, Benjamin Wagner, Hochformat 400×500 px | `src/pages/field-placement.astro` und `about.astro`, Kommentar `TODO: Foto` |
| 3 | **Sechs Fotos Forest Base** (Aussen, Zimmer, Küche, Zufahrt, Reservatsgrenze, Saidi), je 1200×900 px | `src/pages/field-placement.astro`, Block „Forest Base and surroundings"; Ablage `src/assets/images/base/` |
| 4 | **Foto Angola-Stummelaffe** 720×540 px mit Lizenz | `src/pages/fauna.astro` |
| 5 | **Nach Gründung:** Handelsregister-Nummer, Statuten (PDF), Gründungsdatum; Rechtsform in `src/site.ts` → `legalForm` anpassen | `about.astro`, `field-placement.astro`, `site.ts` |
| 6 | **Nach Gründung:** Bankverbindung | `_deferred/DonateBlock.astro`, dann einbinden |
| 7 | **Referenzen** (Institute, Erfahrungsberichte) | `field-placement.astro`, Abschnitt `#references`, Attribut `hidden` entfernen |
| 8 | **Kurzprofil Benjamin Wagner** (heute nur „Co-founder") | `field-placement.astro`, `about.astro` |
| 9 | **Frontier-Tanzania-Erhebung 2002** (Technical Paper 53) als Referenz bestätigen | `institutes.astro` |
| 10 | **Reservatskoordinaten** ca. 4°55′ S, 38°40′ E (nur im JSON-LD) bestätigen | `src/site.ts` → `RESERVE.lat/lng` |
| 11 | **Google Search Console** für niloforest.com einrichten und Sitemap einreichen | nach Deploy |

### Deploy-Schritte (noch nicht ausgeführt)
1. Branch `student-recruitment` prüfen (lokale Vorschau: `npm run build && npm run preview`).
2. GitHub Pages auf Workflow-Build umstellen: `gh api -X PUT repos/ralfdegenhardtt41-wq/niloforest.com-/pages -f build_type=workflow`.
3. Merge nach `main`; der Workflow baut und veröffentlicht.
4. Nach dem Deploy: Lighthouse gegen https://niloforest.com/ wiederholen, Search Console, Backlink von niloforestlodge.com.
