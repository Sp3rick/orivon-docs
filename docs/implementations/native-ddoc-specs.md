---
sidebar_position: 9
---

# Native DDOC Support

Orivon implements natively a way for sites to have DDOC

It works by checking an hash which represents the Core hash-tree, with the hash posted on DNS records  
Core hash-tree contains a list of hash for the Page hash-trees  
Each .html file (or page) has it's own Page hash-tree, containing the hashes and relative paths of all files this page will load

### More technical

Specifically it works by first checking if the DNS Records contains a DDOC Hash record, if it does, Orivon will try to load example.com/path/whatever.html.hashes, if the site correctly supports DDOC the hash-tree file will be received, always containing the Core hash-tree and the Page hash-tree.

Core hash-tree should be always the same across multiple pages for the same domain
Page hash-tree changes across different pages and should find it's hash in the Core hash-tree

Then, if the Browser ever happens to receive a file which is available in the Page hash-tree, it will verify the hash of it’s content, if it mismatch, DDOC immediatly fails, alerting the user of possible site compromission


The DNS record for DDOC is “DDOC number hash”  

Example:  
*DDOC 0 01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b*  

The number serves for versioning, so that Domain owners can have multiple DDOC Hashes and update their sites across the time without causing DDOC to fail

#### Script for site owners

Who owns a Static Export (or builded) website will be able to add support of DDOC by simply running a script Orivon will make

The script will add needed files in the site source for each page (whatever.html.hashes), and will output your appropriate DNS Record

It is going to run headless chromium to identify all files each html page will ever load, to generate the appropriate extensive Page hash-tree.

Currently we haven’t plans for dynamic sites like PHP because usually they do not guarantee that easily the same levels of security Web3 standards aims, if you think otherwise you can argument it in our forum [**OrivonStack**](https://orivonstack.com), we are happy to get advices and feedbacks!