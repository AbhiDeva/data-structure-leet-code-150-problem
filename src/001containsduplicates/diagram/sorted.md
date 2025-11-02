flowchart TD
    Start([Start]) --> Input[Input: arr array]
    Input --> CreateCopy[Create copy of arr into sorted]
    
    CreateCopy --> SortArray[Sort array]
    
    SortArray --> InitI[i = 0]
    
    InitI --> CheckI{Is i < sorted.length - 1?}
    
    CheckI -->|Yes| Compare["Are sorted[i] equal to sorted[i + 1]?"]
    CheckI -->|No| ReturnFalse[return false]
    
    Compare -->|Yes| ReturnTrue[return true]
    Compare -->|No| IncI[i++]
    
    IncI --> CheckI
    
    ReturnTrue --> EndTrue([End: Duplicate Found ✓])
    ReturnFalse --> EndFalse([End: No Duplicates])
    
    %% Styling
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style Input fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style EndTrue fill:#ef4444,stroke:#dc2626,stroke-width:3px,color:#fff
    style EndFalse fill:#3b82f6,stroke:#2563eb,stroke-width:3px,color:#fff
    
    style CreateCopy fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style SortArray fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    
    style CheckI fill:#a78bfa,stroke:#8b5cf6,stroke-width:2px,color:#000
    style Compare fill:#fbbf24,stroke:#f59e0b,stroke-width:3px,color:#000
    
    style InitI fill:#60a5fa,stroke:#3b82f6,stroke-width:2px,color:#fff
    style IncI fill:#60a5fa,stroke:#3b82f6,stroke-width:2px,color:#fff
    
    style ReturnTrue fill:#f87171,stroke:#ef4444,stroke-width:2px,color:#fff
    style ReturnFalse fill:#60a5fa,stroke:#3b82f6,stroke-width:2px,color:#fff
