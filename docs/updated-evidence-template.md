# Updated Evidence Template Guide

## Overview
The MediMind Expert platform now has enhanced rendering for "Updated evidence" sections that automatically creates beautiful, highlighted cards with clickable buttons to access the source material.

## How It Works
When the system detects a statement starting with "Updated evidence:", it automatically:
- Creates a special highlighted card with emerald/teal gradient background
- Adds a distinctive 🔬 "Updated Evidence" badge
- Extracts the study name and displays it prominently
- Removes link markup from the main text for clean reading
- Provides a clickable button to access the source

## Supported Link Formats

### 1. PubMed Links (Recommended for Medical Studies)
```typescript
{
  statement: "Updated evidence: SALSA - In adults patients with moderately severe-to-severe hyponatremia and glucose-corrected serum sodium levels ≤ 125 mmol/L, rapid intermittent bolus was not superior to slow continuous infusion with respect to incidence of overcorrection. (Seon Ha Baek et al. JAMA Intern Med. 2021 Jan 1. [PubMed](https://pubmed.ncbi.nlm.nih.gov/33104189/))",
  level: "",
  source: "SALSA 2021"
}
```
**Result**: Creates button "View on PubMed"

### 2. DOI Links
```typescript
{
  statement: "Updated evidence: HEART-Score - The HEART score provides superior risk stratification compared to traditional approaches. [DOI](https://doi.org/10.1016/j.annemergmed.2008.05.003)",
  level: "A",
  source: "HEART 2008"
}
```
**Result**: Creates button "View DOI"

### 3. Generic Web Links
```typescript
{
  statement: "Updated evidence: COVID-IMPACT - New guidelines for cardiac management during pandemic. [Guidelines](https://www.acc.org/latest-in-cardiology/articles/2020/03/17/08/59/hfsa-acc-aha-statement-addresses-concerns-re-using-raas-antagonists-in-covid-19)",
  level: "B",
  source: "ACC 2020"
}
```
**Result**: Creates button "View Guidelines"

## Template Structure

### Basic Pattern
```typescript
{
  statement: "Updated evidence: [STUDY_NAME] - [Evidence description]. ([Authors]. [Journal]. [Date]. [Link])",
  level: "[Evidence Level - optional]",
  source: "[Source Year]"
}
```

### Key Components
1. **Study Name**: Should be UPPERCASE or CamelCase (e.g., "SALSA", "HEART-Score", "COVID-IMPACT")
2. **Evidence Description**: Clear, concise summary of the finding
3. **Citation**: Standard medical citation format
4. **Link**: Use appropriate link format [LinkText](URL)

## Visual Result
The enhanced template creates:
- 🎨 **Beautiful Card**: Emerald gradient background with left border
- 📚 **Book Icon**: Professional medical appearance
- 🏷️ **Badges**: "🔬 Updated Evidence" + Study name badges
- 🔗 **Clickable Button**: Prominent button to access source
- 📖 **Clean Text**: Main evidence text without link clutter

## Best Practices
1. Always include the study name after "Updated evidence:"
2. Use PubMed links when available for medical studies
3. Include proper medical citation format
4. Keep evidence description concise but informative
5. Use appropriate evidence levels (A, B, C, D) when applicable

## Example Implementation
The SALSA evidence in hyponatremia now appears as:
- Special highlighted card with emerald colors
- "🔬 Updated Evidence" and "SALSA" badges
- Clean text: "In adults patients with moderately severe-to-severe hyponatremia..."
- Prominent "View on PubMed" button
- Source attribution: "SALSA 2021"

This creates a professional, accessible way for medical professionals to quickly access the latest evidence while maintaining clean, readable content. 