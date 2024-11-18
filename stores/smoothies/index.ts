import { defineStore } from 'pinia';
import type { Smoothie, State } from './types';

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
      }

      if (data) {
        this.smoothiesList = data;
      }
    },

    createSmoothie: async function(newSmoothie: any) {
      const supabase = useSupabaseClient()

      await supabase
        .from('smoothies')
        .insert({...newSmoothie})
    },

    findSmoothie: async function(id: number) {
      const supabase = useSupabaseClient()
      const router = useRouter()

      const { data, error } = await supabase
        .from('smoothies')
        .select()
        .eq('id', id) // finds equal to the param
        .single()
              
      if (error) {
        router.replace('/')

        return
      }

      return data;
    }
  },
});

export default useSmoothiesStore;