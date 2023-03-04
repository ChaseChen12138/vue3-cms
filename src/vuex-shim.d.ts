import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    test: {
      name: string
    }
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
