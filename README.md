# Abhiudya Verma — Portfolio

Live site: **https://abhiudyav.github.io/**

This repository is intentionally just **one file**: `index.html`. All CSS,
JavaScript, project screenshots, and my resume PDF are built directly into
that one file — there are no separate `assets/`, `projects/`, or
`projects-data/` folders to manage. To update anything, edit `index.html`
directly.

## About Me

Early-career candidate (B.Com, Lajpat Rai College, Ghaziabad, 2021–2024;
Tally ACE certified) building toward MIS Executive, Reporting Analyst,
Junior Data Analyst, Junior Business Analyst and similar roles.

## Career Focus

- MIS reporting & business reporting
- Data analysis & data cleaning
- Excel dashboards, pivot tables, formulas
- Python / FastAPI automation
- SQL & Power BI
- n8n workflow automation + Claude API

## Skills

**Excel & MIS** — Pivot Tables, VLOOKUP/XLOOKUP, INDEX/MATCH, SUMPRODUCT,
IF formulas, Conditional Formatting, Data Validation, Charts, Dashboards
**Data** — Data cleaning, data analysis, KPI analysis, business reporting
**BI / Database** — Power BI (KPI cards, slicers, charts), SQL (SELECT,
WHERE, GROUP BY, JOIN, SUM/COUNT/AVG)
**Programming** — Python, FastAPI
**Automation** — n8n, Claude API, REST API, JSON, Gmail automation
**Other** — Tally ERP 9 (ACE certified), Zoho Books, MS Word, PowerPoint,
Google Sheets, Google Workspace

## Projects (all on the one page — scroll or use the nav)

### Sales MIS Dashboard — Completed
A fully formula-driven Excel dashboard over 1,039 Australian retail order
lines — 7 live filters, 8 KPI cards, 6 native charts, ranking tables and an
auto-generated insights panel. No PivotTables, Slicers or VBA — the page
explains why.

### MIS Automation (Python) — Completed
A 9-phase, 44-test Python pipeline that turns a raw CSV/XLSX into a fully
audited MIS Excel report: cleaning log, KPIs, pivots with native charts,
optional Claude-generated insights, read-only SQL analysis, and a Power
BI-ready export.

### AI-Powered MIS Executive Automation (n8n) — Built, self-learning project
An email-to-Excel workflow using n8n, Python/FastAPI, Gmail and the Claude
API, with a confidence-based decision layer (clarification email vs.
automatic processing). The workflow export and screenshots aren't in this
repo yet — the page says so honestly rather than describing files that
don't exist.

### Smaller practice projects
Power BI sales dashboard, Excel personal expense tracker, MySQL
sales/customer queries — described briefly on the page.

## Tools & Technologies

Excel · Python · pandas · FastAPI · SQL (MySQL, SQLite) · Power BI · n8n ·
Streamlit · Claude API · Git & GitHub · Tally ERP 9 · Zoho Books

## Resume

My resume is embedded directly in `index.html` (as a base64-encoded PDF) —
the "Open Resume" / "Download PDF" buttons work with no separate file. To
update it: convert the new resume to PDF, base64-encode it, and replace the
long string after `data:application/pdf;base64,` near the bottom of
`index.html` (inside the `<script>` tag, `resumeData` variable).

## GitHub

https://github.com/abhiudyav

## Contact

- Portfolio: https://abhiudyav.github.io/
- GitHub: https://github.com/abhiudyav
- LinkedIn: https://linkedin.com/in/abhiudya-verma
- Email: abhiudyaverma999@gmail.com
- Location: Delhi, India

## How to add a future project

Copy one of the existing `<div class="project-card">` blocks in the
Projects section for the summary card, and one `<section class="project-detail">`
block for the full write-up, then edit the text, status badge and links.
No new files or folders needed.
