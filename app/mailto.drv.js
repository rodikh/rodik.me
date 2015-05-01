angular.module('rodikme').directive('mailto', function () {
    return {
        restrict: 'C',
        link: function (scope, element) {
            element[0].onclick = function () {
                var href = 'mailto:',
                    name = 'rodik',
                    domain = 'rodik.me';
                this.setAttribute('href', href + name + "@" + domain);
                return true;
            }
        }
    };
});
