# AUDIT — niloforest.com (Stand 12.09.2026, Branch `student-recruitment`)

Grundlage: Repo `ralfdegenhardtt41-wq/niloforest.com-` (main, Commit 3a30862), Live-Site
https://niloforest.com/ (identisch mit dem Repo, MD5 geprüft), Briefing
`Claude_Code_Prompt_niloforest.md`, Ausschreibungen `Nilo_Forest_Feldaufenthalt_DE.pdf` und
`Nilo_Forest_Field_Placement.pdf`.

Keine Änderungen an der Website vorgenommen. Alle Zeilenangaben beziehen sich auf `index.html`.

---

## 1. Repository, Build, Deployment

| Punkt | Befund |
|---|---|
| Struktur | **Eine einzige Datei** `index.html` (62,5 KB, HTML + CSS + JS inline) plus `CNAME`, `README.md`, `hero-nilo.jpg`, Ordner `bilder/` mit 14 Artenfotos. |
| Build-System | **Keines.** Kein Astro, kein Hugo, kein npm. Die im Briefing genannten „neun Seiten" sind neun `<section class="route">`-Blöcke in derselben Datei, umgeschaltet per JavaScript über Hash-URLs (`#/fauna`, `#/flora`, …). |
| Sprachen | DE ist im HTML hinterlegt, EN steckt in `data-en`-Attributen und wird per JS-Knopf eingesetzt. Es gibt **keine eigene EN-URL**. |
| Deployment | GitHub Pages, Typ „legacy" (Branch main, Root). Custom Domain `niloforest.com`, HTTPS erzwungen, Zertifikat gültig bis 25.10.2026 (Auto-Renewal). `www.` → 301 auf Apex, `http` → 301 auf `https`. |
| Fehlend | `robots.txt` (404), `sitemap.xml` (404), `404.html`, Favicon, `og:image`. |
| Fonts | Google Fonts, 3 Familien / 12 Schnitte (Cormorant Garamond, Karla, JetBrains Mono), render-blocking Stylesheet plus zwei externe Origins. |
| Bilder | Alle JPG, keine WebP, kein `loading="lazy"`, keine `width`/`height`-Attribute, kein `srcset`. Gesamt ca. **9,4 MB**. |
| Älterer Entwurf | `~/Desktop/nilo_forest_reserve_swiss` (April 2026, 4 Seiten) ist **nicht** die Live-Site und enthält Aussagen, die gegen die Textregeln verstossen (TFCG, Rufford Foundation, EUMAB, Goldbergbau, „Partner-Logos"). Nicht wiederverwenden. |

### Bilder im Detail

| Datei | Pixel | Grösse | Bewertung |
|---|---|---|---|
| hero-nilo.jpg | 1600×892 | 192 KB | ok, als WebP ca. 90 KB |
| bilder/plant-cyathea.jpg | 1536×2048 | **3,1 MB** | viel zu gross |
| bilder/bird-artisornis-moreaui.jpg | 2048×1536 | **2,4 MB** | viel zu gross |
| bilder/viper-atheris-ceratophora.jpg | 2048×1365 | **1,6 MB** | viel zu gross |
| bilder/toad-nectophrynoides-tornieri.jpg | 2048×1365 | 521 KB | zu gross |
| bilder/plant-impatiens.jpg | 2048×1365 | 435 KB | zu gross |
| bilder/butterfly-charaxes.jpg | 500×333 | 184 KB | für 500 px sehr schwer, schlecht komprimiert |
| übrige 8 Bilder | 300–500 px | 38–147 KB | Auflösung für Retina-Kacheln knapp, sonst ok |

Verschärfend: Weil alle neun „Seiten" im DOM liegen, **lädt die Startseite alle 15 Bilder**,
auch die per `display:none` versteckten. Jeder Erstbesuch zieht rund 9 MB.

---

## 2. Inhaltsaudit je Seite

Wortzahlen aus dem Quelltext gezählt (DE = sichtbarer Text, EN = `data-en`-Texte).
„EN-Parität": Anteil der Textelemente, die überhaupt eine EN-Fassung haben, und ob sie inhaltlich gleichwertig ist.

| Route | Zweck heute | Zielgruppe heute | CTA heute | Wörter DE | Wörter EN | EN-Parität |
|---|---|---|---|---|---|---|
| `/` Start | Emotionale Einführung „Bergregenwald von Weltrang" | Allgemein interessierte Öffentlichkeit | „Den Wald entdecken" → Fauna, „Mitwirken" | 249 | 264 | gut (20/22 Elemente) |
| `/fauna` | 8 Artenkacheln mit IUCN-Status | Naturinteressierte | keiner | 227 | 148 | **schwach**: Tags, Legende, Fotocredits nur DE; EN-Texte gekürzt |
| `/flora` | Höhenstufen + 6 Pflanzenkacheln | Naturinteressierte | keiner | 235 | 172 | **schwach**: Höhenstufen-Texte EN stark gekürzt, Tags nur DE |
| `/geologie` | Eastern-Arc-Erdgeschichte | Allgemein | keiner | 97 | 70 | EN gekürzt (Sätze fehlen) |
| `/bedrohungen` | 4 Bedrohungskarten + Kontextnotiz | Allgemein / Spender | keiner | 108 | 92 | EN gekürzt |
| `/ansatz` | Drei Schritte (Ranger, TFS, Durchsetzungslücke) | Spender / Institutionen | keiner | 105 | 78 | EN gekürzt |
| `/zoos` | Partnerschaftsangebot an Zoos, Botanische Gärten, Museen, Stiftungen; 4 Kooperationsmodelle | Zoos & Stiftungen | mailto „Kooperation" | 152 | 125 | mittel |
| `/mitwirken` | Mitgliedschaft, Institutionspartnerschaft, Spende mit Bankblock | Spender / Mitglieder | mailto „Mitgliedschaft", Bank | 82 | 44 | **schwach** (Bankblock nur DE) |
| `/kontakt` Über uns | Kontaktformular (mailto), Factsheet, Impressum | Alle | Formular | 118 | 39 | **schwach**: Factsheet, Formular, Impressum nur DE |
| Footer | Navigation, Kurzbeschreibung | – | – | – | 0 | **kein EN** |

**Zentraler Befund:** Die Seite hat heute **keinen einzigen Inhalt für Studierende, Dozierende
oder Eltern**. Kein Feldaufenthalt, keine Konditionen, keine Sicherheitsangaben, keine Person
mit Foto, keine überprüfbaren Fakten. Sie ist als Spenden-/Partnerschaftsseite für Zoos und
Stiftungen gebaut. Ausserdem fehlen ausgerechnet die harten, prüfbaren Fakten aus dem
Briefing komplett: **6'025 ha, 7.12.2007, Nilo Peak 1'506 m, 1'200–2'200 mm, ca. 800
Pflanzenarten, ca. 100 Vogelarten, 30'000 Menschen in 17 Dörfern, Angola-Stummelaffe** —
keiner dieser Werte steht auf der Live-Site.

---

## 3. SEO-Audit

| Kriterium | Befund | Schwere |
|---|---|---|
| URLs | Hash-Routing: Für Google existiert **genau eine URL**. Die neun „Seiten" sind nicht einzeln indexierbar, nicht verlinkbar, nicht in einer Sitemap führbar. | **kritisch** |
| Title | Ein globaler Title (Z. 6), 44 Zeichen, gilt für alle Seiten. | kritisch |
| Meta Description | Eine globale Description (Z. 7), 156 Zeichen, DE. Die `id="metaDesc"` wird vom JS nie benutzt. | kritisch |
| Meta Keywords | Z. 8, wirkungslos, kann weg. | gering |
| H1-Struktur | **8 `<h1>`** gleichzeitig im DOM (jede Route eine), Google sieht alle auf einer Seite. Innerhalb der Routen H1→H2/H3 sauber. | hoch |
| hreflang | Keines. Bei JS-Sprachumschaltung ohne eigene URLs auch nicht umsetzbar. `<html lang>` wechselt per JS, für Crawler bleibt es `de`. | kritisch |
| Canonical | `https://niloforest.com/` (Z. 15), korrekt für die eine URL. | ok |
| Sitemap / robots | Beide 404. | hoch |
| Open Graph | `og:title/description/url/type/site_name` vorhanden, **kein `og:image`**, kein Twitter-Card. Geteilte Links zeigen kein Bild. | mittel |
| Strukturierte Daten | Ein `NGO`-Block (Z. 19–35) mit Adresse Hardturmstrasse 161. Kein `Place`, kein Programm-Schema. | mittel |
| Alt-Texte | Alle 15 Bilder haben Alt-Texte, meist „Art, deutscher Name". **Kein Ortsbezug** (kein „Nilo", „Usambara"), ausser beim Hero. | mittel |
| Ladezeit | ~9,4 MB Bilder ohne Lazy Loading, alle beim Erstaufruf; 12 Font-Schnitte; kein Preload für das Hero-Bild. Lighthouse-Basismessung siehe Abschnitt 6. | hoch |
| Interne Verlinkung | Nur Navigation, Footer und drei „Pillar"-Links auf der Startseite. Inhaltsseiten verlinken nicht untereinander und nicht auf einen CTA. | hoch |
| Ohne JavaScript | Nur die Startseite ist sichtbar (die anderen Routen sind per CSS `display:none`). Sprachwechsel nur mit JS. | hoch |
| Schweizer Schreibung | Konsequent „ss". | ok |
| Barrierefreiheit | Skip-Link, Fokus-Stile, `aria-pressed`, `prefers-reduced-motion` vorhanden. Navigations-Schrift 0,7 rem Mono in Versalien ist klein. | ok/gering |
| Interner Hinweis live | Z. 373: „Status je Art vor Veröffentlichung gegen die aktuelle IUCN-Rote-Liste zu bestätigen." steht **öffentlich** auf der Seite. Z. 491: „Platzhalter, vor Launch zu finalisieren." ebenfalls. | mittel (Glaubwürdigkeit) |

**Konsequenz:** Die Aufgabe 3 (Titles/Descriptions je Seite, hreflang, Sitemap, Structured
Data je Seite) ist mit der heutigen Ein-Datei-SPA **nicht umsetzbar**. Die Seite muss in echte
Einzel-URLs pro Sprache aufgeteilt werden. Empfehlung in Abschnitt 5.

---

## 4. Markierte Stellen (Spenden, Mitgliedschaft, Bank, Zoo, Behörden-Partnerschaft, Rechtsform, Fakten)

### 4a. Spenden / Mitgliedschaft / Bank → nach `/_deferred/`

| Zeile | Inhalt |
|---|---|
| 320 | Hero-Button „Mitwirken" (sekundärer CTA) |
| 460 | Karte „Mitglied werden" mit mailto `?subject=Mitgliedschaft` |
| 462 | Karte „Die Arbeit unterstützen" mit **Bankblock** (Bankname, IBAN-Platzhalter, BIC) |
| 226–227 | CSS-Klasse `.bank` |
| 472 | „Für Mitgliedschaft, institutionelle Partnerschaften, Vorträge oder Presse …" |
| 448–449 | Kooperationsmodelle „Artenpatenschaft" und „Projektpartnerschaft" (= Fördergeld) |
| 236–244 | Ungenutztes CSS für Newsletter/Feeds (`.newsletter-inline`, `.feeds`) — totes CSS, kann in `_deferred` |

### 4b. Zoos / Institutionen (Zoo Zürich wird nirgends namentlich genannt)

| Zeile | Inhalt |
|---|---|
| 296 | Nav-Eintrag „Für Zoos" / EN „For institutions" |
| 436–455 | Gesamte Route `/zoos`: „Für Zoos, Botanische Gärten, Museen & Stiftungen", „Was eine Partnerschaft bietet", 4 Kooperationsmodelle, „Edukations- & Storytelling-Material" |
| 461 | Mitwirken-Karte „Als Institution partnern" → `#/zoos` |
| 509 | Footer-Link „Für Zoos & Institutionen" |
| 199–215 | CSS `.zoo-hero`, `.reasons`, `.models` |

### 4c. Partnerschaft mit TFS / Behörden — Regelverstösse

| Zeile | Inhalt | Bewertung |
|---|---|---|
| **429** | „Wir arbeiten direkt mit den Tanzania Forest Services zusammen, die das gesetzliche Mandat tragen." / EN „We cooperate directly with the Tanzania Forest Services." | **Verstoss.** Ersetzen durch „in Abstimmung mit dem Tanzania Forest Service". |
| 428 | „Mehr Patrouillentage, bessere Feldausrüstung und ein fester Stützpunkt nahe dem Wald." | Verspricht Ranger-Finanzierung. Ohne Vereinskonto nicht haltbar; Ansatz muss auf Monitoring durch Feldaufenthalte umgebaut werden. Rückfrage: Ist „fester Stützpunkt" = Forest Base? |
| 418 | „Die Tanzania Forest Services (TFS) haben das Mandat, das Reservat zu schützen, doch die Patrouillenkapazität ist begrenzt." | Faktisch zulässig („Verwaltung durch TFS"), Wortlaut „Services" vs. Briefing „Tanzania Forest Service" vereinheitlichen. |
| 331 | „während die Ranger-Kapazität, die es schützen soll, dünn bleibt. Friends of Nilo Forest besteht, um diese Lücke schliessen zu helfen." | Positioniert FONF als Ranger-Ersatz. Umformulieren auf Monitoring/Forschungslücke. |
| 430 | „Die Durchsetzungslücke schliessen" | dito |

