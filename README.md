# Objective
This is an experimental repo for playing with different ways of setting up a mono reposiotry to work with dynamically imported components at build and runtime.


# Project
Spacely is an imaginary intergalactic sprocket manufacturer. Spacely sales sprockets and only sprockets. Users can go to their sales page and order a finite number of sprockets. Sprockets can come in many colors and over time, spacely would like to allow customers to pick their colors.


To do this the spacely organization has an inventory object.

```ts
interface Inventory{
    count: number, // should be a number greater than 0
    color: string // should start with "#"
}
```

The sales application is simply a way of tracking the number of sprockets of a specific color you want.


# Project Organization

We want to separate the application from various packages. Packages may have utility outside of the primary sales application and Spacely is very big on reusing code across its many applications.

The codebase has two upper level directories: `Apps` and `packages`.

Inside `packages` go modules and components that we wish to be reused. To start with Spacely has two key packages.
1. inventory: this is the state of an inventory object along with actions to mutate state.
2. inventory-views: components specifically tailored to the inventory type.

Inside `apps` we'll have two applications: 1 - sales application, and 2 - Jetsons application.


# Different implementations are in different branches
To play with different ways of reusing these components, I have put different logic into different branches.


