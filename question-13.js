/**
 * Выводит список всех чисел, которые равны сумме факториалов своих цифр.
 * @name showTheMagic
 */
function showTheMagic() {
/**
 * Возвращает факториал числа
 * @name f
 * @param {Number} n 
 */
	function f(n) {
		return n ? n * f(n-1) : 1;
	}
/**
 * Возвращает сумму факториалов цифр числа
 * @name getSum
 * @param {Number} num 
 */	
	function getSum(num) {
		num = num + "";
		var len = num.length;
		var sum = 0;
		for (var i = 0; i < len; i++) {
			sum = sum + base[num[i] * 1];
		}
		return sum;
	}
/**
 * Подсчёт факториалов всех цифр / Кэширование
 */		
	var base = new Array();
	for (var i = 0; i < 10; i++) {
		base.push(f(i));
	}	
/**
 * Оценка верхней границы вычислений показала, что дальше 7*9! считать нет необходимости.
 */	
	var rightLim = 7 * base[9];
	for (var i = 0; i <= rightLim; i++) {
		if (i == getSum(i)) {
			console.log(i);
		}
	}
}