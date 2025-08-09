
        function realizarOperacion(num1, num2, operacion) {
            if (operacion == 'sumar') {
                return num1 + num2;
            } else if (operacion == 'restar') {
                return num1 - num2;
            } else if (operacion == 'multiplicar') {
                return num1 * num2;
            } else if (operacion == 'dividir') {
                //como lo mencione antes, este if, dentro del else if, tuve que preguntar a gpt, porque no nos lo ensenaron
                if (num2 == 0) {
                    return "No se puede dividir entre cero";
                } else {
                    //aqui ya continuo con lo que se
                    return num1 / num2;
                }
            } else {
                return "operacion no valida";
            }
        }
        //aqui lo que pregunte a gpt, fue respecto a donde debia colocar el do, while,
        //ya con eso entendi la estructura y lo hice
        let operacion;

        do {
            operacion = prompt("Ingrese la operacion (sumar, restar, multiplicar, dividir) o 'salir' para terminar");
            //valide con gpt el ejercicio practico 2, donde el profe coloco el if, pero en el while. vi que se podia dentro del do.
            if (operacion === "salir") {
                break;
            }

            let num1 = parseFloat(prompt("Ingrese el primer numero: "));
            let num2 = parseFloat(prompt("Ingrese el segundo numero: "));

            let resultado = realizarOperacion(num1, num2, operacion);

            document.write("El resultado de su " + operacion + " es: " + resultado);

        } while (operacion !== "salir");

        document.write("Saliste de la calculadora");