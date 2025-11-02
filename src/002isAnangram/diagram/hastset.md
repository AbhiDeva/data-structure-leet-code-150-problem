
```mermaid
flowchart TD
    A[Start] --> B[Check if str1 length equals str2 length]
    B -->|No| Z[Return false]
    B -->|Yes| C[Create empty map {}]
    C --> D[Loop through str1 and increment map[ch]]
    D --> E[Loop through str2 and decrement map[ch]]
    E --> F{map[ch] missing or < 0?}
    F -->|Yes| Z[Return false]
    F -->|No| G[Continue]
    G --> H{All counts are zero?}
    H -->|Yes| I[Return true]
    H -->|No| Z[Return false]
    ```