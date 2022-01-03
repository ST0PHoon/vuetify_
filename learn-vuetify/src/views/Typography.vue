<template>
  <v-container>
    <v-card>
      <v-card-title>
        Typography
      </v-card-title>
      <v-container class="grey ligten-3">
        <v-card class="pa-3" outlined>
          <!-- 글자 크기 -->
          <p class="text-h1">Heading 1</p>
          <p class="text-h2">Heading 2</p>
          <p class="text-h3 text-sm-subtitle-1">Heading 3</p>
          <!-- 글자 강조 -->
          <div class="text-h5 text-center mb-3">Font Emphasis</div>
          <p class="font-weight-black">Black text</p>
          <p class="font-weight-thin">thin text</p>
          <!-- 글자 배열 left, center, right / breakpoint 사용 가능 -->
          <div class="text-h5 text-center mb-3">Alignment</div>
          <p class="text-justify">
            Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
          </p>
          <!-- 글자 꾸미기 -->
          <div class="text-h5 text-center mb-3">Decoratino</div>
          <p class="text-decoration-line-through">
            Line-through text
          </p>
          <p class="text-decoration-overline">
            Overline text
          </p>
          <p class="text-decoration-underline">
            Underline text
          </p>
          <!-- 투명도 -->
          <div class="text-h5 text-center mb-3">Opacity</div>
          <p class="text--primary">
            High-emphasis has an opacity of 87% in light theme and 100% in dark.
          </p>
          <p class="text--secondary">
            Medium-emphasis text and hint text have opacities of 60% in light theme and 70% in dark.
          </p>
          <p class="text--disabled">
            Disabled text has an opacity of 38% in light theme and 50% in dark.
          </p>
        </v-card>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  
}
</script>

<style>
  
</style>