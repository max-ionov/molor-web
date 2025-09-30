# Lemma Forms

Output all the forms for a MOLOR lemma based on Goidinflex.

:::form

```json params
{
  "endpoints": [
    "https://raw.githubusercontent.com/CIRCSE/Molor/refs/heads/main/ttl/molorLemmaBank.ttl",
    "https://raw.githubusercontent.com/max-ionov/molor-web/refs/heads/main/ttl/goidinflex.ttl",
    "https://raw.githubusercontent.com/max-ionov/molor-web/refs/heads/main/ttl/molor-goidinflex-mappings.ttl"
  ],
  "parameters": [
    {
      "variable": "lemma",
      "type": "string",
      "label": "Lemma",
      "placeholder": "molad"
    }
  ]
}
```

```sparql
PREFIX ontolex: <http://www.w3.org/ns/lemon/ontolex#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX molor:   <http://molor.eu/ontologies/molor/>
PREFIX paralex: <https://www.paralex-standard.org/paralex_ontology.xml#>

SELECT DISTINCT ?lemma ?cell_str ?form_str ?translation ?dil_url
WHERE {
    ?lemma ontolex:writtenRep "${lemma}" .
    ?lemma rdfs:seeAlso ?goidinflex_lemma .
    ?goidinflex_lemma rdfs:comment ?translation .
    OPTIONAL { ?goidinflex_lemma rdfs:seeAlso ?dil_url . }
    ?goidinflex_lemma ontolex:canonicalForm|ontolex:otherForm ?form .
    ?form ontolex:writtenRep ?form_str ;
          paralex:cell ?cell .
    ?cell rdfs:label ?cell_str ;
          paralex:canonical_order ?form_order .
    
} ORDER BY ?form_order LIMIT 100
```
:::form
