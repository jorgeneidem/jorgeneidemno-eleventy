---
layout: base
title: Jorgeneidem eleventy site
---

## Hello world

### why is not entire src a watch target

{%- for post in collections.posts %}

- [{{ post.data.title }}]({{ post.url }})
  {%- endfor %}
