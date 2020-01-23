# static-pagination

부트스트랩과 Jquery를 기반으로하여 정적페이지에서 Pagination입니다. (예를들어 Jekyll, Github Pages)
Pagination for static pages based on bootstrap and jquery (eg. Jekyll, Github Pages)

    title: static-pagination.js
    description: Pagination for static pages based on bootstrap and jquery (eg. jekyll)
    author: Incio
    github: https://github.com/inci-o/static-pagination
    site: https://inci-o/github.io
    email: inciojs@gmail.com
    version: 0.1.0

### 필요한 것 (Required) *

- Bootstrap
- Jquery


### How To ?
---


- list :
```html
<ul id="static-pagination-list"></ul>
``` 

- pagination :
```html
<nav aria-label="Page navigation">
    <ul id="static-pagination" class="pagination justify-content-end">
    </ul>
</nav>
```

- script : 
   
```html
<script src="static-pagination.js"></script>
<script>
    staticPagination(perPage, 1, array);
</script>

```
   
   
### example 폴더 참고
 

