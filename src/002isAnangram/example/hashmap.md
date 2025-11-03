```mermaid
graph TB
    subgraph Header["HASH MAP: 'listen' vs 'silent'"]
        Title["Time: O(n) | Space: O(1) ⭐ BEST"]
    end
    
    subgraph Phase1["Phase 1: Count str1 characters"]
        P1["Map = {}<br/>Process 'listen'"]
        P2["l: Map = {l:1}"]
        P3["i: Map = {l:1, i:1}"]
        P4["s: Map = {l:1, i:1, s:1}"]
        P5["t: Map = {l:1, i:1, s:1, t:1}"]
        P6["e: Map = {l:1, i:1, s:1, t:1, e:1}"]
        P7["n: Map = {l:1, i:1, s:1, t:1, e:1, n:1}"]
        
        P1 --> P2 --> P3 --> P4 --> P5 --> P6 --> P7
    end
    
    subgraph Phase2["Phase 2: Subtract str2 characters"]
        P8["Process 'silent'"]
        P9["s: Map = {l:1, i:1, s:0, t:1, e:1, n:1}"]
        P10["i: Map = {l:1, i:0, s:0, t:1, e:1, n:1}"]
        P11["l: Map = {l:0, i:0, s:0, t:1, e:1, n:1}"]
        P12["e: Map = {l:0, i:0, s:0, t:1, e:0, n:1}"]
        P13["n: Map = {l:0, i:0, s:0, t:1, e:0, n:0}"]
        P14["t: Map = {l:0, i:0, s:0, t:0, e:0, n:0}"]
        
        P8 --> P9 --> P10 --> P11 --> P12 --> P13 --> P14
    end
    
    subgraph Result["Phase 3: Verify"]
        R1["All counts = 0<br/>✓ ANAGRAM"]
    end
    
    Header --> Phase1
    Phase1 --> Phase2
    Phase2 --> Result
    
    style Header fill:#dbeafe,stroke:#3b82f6,stroke-width:3px
    style Phase1 fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style Phase2 fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style R1 fill:#86efac,stroke:#22c55e,stroke-width:3px,color:#000,font-weight:bold
    ```