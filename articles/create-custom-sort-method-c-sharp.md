---
title: Create a custom sort method in C#
date: 2024-03-10
---

use this as a guide: <https://makersinstitute.gitbooks.io/c-basics/content/arrays/custom-sorting.html>

- explain how C# uses an interface
- just add suitable comparer method to your class and C# will know what to do when you use Array.Sort()
- what if my class already inherits from elsewhere?
  - you can just do ClassName : BaseClass, IInterface

Most, if not all, of C#'s pre-made classes can be sorted in ascending or descending order. In other words, if you make an array full of them, C# will be able to sort them.

But what happens when you create your own class? How can I define my own sorting order?

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
        /* If the two Cars have different makes, we compare the makes alphabetically.
         * Otherwise we compare the models alphabetically.
         */

        Car comparison = (Car)objectToCompareTo;

        // Strings can be compared without needing custom code
        if (Make != comparison.Make)
        {
            if (Make < comparison.Make) return -1;
            return 1;
        }

        if (Model < comparison.Model) return -1;
        else if (Model < comparison.Model) return 1;
        return 0;
    }
}
```

I chose to stay relatively simple with my example, but you can make your `CompareTo` logic as complicated as you like.
