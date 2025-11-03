```mermaid
flowchart TD
    Start([Start]) --> Input["Input: str1, str2<br/>Example: listen, silent"]
    Input --> CheckLen{"Length equal?"}
    
    CheckLen -->|No| ReturnFalse1[Return false]
    CheckLen -->|Yes| Convert["Convert to lowercase<br/>arr1 = l,i,s,t,e,n<br/>arr2 = s,i,l,e,n,t"]
    
    Convert --> InitI[i = 0]
    InitI --> OuterLoop{"i < arr1.length?"}
    
    OuterLoop -->|No| ReturnTrue[Return true<br/>All chars matched!]
    OuterLoop -->|Yes| GetChar["Get arr1 i <br/>found = false"]
    
    GetChar --> InitJ[j = 0]
    InitJ --> InnerLoop{"j < arr2.length?"}
    
    InnerLoop -->|No| CheckFound{"found true?"}
    InnerLoop -->|Yes| Compare{"arr1 i == arr2 j ?"}
    
    Compare -->|Yes| RemoveChar["Remove arr2 j <br/>found = true<br/>break"]
    Compare -->|No| IncJ[j++]
    
    IncJ --> InnerLoop
    RemoveChar --> IncI[i++]
    IncI --> OuterLoop
    
    CheckFound -->|No| ReturnFalse2[Return false<br/>Char not found]
    CheckFound -->|Yes| IncI
    
    ReturnTrue --> End([End: Anagram])
    ReturnFalse1 --> End2([End: Not Anagram])
    ReturnFalse2 --> End2
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style End2 fill:#ef4444,stroke:#dc2626,stroke-width:3px,color:#fff
    style Compare fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
    style CheckLen fill:#a78bfa,stroke:#8b5cf6,stroke-width:2px,color:#000
    style OuterLoop fill:#a78bfa,stroke:#8b5cf6,stroke-width:2px,color:#000
    style InnerLoop fill:#a78bfa,stroke:#8b5cf6,stroke-width:2px,color:#000
    ```