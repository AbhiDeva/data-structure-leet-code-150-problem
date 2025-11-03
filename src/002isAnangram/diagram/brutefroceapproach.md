```mermaid
flowchart TD
    Start([Start]) --> Input["Input: str1, str2<br/>Example: listen, silent"]
    Input --> CheckLen{"str1.length == str2.length?"}
    
    CheckLen -->|No| ReturnFalse1[Return false<br/>Different lengths]
    CheckLen -->|Yes| CreateArray["Convert str2 to array<br/>arr2 = split str2<br/>arr2 = s,i,l,e,n,t"]
    
    CreateArray --> InitLoop["Start loop<br/>for each ch in str1"]
    InitLoop --> GetChar["Get next character ch<br/>from str1"]
    
    GetChar --> IndexOf["Search for ch in arr2<br/>index = arr2.indexOf ch<br/>O n operation"]
    
    IndexOf --> CheckIndex{"index == -1?"}
    CheckIndex -->|Yes| ReturnFalse2[Return false<br/>Character not found]
    CheckIndex -->|No| Splice["Remove character<br/>arr2.splice index, 1<br/>O n operation"]
    
    Splice --> MoreChars{"More characters<br/>in str1?"}
    MoreChars -->|Yes| GetChar
    MoreChars -->|No| CheckEmpty{"arr2.length == 0?"}
    
    CheckEmpty -->|Yes| ReturnTrue[Return true<br/>All matched]
    CheckEmpty -->|No| ReturnFalse3[Return false<br/>Extra chars in arr2]
    
    ReturnTrue --> End([End: Anagram])
    ReturnFalse1 --> End2([End: Not Anagram])
    ReturnFalse2 --> End2
    ReturnFalse3 --> End2
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style End2 fill:#ef4444,stroke:#dc2626,stroke-width:3px,color:#fff
    style CheckLen fill:#a78bfa,stroke:#8b5cf6,stroke-width:2px,color:#000
    style CheckIndex fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
    style CheckEmpty fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
    style IndexOf fill:#f87171,stroke:#ef4444,stroke-width:2px,color:#fff
    style Splice fill:#f87171,stroke:#ef4444,stroke-width:2px,color:#fff
    style CreateArray fill:#60a5fa,stroke:#3b82f6,stroke-width:2px,color:#fff
    ```