### 4d. Rechtsform — „Verein in Gründung" fehlt überall

| Zeile | Inhalt | Bewertung |
|---|---|---|
| 22–34 | JSON-LD `NGO` mit Postadresse Hardturmstrasse 161, 8005 Zürich | Rechtsform-Hinweis fehlt; Adresse: Rückfrage (siehe 7) |
| 425 | „Friends of Nilo Forest ist ein **gemeinnütziger** Schweizer Verein" | „gemeinnützig" impliziert Steuerbefreiung → entfernen (Briefing-Regel) |
| 467 | „gemeinnütziger Verein nach Schweizer Recht mit Sitz in Zürich" | dito |
| 484 | Factsheet „Rechtsform: Verein nach Schweizer Recht (Art. 60 ff. ZGB)" | → „Verein in Gründung (Art. 60 ff. ZGB), Zürich" + `<!-- TODO: nach Gründung -->` |
| 491 | Impressum mit Adresse; Datenschutz „Platzhalter, vor Launch zu finalisieren" | Datenschutztext fertigstellen, Platzhalter-Hinweis entfernen |
| 506 | Footer „Eine Schweizer Initiative …" | ok |

### 4e. Fakten ausserhalb der erlaubten Liste (Rückfrage nötig)

| Zeile | Inhalt | Bewertung |
|---|---|---|
| 317, 330 | „Bergregenwald von Weltrang", „Galápagos Afrikas", „Jahrmillionen" | Allgemeine Eastern-Arc-Aussagen, kein Reservatsfakt; als Kontext vertretbar, Ton aber werblich. Vorschlag: nüchtern kürzen. |
| 364–371 | Fauna: Usambara-Buschviper, Usambara-Hyliota, Langschnabel-Schneidervogel, Amani-Nektarvogel, Usambara-Uhu, Tornier-Waldkröte, Charaxes | **Nicht in der Faktenliste.** Alles Ost-Usambara-Arten, aber ob sie für **Nilo** nachgewiesen sind, kann ich nicht belegen. Der erlaubte **Angola-Stummelaffe fehlt**. Rückfrage: behalten als „Arten der Ost-Usambara" mit klarer Kennzeichnung, oder auf die belegte Liste reduzieren? |
| 366–367 | IUCN-Status Langschnabel-Schneidervogel als „EN" | Nach meinem Kenntnisstand ist *Artisornis moreaui* **CR** (Critically Endangered). Alle sieben Statusangaben vor Veröffentlichung prüfen (der Hinweis dazu steht heute öffentlich, Z. 373). |
| 381–386 | Flora-Höhenstufen „~200 m bis ~1200 m" | Quelle unklar; Nilo Peak liegt bei 1'506 m. Anpassen oder streichen. |
| 390–395 | Flora: Usambaraveilchen (erlaubt), Kampferholz, Baumfarne, Orchideen, Springkräuter, Allanblackia | Wie Fauna: Nachweis für Nilo unklar. |
| 402–406 | Geologie: präkambrisches Grundgebirge, Bruchschollen, Refugium durch Eiszeiten | Allgemeine Eastern-Arc-Geologie, kein Reservatsfakt. Als Kontext vertretbar, Quellenhinweis empfehlenswert. |
| 323 | Koordinaten „5°05′ S · 38°38′ E" | Rückfrage: bestätigt? |
| 415 | „Kampferholz … für Nutzholz gefällt" | Konkretisierung von „illegaler Holzschlag"; vertretbar, aber nicht in der Liste. |

