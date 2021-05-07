<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.to)
    },
    type() {
      if (this.isExternal) {
        return 'a'
      }
      return 'router-link'
    }
  },
  methods: {
    linkProps(to) {
      if (this.isExternal) {
        //console.log(to,'isExternal')
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      //console.log(to,this.isExternal)
      return {
        to: to
      }
    }
  }
}
</script>
