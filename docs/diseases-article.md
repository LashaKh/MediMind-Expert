# Complete Guide: Converting MD Files to Structured Disease Data

## 📋 **Pre-Conversion Checklist**

### 1. **Analyze the Source MD File Structure**
```markdown
# Main Title
## Background/Overview sections
## Clinical findings
## Guidelines/Management sections  
## Studies/Research
## References with links
```

### 2. **Identify All Content Types**
- [ ] Headers and subheaders
- [ ] Bullet points and numbered lists
- [ ] Tables and structured data
- [ ] **Links** (PubMed, guidelines, external resources)
- [ ] **Recommendation levels** (Class I, IIa, IIb, III; Level A, B, C)
- [ ] Medical terminology and abbreviations
- [ ] Statistical data and percentages

---

## 🔄 **5-Step Conversion Process**

### **STEP 1: Background Content**
Copy EXACT content from MD file:
```typescript
background: {
  overview: {
    definition: "Copy EXACT definition",
    pathophysiology: "Copy ALL pathophysiology", 
    epidemiology: "Include ALL statistics",
    diseaseCourse: "Copy complete progression",
    prognosis: "Include ALL outcomes"
  }
}
```

### **STEP 2: Clinical Findings**
```typescript
clinicalFindings: {
  patientDemographics: ["Copy each bullet exactly"],
  pastMedicalHistory: ["Include ALL medical history"],
  symptoms: ["Copy ALL symptoms with percentages"]
}
```

### **STEP 3: Studies (MUST HAVE CLICKABLE LINKS)**
```typescript
studies: [{
  title: "EXACT title from MD",
  year: "Year",
  description: "COMPLETE description", 
  authors: "All authors",
  journal: "Complete citation",
  link: "https://pubmed.ncbi.nlm.nih.gov/PMID/" // ⚠️ REQUIRED
}]
```

### **STEP 4: Guidelines (CORRECT STRUCTURE)**
```typescript
guidelines: {
  sections: [{
    title: "Exact section title",
    id: "kebab-case-id",
    content: [{
      statement: "EXACT guideline statement",
      level: "A", // ⚠️ ONLY the letter (A,B,C,D) - NOT "Class A"
      source: "Source"
    }],
    subsections: [{ // ✅ AT SECTION LEVEL
      title: "Subsection title",
      id: "subsection-id",
      content: [...]
    }]
  }]
}
```

### **STEP 5: References (ALL MUST HAVE LINKS)**
```typescript
references: [{
  id: 1,
  authors: "EXACT author list",
  title: "EXACT title",
  journal: "Complete citation", 
  year: "Year",
  link: "https://pubmed.ncbi.nlm.nih.gov/PMID/" // ⚠️ REQUIRED
}]
```

---

## 🚨 **Critical Mistakes to Avoid**

### **Structure Issues (Causes UI Failures)**
- ❌ **CRITICAL**: Subsections nested in content items → UI shows "only bits"
- ❌ Missing `id` field for subsections
- ❌ Adding "Class" prefix to level field → Creates "Class Class B"

### **Content Issues**
- ❌ Missing PubMed links → Studies not clickable
- ❌ Shortening medical descriptions
- ❌ Skipping recommendation levels
- ❌ Missing statistics/percentages

### **Link Issues**
- ❌ Non-functional reference links
- ❌ Missing PubMed links for studies
- ❌ Incorrect PMID numbers

---

## 🔧 **Troubleshooting "Only Bits" Problem**

**Symptoms**: Comprehensive content exists but UI shows only summary statements

**Diagnosis**: 
```bash
grep "subsections:" your-file.ts | grep -A5 -B5 "content:"
```

**Fix**: Move all subsections from content items to section level

**Test**: Verify all detailed content displays in UI

---

## ✅ **Quality Checklist**

### **Content Completeness**
- [ ] Every sentence from MD preserved
- [ ] All statistics/percentages included
- [ ] All recommendation levels exact (just letters: A, B, C, D)
- [ ] All medical terminology unchanged

