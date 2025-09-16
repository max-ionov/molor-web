# Lemma Variants

Search for lemma variants in the database.

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

SELECT DISTINCT ?lemma_str ?lemma_var_str
WHERE {
    ?lemma rdfs:label "${lemma}" ;
           ontolex:writtenRep ?lemma_str ;
           molor:lemmaVariant ?lemma_var .

    ?lemma_var ontolex:writtenRep ?lemma_var_str .
       
} LIMIT 100
```
:::form