### 4f. Kontakt / Lodge

| Zeile | Inhalt | Bewertung |
|---|---|---|
| 453, 460, 478, 487, 491, 550 | `ralf@niloforest.com` | ok, einzige Adresse |
| – | Telefonnummer | Fehlt. Briefing verlangt Telefon im Glaubwürdigkeitsblock → Rückfrage 7 |
| – | Nilo Forest Lodge / niloforestlodge.com | Wird heute nirgends erwähnt; wird gemäss Regel nur als Unterkunft des Feldaufenthalts verlinkt. |
| 473–479 | Kontaktformular, das per JS ein mailto öffnet | Funktioniert nur mit JS und lokalem Mail-Client. Durch direkten mailto-Link mit Betreff ersetzen. |

### 4g. Fotolizenzen

14 Artenfotos von iNaturalist unter CC BY / CC BY-SA / CC BY-NC / CC BY-NC-ND, Credits sind
eingebaut (Z. 364–395). Für eine nichtkommerzielle Vereinsseite unproblematisch; die Credits
müssen beim Umbau erhalten bleiben. Beim Konvertieren nach WebP ist Zuschnitt bei den
ND-Bildern (Hyliota, Usambaraveilchen) zu vermeiden, Skalierung ist erlaubt.

---

## 5. Priorisierte Massnahmen

