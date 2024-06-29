// Con Lodash

// Configuración predeterminada del usuario
const configDefault = {
    userId: '123456',
    username: 'alice',
    theme: 'light',
    notifications: {
        email: true,
        push: false
    }
};

console.log({configDefault});

// Configuración personalizada del usuario
const configCustom = {
    theme: 'dark',
    notifications: {
        push: true
    }
};

console.log({configCustom});

// Combinar la configuración personalizada en la configuración predeterminada
const configFinal = _.merge({}, configDefault, configCustom);

console.log({configFinal});

// Sin Lodash

// Usando Spred operators
// Combinar la configuración personalizada en la configuración predeterminada sin Lodash
const configFinalSpred = {
    ...configDefault,  // Copia las propiedades de configDefault
    ...configCustom    // Sobrescribe las propiedades con las de configCustom
};

console.log({configFinalSpred});
