# 0001. Editorial style: plain language, no em dashes

- Date: 2026-07-31
- Status: Accepted

## Context

The site copy and documentation previously used em dashes (the Unicode code point
U+2014) as a stylistic flourish, for example using a long dash where a colon would
do. These dashes have several problems:

- They are invisible to many copy-paste flows and can be mangled into mojibake in
  search engine descriptions, HTML meta tags and generated indexes.
- They interrupt reading flow and make sentences harder to scan for non-native
  speakers.
- They are easy to misuse, so the same sentence is often punctuated differently
  by different writers.
- The project wants copy that anyone can understand, including people who are new
  to both English and Web3.

## Decision

- Do not use em dashes (U+2014) anywhere: in documentation, UI copy, meta tags,
  comments, or commit messages.
- Also avoid en dashes (U+2013) in running text. Use plain hyphens only where they
  belong, such as in compound words or technical ranges written inline.
- Prefer the simplest natural alternatives:
  - Split the sentence into two, starting the second with a capital letter.
  - Use a colon (":") to introduce a list or an explanation.
  - Use a comma or parentheses to set off a short aside.
  - Reword so the parenthetical becomes its own clause.
- Write in plain, human language. Favor short sentences, concrete examples, and
  words a newcomer would know. Explain jargon the first time you use it.
- New content must pass a check that the repository contains no U+2014 or U+2013
  characters before it is merged.

## Consequences

- Copy reads more plainly and consistently across pages and UI.
- Meta descriptions and generated search text no longer risk encoding issues.
- Writers must sometimes restructure sentences instead of relying on a dash. This
  is a feature: the restructured sentences are usually clearer.
- Automated check: run a search for U+2014 and U+2013 before merging; any match is
  a review failure.
