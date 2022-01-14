---
layout: base
title: This title is in the front matter of index.md
---

## This is content

### anything below front matter is placed in the content safe area

{%- for post in collections.posts %}

- [{{ post.data.title }}]({{ post.url }})
  {%- endfor %}
