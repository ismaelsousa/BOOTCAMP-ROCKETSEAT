module.exports = {
  presets: [
    // Responsável por alterar as funcionalidade que o navegador ainda não entende
    "@babel/preset-env",
    // Transforma as coisas do react como JSX
    "@babel/preset-react",    
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}