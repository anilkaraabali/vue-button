# App Button Component

This component was created with getting reference from some top-level UI libraries.

## Props

### **theme**

> **type:** string, **required:** false, **default:** ThemeType.DEFAULT
> Determines the theme(color) of the button. It must be used with ThemeType enum

### **type**

> **type:** string, **required:** false, **default:** ButtonType.CONTAINED
> Determines the type of the button. It must be used with ButtonType enum

### **size**

> **type:** string, **required:** false, **default:** SizeType.DEFAULT
> Set the size of the button

### **label**

> **type:** string | number, **required:** false, **default:** ''
> Set the label of button

### **aria-label**

> **type:** string, **required:** false, **default:** ''
> The aria-label attribute is used to define a string that labels the current element.

### **block**

> **type:** boolean, **required:** false, **default:** false
> Expands the button to 100% of available space.

### **disabled**

> **type:** boolean, **required:** false, **default:** false
> Removes the ability to click or target the component.
