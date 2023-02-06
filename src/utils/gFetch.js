let productos = [
    { id: '1' ,categoria: 'postres', name: "producto 1",   price: 37, foto:'https://misionescuatro.com/wp-content/uploads/2021/01/helado.jpg' },
    { id: '2' ,categoria: 'postres', name: "producto 2", price: 27, foto:'https://th.bing.com/th/id/OIP.o6g1UMgKYZSAick_nNWj-QHaEk?w=308&h=190&c=7&r=0&o=5&pid=1.7' },
    { id: '3' ,categoria: 'tortas', name: "producto 4", price: 55, foto:'https://th.bing.com/th/id/OIP.Gr8Y9H1NbswFn54X92LgcgHaEK?w=272&h=180&c=7&r=0&o=5&pid=1.7'},
    { id: '4' ,categoria: 'tortas', name: "producto 5", price: 11, foto:'https://th.bing.com/th/id/OIP.wrBPcz3FtjloHhYCaDx7FgHaEK?w=256&h=180&c=7&r=0&o=5&pid=1.7' },
    
  ] 
  
  export const gFetch = () => {
    return new Promise(( res, rej )=>{    
      setTimeout(()=>{
        res( productos )
      }, 1000) 
   })
  
  } 
    