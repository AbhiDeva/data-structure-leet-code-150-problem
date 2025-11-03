```mermaid
graph TB
    subgraph Header["CHARACTER ARRAY: 'listen' vs 'silent'"]
        Title["Time: O(n) | Space: O(1) ⭐ OPTIMAL"]
    end
    
    subgraph Init["Initialization"]
        I1["frequency[26] = [0,0,0,0,0,0...]<br/>Indices represent a-z"]
    end
    
    subgraph Steps["Simultaneous Processing"]
        S1["i=0: 'l' vs 's'<br/>freq[11]++ → 1<br/>freq[18]-- → -1<br/>[0,0,...,1,0,...,-1,...]"]
        S2["i=1: 'i' vs 'i'<br/>freq[8]++ → 1<br/>freq[8]-- → 0<br/>[0,0,...,0,1,0,...,-1,...]"]
        S3["i=2: 's' vs 'l'<br/>freq[18]++ → 0<br/>freq[11]-- → 0<br/>[0,0,...,0,0,0,...,0,...]"]
        S4["i=3: 't' vs 'e'<br/>freq[19]++ → 1<br/>freq[4]-- → -1<br/>[0,...,-1,...,1,...]"]
        S5["i=4: 'e' vs 'n'<br/>freq[4]++ → 0<br/>freq[13]-- → -1<br/>[0,...,0,...,-1,1,...]"]
        S6["i=5: 'n' vs 't'<br/>freq[13]++ → 0<br/>freq[19]-- → 0<br/>[0,0,0,...,0,0,0]"]
        
        S1 --> S2 --> S3 --> S4 --> S5 --> S6
    end
    
    subgraph Result["Verification"]
        R1["All values = 0<br/>✓ ANAGRAM"]
    end
    
    Header --> Init
    Init --> Steps
    Steps --> Result
    
    style Header fill:#dcfce7,stroke:#22c55e,stroke-width:3px
    style Init fill:#dbeafe,stroke:#3b82f6,stroke-width:2px
    style Steps fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style R1 fill:#86efac,stroke:#22c55e,stroke-width:3px,color:#000,font-weight:bold
    ```