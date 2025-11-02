
```mermaid
flowchart TD
    A[Start] --> B[Check if str1.length == str2.length]
    B -->|No| Z[Return false]
    B -->|Yes| C[Create empty map {}]
    C --> D[Loop through str1: map[ch]++]
    D --> E[Loop through str2: map[ch]--]
    E -->|map[ch] < 0 or missing| Z[Return false]
    E --> F[After loop, all counts are zero?]
    F -->|Yes| G[Return true]
    F -->|No| Z
    ```