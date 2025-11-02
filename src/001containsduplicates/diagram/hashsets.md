flowchart TD
    Start([Start]) --> Input[Input: arr array]
    Input --> InitSet[Create empty Set: seen = new Set]
    
    InitSet --> InitLoop[Start loop: for num of arr]
    
    InitLoop --> HasMore{More elements<br/>in arr?}
    
    HasMore -->|Yes| GetNum[Get next num from arr]
    HasMore -->|No| ReturnFalse[return false]
    
    GetNum --> CheckSet{seen.has num ?}
    
    CheckSet -->|Yes| ReturnTrue[return true]
    CheckSet -->|No| AddToSet[seen.add num]
    
    AddToSet --> HasMore
    
    ReturnTrue --> EndTrue([End: Duplicate Found ✓])
    ReturnFalse --> EndFalse([End: No Duplicates])
    
    %% Styling
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style Input fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style EndTrue fill:#ef4444,stroke:#dc2626,stroke-width:3px,color:#fff
    style EndFalse fill:#3b82f6,stroke:#2563eb,stroke-width:3px,color:#fff
    
    style InitSet fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style InitLoop fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    
    style HasMore fill:#a78bfa,stroke:#8b5cf6,stroke-width:2px,color:#000
    style CheckSet fill:#fbbf24,stroke:#f59e0b,stroke-width:3px,color:#000
    
    style GetNum fill:#60a5fa,stroke:#3b82f6,stroke-width:2px,color:#fff
    style AddToSet fill:#34d399,stroke:#10b981,stroke-width:2px,color:#000
    
    style ReturnTrue fill:#f87171,stroke:#ef4444,stroke-width:2px,color:#fff
    style ReturnFalse fill:#60a5fa,stroke:#3b82f6,stroke-width:2px,color:#fff