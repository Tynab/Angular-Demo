app.factory('myService', function () {
    return {
        transformString: function (input) {
            if (!input) {
                return ''
            }

            input = input.toString()
            var output = ''

            for (var i = 0; i < input.length; i++) {
                if (i > 0 && input[i] === input[i].toUpperCase() && input[i] !== input[i].toLowerCase()) {
                    output += ' '
                }

                output += input[i]
            }

            return output
        }
    }
})