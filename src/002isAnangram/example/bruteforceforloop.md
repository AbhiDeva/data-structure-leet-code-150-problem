```mermaid
graph TB
    subgraph Header["BRUTE FORCE: 'listen' vs 'silent'"]
        Title["Time: O(n²) | Space: O(n)"]
    end
    
    subgraph Steps["Execution Steps"]
        S1["Step 1: Check lengths<br/>listen.length = 6<br/>silent.length = 6<br/>✓ Same length"]
        S2["Step 2: i=0, char='l'<br/>Search in 'silent'<br/>Found at j=2<br/>Remove: ['s','i','e','n','t']"]
        S3["Step 3: i=1, char='i'<br/>Search in ['s','i','e','n','t']<br/>Found at j=1<br/>Remove: ['s','e','n','t']"]
        S4["Step 4: i=2, char='s'<br/>Search in ['s','e','n','t']<br/>Found at j=0<br/>Remove: ['e','n','t']"]
        S5["Step 5: i=3, char='t'<br/>Search in ['e','n','t']<br/>Found at j=2<br/>Remove: ['e','n']"]
        S6["Step 6: i=4, char='e'<br/>Search in ['e','n']<br/>Found at j=0<br/>Remove: ['n']"]
        S7["Step 7: i=5, char='n'<br/>Search in ['n']<br/>Found at j=0<br/>Remove: []"]
        S8["Result: All chars found<br/>✓ ANAGRAM"]
        
        S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7 --> S8
    end
    
    Header --> Steps
    
    style Header fill:#fef3c7,stroke:#f59e0b,stroke-width:3px
    style S8 fill:#86efac,stroke:#22c55e,stroke-width:3px,color:#000,font-weight:bold
    ```
