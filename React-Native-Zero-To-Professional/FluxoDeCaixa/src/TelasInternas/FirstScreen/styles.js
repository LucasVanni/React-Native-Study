import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  saldoArea: {
    paddingVertical: 20,
    backgroundColor: '#DDD',
  },
  saldo: {
    textAlign: 'center',
    fontSize: 25,
  },
  historico: {
    flex: 1,
  },
  botoesArea: {
    paddingVertical: 10,
    backgroundColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewArea: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#CCC',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  textTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textValor: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
