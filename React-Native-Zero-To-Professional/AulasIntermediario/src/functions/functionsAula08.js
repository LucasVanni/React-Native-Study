export const mudarCor = (objeto) => {
    let cor = objeto.state;
    if (cor.statusColor == 'light-content') {
        cor.bkCor = '#fff';
        cor.statusColor = 'dark-content';
    } else {
        cor.bkCor = '#000';
        cor.statusColor = 'light-content';
    }

    objeto.setState(cor);
}

export const esconder = (objeto) => {
    let esc = objeto.state;

    if (esc.escondido == false) {
        esc.escondido = true;
    } else {
        esc.escondido = false;
    }

    objeto.setState(esc);
}

export const abrirModal = (objeto) => {
    let obj = objeto.state;

    obj.visible = true;

    obj.statusColor = 'light-content';

    objeto.setState(obj);
}

export const fecharModal = (objeto) => {
    let obj = objeto.state;

    obj.visible = false;

    if (obj.bkCor == '#000') {
        obj.statusColor = 'light-content';
    } else {
        obj.statusColor = 'dark-content';
    }

    objeto.setState(obj);
}