### **Links & References**
- [ ] All PubMed links functional
- [ ] All studies have clickable links
- [ ] Reference count matches MD file

### **Structure Validation**
- [ ] No subsections nested in content items
- [ ] All subsections at section level
- [ ] All subsections have `id` fields
- [ ] `npm run build` passes

### **UI Verification**
- [ ] All sections display detailed content (not just summaries)
- [ ] All subsections expandable and visible
- [ ] All links clickable

---

## 🎯 **Success Criteria**

1. **Zero content loss** - Every word preserved
2. **All links work** - Every reference clickable
3. **Correct structure** - All subsections at section level
4. **Build passes** - No TypeScript errors
5. **UI complete** - All detailed content displays

---

## ⚡ **Quick Validation**

1. **Content**: Compare word count with original MD
2. **Links**: Click every reference link
3. **Structure**: No nested subsections in content
4. **UI**: Navigate to disease page - all sections show detailed content
5. **Build**: `npm run build` succeeds

**Remember**: Better too much detail than missing critical medical information!

# Quick MD → UI Conversion Checklist

## 🚀 **Before You Start**
- [ ] Read the source MD file completely
- [ ] Count total sections and references  
- [ ] Note all recommendation levels (Class I/IIa/IIb/III, Level A/B/C)
- [ ] Identify all links and external resources

## ⚡ **During Conversion**

### **Content Extraction**
- [ ] Copy every sentence exactly (no paraphrasing)
- [ ] Include all statistics and percentages  
- [ ] Preserve all medical terminology
- [ ] Convert all bullet points to array items
- [ ] Maintain all section hierarchies

### **Recommendation Levels** 
- [ ] Format: "Class I, Level A" (exact format)
- [ ] Never skip or modify recommendation levels
- [ ] Include source for each recommendation
- [ ] Verify all Class/Level combinations are valid

### **Links & References**
- [ ] Add PubMed link for every reference
- [ ] **Add clickable link for every study**
- [ ] Verify each PMID opens correct article
- [ ] Include all external guideline links
- [ ] Test every link functionality

## ✅ **After Conversion**

### **Quality Check**
- [ ] Word count similar to original MD
- [ ] All sections from MD are present
- [ ] No content shortened or summarized
- [ ] All recommendation levels preserved

### **Technical Validation**
- [ ] `npm run build` passes without errors
- [ ] TypeScript types are correct
- [ ] All IDs use kebab-case format
- [ ] Proper nesting of subsections

### **User Experience**
- [ ] Side-by-side comparison with MD file
- [ ] Click every reference link
- [ ] Read through UI version for completeness
- [ ] Verify medical accuracy
- [ ] **CRITICAL**: Check all major sections are expanded in UI (not just showing headers)
- [ ] **If sections appear collapsed**: Add section IDs to `expandedSectionsList` in DiseasePage.tsx

## 🚨 **Red Flags** (Stop and Fix)
- ❌ Any content missing from original MD
- ❌ **CRITICAL**: Subsections nested within content items (UI won't display them)
- ❌ **CRITICAL**: Comprehensive content exists but UI shows "only bits"
- ❌ Recommendation levels modified or missing  
- ❌ Adding "Class" prefix to level field (creates "Class Class B" display)
- ❌ **Studies missing clickable links in link field**
- ❌ Non-functional reference links
- ❌ TypeScript build errors
- ❌ Shortened medical descriptions
- ❌ **Major sections showing only headers in UI (missing from expandedSectionsList)**
- ❌ Missing id field for subsections

## ⚠️ **IMPORTANT: NO AUTO-COMMITS**
- **DO NOT** automatically commit changes when task is complete
- **DO NOT** run git commands without explicit user request
- Focus ONLY on content conversion and file updates
- Let user handle git operations manually

## 🎯 **Success = 100% Content Preservation + All Links Working** 

# make sure article is added to to the disease index system to make it appear in UI 