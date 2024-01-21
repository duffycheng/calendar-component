# Answers to FE(Not Angular).pdf 

## 1. Array Sorting

### Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.

```js
function sortUserName(user) {
 return user.sort(function(a, b) {
    return  a.firstName.localeCompare(b.firstName)|| a.lastName.localeCompare(b.lastName) || parseInt(a.customerID, 10) < parseInt(b.customerID);
  }).reduce((acc, cur) => {
    return `${acc} ${acc.length> 0? '/' : ''} ${cur.firstName} ${cur.lastName} - ${cur.customerID}`;
  }, '');
}
// print out
console.log(sortUserName(user));
```

### Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)

```js

function sortByType(user) { 
  const order = {'systemAnalytics': 1,  'engineer':2, 'productOwner': 3,  'freelancer':4 , 'student':5};
  return user.sort((a, b) => order[a.profession] - order[b.profession]);
  
}
//print out
console.log(sortByType(user));
```

## 2. Styles

### Q1 Explain why does this color not works, and how to fix make it work on 1st list 

This is about the CSS specificity.

While the CSS slector above `.container .shop-list li.item` select evey 'li' element with the class name 'item'. The CSS selector `.container .shop-list .item` only indicated to any element with the class name 'item'. The latter is not override the prvious css, so the color does not work.

There are 2 possible way to fix this.

1. use psudo selector to select first child `.shop-list` of `div.content`

```css

.container .shop-list:first-child .item {
color: blue;
}

```
2. add element tag to the first `.shop-list`, since these two list, one is `ol`, and the other is `ul` list.

```css

.container ol.shop-list .item {
color: blue;
}

```

### Q2  Write styling make every other line give background color to next one

```css
.container .shop-list .item:nth-child(2n) {
  background-color: #ccc;
}
```