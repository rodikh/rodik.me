(function mailto() {
    document.querySelector('.mailto').onclick = function (evt) {
        console.log('clicked mailto', this, evt);
        var href = 'mailto:',
            name = 'rodik',
            domain = 'rodik.me';
        this.setAttribute('href', href + name + "@" + domain);

        return true;
    }
}());

(function particleLines() {
    var canvas = document.querySelector('.background canvas');
    var particleLines = new ParticleLines(canvas, {particlesAmount: 180, maxDistance: 100, maxVelocity: 0.6});
}());

