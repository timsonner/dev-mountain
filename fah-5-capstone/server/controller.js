require('dotenv').config();
const { spawn } = require("child_process")
 
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
    },
    spawn: async (req, res) => {

        let output = ''
        const makeSystemCall = (command) => {
            const systemCall = spawn(command)
        
            systemCall.stdout.on(`data`, (data) => {
                output += data
                console.log(`stdout: ${data}`)
            })
        
            systemCall.stderr.on(`data`, (data) => {
                console.error(`stderr: ${data}`)
            })
        
            systemCall.on(`close`, (code) => {
                console.log(`child process exited with code ${code}`)
            })
        }

        try {
            const { data: commands, error } = await supabase.from('commands').select('*')
            console.log(commands)
        } catch (error) {
            console.log(error)
        }
    makeSystemCall('ls')

    }
}





