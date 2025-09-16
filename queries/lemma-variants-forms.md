# Forms for Lemma Variants

Output all the forms for all the lemma variants for a MOLOR lemma based on Goidinflex.

:::form

```json params
{
  "endpoints": [
    "https://raw.githubusercontent.com/CIRCSE/Molor/refs/heads/main/ttl/molorLemmaBank.ttl",
    "http://localhost:4173/ttl/goidinflex.ttl",
    "http://localhost:4173/ttl/molor-goidinflex-mappings.ttl"
  ],
  "parameters": [
    {
      "variable": "lemma",
      "type": "string",
      "label": "Lemma",
      "placeholder": "toros"
    }
  ]
}
```

```sparql
PREFIX ontolex: <http://www.w3.org/ns/lemon/ontolex#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX molor:   <http://molor.eu/ontologies/molor/>
PREFIX paralex: <https://www.paralex-standard.org/paralex_ontology.xml#>

SELECT DISTINCT ?lemma ?lemma_var ?cell_str ?form_str
WHERE {
    ?lemma ontolex:writtenRep "${lemma}" ;
           molor:lemmaVariant ?lemma_var .
    { ?lemma_var rdfs:seeAlso ?goidinflex_lemma . } UNION { ?lemma rdfs:seeAlso ?goidinflex_lemma . }
    ?goidinflex_lemma ontolex:canonicalForm|ontolex:otherForm ?form .
    ?form ontolex:writtenRep ?form_str ;
          paralex:cell ?cell .
    ?cell rdfs:label ?cell_str ;
          paralex:canonical_order ?form_order .
    
} ORDER BY ?form_order LIMIT 100
```
:::form
