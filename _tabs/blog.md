---
layout: default
title: Blog
icon: fas fa-blog
order: 1
permalink: /blog/
sitemap:
  priority: 0.9
  changefreq: weekly
---

<!-- SEO Enhancement for Blog Page -->
<meta name="description" content="buGGy's blog featuring engineering notes, cybersecurity tutorials, penetration testing insights, academic content, and technical explorations. Latest posts on ethical hacking, red team operations, and security research.">
<meta name="keywords" content="buGGy blog, buggymaytricks blog, cybersecurity blog, penetration testing tutorials, ethical hacking guides, engineering notes, academic content, security research, vulnerability research, red team tactics">

<div class="mb-5">
  <h1 class="text-center mb-3">buGGy's Blog</h1>
  <p class="text-center text-muted">Engineering notes, cybersecurity insights, tutorials, and much more</p>
</div>

<div id="post-list" class="flex-grow-1 px-xl-1">
  {% for post in site.posts %}
    <article class="card-wrapper card">
      <a href="{{ post.url | relative_url }}" class="post-preview row g-0 flex-md-row-reverse">
        <div class="col-md-12">
          <div class="card-body d-flex flex-column">
            <h1 class="card-title my-2 mt-md-0">{{ post.title }}</h1>
            <div class="card-text content mt-0 mb-3">
              <p>
                {% if post.description %}
                  {{ post.description }}
                {% else %}
                  {{ post.excerpt | strip_html | truncatewords: 30 }}
                {% endif %}
              </p>
            </div>
            <div class="post-meta flex-grow-1 d-flex align-items-end">
              <div class="me-auto">
                <i class="far fa-calendar fa-fw me-1"></i>
                <time data-ts="{{ post.date | date: '%s' }}" data-df="ll">
                  {{ post.date | date: "%b %d, %Y" }}
                </time>
                {% if post.categories.size > 0 %}
                  <i class="far fa-folder-open fa-fw ms-1 me-1"></i>
                  <span class="categories">
                    {% for category in post.categories %}
                      {{ category }}
                      {%- unless forloop.last -%}, {%- endunless -%}
                    {% endfor %}
                  </span>
                {% endif %}
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
  {% endfor %}
</div>
