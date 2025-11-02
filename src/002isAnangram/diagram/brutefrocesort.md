```mermaid
flowchart TD
    A[Start] --> B[Check if str1.length == str2.length]
    B -->|No| Z[Return false]
    B -->|Yes| C[Sort characters of str1 and str2]
    C --> D[Join sorted arrays back to strings]
    D --> E[Compare sorted1 === sorted2]
    E -->|Yes| F[Return true]
    E -->|No| Z[Return false]
    ```
