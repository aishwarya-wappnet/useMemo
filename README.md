# useMemo
- The React useMemo returns a memoized value.
- Memoization means cashing a value so that it does not have to be recalculated.
- useMemo only runs when one of its dependencies update.
- This can improve the perforamance.
- The useMemo hook can be used to keep expensive, resource intensive functions from needlessly running.
- For eg, we have an expensive function called 'countNumber' that runs on every render. We have two buttons, a Counter and a toggle button.

![image](https://user-images.githubusercontent.com/123728432/221820032-00388d82-601f-4b74-a09f-04f609921672.png)

- We want the expensive function to run only when the Counter button is clicked (There will be a delay in the counter change on button click because of this expensive function)
- But it is also called when the toggle button is clicked which causes delay in toggle. This happens because on click on toggle button, the state changes and the component is re-rendered which also causes the
expensive function to execute(re-render).
- To fix this performace issue, we can use the useMemo Hook to memoize the 'countNumber' function. This will cause the function to run only when needed.
- We can wrap the expensive function call with useMemo.
- The useMemo Hook accepts a second parameter to declare dependencies. The expensive function will only run when the dependencies have changed.

# useCallback
- The useMemo and useCallback Hooks are similar. The main difference between is that useMemo returns a memoized value and useCallback returns a memoized function.
- The react useCallback Hook returns a memoized callback function.
- This allows us to isolate resource intensive functions so that they will not automatically run on every render.
- The useCallback Hook only runs when one of its dependencies update.
- This can improve performance.
- One of the reason to useCallback is to prevent a component from re-rendering unless its props have changed.
- For eg, here you might think that that the List(src/List) component will not re-render unless the input changes.

![image](https://user-images.githubusercontent.com/123728432/221836321-abe8f4b1-791a-4de4-b397-f9983f6372b6.png)

- Click on the Toggle theme button, you will notice that the List component re-renders even when the input does not change.
- This is because the the getItems() function is being re-created over and over again. And since it is being recreated as a brand new function and is passed into our List and is a new
function each time our component gets rendered which means every single time its going to be different even if the actual number did not change.
- This is why we want to use the useCallback Hook.
- Its not gonna re-render the component unless some parameters change and every single time we render our App component, 
the getItems function is only going to update when it actually needs to.
- useCallback only recreates out getItems function when the number changes and its not going to recreate when the toggle button is clicked/dark variable changes.

# useMemo VS useCallback

useMemo: Returns and stores the calculated value of a function in a variable.
useCallback: Returns and stores the actual function itself in a variable.

# Referential Integrity
The only reason you would ever want to use useCallback hook is if you need to worry about referential equality which is very similar to why you would use useMemo hook.
Here getItems changes every time beacuse we create a brand new function but with useCallback we're not creating a new function unless we need to so the referential equality
of getItems from the first time it rendered and getItems the next time it rendered is going to be the same as long as out number input here does not actually change.
```
const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b); // false;
```
Both a and b have the same values but these two things will not be referentially equal because they are different objects in memory.

```
function addItems(array, item){
   array.push(item);
   return array;
}

console.log(a);
const result = addItems(a, 9);
console.log(a === result); // true
```
Here, you might think that the returned array here is a copy that we're modifying the copy and then returning something but what's actually happening is we are modifying 
the actual array.

So here we have actually modified the actual array a here and the array we returned is also actually the exact same thing as the one that was passed in. Result and a are two
different variables but they point to the same array in memory.

This all leads to another related topic which is the concept of pure functions. The addItems function is not pure function beacuse it modifies one of its arguments(array here).
A pure would not modify its arguments and if was going to change something it would make a copy and then return that copy, as below:
```
function addItemsPure(array, item){
const copy = array.slice();
copy.push(item);
return copy;
}
const result2 = addItemsPure(a, 9);
console.log(a === result2); // false
```
