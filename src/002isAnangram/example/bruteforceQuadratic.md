```mermaid 
graph TB
    subgraph Header["QUADRATIC APPROACH: listen vs silent"]
        Title["Time: O n² | Space: O n"]
        Complexity["indexOf: O n + splice: O n = O n² total"]
        Title --> Complexity
    end
    
    subgraph Init["Initialization"]
        I1["Step 1: Check lengths<br/>listen.length = 6<br/>silent.length = 6<br/>Lengths match"]
        I2["Step 2: Create array<br/>arr2 = s,i,l,e,n,t<br/>arr2.length = 6"]
        I1 --> I2
    end
    
    subgraph Processing["Character Processing"]
        P1["Step 3: ch = l<br/>indexOf l in s,i,l,e,n,t<br/>index = 2<br/>splice at 2<br/>arr2 = s,i,e,n,t"]
        
        P2["Step 4: ch = i<br/>indexOf i in s,i,e,n,t<br/>index = 1<br/>splice at 1<br/>arr2 = s,e,n,t"]
        
        P3["Step 5: ch = s<br/>indexOf s in s,e,n,t<br/>index = 0<br/>splice at 0<br/>arr2 = e,n,t"]
        
        P4["Step 6: ch = t<br/>indexOf t in e,n,t<br/>index = 2<br/>splice at 2<br/>arr2 = e,n"]
        
        P5["Step 7: ch = e<br/>indexOf e in e,n<br/>index = 0<br/>splice at 0<br/>arr2 = n"]
        
        P6["Step 8: ch = n<br/>indexOf n in n<br/>index = 0<br/>splice at 0<br/>arr2 = empty"]
        
        P1 --> P2 --> P3 --> P4 --> P5 --> P6
    end
    
    subgraph Result["Verification"]
        R1["Step 9: Check arr2.length<br/>arr2.length = 0<br/>All characters matched"]
        R2["Result: TRUE<br/>ANAGRAM CONFIRMED"]
        R1 --> R2
    end
    
    Header --> Init
    Init --> Processing
    Processing --> Result
    
    style Header fill:#fef3c7,stroke:#f59e0b,stroke-width:3px
    style Init fill:#dbeafe,stroke:#3b82f6,stroke-width:2px
    style Processing fill:#fecaca,stroke:#ef4444,stroke-width:2px
    style P1 fill:#fed7aa,stroke:#fb923c,stroke-width:2px,color:#000
    style P2 fill:#fed7aa,stroke:#fb923c,stroke-width:2px,color:#000
    style P3 fill:#fed7aa,stroke:#fb923c,stroke-width:2px,color:#000
    style P4 fill:#fed7aa,stroke:#fb923c,stroke-width:2px,color:#000
    style P5 fill:#fed7aa,stroke:#fb923c,stroke-width:2px,color:#000
    style P6 fill:#fed7aa,stroke:#fb923c,stroke-width:2px,color:#000
    style Result fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style R2 fill:#86efac,stroke:#22c55e,stroke-width:3px,color:#000,font-weight:bold
    ```