### A. Struktur (Voraussetzung für alles andere)

1. **Umbau von der Ein-Datei-SPA auf statische Einzelseiten mit Astro** (wie bei
   niloforestlodge.com, dort bereits eingespielt: Node 24, GitHub Pages im Workflow-Modus).
   Ergebnis: eine echte URL je Seite und Sprache, Title/Description/Canonical/hreflang/JSON-LD
   je Seite, automatische Sitemap, Bildoptimierung (WebP, `srcset`, Lazy Loading) im Build.
   Design, Farben, Typografie und Komponenten werden 1:1 aus dem heutigen CSS übernommen.
2. **URL-Schema (Vorschlag):** DE auf der Wurzel, EN unter `/en/` mit englischen Slugs.
   `/`, `/feldaufenthalt/`, `/fauna/`, `/flora/`, `/geologie/`, `/bedrohungen/`, `/ansatz/`,
   `/institute/`, `/ueber-uns/` und `/en/`, `/en/field-placement/`, `/en/fauna/`, `/en/flora/`,
   `/en/geology/`, `/en/threats/`, `/en/approach/`, `/en/institutes/`, `/en/about/`.
   Sprachumschalter verlinkt jeweils auf die Schwesterseite.
3. **Alte Hash-URLs** (`#/fauna` usw.): kleiner JS-Redirect auf der Startseite, der
   `#/fauna` → `/fauna/` weiterleitet, damit verschickte Links nicht ins Leere laufen.
