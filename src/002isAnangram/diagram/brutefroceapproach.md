```mermaid
flowchart TD
    A[Start] --> B[Check if str1.length == str2.length]
    B -->|No| Z[Return false]
    B -->|Yes| C[Convert str2 to array arr2]
    C --> D[For each char in str1]
    D --> E[Find index of char in arr2]
    E -->|index == -1| Z
    E -->|Found| F[Remove char from arr2 using splice]
    F --> G[Repeat for next char]
    G --> H[After loop, check if arr2.length == 0]
    H -->|Yes| I[Return true]
    H -->|No| Z
    ```
