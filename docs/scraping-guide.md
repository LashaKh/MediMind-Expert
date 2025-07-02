
# Pathway.md Content Extraction Guide Using Puppeteer MCP

Quick guide for extracting complete content from Pathway.md medical articles using Puppeteer MCP. 

**Prerequisites**: Chrome installed, account registered at team@updevoteai.com, password is Dba545c5fde36242 Puppeteer MCP available.

# first if you are not already logged in, log in with this email team@updevoteai.com using google log in , 

## Step 1: Navigate to Target Article

```javascript
// Navigate to specific Pathway.md article
mcp__puppeteer__puppeteer_navigate("https://www.pathway.md/diseases/[article-id]")
```

**Verification:**
```javascript
mcp__puppeteer__puppeteer_evaluate("document.title")
// Should return article title, not registration page
```

## Step 2: EXPAND ALL collapsed fields Extract Full Content all the sources included !!!!!

### 2.1 Expand All Content

```javascript
// Click to expand all sections for complete content
mcp__puppeteer__puppeteer_click("text=Expand All Topics")
```

### 2.2 Verify Content Loading

```javascript
// Check total content size (should be 40,000+ characters for full articles)
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.length")
```

### 2.3 Extract Content in Chunks

**CRITICAL FOR LARGE CONTENT (>10,000 characters)**: Use step-by-step extraction and file building approach:

#### For Content >10,000 Characters: 
**DO NOT extract all content at once**. Instead, use this step-by-step approach:

1. **Extract first chunk and write to file immediately**
2. **Extract subsequent chunks and append to file one by one**
3. **Continue until all content is extracted**

```javascript
// STEP 1: Check total content size first
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.length")

// STEP 2: If >10,000 characters, use chunk-by-chunk approach
// Extract Chunk 1 (0-10,000) and WRITE TO FILE immediately
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.slice(0, 10000)")
// → Write/append this chunk to markdown file before proceeding

// Extract Chunk 2 (10,000-20,000) and APPEND TO FILE immediately  
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.slice(10000, 20000)")
// → Append this chunk to markdown file before proceeding

// Extract Chunk 3 (20,000-30,000) and APPEND TO FILE immediately
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.slice(20000, 30000)")
// → Append this chunk to markdown file before proceeding

// Continue this pattern: EXTRACT → APPEND → EXTRACT → APPEND
// Until total content length is reached
```

**Why This Approach:**
- Prevents API token limit errors (>32,000 output tokens)
- Ensures no content is lost between extractions
- Provides immediate file building for verification
- Avoids memory issues with large content

## Step 3: Extract All Reference Links and Sources

### 3.1 Extract PubMed and DOI References

```javascript
// Extract all reference links with their URLs
mcp__puppeteer__puppeteer_evaluate(`(() => {
  const references = [];
  const referenceElements = document.querySelectorAll('a[href*="doi.org"], a[href*="pubmed"], a[href*="ncbi.nlm.nih.gov"], a[href*="Open"]');
  referenceElements.forEach((link, index) => {
    references.push({
      text: link.innerText.trim(),
      url: link.href,
      context: link.parentElement?.innerText?.slice(0, 200) + '...'
    });
  });
  return JSON.stringify(references, null, 2);
})()`)
```

### 3.2 Extract Related Calculator Links

```javascript
// Extract calculator and internal pathway links
mcp__puppeteer__puppeteer_evaluate(`(() => {
  const allLinks = [];
  const linkElements = document.querySelectorAll('a[href]');
  linkElements.forEach((link) => {
    if (link.href && 
        (link.href.includes('pubmed') || 
         link.href.includes('doi.org') || 
         link.href.includes('ncbi.nlm.nih.gov') ||
         link.href.includes('pathway.md'))) {
      allLinks.push({
        text: link.innerText.trim(),
        url: link.href,
        type: link.href.includes('pathway.md') ? 'internal' : 'external'
      });
    }
  });
  return JSON.stringify(allLinks, null, 2);
})()`)
```

### 3.3 Verify Reference Count

```javascript
// Count total references to ensure completeness
mcp__puppeteer__puppeteer_evaluate("document.querySelectorAll('a[href*=\"pubmed\"], a[href*=\"doi.org\"]').length")
```

## Step 4: Content Organization

### Key Sections to Identify:
- **Background** (Definition, Pathophysiology, Epidemiology)
- **Guidelines** (with evidence levels A, B, C, D, E, I)
- **Clinical Findings** (Symptoms, Medical History) 
- **Studies** (Recent research and trials)
- **References** (Citations and links)

