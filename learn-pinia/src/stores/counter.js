import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 140
  }),

  getters: {
    doubleCount: (state) => state.counter * 2 
  },

  actions: {
    increaseCount () {
      this.count++
    },
    decreaseCount () {
      this.count--
    }
  },

  getters: {
    oddOrEven () {
      if (this.count % 2 === 0) return 'even'
      return 'odd'
    }
    
  }
})
