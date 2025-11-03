
```mermaid
flowchart TD
    Start([Start]) --> Input["Input: str1, str2<br/>Example: 'listen', 'silent'"]
    Input --> CheckLen{str1.length === str2.length?}
    
    CheckLen -->|No| ReturnFalse1[Return false]
    CheckLen -->|Yes| CreateMap["Create Map<br/>charCount = {}"]
    
    CreateMap --> Loop1["Loop through str1<br/>Count each character"]
    Loop1 --> CountChar["For each char:<br/>charCount[char] = count + 1"]
    
    CountChar --> Loop2["Loop through str2<br/>Subtract each character"]
    Loop2 --> CheckExists{char exists in Map?}
    
    CheckExists -->|No| ReturnFalse2[Return false<br/>Extra char in str2]
    CheckExists -->|Yes| Subtract["charCount[char] = count - 1"]
    
    Subtract --> CheckNegative{count < 0?}
    CheckNegative -->|Yes| ReturnFalse3[Return false<br/>Too many chars]
    CheckNegative -->|No| Continue[Continue loop]
    
    Continue --> MoreChars{More chars in str2?}
    MoreChars -->|Yes| CheckExists
    MoreChars -->|No| Verify["Verify all counts = 0"]
    
    Verify --> AllZero{All counts === 0?}
    AllZero -->|Yes| ReturnTrue[Return true]
    AllZero -->|No| ReturnFalse4[Return false]
    
    ReturnTrue --> End([End: Anagram ✓])
    ReturnFalse1 --> End2([End: Not Anagram ✗])
    ReturnFalse2 --> End2
    ReturnFalse3 --> End2
    ReturnFalse4 --> End2
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style End2 fill:#ef4444,stroke:#dc2626,stroke-width:3px,color:#fff
    style CreateMap fill:#34d399,stroke:#10b981,stroke-width:2px,color:#000
    style CheckExists fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
    ```