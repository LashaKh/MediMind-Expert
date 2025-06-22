# Pathway.md Content Extraction Guide Using Puppeteer MCP

Quick guide for extracting complete content from Pathway.md medical articles using Puppeteer MCP. 

**Prerequisites**: Chrome installed, account registered at team@updevoteai.com, password is Dba545c5fde36242 Puppeteer MCP available.

# first log in with this email team@updevoteai.com using google log in 

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

## Step 2: Expand all collapsed fields Extract Full Content all the sources included

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

Due to MCP token limits (25,000 max), extract in sections:

```javascript
// Chunk 1: Characters 0-10,000
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.slice(0, 10000)")

// Chunk 2: Characters 10,000-20,000  
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.slice(10000, 20000)")

// Chunk 3: Characters 20,000-30,000
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.slice(20000, 30000)")

// Continue until all content extracted
```

## Step 3: Content Organization

### Key Sections to Identify:
- **Background** (Definition, Pathophysiology, Epidemiology)
- **Guidelines** (with evidence levels A, B, C, D, E, I)
- **Clinical Findings** (Symptoms, Medical History) 
- **Studies** (Recent research and trials)
- **References** (Citations and links)

## Quick Workflow

```javascript
// 1. Navigate to article
mcp__puppeteer__puppeteer_navigate("https://www.pathway.md/diseases/[article-id]")

// 2. Expand all content
mcp__puppeteer__puppeteer_click("text=Expand All Topics")

// 3. Extract in chunks
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.slice(0, 10000)")
mcp__puppeteer__puppeteer_evaluate("document.body.innerText.slice(10000, 20000)")
// Continue as needed

// 4. Update A-Fib.md and React components with extracted content
```

## Success Indicators

✅ **No login prompts** - Account access working  
✅ **"Expand All Topics" available** - Full content accessible  
✅ **40,000+ characters** - Complete article extracted  
✅ **Evidence levels preserved** - A, B, C, D, E, I classifications visible  
✅ **Multiple guidelines sources** - ACC, ESC, AHA, CCS, etc.

## Troubleshooting

**If content truncated:** Extract in smaller 5,000 character chunks  
**If login required:** Navigate to main pathway.md first, then to article  
**If expansion fails:** Click individual section headers manually

# must rules
 - Make sure to extract all the resource links with the resources
 - create md folder with extratced disease text in this folder : /Users/Lasha/Desktop/MediMindexpert copy/docs/cardiology-diseases.md
