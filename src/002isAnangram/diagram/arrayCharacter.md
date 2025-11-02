```mermaid
flowchart TD
    A[Start] --> B["Check if str1.length == str2.length"]
    B -->|No| Z["Return false"]
    B -->|Yes| C["Create array count[26] = 0"]
    C --> D["Loop i=0 to n-1"]
    D --> E["count[str1[i]-'a']++"]
    E --> F["count[str2[i]-'a']--"]
    F --> G["After loop, check if all counts == 0"]
    G -->|Yes| H["Return true"]
    G -->|No| Z["Return false"]
    ```