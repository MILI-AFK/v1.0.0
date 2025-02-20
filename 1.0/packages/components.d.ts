
import HlButton from "./button/src/index.vue"


declare module "vue" {
  export interface GlobalComponents {

    HlButton: typeof HlButton

  }
}
