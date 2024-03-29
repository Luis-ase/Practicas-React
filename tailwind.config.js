/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
     colors:{
      t: "rgba(255, 255, 255, 0.1)",
     },
     backgroundImage:{
      pistola:"url(https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
      astronauota:"url(https://pbs.twimg.com/media/Ft3BThQXwAILIHP?format=png&name=small)",
      astronauota2:"url(https://pbs.twimg.com/media/Ft3Ba7hX0AEShFV?format=png&name=small)",
      astronauota3:"url(https://pbs.twimg.com/media/Ft3CfvhX0AIpR83?format=png&name=small)",
      astronauota4:"url(https://pbs.twimg.com/media/Ft3FppmWYAEThQ4?format=png&name=small)",
    }
    },
  },
  plugins: [],
}
