
# 1.BRUTE FORCE
```mermaid
flowchart TD
    Start([Start]) --> Input["Input: strs array<br/>Example: eat,tea,tan"]
    Input --> InitGroups["groups = empty array"]
    
    InitGroups --> Loop["For each word in strs"]
    Loop --> SetFound["found = false"]
    
    SetFound --> CheckGroups["For each group in groups"]
    CheckGroups --> IsAnagram{"Is word anagram<br/>of group 0 ?"}
    
    IsAnagram -->|Yes| AddToGroup["Add word to group<br/>found = true<br/>break"]
    IsAnagram -->|No| NextGroup{More groups?}
    
    NextGroup -->|Yes| CheckGroups
    NextGroup -->|No| CheckFound{found == false?}
    
    CheckFound -->|Yes| NewGroup["Create new group<br/>with word"]
    CheckFound -->|No| NextWord{More words?}
    
    AddToGroup --> NextWord
    NewGroup --> NextWord
    
    NextWord -->|Yes| Loop
    NextWord -->|No| Return["Return groups"]
    
    Return --> End([End])
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style IsAnagram fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
```

# 2. SORTING KEY 
```mermaid
flowchart TD
    Start([Start]) --> Input["Input: strs array"]
    Input --> CreateMap["Create empty Map"]
    
    CreateMap --> Loop["For each word in strs"]
    Loop --> Split["Split word into chars"]
    
    Split --> Sort["Sort chars array"]
    Sort --> Join["Join back to string<br/>This is the key"]
    
    Join --> CheckMap{"Map has key?"}
    CheckMap -->|No| CreateEntry["map.set key, empty array"]
    CheckMap -->|Yes| AddWord["map.get key .push word"]
    
    CreateEntry --> AddWord
    AddWord --> MoreWords{More words?}
    
    MoreWords -->|Yes| Loop
    MoreWords -->|No| Convert["Convert Map.values to Array"]
    
    Convert --> Return["Return grouped arrays"]
    Return --> End([End])
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style Sort fill:#a78bfa,stroke:#8b5cf6,stroke-width:2px,color:#fff
```

# 3. CHARACTER FREQUENCY
```mermaid
flowchart TD
    Start([Start]) --> Input["Input: strs array"]
    Input --> CreateMap["Create empty Map"]
    
    CreateMap --> Loop["For each word in strs"]
    Loop --> InitCount["count = array 26 zeros"]
    
    InitCount --> CountLoop["For each char in word"]
    CountLoop --> Increment["count char-a ++"]
    
    Increment --> MoreChars{More chars?}
    MoreChars -->|Yes| CountLoop
    MoreChars -->|No| JoinKey["key = count.join #"]
    
    JoinKey --> CheckMap{"Map has key?"}
    CheckMap -->|No| CreateEntry["map.set key, empty array"]
    CheckMap -->|Yes| AddWord["map.get key .push word"]
    
    CreateEntry --> AddWord
    AddWord --> MoreWords{More words?}
    
    MoreWords -->|Yes| Loop
    MoreWords -->|No| Convert["Convert Map.values to Array"]
    
    Convert --> Return["Return grouped arrays"]
    Return --> End([End])
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style InitCount fill:#34d399,stroke:#10b981,stroke-width:2px,color:#000
```

# 4. OBJECT-BASED 
```mermaid
flowchart TD
    Start([Start]) --> Input["Input: strs array"]
    Input --> CreateObj["Create empty object"]
    
    CreateObj --> Loop["For each word in strs"]
    Loop --> SortKey["key = word sorted"]
    
    SortKey --> CheckObj{"obj key exists?"}
    CheckObj -->|No| InitArray["obj key = empty array"]
    CheckObj -->|Yes| PushWord["obj key .push word"]
    
    InitArray --> PushWord
    PushWord --> MoreWords{More words?}
    
    MoreWords -->|Yes| Loop
    MoreWords -->|No| GetValues["Object.values obj"]
    
    GetValues --> Return["Return arrays"]
    Return --> End([End])
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
```