4. **`/_deferred/`**: Bankblock, Mitgliedschafts-Karte, Zoo-Route, Kooperationsmodelle und
   das zugehörige CSS als auskommentierte Astro-Komponenten ablegen, mit Kurzanleitung zur
   Reaktivierung.
5. `robots.txt`, `sitemap-index.xml`, `404.html`, Favicon (Y-Motiv aus dem Logo), `og:image`
   (Hero-Ausschnitt 1200×630).
6. GitHub Pages von „legacy" auf Workflow-Build umstellen (Actions-Workflow wie bei der Lodge).

### B. Quick Wins (teilweise schon vor dem Astro-Umbau möglich)

7. Z. 429 TFS-Satz ersetzen; Z. 425/467/484 Rechtsform auf „Verein in Gründung", „gemeinnützig" streichen.
8. Öffentliche interne Hinweise entfernen (Z. 373, 491).
9. Fünf Grossbilder auf max. 1600 px WebP bringen (spart ca. 8 MB), alle Bilder mit
   `width`/`height` und `loading="lazy"` (Hero ausgenommen, dieses mit `fetchpriority="high"`).
10. Fonts auf zwei Familien reduzieren (Cormorant Garamond + Karla; Mono nur für Eyebrows
    → durch Karla in Versalien ersetzbar) oder selbst hosten. Halbiert die Font-Requests.
