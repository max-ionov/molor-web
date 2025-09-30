---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MOLOR LemmaBank"
  text: "A user interface for the MOLOR LemmaBank"
  actions:
    - theme: brand
      text: Queries
      link: /queries
---

# Search by lemma

:::form

```json params
{
  "endpoints": [
    "https://raw.githubusercontent.com/CIRCSE/Molor/refs/heads/main/ttl/molorLemmaBank.ttl"
  ],
  "parameters": [
    {
      "variable": "lemma",
      "type": "string",
      "label": "Lemma",
      "placeholder": "molaid"
    }
  ]
}
```

```sparql
PREFIX ontolex: <http://www.w3.org/ns/lemon/ontolex#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX molor:   <http://molor.eu/ontologies/molor/>

SELECT DISTINCT ?lemma ?lemma_str ?lemma_var_str ?POS
WHERE {
    ?lemma rdfs:label "${lemma}" ;
           ontolex:writtenRep ?lemma_str ;
           rdfs:label ?label .
    OPTIONAL { ?lemma molor:lemmaVariant ?lemma_var . ?lemma_var rdfs:label ?lemma_var_str . }
    OPTIONAL { ?lemma molor:hasPOS ?POS . }
       
} LIMIT 100
```
:::form