# 🌀 Tailwind CSS para CSS Tradicional

Uma tabela de conversão das classes utilitárias mais comuns do Tailwind CSS para suas equivalências em CSS padrão.

---

## 🎯 Flexbox

| Tailwind              | CSS                                   |
|-----------------------|----------------------------------------|
| `flex`                | `display: flex;`                       |
| `inline-flex`         | `display: inline-flex;`               |
| `items-center`        | `align-items: center;`                |
| `items-start`         | `align-items: flex-start;`            |
| `items-end`           | `align-items: flex-end;`              |
| `justify-center`      | `justify-content: center;`            |
| `justify-between`     | `justify-content: space-between;`     |
| `justify-around`      | `justify-content: space-around;`      |
| `justify-end`         | `justify-content: flex-end;`          |
| `gap-4`               | `gap: 1rem;` *(ou 16px)*              |

---

## 🧱 Layout

| Tailwind         | CSS                            |
|------------------|---------------------------------|
| `w-full`         | `width: 100%;`                 |
| `h-full`         | `height: 100%;`                |
| `min-h-screen`   | `min-height: 100vh;`           |
| `p-4`            | `padding: 1rem;`               |
| `m-2`            | `margin: 0.5rem;`              |
| `mt-8`           | `margin-top: 2rem;`            |

---

## 🎨 Cores (Exemplo com Tailwind padrão)

| Tailwind            | CSS                        |
|---------------------|-----------------------------|
| `bg-blue-500`       | `background-color: #3b82f6;` |
| `text-red-500`      | `color: #ef4444;`           |
| `border-gray-300`   | `border-color: #d1d5db;`    |

---

## 🔠 Tipografia

| Tailwind           | CSS                          |
|--------------------|-------------------------------|
| `text-xl`          | `font-size: 1.25rem;`         |
| `font-bold`        | `font-weight: 700;`           |
| `text-center`      | `text-align: center;`         |
|--------------------|-------------------------------|
| `text-[34px]`      | `font-size: 34px;`            |
| `leading-[42px]`   | `line-height: 42px;`          |
| `hidden`           | `display: none;`              |
| `w-1/2 `           | `width: 50%;`                 |
| `justify-center `  | `justify-content: center;`    |
| `p-10 `            | `padding: 2.5rem;`            |
| `lg:flex`          | `@media (min-width: 1024px) { display: flex; }` |
| `xl:w-2/5`         | `@media (min-width: 1280px) { width: 40%; }`    |


---

## 🧪 Exemplo Final

### Tailwind:
```html
<div class="flex items-center justify-center h-screen text-red-500">
  Centralizado com Tailwind
</div>
````

### CSS Tradicional:

```css
.centralizado {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #ef4444;
}
```

---