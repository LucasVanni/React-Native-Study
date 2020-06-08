export const clickTH = objeto => {
  objeto.props.navigation.navigate("HomeProducts", {
    title: objeto.props.data.title,
    products: objeto.props.data.products
  });
};