# 5. PRIME MULTIPLICATION  
```mermaid
flowchart TD
    Start([Start]) --> Input["Input: strs array"]
    Input --> InitPrimes["primes = 2,3,5,7,11..."]
    
    InitPrimes --> CreateMap["Create empty Map"]
    CreateMap --> Loop["For each word in strs"]
    
    Loop --> InitHash["hash = 1 BigInt"]
    InitHash --> CharLoop["For each char in word"]
    
    CharLoop --> Multiply["hash *= primes char-a"]
    Multiply --> MoreChars{More chars?}
    
    MoreChars -->|Yes| CharLoop
    MoreChars -->|No| ToString["key = hash.toString"]
    
    ToString --> CheckMap{"Map has key?"}
    CheckMap -->|No| CreateEntry["map.set key, empty array"]
    CheckMap -->|Yes| AddWord["map.get key .push word"]
    
    CreateEntry --> AddWord
    AddWord --> MoreWords{More words?}
    
    MoreWords -->|Yes| Loop
    MoreWords -->|No| Return["Return Map.values"]
    
    Return --> End([End])
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style Multiply fill:#f87171,stroke:#ef4444,stroke-width:2px,color:#fff
```

# 6.CANONICAL HASH
```mermaid
flowchart TD
    Start([Start]) --> Input["Input: strs array"]
    Input --> CreateMap["Create empty object"]
    
    CreateMap --> Loop["For each word in strs"]
    Loop --> InitFreq["freq = array 26 zeros"]
    
    InitFreq --> CountChars["Count frequency of each char"]
    CountChars --> Stringify["key = JSON.stringify freq"]
    
    Stringify --> CheckMap{"map key exists?"}
    CheckMap -->|No| InitArray["map key = empty array"]
    CheckMap -->|Yes| PushWord["map key .push word"]
    
    InitArray --> PushWord
    PushWord --> MoreWords{More words?}
    
    MoreWords -->|Yes| Loop
    MoreWords -->|No| GetValues["Object.values map"]
    
    GetValues --> Return["Return arrays"]
    Return --> End([End])
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style Stringify fill:#a78bfa,stroke:#8b5cf6,stroke-width:2px,color:#fff
```

# 7. TRIE-BASED
```mermaid
flowchart TD
    Start([Start]) --> Input["Input: strs array"]
    Input --> CreateRoot["root = new TrieNode"]
    
    CreateRoot --> Loop["For each word in strs"]
    Loop --> SortWord["sorted = word sorted"]
    
    SortWord --> InitNode["node = root"]
    InitNode --> CharLoop["For each char in sorted"]
    
    CharLoop --> CheckChild{"node.children char exists?"}
    CheckChild -->|No| CreateNode["Create new TrieNode"]
    CheckChild -->|Yes| MoveNode["node = node.children char"]
    
    CreateNode --> MoveNode
    MoveNode --> MoreChars{More chars?}
    
    MoreChars -->|Yes| CharLoop
    MoreChars -->|No| AddWord["node.words.push word"]
    
    AddWord --> MoreWords{More words?}
    MoreWords -->|Yes| Loop
    MoreWords -->|No| DFS["DFS collect all word groups"]
    
    DFS --> Return["Return result"]
    Return --> End([End])
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style CreateNode fill:#60a5fa,stroke:#3b82f6,stroke-width:2px,color:#fff
```

# 8. BUCKET COUNTING
```mermaid
flowchart TD
    Start([Start]) --> Input["Input: strs array"]
    Input --> CreateMap["Create empty Map"]
    
    CreateMap --> Loop["For each word in strs"]
    Loop --> InitCount["count = array 26 zeros"]
    
    InitCount --> CountChars["Count char frequencies"]
    CountChars --> BuildKey["Build compressed key<br/>a2b1c1 format"]
    
    BuildKey --> CheckMap{"Map has key?"}
    CheckMap -->|No| CreateEntry["map.set key, empty array"]
    CheckMap -->|Yes| AddWord["map.get key .push word"]
    
    CreateEntry --> AddWord
    AddWord --> MoreWords{More words?}
    
    MoreWords -->|Yes| Loop
    MoreWords -->|No| Return["Return Map.values"]
    
    Return --> End([End])
    
    style Start fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style End fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style BuildKey fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
```