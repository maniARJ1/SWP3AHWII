function doSomething(parameter) {
  if (parameter === 'error') {
    throw new Error('Ein Fehler ist aufgetreten!');
  } 
  else
  {
    console.log('Die Funktion wurde erfolgreich aufgerufen mit Parameter:', parameter);
  }
}


for (let i = 0; i < Math.floor(Math.random() * 11) + 10; i++) {
  try {
    const shouldThrowError = Math.random() < 0.5;
    if (shouldThrowError) {
      doSomething('error');
    } else {
      doSomething('success');
    }
  } catch (error) {
    console.error('Fehler aufgetreten:', error.message);
  }
}
