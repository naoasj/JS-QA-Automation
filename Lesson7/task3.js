function divide(numerator, denominator) {
  
    if (typeof numerator !== "number" || typeof denominator !== "number") {
      throw new Error("Обидва аргументи мають бути числами!");
    }
  
    if (denominator === 0) {
      throw new Error("На нуль ділити не можна!");
    }
  
    const result = (numerator / denominator).toFixed(2);
    return result;
}

try {
    console.log(divide(4, 6));
  } catch (error) {
    console.log('Сталася помилка:', error.message);
  } finally {
    console.log("Робота завершена");
}
  

try {
    console.log(divide(4, 0));
  } catch (error) {
    console.log('Сталася помилка:', error.message);
  } finally {
    console.log("Робота завершена");
}
  
try {
    console.log(divide(4, "Два"));
  } catch (error) {
    console.log('Сталася помилка:', error.message);
  } finally {
    console.log("Робота завершена");
}