11. `meta keywords` entfernen; `og:image` ergänzen.
12. Faktenblock mit den erlaubten harten Zahlen auf Startseite und Feldaufenthalt.

### C. Inhalt (Aufgabe 2 des Briefings)

13. **Neue Kernseite `/feldaufenthalt/` + `/en/field-placement/`** nach der Ausschreibung:
    Hero mit Bewerben-Button (`mailto:ralf@niloforest.com?subject=Bewerbung Feldaufenthalt Nilo Forest`),
    Gebiet, Aufenthalt, Was geboten wird, Bedingungen, Unterkunft & Beitrag (zwei Tabellen,
    Studierende / Hauptgebäude, „mit Begleitperson", Tagessatz USD 40 nur unter einem Monat),
    Inbegriffen / nicht inbegriffen, Bewerbung, FAQ (13 Fragen inkl. Kostenvergleich Zürich
    CHF 2'000–2'500), Glaubwürdigkeitsblock, Für Institute, Downloads DE/EN.
14. **Startseite:** primärer CTA „Feldaufenthalt", sekundärer „Der Wald"; Modul „Aktuell
    gesucht: Studierende für Feldaufenthalte ab [Datum]"; werbliche Sätze nüchtern fassen.
15. **Mitwirken → Feldaufenthalt:** Route entfällt, Nav-Punkt „Mitwirken" verweist auf den
    Feldaufenthalt; Rollen Bau/Patrouille/Organisation als Bausteine des Aufenthalts.
16. **Zoos → „Für Institute und Forschung"** (`/institute/`): Nilo als Feldstandort,
    Forschungslücke gegenüber Amani, mögliche Themen, Infrastruktur, Datenpolitik, Kontakt.
17. **Über uns:** Gründer, „Verein in Gründung", TODO-Marker für Statuten/Handelsregister,
    keine Bank, Datenschutz fertig formulieren.
18. **Fauna / Flora / Geologie / Bedrohungen / Ansatz:** je ein Kasten „Forschungsfragen /
    offene Themen" (3–5 Fragen), Link auf den Feldaufenthalt, Angola-Stummelaffe ergänzen,
    Ansatz neu auf Monitoring durch Feldaufenthalte „in Abstimmung mit dem TFS" ausrichten.
19. **EN-Parität:** alle heute gekürzten oder fehlenden EN-Texte vollständig ausformulieren
    (Footer, Factsheet, Tags, Legende, Impressum).
20. **Structured Data:** `Organization` (Typ `NGO`) sitewide, `Place` auf Startseite und
    Feldaufenthalt, `EducationalOccupationalProgram` auf dem Feldaufenthalt (`JobPosting` ist
    für einen unbezahlten, beitragspflichtigen Aufenthalt nicht sauber und kann von Google als
    irreführend gewertet werden).
21. Titles/Descriptions je Seite DE/EN nach Keyword-Fokus des Briefings; Alt-Texte mit
    Ortsbezug („… im Nilo Nature Forest Reserve, Ost-Usambara").

---

## 6. Lighthouse-Basismessung (vorher, mobil, Live-Site, 12.09.2026)

Lighthouse 12, Mobil-Emulation, Startseite. Vollständiger Report: `lighthouse/vorher-mobil.html`.
Nach dem Umbau folgt `lighthouse/nachher-mobil.html`.

| Kategorie | Score vorher | Ziel |
|---|---|---|
| Performance | **61** | ≥ 90 |
| Accessibility | 94 | ≥ 95 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 (der Wert täuscht: Lighthouse prüft nur die eine URL, nicht die fehlende Indexierbarkeit der Unterseiten) |

| Messwert | vorher |
|---|---|
| First Contentful Paint | 2,4 s |
| Largest Contentful Paint | **13,1 s** |
| Speed Index | 4,0 s |
| Cumulative Layout Shift | 0,197 (Bilder ohne Masse) |
| Übertragene Bytes | **9'102 KiB** |
| Einsparung Offscreen-Bilder | 7'679 KiB |
| Einsparung moderne Bildformate | 2'757 KiB |
| Render-blockierende Ressourcen (Fonts) | 1'640 ms |

Die Massnahmen 9, 10 und die Aufteilung in Einzelseiten (Abschnitt 5) adressieren alle vier
Hauptursachen: versteckte Bilder, JPG statt WebP, fehlende Bildmasse, Font-Stylesheet.

---

## 7. Rückfragen vor Aufgabe 2

Bitte kurz beantworten, Nummer genügt.

1. **Framework:** Astro-Umbau mit Einzelseiten (Empfehlung, Abschnitt 5A) — ja?
2. **URL-Schema:** DE auf der Wurzel, EN unter `/en/` mit englischen Slugs (Abschnitt 5A.2) — ja?
3. **Adresse Hardturmstrasse 161, 8005 Zürich:** im Impressum und JSON-LD behalten?
4. **Telefon** für den Glaubwürdigkeitsblock: +41 77 280 92 44 (die für die Lodge freigegebene Nummer)?
5. **Starttermin** für „Aktuell gesucht … ab [Datum]" und die Ausschreibung: bekannt, oder Platzhalter?
6. **Arten auf Fauna/Flora** (4e): als „Arten der Ost-Usambara" mit Hinweis behalten, oder auf die belegte Liste kürzen? IUCN-Status Schneidervogel: CR statt EN?
7. **Höhenstufen Flora** (200–1200 m): Quelle vorhanden, oder streichen?
8. **Ansatz-Seite:** „fester Stützpunkt nahe dem Wald" = Forest Base? Ranger-Finanzierung als Ziel ganz raus, bis das Konto besteht?
9. **Gründerprofil:** Bitte 3–5 Sätze Fakten (Hintergrund, seit wann in Tansania, Rolle vor Ort), Foto liefern Sie. Ich formuliere daraus DE/EN.
10. **Downloads DE/EN:** Neue PDFs aus dem Seiteninhalt erzeugen (ohne das Anschreiben an Institute, mit Datum) — ja? Oder Ihre beiden PDFs unverändert einstellen?
11. **Fonts:** auf zwei Familien reduzieren (Mono-Eyebrows durch Karla-Versalien ersetzen) — ja?
12. **Koordinaten** 5°05′ S · 38°38′ E im Hero: bestätigt?
13. **Referenzen-Template:** solange leer im Quellcode vorbereitet, aber **nicht sichtbar** (Empfehlung; ein leerer Referenzblock schadet der Glaubwürdigkeit) — ja?
14. **Google Search Console** für niloforest.com: besteht eine Property, oder soll ich die Verifikationsdatei vorbereiten?
