# AI-Powered MIS Executive Automation (n8n)

## Overview
n8n-driven email workflow concept for processing Excel/CSV MIS requests using FastAPI and Claude-assisted decisioning.

## Problem Statement
Spreadsheet requests received over email are repetitive and often ambiguous.

## Solution
Use confidence-based automation: process clear requests, request clarification for low-confidence requests.

## Features
- Gmail intake for spreadsheet requests
- FastAPI-based workbook inspection/processing handoff
- AI decision branch with confidence checks
- Return processed file or clarification email

## Technologies Used
n8n, Python, FastAPI, Gmail, Claude API, REST, JSON.

## Workflow
1. Receive email with attachment and instructions
2. Parse content and inspect workbook
3. Evaluate confidence and route path
4. Return processed workbook or clarification request

## Screenshots
Not documented in this repository yet.

## Results
Not documented in this repository yet.

## How to Use
Open the portfolio case study page: `projects/n8n-mis-automation.html`.

## Future Improvements
- Add sanitized n8n export JSON
- Add sample run artifacts and screenshots
