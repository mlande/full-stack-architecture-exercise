<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong> {{ author }} </strong>
                    <small> {{ minifiedAuthorName }} </small>
                    <small>31m</small>
                    <br> {{ content }}
                </p>
            </div>

        </div>
        <div class="media-right">
            <button class="delete"></button>
        </div>
    </article>
</template>

<script>
export default {
  name: "articleBox",
  props: ["author", "title", "content"],
  computed: {
    minifiedAuthorName() {
      return this.author.toLowerCase().replace(" ", "");
    }
  }
};
</script>
