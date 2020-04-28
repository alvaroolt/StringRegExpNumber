# StringRegExpNumber

Crea un repositorio con las siguientes características.

En JavaScript implementa estas funciones. Utiliza el mismo formulario para E/S de los textos. Cada caja de texto con una función distinta la salida debe ir a un elemento adyacente al perder el foco. Cuida la accesibilidad/usabilidad

Capitaliza. Transforma entrada a otra similiar con la primera letra de cada palabra en mayúscula. 

Invierte.  Transforma entrada a otra similiar con las mayúsculas/minúsculas invertidas.

CamelCase.  Transforma entrada a otra similiar con formato en Camel Case (hola amigos cómo estáis -> holaAmigosCómoEstáis)

Sin CamelCase.  Transforma entrada a otra similiar quitando el formato Camel Case (holaAmigosCómoEstáis -> hola amigos cómo estáis)

Finaliza... Averigua si una cadena acaba con otra.

Empieza... Averigua si una cadena comienza con otra.

DNI. Indica error en caso de que la entrada no sea DNI válido. Usa expresiones regulares con grupos de captura en la comprobación de la letra
12328337S (válido)
32446967Q (válido)
8189963N (inválido)
81899631 (inválido)
81899631I(inválido, ni letras IÑOU)
12345678Z (válido)

Matrículas. Extrae todas las matrículas válidas de una caja de texto.
1234BCD (válida)
1234 BCD (válida)
1234-BCD (válida)
123 BCD (inválida)
1234 ABC (inválida, contiene vocal)
1234 QBC (inválida, contiene la Q)
1234 MNÑ (inválida, contiene la Ñ)

Códigos postales. Extrae todos los códigos postales válidos de una caja de texto. Códigos postales:
52001 (válido)
14014 (válido)
53001 (inválido)
14000 (inválido)

Dirección MAC. Comprueba que una entrada sea una MAC válida

Dirección IP.  Comprueba que una entrada sea una IP válida
0.0.0.0 (válido)
14.255.1.2 (válido)
09.1.2.3 (inválido)
1.260.4.5 (inválido)
09.6.5.4 (inválido)
1.2.3.011 (inválido)

En otro apartado denominado Number desarrolla lo siguiente. Recuerda indicar los errores en caso de ser necesario:

Sistemas numéricos: Crea una página que transforme de un sistema numérico a otro: binario, octal, decimal, hexadecimal.
Suma y multiplicación: Crea una página que sume y multiplique independientemente del los sistemas de numeración
Calcula el área de una circunferencia. Admitirá números decimales. Asegúrate de que en el resultado nunca se muestren más de 4 dígitos
