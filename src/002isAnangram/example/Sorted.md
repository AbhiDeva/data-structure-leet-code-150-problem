```mermaid
graph TB
    subgraph Header["SORTED TECHNIQUE: 'listen' vs 'silent'"]
        Title["Time: O(n log n) | Space: O(n)"]
    end
    
    subgraph Steps["Execution Steps"]
        S1["Step 1: Check lengths<br/>listen.length = 6<br/>silent.length = 6<br/>✓ Same length"]
        S2["Step 2: Process str1<br/>Original: 'listen'<br/>Lowercase: 'listen'<br/>Array: ['l','i','s','t','e','n']"]
        S3["Step 3: Sort str1<br/>Before: ['l','i','s','t','e','n']<br/>After: ['e','i','l','n','s','t']<br/>String: 'eilnst'"]
        S4["Step 4: Process str2<br/>Original: 'silent'<br/>Lowercase: 'silent'<br/>Array: ['s','i','l','e','n','t']"]
        S5["Step 5: Sort str2<br/>Before: ['s','i','l','e','n','t']<br/>After: ['e','i','l','n','s','t']<br/>String: 'eilnst'"]
        S6["Step 6: Compare<br/>'eilnst' === 'eilnst'<br/>✓ MATCH"]
        S7["Result: Sorted strings equal<br/>✓ ANAGRAM"]
        
        S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7
    end
    
    Header --> Steps
    
    style Header fill:#f3e8ff,stroke:#a855f7,stroke-width:3px
    style S7 fill:#86efac,stroke:#22c55e,stroke-width:3px,color:#000,font-weight:bold
    style S3 fill:#e9d5ff,stroke:#a855f7,stroke-width:2px,color:#000
    style S5 fill:#e9d5ff,stroke:#a855f7,stroke-width:2px,color:#000
    ```