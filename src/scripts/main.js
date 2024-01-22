document.addEventListener("DOMContentLoaded", () => {
    AOS.init();

    const dataDoEvento = new Date("May 15, 2024 18:00:00");
    const timeStampDoEvento = dataDoEvento.getTime();

    const contaAsHoras = setInterval(() => {
        const now = new Date();
        const timeStampNow = now.getTime();

        const distanciaDoEvento = timeStampDoEvento - timeStampNow;

        const diasAteOEvento = Math.floor(distanciaDoEvento / (1000 * 60 * 60 * 24));
        const horasAteOEvento = Math.floor((distanciaDoEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutosAteOEvento = Math.floor((distanciaDoEvento % (1000 * 60 * 60)) / (1000 * 60));
        const segundosAteOEvento = Math.floor((distanciaDoEvento % (1000 * 60)) / 1000);

        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

        if(distanciaDoEvento < 0) {
            clearInterval(contaAsHoras)
            document.getElementById('contador').innerHTML = 'Evento Expirado';
        }


    }, 1000);
});
