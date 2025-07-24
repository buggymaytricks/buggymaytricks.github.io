---
layout: default
permalink: /blog/
title: Blog
---

<div class="container-fluid px-1">
  <div class="row">
    <div class="col-12">
      <div id="post-list">
        {% for post in site.posts %}
          <div class="card-wrapper mb-4">
            <div class="card post-preview flex-md-row-reverse h-100">
              <div class="card-body d-flex flex-column p-4">
                <h1 class="card-title my-2 mt-md-0">
                  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                </h1>
                <div class="card-text content mt-0 mb-3">
                  <p>{{ post.excerpt | strip_html | truncate: 300 }}</p>
                </div>
                <div class="post-meta flex-grow-1 d-flex align-items-end">
                  <div class="me-auto">
                    <i class="far fa-calendar fa-fw me-1"></i>
                    <span>{{ post.date | date: "%b %e, %Y" }}</span>
                    {% if post.categories.size > 0 %}
                      <i class="far fa-folder-open fa-fw me-1 ms-1"></i>
                      {% for category in post.categories %}
                        <a href="{{ site.baseurl }}/categories/{{ category | slugify }}/" class="categories">{{ category }}</a>
                        {%- unless forloop.last %}, {% endunless %}
                      {% endfor %}
                    {% endif %}
                  </div>
                </div>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
