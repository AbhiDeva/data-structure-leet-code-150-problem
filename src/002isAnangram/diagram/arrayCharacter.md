```mermaid
flowchart TD
    Start([Start]) --> Input["Input: str1, str2<br/>Example: 'listen', 'silent'"]
    Input --> CheckLen{str1.length === str2.length?}
    
    CheckLen -->|No| ReturnFalse1[Return false]
    CheckLen -->|Yes| CreateArray["Create array[26]<br/>frequency = [0,0,0...0]"]
    
    CreateArray --> InitLoop[i = 0]
    InitLoop --> LoopCheck{i < str1.length?}
    
    LoopCheck -->|No| VerifyArray["Check all elements<br/>in frequency array"]
    LoopCheck -->|Yes| GetChar1["Get char from str1<br/>index = char - 'a'"]
    
    GetChar1 --> Increment["frequency[index]++"]
    Increment --> GetChar2["Get char from str2<br/>index = char - 'a'"]
    
    GetChar2 --> Decrement["frequency[index]--"]
    Decrement --> IncI[i++]
    IncI --> LoopCheck
    
    VerifyArray --> CheckZero{All values === 0?}
    CheckZero -->|Yes| ReturnTrue[Return true]
    CheckZero -->|No| ReturnFalse2[Return false]
    
    ReturnTrue --> End([End: Anagram ✓])
    ReturnFalse1 --> End2([End: Not Anagram ✗])
    ReturnFalse2 --> End2
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style End2 fill:#ef4444,stroke:#dc2626,stroke-width:3px,color:#fff
    style CreateArray fill:#34d399,stroke:#10b981,stroke-width:2px,color:#000
    style Increment fill:#60a5fa,stroke:#3b82f6,stroke-width:2px,color:#fff
    style Decrement fill:#f87171,stroke:#ef4444,stroke-width:2px,color:#fff
    ```