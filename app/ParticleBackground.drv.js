angular.module('rodikme').directive('particleLines', function ($rootScope){
    return {
        restrict: 'E',
        template: '<canvas></canvas>',
        link: function (scope, element) {
            var canvas = element[0].querySelector('canvas');
            // TODO: check if mobile, show less particles, decrease distance
            var backgroundParticles = new ParticleLines(canvas, {particlesAmount: 180, maxDistance: 100, maxVelocity: 0.6});
        }
    };
});
