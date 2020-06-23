import React,  { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
   contador:0,
   sorteador:[],
   titulo: "Sorteie um número"
  }
}
 
 // Adicionando um número a lista.

 adiciona(num) {

   this.setState({ sorteador: this.state.sorteador.concat(num)})

}

// Atualizando o contador

 atualiza(num) {
  this.setState( {contador: this.state.contador = num})
}

// Retornando um número aleatório.

retornaNumero() {
  return Math.floor(Math.random() * 10)
}


render(){

  return(

    <View style={ styles.container } >
      <Text> {this.state.contador} </Text>
      <Button title = { this.state.titulo }
        onPress= { () => {
            
           // A lista deve conter menos de 10 elementos

          if(this.state.sorteador.length < 10 ) {

            // Buscando um número aleatório
             var numero = this.retornaNumero()
               
             // Se o tamanho da lista for 0, então não há elementos nela
              if(this.state.sorteador.length === 0) {
                 // Adicionando um novo número aleatório a lista.
                 this.adiciona(numero)
                 // Atualizando o contador para exibir o número aleatório.
                 this.atualiza(numero)

            } else {
                 // Se a lista já tiver elementos, só poderá ser inserido nela um elemento que ainda não esteja nela.
                while(this.state.sorteador.includes(numero) ) {
                  numero = this.retornaNumero()
                }
                
                this.adiciona(numero)
                this.atualiza(numero)
                // Ao fim do sorteio, mudar o texto do botão
                if(this.state.sorteador.length == 9) {
                  this.setState( {titulo: this.state.titulo = "Fim do sorteio"})

                }

            }

        }
    } }

     />
  </View>
  );
 }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
