---
title: "Help! I can't access my C# classes from xUnit!"
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
date: 2023-11-15
---

Unit testing in C# with xUnit can at times be unwieldy, especially if, like me, you're accustomed to something like [Jest](https://jestjs.io/). One thing the tutorials often forget to tell you is how to link your test suite project to your primary project.

- outline the problem
  - happens when you create a sibling repo to your main one as part of solution folder
    - give folder structure
  - classes from main project aren't available in test project
- how to solve
  - solution in VS
  - solution from command line (if there is one)
  - don't forget to add a using statement

artikel ueber warum xunit tests nicht funktionieren

In C#, namespaces are used to organize code and prevent naming conflicts. If you have a console application called XYZ and an xUnit testing project called XYZ.Tests in sibling directories, you'll want to ensure that the namespace XYZ is available in the XYZ.Tests project.

Here are the steps you can follow:

    Check Namespace in Console Application:
        Open the console application (XYZ) in Visual Studio.
        Look at the namespace declared at the top of your C# files. It might look something like this:

        csharp

        using XYZ;

    Verify Namespace Usage:
        Make sure that you are using types from the XYZ namespace in your test files.

By following these steps, you should be able to use the types from the XYZ namespace in your XYZ.Tests project. This assumes that the console application (XYZ) is properly building and the types are accessible.

Here's a simple example:

Console Application (XYZ):

csharp

// XYZ/Program.cs

namespace XYZ
{
public class MyClass
{
public int Add(int a, int b)
{
return a + b;
}
}
}

Test File (XYZ.Tests):

csharp

// XYZ.Tests/MyClassTests.cs

using Xunit;
using XYZ;

public class MyClassTests
{
[Fact]
public void TestAddition()
{
MyClass myClass = new MyClass();
Assert.Equal(5, myClass.Add(2, 3));
}
}

Ensure that you've added the reference, imported the namespace, and that your test files can access the types from the XYZ namespace.

        namespace XYZ
        {
            // Code here
        }

    Reference Console Application from Tests Project:
        Open the xUnit testing project (XYZ.Tests) in Visual Studio.
        Right-click on the project in Solution Explorer and select "Add" > "Reference..."
        In the "Reference Manager" dialog, go to the "Projects" tab and select the XYZ project.

    Import Namespace in Test Files:
        In the test files of the XYZ.Tests project, you'll need to import the namespace XYZ to use its types. You can do this by adding a using directive at the top of your test files:

        csharp
