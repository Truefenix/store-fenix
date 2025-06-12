# Estilos de Texto a serem usados no theme

## font poppins usado no projeto
```
npm install @fontsource/poppins

```

## Font - sizes - px - family - weights

```
font: {
    sizes: {
      small: '1.2rem',
      medium: '1.8rem',
      large: '2rem',
      superLarge: '5rem',
    },
    px: {
      px34: '34px',
    },
    family: {
      fontTextSystem: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
      fontTextPoppins: `'Poppins', sans-serif`,
    },
    weights: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
  },
```
## Import do poppins nos arquivos dos components

```
// Importa todos os pesos, ou só os que quiser
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
// Ou tudo de uma vez (pode pesar mais)
import '@fontsource/poppins';

```

## Exemplo a ser usado:

```
font-family: ${theme.font.family.fontTextDois};
font-weight: ${theme.font.weights.bold};
```