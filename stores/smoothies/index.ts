import { defineStore } from 'pinia';
import type { State } from './types';

const useSmoothiesStore = defineStore({
  id: 'posts',
  
  state: (): State => {
    return {
      smoothiesList: []
    }
  },

  actions: {
    fetchAllSmoothies: async function() {
      const supabase = useSupabaseClient()

      const { data, error } = await supabase
      .from('smoothies') // table name
      .select() // selects everything

      if (error) {
        this.smoothiesList = []
        console.log(error)
      }

      if (data) {
        this.smoothiesList = data;
      }
    },
  },
});

export default useSmoothiesStore;