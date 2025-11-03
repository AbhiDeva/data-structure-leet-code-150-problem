# Choose Approach 

```mermaid
flowchart TD
    %% --- Nodes ---
    A([Start: Need to solve Two Sum?]):::start
    B{Is array already sorted?}:::decision
    
    C{Need original indices?}:::decision
    D[Use SLIDING WINDOW<br/>O(n) time, O(1) space]:::good
    E[Use TWO POINTER<br/>O(n log n) time, O(n) space]:::neutral
    
    F{What do you need?}:::decision
    G[Use SET<br/>O(n) time, O(n) space]:::neutral
    H{Is this production code?}:::decision
    I[Use HASH MAP<br/>O(n) time, O(n) space]:::best
    J{Learning or debugging?}:::decision
    K[Start with BRUTE FORCE<br/>Then optimize]:::bad
    L[Use TWO-PASS MAP<br/>O(n) time, O(n) space]:::neutral
    
    M([End]):::end

    %% --- Connections ---
    A --> B
    B -->|Yes| C
    C -->|No| D
    C -->|Yes| E

    B -->|No| F
    F -->|Just boolean (exists?)| G
    F -->|Actual indices| H
    F -->|Batch processing?| L
    H -->|Yes| I
    H -->|No| J
    J -->|Yes| K
    J -->|No| I

    D --> M
    E --> M
    G --> M
    I --> M
    K --> M
    L --> M

    %% --- Styles ---
    classDef start fill:#b3e6b3,stroke:#2e7d32,stroke-width:2px,color:#000,font-weight:bold;
    classDef decision fill:#fff3cd,stroke:#ffb300,stroke-width:2px,color:#000,font-weight:bold;
    classDef good fill:#c8e6c9,stroke:#388e3c,stroke-width:2px,color:#000;
    classDef neutral fill:#bbdefb,stroke:#1976d2,stroke-width:2px,color:#000;
    classDef best fill:#d1c4e9,stroke:#512da8,stroke-width:2px,color:#000,font-weight:bold;
    classDef bad fill:#ffcdd2,stroke:#d32f2f,stroke-width:2px,color:#000;
    classDef end fill:#ffe0b2,stroke:#ef6c00,stroke-width:2px,color:#000,font-weight:bold;
```
