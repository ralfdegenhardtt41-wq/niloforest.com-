# _deferred — zurückgestellte Inhalte

Diese Inhalte sind seit dem Umbau vom 12.09.2026 **nicht** auf der Website, weil der Verein
noch kein Bankkonto hat und Spenden, Mitgliedschaften und Partnerschaftsangebote bis zur
Gründung ausgesetzt sind. Sie werden hier aufbewahrt, nicht gelöscht.

| Datei | Inhalt | Reaktivierung |
|---|---|---|
| `index-2026-09-original.html` | Die komplette alte Ein-Datei-Site (DE/EN, Hash-Routing) als Referenz | nur nachschlagen |
| `DonateBlock.astro` | Karte „Support the work" mit Bankverbindung | Bankdaten eintragen, Komponente z. B. in `src/pages/about.astro` einbinden |
| `MembershipCard.astro` | Karte „Become a member" mit mailto | Nach Gründung in `about.astro` oder einer neuen Seite `/join/` einbinden |
| `InstitutionsPartnership.astro` | Alte Seite „Für Zoos & Institutionen": Partnerschaftsangebot, vier Kooperationsmodelle | Nur nach Freigabe; Zoo-Bezug war laut Briefing zu entfernen |

Alle Komponenten sind vollständig, bauen aber nicht mit, solange sie nicht aus `src/` importiert
werden (Astro baut nur, was unter `src/pages/` liegt oder von dort importiert wird).
`robots.txt` sperrt `/_deferred/` zusätzlich, der Ordner wird aber ohnehin nicht nach `dist/` kopiert.
