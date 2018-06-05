import Vue from 'vue'
import { RawLocation } from 'vue-router'

declare module 'vue-router' {
  interface Next<T extends Vue = Vue> {
    (to?: RawLocation | false | ((vm: T) => any) | void): void
  }
}
