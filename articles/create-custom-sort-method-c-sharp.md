---
title: Create a custom sort method in C#
date: 2024-03-10
category: c-sharp
---

Most, if not all, of C#'s pre-made classes can be sorted in ascending or descending order. In other words, if you make an array full of them, C# will be able to sort them.

But what happens when you create your own class? How can you define your own, custom sorting order?

## The `IComparable` interface

Your custom class needs to use the interface `IComparable` in order for the custom sort to work. Using this interface tells the program that the object is able to be compared to another object of the same type.

The relevant member of the interface is `CompareTo()`, which returns 1, 0 or &minus;1. Below is an example of how you can use this method.

```c#
public class Car : IComparable
{
    public Car(string make, string model)
    {
        Make = make;
        Model = model;
    }

    public string Make { get; set; }
    public string Model { get; set; }

    public int CompareTo(object objectToCompareTo)
    {
        /* If the two Cars have different makes,
         * we compare the makes alphabetically.
         * Otherwise, we compare the models alphabetically.
         */

        Car comparison = (Car)objectToCompareTo;

        // Strings can be compared without needing custom code
        if (Make != comparison.Make)
        {
            if (Make < comparison.Make) return -1;
            return 1;
        }

        if (Model < comparison.Model) return -1;
        else if (Model > comparison.Model) return 1;
        return 0;
    }
}
```

I chose to stay relatively simple with my example, but you can make your `CompareTo()` logic as complicated as you need.

Once you've created a `CompareTo()` method, C# will know what to do when you run `Array.Sort()` (or indeed any other comparison function).

### What if my class already inherits from elsewhere?

It's no problem if your class already inherits stuff from elsewhere. Adding an interface won't break anything. Here's what you can do:

```c#
public class ClassName : BaseClass, IInterface
{
    ...
}
```
