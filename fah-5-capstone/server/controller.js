require('dotenv').config();
 
const { createClient } = require('@supabase/supabase-js')

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.URL,
  process.env.ANON_KEY
)

module.exports = {
    get: async (req, res) => {
try {
    const { data: commands, error } = await supabase.from('commands').select('*')
    console.log(commands)
} catch (error) {
    console.log(error)
}
    }

}