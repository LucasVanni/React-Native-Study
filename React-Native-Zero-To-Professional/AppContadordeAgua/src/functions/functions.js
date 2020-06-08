import AsyncStorege from '@react-native-community/async-storage';

export const AjustarLayout = (objeto) => {
  let consumo = objeto.state;

  consumo.quantidadeConsumida += 100;

  consumo.porcentagem = Math.floor((consumo.quantidadeConsumida/2000)* 100);

  let porcentagem = JSON.stringify(consumo.porcentagem);

  let quantidadeConsumida = JSON.stringify(consumo.quantidadeConsumida);


  if( consumo.quantidadeConsumida < consumo.metaDiaria ) {
    consumo.status = 'Ruim';
  }
  if( consumo.quantidadeConsumida === consumo.metaDiaria ) {
    consumo.status = 'Atingiu a meta';
  }
  if (consumo.quantidadeConsumida >= 1000) {
    consumo.status = 'Bom';
  }

  if (consumo.quantidadeConsumida > 2000 ) {
    consumo.status = 'Ótimo';
  }

  let status = consumo.status;

  AsyncStorege.setItem('porcentagem', porcentagem);

  AsyncStorege.setItem('quantidadeConsumida', quantidadeConsumida);

  AsyncStorege.setItem('status', status);

  objeto.setState(consumo);
}

export const getItem = (objeto) => {
  AsyncStorege.getItem('porcentagem').then(
    (value) => {
        let obj = objeto.state;

        let valor = Math.floor(value);

        obj.porcentagem = valor;

        objeto.setState(obj);
    }
  )

  AsyncStorege.getItem('quantidadeConsumida').then(
    (value) => {
        let obj = objeto.state;

        let valor = Math.floor(value);

        obj.quantidadeConsumida = valor;

        objeto.setState(obj);
    }
  )

  AsyncStorege.getItem('status').then(
    (value) => {
        let obj = objeto.state;

        let valor = value;

        obj.status = valor;

        objeto.setState(obj);
    }
  )
};
