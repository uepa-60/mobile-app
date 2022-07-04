// import { spawn } from 'child_process'
// import util from 'util'
// const proc = spawn('clip').stdin.end(util.inspect('content_for_the_clipboard'));;

// function geta(arr) {
//   const [f, ...rest] = arr;
//   const ret = JSON.stringify({ nome: f, servicos: rest });

//   proc.stdin.write(ret);
//   proc.stdin.end();
// }

// // geta()

// function run() {
//   const arr = process.argv[2].split(',')
//   geta(arr)
// }

// run()

import data from '../aaa.json' assert { type: "json" }

const { ananindeua, belem } = data

const enda = ananindeua.map(e => {
  const {nome, endereco} = e
  
  return {
    nome,
    endereco
  }
})
const endb = belem.map(e => {
  const {nome, endereco} = e
  
  return {
    nome,
    endereco
  }
})


console.log(JSON.stringify([...enda, ...endb]))