### Reference Link Formatting Requirements:
- **PubMed Links**: Format as `[PubMed](https://pubmed.ncbi.nlm.nih.gov/PMID)`
- **Calculator Links**: Include all related Pathway.md calculator references
- **Internal Links**: Preserve navigation and section links
- **Source Attribution**: Always include original Pathway.md article link

## Quick Workflow for Large Content (>10,000 characters)

```javascript
// 1. Navigate to article
mcp__puppeteer__puppeteer_navigate("https://www.pathway.md/diseases/[article-id]")

// 2. Expand all content sections
mcp__puppeteer__puppeteer_click("text=Expand All Topics")
// Look for additional "Expand" buttons and click them too
mcp__puppeteer__puppeteer_click("text=Expand")

// 3. Check total content size
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.length")

// 4. CHUNK-BY-CHUNK EXTRACTION (for content >10,000 chars)
// Extract Chunk 1 and write to file
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.slice(0, 10000)")
// → IMMEDIATELY write this to markdown file

// Extract Chunk 2 and append to file
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.slice(10000, 20000)")
// → IMMEDIATELY append this to markdown file

// Extract Chunk 3 and append to file
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.slice(20000, 30000)")
// → IMMEDIATELY append this to markdown file

// Continue pattern: EXTRACT → APPEND → EXTRACT → APPEND
// Until reaching total content length

// 5. Extract all reference links (after content extraction is complete)
mcp__puppeteer__puppeteer_evaluate(`(() => {
  const references = [];
  const referenceElements = document.querySelectorAll('a[href*="doi.org"], a[href*="pubmed"], a[href*="ncbi.nlm.nih.gov"], a[href*="Open"]');
  referenceElements.forEach((link, index) => {
    references.push({
      text: link.innerText.trim(),
      url: link.href,
      context: link.parentElement?.innerText?.slice(0, 200) + '...'
    });
  });
  return JSON.stringify(references, null, 2);
})()`)

// 6. Append reference links to markdown file
```

## Small Content Workflow (<10,000 characters)

For smaller articles, you can extract all content at once:

```javascript
// 1-2. Navigate and expand (same as above)

// 3. Extract all content at once (only for small articles)
mcp__puppeteer__puppeteer_evaluate("document.body.innerText")

// 4. Extract references and create markdown file
```

## Success Indicators

✅ **No login prompts** - Account access working  
✅ **"Expand All Topics" available** - Full content accessible  
✅ **40,000+ characters** - Complete article extracted  
✅ **Evidence levels preserved** - A, B, C, D, E, I classifications visible  
✅ **Multiple guidelines sources** - ACC, ESC, AHA, CCS, etc.
✅ **All PubMed links extracted** - References with clickable links preserved
✅ **Calculator links included** - Related Pathway.md tools referenced
✅ **Source attribution complete** - Original article link included

## Troubleshooting

**If content truncated:** Extract in smaller 5,000 character chunks  
**If login required:** Navigate to main pathway.md first, then to article  
**If expansion fails:** Click individual section headers manually and look for additional "Expand" buttons
**If links missing:** Re-run reference extraction script and verify JSON output
**If reference count low:** Check for additional link selectors or DOM changes
**If API token limit errors:** ALWAYS use chunk-by-chunk approach for content >10,000 characters
**If content appears incomplete:** Verify all "Expand" buttons were clicked, not just "Expand All Topics"

# Must Rules
- Make sure to extract all the resource links with the resources
- Create md folder with extracted disease text in this folder: /Users/Lasha/Desktop/MediMindexpert copy/docs/cardiology-diseases.md
- **CRITICAL**: Always extract and preserve all PubMed reference links
- **CRITICAL**: Include all related calculator links from Pathway.md
- **CRITICAL**: Format all references with proper markdown links
- **CRITICAL**: Verify reference link count matches article reference count
- **CRITICAL**: Include original Pathway.md source attribution
- **CRITICAL FOR LARGE CONTENT**: Use chunk-by-chunk extraction with immediate file writing
- **CRITICAL**: Check for and click ALL "Expand" buttons, not just "Expand All Topics"
- **CRITICAL**: Set CLAUDE_CODE_MAX_OUTPUT_TOKENS environment variable to avoid API limits

## Reference Link Extraction Verification

After extraction, verify:
1. **PubMed link count** matches references section
2. **Calculator links** are properly formatted
3. **Internal navigation links** preserved where relevant
4. **External research links** all functional
5. **Source attribution** to original Pathway.md article included
