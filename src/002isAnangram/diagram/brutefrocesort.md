```mermaid
flowchart TD
    Start([Start]) --> Input["Input: str1, str2<br/>Example: 'listen', 'silent'"]
    Input --> CheckLen{str1.length === str2.length?}
    
    CheckLen -->|No| ReturnFalse[Return false]
    CheckLen -->|Yes| Convert1["Convert str1 to lowercase<br/>str1 = 'listen'"]
    
    Convert1 --> Split1["Split into array<br/>['l','i','s','t','e','n']"]
    Split1 --> Sort1["Sort array<br/>['e','i','l','n','s','t']"]
    Sort1 --> Join1["Join to string<br/>sorted1 = 'eilnst'"]
    
    Join1 --> Convert2["Convert str2 to lowercase<br/>str2 = 'silent'"]
    Convert2 --> Split2["Split into array<br/>['s','i','l','e','n','t']"]
    Split2 --> Sort2["Sort array<br/>['e','i','l','n','s','t']"]
    Sort2 --> Join2["Join to string<br/>sorted2 = 'eilnst'"]
    
    Join2 --> Compare{sorted1 === sorted2?}
    
    Compare -->|Yes| ReturnTrue[Return true]
    Compare -->|No| ReturnFalse
    
    ReturnTrue --> End([End: Anagram ✓])
    ReturnFalse --> End2([End: Not Anagram ✗])
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style End2 fill:#ef4444,stroke:#dc2626,stroke-width:3px,color:#fff
    style Compare fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
    style Sort1 fill:#a78bfa,stroke:#8b5cf6,stroke-width:2px,color:#fff
    style Sort2 fill:#a78bfa,stroke:#8b5cf6,stroke-width:2px,color:#fff
    ```
